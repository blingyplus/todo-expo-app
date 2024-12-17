// app/(tabs)/index.tsx
import { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text, FlatList } from "react-native";
import { Todo, TodoFormData } from "../types/todo";
import { todoApi } from "../services/api";
import { TodoItem } from "../components/TodoItem";
import { StatusFilter } from "../components/StatusFilter";
import { FormModal } from "../components/modals/FormModal";
import { DetailsModal } from "../components/modals/DetailsModal";

const initialFormData: TodoFormData = {
  title: "",
  details: "",
  status: "not_started",
};

export default function TodoScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<Todo["status"] | "">("");
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [formData, setFormData] = useState<TodoFormData>(initialFormData);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await todoApi.fetchTodos(filterStatus || undefined);
      setTodos(response.data);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
      // You might want to add proper error handling here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [filterStatus]);

  const handleSubmit = async () => {
    try {
      if (selectedTodo) {
        await todoApi.updateTodo(selectedTodo.id, formData);
      } else {
        await todoApi.createTodo(formData);
      }
      await fetchTodos();
      setFormModalVisible(false);
      resetForm();
    } catch (error) {
      console.error("Failed to save todo:", error);
      // Add proper error handling here
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await todoApi.deleteTodo(id);
      await fetchTodos();
      setDetailsModalVisible(false);
    } catch (error) {
      console.error("Failed to delete todo:", error);
      // Add proper error handling here
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedTodo(null);
  };

  const openEditModal = (todo: Todo) => {
    setSelectedTodo(todo);
    setFormData({
      title: todo.title,
      details: todo.details,
      status: todo.status,
    });
    setDetailsModalVisible(false);
    setFormModalVisible(true);
  };

  if (loading && todos.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Todo List</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            resetForm();
            setFormModalVisible(true);
          }}
        >
          <Text style={styles.addButtonText}>+ Add Todo</Text>
        </TouchableOpacity>
      </View>

      <StatusFilter value={filterStatus} onChange={setFilterStatus} />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onPress={() => {
              setSelectedTodo(item);
              setDetailsModalVisible(true);
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        refreshing={loading}
        onRefresh={fetchTodos}
      />

      <FormModal
        visible={formModalVisible}
        onClose={() => {
          setFormModalVisible(false);
          resetForm();
        }}
        onSubmit={handleSubmit}
        formData={formData}
        onFormChange={setFormData}
        selectedTodo={selectedTodo}
      />

      <DetailsModal visible={detailsModalVisible} todo={selectedTodo} onClose={() => setDetailsModalVisible(false)} onEdit={openEditModal} onDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#2196f3",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
});

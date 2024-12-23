// app/(tabs)/index.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Alert } from "react-native";
import  StatusFilter  from "../components/StatusFilter";
import  FormModal  from "../components/modals/FormModal";
import DetailsModal  from "../components/modals/DetailsModal";
import  todoApi  from "../services/api";
import { Todo, TodoFormData, ApiResponse } from "../types/todo";
import  TodoItem  from "../components/TodoItem";
import  sharedStyles from "../styles/shared";

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
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    total: 0,
  });

  const fetchTodos = async (page = 1) => {
    try {
      setLoading(true);
      const response: ApiResponse = await todoApi.fetchTodos(filterStatus || undefined, page);
      setTodos(response.data);
      setPagination({
        currentPage: response.current_page,
        lastPage: response.last_page,
        total: response.total,
      });
    } catch (error) {
      Alert.alert("Error", "Failed to load todos. Please try again.", [{ text: "OK" }]);
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
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await todoApi.deleteTodo(id);
      await fetchTodos(pagination.currentPage);
      setDetailsModalVisible(false);
      setSelectedTodo(null);
    } catch (error) {
      Alert.alert("Error", "Failed to delete todo. Please try again.", [{ text: "OK" }]);
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

  const renderFooter = () => (
    <View style={sharedStyles.paginationContainer}>
      <Text style={sharedStyles.paginationText}>
        Showing {todos.length} of {pagination.total} entries
      </Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          style={[sharedStyles.paginationButton, pagination.currentPage === 1 && sharedStyles.paginationButtonDisabled]}
          onPress={() => pagination.currentPage > 1 && fetchTodos(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1}
        >
          <Text style={sharedStyles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[sharedStyles.paginationButton, pagination.currentPage === pagination.lastPage && sharedStyles.paginationButtonDisabled]}
          onPress={() => pagination.currentPage < pagination.lastPage && fetchTodos(pagination.currentPage + 1)}
          disabled={pagination.currentPage === pagination.lastPage}
        >
          <Text style={sharedStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading && todos.length === 0) {
    return (
      <View style={sharedStyles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.contentContainer}>
        <View style={sharedStyles.header}>
          <Text style={sharedStyles.headerTitle}>Todo List</Text>
          <TouchableOpacity
            style={sharedStyles.addButton}
            onPress={() => {
              resetForm();
              setFormModalVisible(true);
            }}
          >
            <Text style={sharedStyles.addButtonText}>+ Add Todo</Text>
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
              onEdit={() => openEditModal(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={renderFooter}
          onRefresh={fetchTodos}
          refreshing={loading}
          contentContainerStyle={{ paddingBottom: 16 }}
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
    </View>
  );
}

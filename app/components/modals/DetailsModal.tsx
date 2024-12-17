import { Modal, View, Text, TouchableOpacity, Alert } from "react-native";
import { Todo } from "../../types/todo";
import { getStatusColor, formatStatus } from "../../utils/helpers";
import { sharedStyles } from "@/app/styles/shared";

interface DetailsModalProps {
  visible: boolean;
  todo: Todo | null;
  onClose: () => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

const styles = sharedStyles;

export const DetailsModal = ({ visible, todo, onClose, onEdit, onDelete }: DetailsModalProps) => {
  if (!todo) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{todo.title}</Text>
          <Text style={styles.detailsText}>{todo.details}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(todo.status) }]}>
            <Text style={styles.statusText}>{formatStatus(todo.status)}</Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.editButton]} onPress={() => onEdit(todo)}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={() => {
                Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Delete",
                    onPress: () => onDelete(todo.id),
                    style: "destructive",
                  },
                ]);
              }}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

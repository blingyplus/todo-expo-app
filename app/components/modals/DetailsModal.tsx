import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
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
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  if (!todo) return null;

  const handleDelete = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete(todo.id);
    setShowConfirmDialog(false);
  };

  const renderConfirmDialog = () => (
    <Modal visible={showConfirmDialog} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, { maxWidth: 300 }]}>
          <Text style={styles.modalTitle}>Delete Todo</Text>
          <Text style={styles.detailsText}>Are you sure you want to delete this todo?</Text>

          <View style={sharedStyles.modalButtons}>
            <TouchableOpacity style={[sharedStyles.button, sharedStyles.cancelButton]} onPress={() => setShowConfirmDialog(false)}>
              <Text style={sharedStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[sharedStyles.button, sharedStyles.deleteButton]} onPress={handleConfirmDelete}>
              <Text style={sharedStyles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{todo.title}</Text>
            <Text style={styles.detailsText}>{todo.details}</Text>
            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(todo.status) }]}>
              <Text style={styles.statusText}>{formatStatus(todo.status)}</Text>
            </View>

            <View style={sharedStyles.modalButtons}>
              <TouchableOpacity style={[sharedStyles.button, sharedStyles.cancelButton]} onPress={onClose}>
                <Text style={sharedStyles.buttonText}>Close</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[sharedStyles.button, sharedStyles.editButton]} onPress={() => onEdit(todo)}>
                <Text style={sharedStyles.buttonText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[sharedStyles.button, sharedStyles.deleteButton]} onPress={handleDelete}>
                <Text style={sharedStyles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {renderConfirmDialog()}
    </>
  );
};

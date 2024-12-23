import { Modal, View, Text, TouchableOpacity } from "react-native";
import {Todo, TodoFormData}  from "../../types/todo";
import TodoForm from "../TodoForm";
import { sharedStyles } from "@/app/styles/shared";

interface FormModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formData: TodoFormData;
  onFormChange: (data: TodoFormData) => void;
  selectedTodo: Todo | null;
}

const styles = sharedStyles;

const FormModal = ({ visible, onClose, onSubmit, formData, onFormChange, selectedTodo }: FormModalProps) => (
  <Modal visible={visible} animationType="slide" transparent={true}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{selectedTodo ? "Edit Todo" : "New Todo"}</Text>

        <TodoForm formData={formData} onFormChange={onFormChange} />

        <View style={styles.modalButtons}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={onSubmit}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);
export default FormModal;

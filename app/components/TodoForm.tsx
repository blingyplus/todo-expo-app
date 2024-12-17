import { View, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TodoFormData } from "../types/todo";
import { sharedStyles } from "../styles/shared";

interface TodoFormProps {
  formData: TodoFormData;
  onFormChange: (data: TodoFormData) => void;
}

const styles = sharedStyles;

export const TodoForm = ({ formData, onFormChange }: TodoFormProps) => (
  <View>
    <TextInput style={styles.input} placeholder="Title" value={formData.title} onChangeText={(text) => onFormChange({ ...formData, title: text })} />

    <TextInput
      style={[styles.input, styles.textArea]}
      placeholder="Details"
      value={formData.details}
      onChangeText={(text) => onFormChange({ ...formData, details: text })}
      multiline
      numberOfLines={4}
    />

    <Picker selectedValue={formData.status} style={styles.input} onValueChange={(value) => onFormChange({ ...formData, status: value })}>
      <Picker.Item label="Not Started" value="not_started" />
      <Picker.Item label="In Progress" value="in_progress" />
      <Picker.Item label="Completed" value="completed" />
    </Picker>
  </View>
);

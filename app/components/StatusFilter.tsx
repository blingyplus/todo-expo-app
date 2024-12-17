import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Todo } from "../types/todo";
import { sharedStyles } from "../styles/shared";

interface StatusFilterProps {
  value: Todo["status"] | "";
  onChange: (status: Todo["status"] | "") => void;
}

const styles = sharedStyles;

export const StatusFilter = ({ value, onChange }: StatusFilterProps) => (
  <View style={styles.filterContainer}>
    <Picker selectedValue={value} style={styles.filter} onValueChange={onChange}>
      <Picker.Item label="All" value="" />
      <Picker.Item label="Not Started" value="not_started" />
      <Picker.Item label="In Progress" value="in_progress" />
      <Picker.Item label="Completed" value="completed" />
    </Picker>
  </View>
);

import { TouchableOpacity, View, Text } from "react-native";
import { Todo } from "../types/todo";
import { getStatusColor, formatStatus } from "../utils/helpers";
import { sharedStyles } from "../styles/shared";

interface TodoItemProps {
  todo: Todo;
  onPress: (todo: Todo) => void;
}
const styles = sharedStyles;

export const TodoItem = ({ todo, onPress }: TodoItemProps) => (
  <TouchableOpacity style={styles.todoItem} onPress={() => onPress(todo)}>
    <Text style={styles.todoTitle} numberOfLines={1}>
      {todo.title}
    </Text>
    <View style={[styles.statusBadge, { backgroundColor: getStatusColor(todo.status) }]}>
      <Text style={styles.statusText}>{formatStatus(todo.status)}</Text>
    </View>
  </TouchableOpacity>
);

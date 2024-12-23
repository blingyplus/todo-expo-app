import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Todo } from "../types/todo";
import { sharedStyles, colors } from "../styles/shared";
import { formatStatus } from "../utils/helpers";

interface TodoItemProps {
  todo: Todo;
  onPress: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
}

const TodoItem = ({ todo, onPress, onEdit }: TodoItemProps) => (
  <TouchableOpacity style={sharedStyles.todoItem} onPress={() => onPress(todo)}>
    <View style={sharedStyles.todoColumns}>
      <Text style={sharedStyles.todoColumn} numberOfLines={1}>
        {todo.title}
      </Text>
      <Text style={sharedStyles.todoColumn} numberOfLines={1}>
        {todo.details}
      </Text>
      <View style={sharedStyles.statusColumn}>
        <View style={[sharedStyles.statusBadge, { backgroundColor: colors.statusColors[todo.status] }]}>
          <Text style={sharedStyles.statusText}>{formatStatus(todo.status)}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default TodoItem;

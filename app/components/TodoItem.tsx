// app/components/TodoItem.tsx
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

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onPress, onEdit }) => (
  <TouchableOpacity style={sharedStyles.todoItem} onPress={() => onPress(todo)}>
    {/* Column layout container */}
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

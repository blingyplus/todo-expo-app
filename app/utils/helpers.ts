import { colors } from "../styles/shared";
import { Todo } from "../types/todo";

export const getStatusColor = (status: Todo["status"]): string => {
  return colors.statusColors[status];
};

export const formatStatus = (status: string): string => {
  return status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

import { StyleSheet } from "react-native";

// Theme colors
export const colors = {
  primary: "#2196f3",
  success: "#4caf50",
  warning: "#ff9800",
  error: "#f44336",
  grey: "#757575",
  lightGrey: "#e0e0e0",
  white: "#fff",
  black: "#000",
  background: "#f5f5f5",
  statusColors: {
    not_started: "#ff9800",
    in_progress: "#2196f3",
    completed: "#4caf50",
  },
};

// Common styles shared across components
export const sharedStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  // Header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  // List item styles
  todoItem: {
    backgroundColor: colors.white,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  todoTitle: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },

  // Form styles
  input: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  // Button styles
  button: {
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: colors.white,
    fontWeight: "bold",
  },

  // Modal button styles
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: colors.grey,
  },
  submitButton: {
    backgroundColor: colors.primary,
  },
  editButton: {
    backgroundColor: colors.warning,
  },
  deleteButton: {
    backgroundColor: colors.error,
  },

  // Status styles
  statusBadge: {
    padding: 5,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
  },
  statusText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },

  // Filter styles
  filterContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  filter: {
    height: 50,
  },

  // Modal text styles
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },

  // List styles
  list: {
    flex: 1,
  },

  // Loading styles
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

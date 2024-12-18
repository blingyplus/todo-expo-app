import { Dimensions, StyleSheet } from "react-native";

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
  border: "#ddd",
  statusColors: {
    not_started: "#ff9800",
    in_progress: "#2196f3",
    completed: "#4caf50",
  },
};

const windowWidth = Dimensions.get("window").width;
const isDesktop = windowWidth > 768;

// Common styles shared across components
export const sharedStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
    maxWidth: 1000,
    alignSelf: "center",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: isDesktop ? 20 : 0,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: isDesktop ? "50%" : "90%",
    maxWidth: 500,
    minWidth: 300,
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
    maxWidth: 1000,
    width: "100%",
    alignSelf: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  // Todo item styles
  todoItem: {
    backgroundColor: colors.white,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
  },
  todoTitle: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  todoColumns: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  todoColumn: {
    flex: 2,
    paddingHorizontal: 8,
  },
  statusColumn: {
    flex: 1,
    alignItems: "center",
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
    minWidth: isDesktop ? 80 : "100%",
    alignItems: "center",
    marginLeft: isDesktop ? 10 : 0,
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
    flexDirection: isDesktop ? "row" : "column",
    justifyContent: isDesktop ? "flex-end" : "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
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
    width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
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

  // Loading styles
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // Pagination styles (new)
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
  },
  paginationButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    minWidth: 80,
    alignItems: "center",
  },
  paginationButtonDisabled: {
    backgroundColor: colors.lightGrey,
  },
  paginationText: {
    color: colors.grey,
  },
});

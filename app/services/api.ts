import { Todo, TodoFormData, ApiResponse } from "../types/todo";

const API_URL = "https://calm-sparkle-production.up.railway.app/api";

export const todoApi = {
  async fetchTodos(status?: Todo["status"]): Promise<ApiResponse> {
    const url = status ? `${API_URL}/todos?status=${status}` : `${API_URL}/todos`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch todos");
    return response.json();
  },

  async createTodo(data: TodoFormData): Promise<Todo> {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create todo");
    return response.json();
  },

  async updateTodo(id: number, data: TodoFormData): Promise<Todo> {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update todo");
    return response.json();
  },

  async deleteTodo(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete todo");
  },
};

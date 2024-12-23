// __tests__/api.test.ts
const fetchMock = jest.fn();
global.fetch = fetchMock;

import  todoApi  from "../app/services/api";
import { Todo, TodoFormData } from "../app/types/todo";

describe("Todo API", () => {
  beforeEach(() => {
    fetchMock.mockClear();
  });

  describe("updateTodo", () => {
    const mockTodo: TodoFormData = {
      title: "Test Todo",
      details: "Test Details",
      status: "not_started",
    };

    it("should handle 419 CSRF token error", async () => {
      fetchMock.mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
          status: 419,
          json: () => Promise.resolve({ message: "CSRF token mismatch" }),
        } as Response)
      );

      await expect(todoApi.updateTodo(1, mockTodo)).rejects.toThrow("Failed to update todo");
    });

    it("should successfully update todo", async () => {
      const expectedResponse: Todo = {
        id: 1,
        ...mockTodo,
        created_at: "2024-12-22T12:00:00.000Z",
        updated_at: "2024-12-22T12:00:00.000Z",
      };

      fetchMock.mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(expectedResponse),
        } as Response)
      );

      const result = await todoApi.updateTodo(1, mockTodo);
      expect(result).toEqual(expectedResponse);
    });
  });

  describe("deleteTodo", () => {
    it("should handle 419 CSRF token error", async () => {
      fetchMock.mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
          status: 419,
          json: () => Promise.resolve({ message: "CSRF token mismatch" }),
        } as Response)
      );

      await expect(todoApi.deleteTodo(1)).rejects.toThrow("Failed to delete todo");
    });

    it("should successfully delete todo", async () => {
      fetchMock.mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          status: 204,
        } as Response)
      );

      await todoApi.deleteTodo(1);
    });
  });
});

export interface Todo {
  id: number;
  title: string;
  details: string;
  status: "not_started" | "in_progress" | "completed";
  created_at: string;
  updated_at: string;
}

export interface TodoFormData {
  title: string;
  details: string;
  status: Todo["status"];
}

export interface ApiResponse {
  current_page: number;
  data: Todo[];
  last_page: number;
  total: number;
  per_page: number;
}


import axios from 'axios';
import { Todo } from '../types/todo';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  async getTodos(): Promise<Todo[]> {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data.map((todo: any) => ({
      ...todo,
      description: `Task ${todo.id} description`,
    }));
  },

  async addTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
    const response = await axios.post(`${API_BASE_URL}/todos`, todo);
    return response.data;
  },

  async updateTodo(todo: Todo): Promise<Todo> {
    const response = await axios.put(`${API_BASE_URL}/todos/${todo.id}`, todo);
    return response.data;
  },

  async deleteTodo(id: number): Promise<void> {
    await axios.delete(`${API_BASE_URL}/todos/${id}`);
  },
};
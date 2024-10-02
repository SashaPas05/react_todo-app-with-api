import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1299;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deleteTodos = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const addTodos = (newTodo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', newTodo);
};

export const updateTodos = (todoId: number, updatedData: Partial<Todo>) => {
  return client.patch<Todo>(`/todos/${todoId}`, updatedData);
};
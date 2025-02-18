import { Todo } from './types/Todo';

// Функція для запиту
const BASE_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-todos/api';

// Функція для отримання даних з API
function get<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url + '.json').then(res => res.json());
}

export const getTodos = () => get<Todo[]>('/todos');

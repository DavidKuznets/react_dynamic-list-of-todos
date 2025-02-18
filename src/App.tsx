/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { getTodos } from './api';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { Loader } from './components/Loader';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    getTodos()
      .then((data: Todo[]) => {
        setTodos(data);
        setErrorMessage(null);
      })
      .catch(() => {
        setErrorMessage('Error fetching todos');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>
            {errorMessage && <div className="error">{errorMessage}</div>}{' '}
            {/* Виведення помилки */}
            <div className="block">
              <TodoFilter todos={todos} setFilteredTodos={setFilteredTodos} />
            </div>
            <div className="block">
              {loading && <Loader />}
              <TodoList todos={filteredTodos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

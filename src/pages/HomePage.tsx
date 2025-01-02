import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useTodo } from '../context/TodoContext';
import { TodoItem } from '../components/TodoItem';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { api } from '../services/api';

export function HomePage() {
  const { state, dispatch } = useTodo();

  useEffect(() => {
    async function fetchTodos() {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const todos = await api.getTodos();
        dispatch({ type: 'SET_TODOS', payload: todos });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch todos' });
      }
    }
    fetchTodos();
  }, [dispatch]);

  if (state.loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Task</span>
        </Link>
      </div>
      
      {state.error && <ErrorMessage message={state.error} />}

      <div className="space-y-4">
        {state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
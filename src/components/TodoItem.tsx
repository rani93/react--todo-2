import React from 'react';
import { CheckCircle, Circle, Pencil } from 'lucide-react';
import { Todo } from '../types/todo';
import { Link } from 'react-router-dom';
import { DeleteButton } from './DeleteButton';
import { useTodo } from '../context/TodoContext';
import { api } from '../services/api';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { dispatch } = useTodo();

  async function handleDelete() {
    try {
      await api.deleteTodo(todo.id);
      dispatch({ type: 'DELETE_TODO', payload: todo.id });
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          {todo.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
          ) : (
            <Circle className="w-6 h-6 text-gray-400 mt-1" />
          )}
          <div>
            <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {todo.title}
            </h3>
            {todo.description && (
              <p className="text-gray-600 mt-1">{todo.description}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          <Link
            to={`/edit/${todo.id}`}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Pencil className="w-5 h-5 text-gray-500" />
          </Link>
          <DeleteButton onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
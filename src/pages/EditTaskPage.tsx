import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodo } from '../context/TodoContext';
import { api } from '../services/api';
import { TaskForm } from '../components/TaskForm';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useTodo();
  const todo = state.todos.find((t) => t.id === Number(id));

  const [title, setTitle] = useState(todo?.title || '');
  const [description, setDescription] = useState(todo?.description || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!todo) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-red-600">Task not found</div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const updatedTodo = await api.updateTodo({
        ...todo,
        title,
        description,
      });
      dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
      navigate('/');
    } catch (error) {
      console.error('Failed to update todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleStatusToggle() {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const updatedTodo = await api.updateTodo({
        ...todo,
        completed: !todo.completed,
      });
      dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
      navigate('/');
    } catch (error) {
      console.error('Failed to update todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Edit Task</h1>
        <button
          onClick={handleStatusToggle}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            todo.completed
              ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          Mark as {todo.completed ? 'Incomplete' : 'Complete'}
        </button>
      </div>

      <TaskForm
        title={title}
        description={description}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onSubmit={handleSubmit}
        submitLabel="Save Changes"
        onCancel={() => navigate('/')}
      />
    </div>
  );
}
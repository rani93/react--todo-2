import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodo } from '../context/TodoContext';
import { api } from '../services/api';
import { TaskForm } from '../components/TaskForm';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function AddTaskPage() {
  const navigate = useNavigate();
  const { dispatch } = useTodo();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const newTodo = await api.addTodo({
        title,
        description,
        completed: false,
        userId: 1,
      });
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      navigate('/');
    } catch (error) {
      console.error('Failed to add todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Task</h1>
      
      <TaskForm
        title={title}
        description={description}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onSubmit={handleSubmit}
        submitLabel="Add Task"
        onCancel={() => navigate('/')}
      />
    </div>
  );
}
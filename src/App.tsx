import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { HomePage } from './pages/HomePage';
import { AddTaskPage } from './pages/AddTaskPage';
import { EditTaskPage } from './pages/EditTaskPage';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddTaskPage />} />
            <Route path="/edit/:id" element={<EditTaskPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TodoProvider>
  );
}
export default App;
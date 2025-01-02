import React from 'react';
import { Trash2 } from 'lucide-react';

interface DeleteButtonProps {
  onDelete: () => void;
}

export function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <button
      onClick={onDelete}
      className="p-2 hover:bg-red-100 rounded-full transition-colors"
      aria-label="Delete task"
    >
      <Trash2 className="w-5 h-5 text-red-500" />
    </button>
  );
}
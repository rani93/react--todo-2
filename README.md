# Task Manager Application

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Create, read, update, and delete tasks
- 🔄 Real-time status updates
- 📱 Responsive design
- 🎯 Clean and intuitive interface
- 🚀 Fast and efficient state management

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # Context API for state management
├── pages/            # Page components
├── services/         # API and external services
└── types/            # TypeScript type definitions
```

### Key Components

- `components/`
  - `TaskForm`: Reusable form for adding/editing tasks
  - `TodoItem`: Individual task display component
  - `DeleteButton`: Reusable delete button
  - `LoadingSpinner`: Loading state indicator
  - `ErrorMessage`: Error display component

- `context/`
  - `TodoContext`: Global state management
  - `todoReducer`: State update logic
  - `todoTypes`: Type definitions for state

- `pages/`
  - `HomePage`: Main task list view
  - `AddTaskPage`: New task creation
  - `EditTaskPage`: Task modification

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

### Adding New Features

1. Create components in `src/components/`
2. Add new pages in `src/pages/`
3. Update types in `src/types/`
4. Modify state management in `src/context/`

### Best Practices

- Keep components small and focused
- Use TypeScript for type safety
- Follow the existing file structure
- Implement error handling
- Add loading states for async operations

## API Integration

The application uses `jsonplaceholder.typicode.com/todos` for demo purposes. To integrate with a real API:

1. Update the `API_BASE_URL` in `src/services/api.ts`
2. Modify the API service methods as needed
3. Update the Todo interface in `src/types/todo.ts`

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Axios
- React Router DOM
- Lucide React (icons)

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

MIT License - feel free to use this project for your own purposes.
import React, { useState } from 'react';
import TodoForm  from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false }
    setTasks([...tasks,newTask])

  }
  return (
    <div>
      <h1>Todo List App</h1>
      <TodoForm addTask={addTask}/>
      <p>Number of task:{tasks.length}</p>
      <TodoList tasks={tasks}/>
    </div>
  );
}

export default App;

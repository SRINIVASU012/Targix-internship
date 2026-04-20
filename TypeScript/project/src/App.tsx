import { useState } from "react";
import type { Task } from "./Task";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
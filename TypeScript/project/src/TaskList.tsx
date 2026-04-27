import type { Task } from "./Task";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

export const TaskList = ({ tasks, toggleTask }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => toggleTask(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
import { useState } from "react";

interface Props {
  addTask: (title: string) => void;
}

export const TaskInput = ({ addTask }: Props) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
import Todo from "./components/Todo";
import Review from "./components/Review";
import Progress from "./components/Progress";
import Finished from "./components/Finished";
import { useState } from "react";
import { addTodo } from "./features/todo/todoSlice";
import { useDispatch } from "react-redux";

function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("todo");
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState("");

  const handleAddTask = () => {
    if (input.trim() === "") {
      setFeedback("Task title cannot be empty.");
      return;
    }

    dispatch(addTodo({ input, status }));
    setInput("");
    setFeedback("Task added successfully!");
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <div
      className="p-6 min-h-screen bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
"
    >
      <div className="mb-6 flex items-center gap-4">
        <input
          className="bg-white/70 rounded-xl p-2 border border-gray-300 w-1/3 focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="font-bold rounded-xl bg-white/70 p-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="progress">In Progress</option>
          <option value="review">Review</option>
          <option value="finished">Finished</option>
        </select>
        <button
          className="font-bold rounded-xl bg-blue-500 hover:bg-blue-600 p-2 text-white shadow-md transition"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      {feedback && (
        <div className="mb-6 text-center text-green-600 font-semibold">
          {feedback}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Todo />
        <Progress />
        <Review />
        <Finished />
      </div>
    </div>
  );
}

export default App;

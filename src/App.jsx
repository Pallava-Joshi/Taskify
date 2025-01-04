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

  return (
    <div className="p-4 w-full h-dvh bg-zinc-500">
      <input
        className="bg-slate-400 rounded-xl mr-2 p-2 text-white border-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        className="font-bold rounded-xl bg-slate-600 p-2 mr-2 text-white"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option value="todo">Todo</option>
        <option value="progress">In progress</option>
        <option value="review">Review</option>
        <option value="finished">Finished</option>
      </select>
      <button
        className="font-bold rounded-xl bg-slate-600 p-2 text-white"
        onClick={() => {
          dispatch(addTodo({ input, status }));
        }}
      >
        Add Task
      </button>
      <div className="grid grid-cols-4">
        <Todo />
        <Progress />
        <Review />
        <Finished />
      </div>
    </div>
  );
}

export default App;

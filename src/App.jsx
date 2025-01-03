import "./components/Card";
import { useState } from "react";
import { addTodo } from "./features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./components/Todo";

function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.todos);

  return (
    <div className="p-4 w-full h-dvh bg-zinc-500">
      <input
        className="bg-slate-400 rounded-xl mr-2 p-2 text-white border-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="font-bold rounded-xl bg-slate-600 p-2 text-white"
        onClick={() => {
          setStatus("todo");
          dispatch(addTodo({ input, status }));
        }}
      >
        Add Task
      </button>

      {tasks.map((element) => {
        <>
          <Todo />
          <Progress />
          <Review />
        </>;
      })}
    </div>
  );
}

export default App;

import "./components/Card";
import { useState } from "react";
import { addTodo } from "./features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/Card";

function App() {
  const [input, setInput] = useState("");
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
        onClick={() => dispatch(addTodo(input))}
      >
        Add Task
      </button>

      {tasks.map((element) => {
        return (
          <Card
            key={element.id}
            title={element.title}
            completed={element.completed}
            id={element.id}
          />
        );
        // console.log(element.id + " " + element.title);
      })}
    </div>
  );
}

export default App;

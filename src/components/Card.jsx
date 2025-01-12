import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../features/todo/todoSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";

function Card({ title, completed, id }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState(title);

  return (
    <div className="bg-slate-600 w-fit h-24 p-2 my-2 rounded-xl shadow-xl text-white flex justify-between">
      <input
        className="bg-slate-600 text-zinc-900 rounded-xl h-12 border-none"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          dispatch(updateTodo({ id, input }));
        }}
      />
      <div className="">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            dispatch(toggleTodo(id));
          }}
          className="h-6 w-5"
        />

        <RiDeleteBin6Fill
          size={24}
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
        />
      </div>
    </div>
  );
}

export default Card;

import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../features/todo/todoSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";

function Card({ title, completed, id }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState(title);

  return (
    <div className="my-2 bg-white/60 border border-gray-200 shadow-lg rounded-xl p-4 hover:scale-105 backdrop-blur-lg transition">
      <input
        className="bg-transparent text-gray-800 font-medium rounded-xl w-full mb-2 p-2 border border-gray-300 focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          dispatch(updateTodo({ id, input }));
        }}
      />
      <div className="flex justify-between items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            dispatch(toggleTodo(id));
          }}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <RiDeleteBin6Fill
          size={24}
          className="text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
        />
      </div>
    </div>
  );
}

export default Card;

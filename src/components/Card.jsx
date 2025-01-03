import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todo/todoSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Card({ title, completed, id }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-600 w-64 h-24 p-2 my-2 grid grid-cols-10 rounded-xl shadow-xl text-white">
      <h3 className="col-span-8">{title}</h3>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(toggleTodo(id));
        }}
        className="col-span-1 h-6 w-5"
      />

      <RiDeleteBin6Fill
        size={24}
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      />
    </div>
  );
}

export default Card;

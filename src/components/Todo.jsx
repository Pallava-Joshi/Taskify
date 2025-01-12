import Card from "./Card";
import { useSelector } from "react-redux";

function Todo() {
  const tasks = useSelector((state) => state.todos);

  return (
    <div className="col-span-1 items-center">
      <h3>Todo</h3>
      {tasks.map((element) => {
        if (element.status === "todo") {
          // console.log(element);
          return (
            <Card
              key={element.id}
              title={element.title}
              completed={element.completed}
              id={element.id}
            />
          );
        }
      })}
    </div>
  );
}

export default Todo;

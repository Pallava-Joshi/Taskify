import Card from "./Card";
import { useSelector } from "react-redux";
import { useDroppable } from "@dnd-kit/core";

function Todo() {
  const tasks = useSelector((state) => state.todos);
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <div ref={setNodeRef} className="col-span-1 items-center h-dvh ">
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

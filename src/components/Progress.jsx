import Card from "./Card";
import { useSelector } from "react-redux";
import { useDroppable } from "@dnd-kit/core";

function Progress() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const tasks = useSelector((state) => state.todos);
  return (
    <div ref={setNodeRef} className="col-span-1 items-center h-dvh">
      <h3>Progress</h3>
      {tasks.map((element) => {
        if (element.status === "progress") {
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

export default Progress;

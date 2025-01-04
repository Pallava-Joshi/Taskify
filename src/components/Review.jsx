import Card from "./Card";
import { useSelector } from "react-redux";

function Review() {
  const tasks = useSelector((state) => state.todos);

  return (
    <div className="col-span-1 items-center">
      <h3>Review</h3>
      {tasks.map((element) => {
        if (element.status === "review") {
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

export default Review;

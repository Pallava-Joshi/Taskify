import Card from "./Card";
import { useSelector } from "react-redux";

function Progress() {
  const tasks = useSelector((state) => state.todos);

  return (
    <div className="bg-white/50 border border-gray-300 shadow-lg rounded-xl p-4 backdrop-blur-md">
      <h3 className="text-lg font-bold text-gray-800 mb-4">In Progress</h3>
      <div className="space-y-4">
        {tasks.map((task) => {
          if (task.status === "progress") {
            return <Card key={task.id} {...task} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Progress;

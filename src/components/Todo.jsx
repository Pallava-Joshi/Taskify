import Card from "./Card";

function Status() {
  return (
    <>
      <Card
        key={element.id}
        title={element.title}
        completed={element.completed}
        id={element.id}
        status={element.status}
      />
    </>
  );
}

export default Status;

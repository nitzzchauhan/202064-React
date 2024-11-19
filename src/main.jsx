import { createRoot } from "react-dom/client";

function Task() {
  return (
    <>
      <h1>To do List</h1>
      <ul>
        {taskList.map((t,index,tasklist)=>{
          return <h1>{t} and total tasks are -- {taskList.join(",")}</h1>
        })}
      </ul>
    </>
  );
}

const taskList = ["task1", "task2", "task3"];

createRoot(document.getElementById("root")).render(
  <>
    <Task />
    {Task()}
  </>
);

//&&

// {condition && expression}
  {/* {students.length > 0 && (
          <h1>There are {students.length} students in the class</h1>
        ) }  */}
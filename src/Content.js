import React, { useContext } from "react";
import Task from "./components/Task";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";

const Content = () => {
  const { tasks, setTasks } = useContext(DataContext);
  const handleTaskTitleEdit = (event, taskId) => {
    let targetTask = [...tasks].filter((item) => {
      return item.id === taskId;
    });
    let taskRemaining = [...tasks].filter((item) => {
      return item.id !== taskId;
    });

    targetTask[0].name = event.target.value;

    let newTasks = [...taskRemaining, targetTask[0]];
    setTasks(newTasks.sort(SortingFunction));
  };

  const SortingFunction = (a, b) => {
    return a.id - b.id;
  };

  const taskDiv = tasks.map((item) => {
    return (
      <Link to={`task\\${item.id}`}>
        <Task task={item} handleTaskTitleEdit={handleTaskTitleEdit} />
      </Link>
    );
  });
  return (
    <div className="">
      <div className="flex px-4 font-semibold py-2 bg-gray-400">
        <span className=" basis-4/5">
          <span>Task</span>
          <span>({tasks.length})</span>
        </span>
        <span className="basis-1/5 pl-6">Status</span>
      </div>
      <div className="">{taskDiv}</div>
    </div>
  );
};

export default Content;

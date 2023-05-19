import { FcCheckmark } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import ActivityPopUp from "./ActivityPopUp";
import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const Edit = ({ taskInput, setTaskInput }) => {
  const { inEditMode, setInEditMode, tasks, setTasks } =
    useContext(DataContext);
  const addTask = () => {
    if (!taskInput.taskName) {
      return false;
    }
    let newTask = {
      id: tasks[tasks.length - 1].id + 1,
      name: taskInput.taskName,
      desc: taskInput.taskDesc,
      activity: [
        {
          id: 1,
          name: taskInput.activityName,
          desc: taskInput.activityDesc,
          isCompleted: false,
        },
      ],
    };
    setTasks([...tasks, newTask]);
    setTaskInput({
      taskName: "",
      taskDesc: "",
      activityName: "",
      activityDesc: "",
    });
    return newTask.id;
  };

  const handleSaveBtn = () => {
    addTask();
    setTaskInput({
      taskName: "",
      taskDesc: "",
      activityName: "",
      activityDesc: "",
    });
  };
  const [editActivity, setEditActivity] = useState({
    taskId: "",
    activityId: "",
    activityName: "",
    activityDetail: "",
    activityIsCompleted: false,
  });
  const handleAddActivities = () => {
    let id = addTask();
    if (!id) {
      return;
    }
    setEditActivity({ ...editActivity, taskId: Number(id) });
    setInEditMode(true);
  };
  return (
    <div>
      <form
        className="flex flex-col px-4 py-4 gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter task title"
          className="border rounded-md px-2 py-1 outline-lime-500"
          value={taskInput.taskName}
          onChange={(e) =>
            setTaskInput({ ...taskInput, taskName: e.target.value })
          }
        />
        <textarea
          placeholder="Enter the dscription of the task"
          className="border rounded-md px-2 py-1 outline-lime-500 resize-none"
          value={taskInput.taskDesc}
          onChange={(e) =>
            setTaskInput({ ...taskInput, taskDesc: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter activity for the task"
          className="border rounded-md px-2 py-1 outline-lime-500"
          value={taskInput.activityName}
          onChange={(e) =>
            setTaskInput({ ...taskInput, activityName: e.target.value })
          }
        />
        <textarea
          placeholder="Enter the detail of the activity"
          className="border rounded-md px-2 py-1 outline-lime-500 resize-none"
          value={taskInput.activityDesc}
          onChange={(e) =>
            setTaskInput({ ...taskInput, activityDesc: e.target.value })
          }
        />
        <div className="flex justify-end gap-4">
          <button
            className="flex items-center gap-2 px-2 py-1 bg-slate-100 text-green-500 rounded-md shadow-md"
            onClick={handleSaveBtn}
          >
            <span>Save</span>
            <span>
              <FcCheckmark />
            </span>
          </button>
          <button
            className="flex items-center gap-2 px-2 py-1 bg-slate-100 text-blue-600 rounded-md shadow-md"
            onClick={handleAddActivities}
          >
            <span>more activities</span>
            <span>
              <IoMdAdd />
            </span>
          </button>
        </div>
        <div></div>
      </form>
      {inEditMode && (
        <ActivityPopUp
          setEditActivity={setEditActivity}
          editActivity={editActivity}
        />
      )}
    </div>
  );
};

export default Edit;

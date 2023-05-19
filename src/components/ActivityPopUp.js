import { React, useContext } from "react";
import DataContext from "../context/DataContext";

function ActivityPopUp({ editActivity, setEditActivity }) {
  const { tasks, setTasks, setInEditMode } = useContext(DataContext);
  const task = tasks.filter((item) => {
    return item.id == editActivity.taskId;
  })[0];
  const handleSaveActivity = () => {
    task.activity = task.activity.filter((item) => {
      return item.id !== editActivity.activityId;
    });
    let activityId = editActivity.activityId
      ? editActivity.activityId
      : task.activity[task.activity.length - 1].id + 1;
    let newActivity = {
      id: activityId,
      name: editActivity.activityName,
      desc: editActivity.activityDetail,
      isCompleted: editActivity.activityIsCompleted,
    };
    task.activity = [...task.activity, newActivity];
    let newTasks = tasks.filter((item) => {
      return item.id != editActivity.taskId;
    });
    setTasks([...newTasks, task]);
    setEditActivity({
      ...editActivity,
      activityId: "",
      activityName: "",
      activityDetail: "",
      activityIsCompleted: false,
    });
    console.log(newActivity);
    setInEditMode(false);
  };
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-90 flex items-center justify-center">
      <form
        className="flex flex-col gap-4 w-3/5 bg-slate-300 p-4 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Enter activity for the task"
          className="border rounded-md px-2 py-1 outline-lime-500 shadow-md"
          value={editActivity.activityName}
          onChange={(e) =>
            setEditActivity({
              ...editActivity,
              activityName: e.target.value,
            })
          }
        />
        <textarea
          placeholder="Enter the detail of the activity"
          className="border rounded-md px-2 py-1 outline-lime-500 resize-none h-28 shadow-md"
          value={editActivity.activityDetail}
          onChange={(e) =>
            setEditActivity({
              ...editActivity,
              activityDetail: e.target.value,
            })
          }
        />
        <label
          className="text-sm lg:text-base cursor-pointer text-slate-600 font-semibold"
          htmlFor="completed"
        >
          Completed{" "}
          <input
            type="checkbox"
            name="completed"
            className=" accent-lime-500"
            checked={editActivity.activityIsCompleted}
            onChange={(e) =>
              setEditActivity({
                ...editActivity,
                activityIsCompleted: !editActivity.activityIsCompleted,
              })
            }
          />
        </label>
        <div className="flex gap-4 justify-end">
          <button
            className="flex items-center gap-2 px-2 py-1 bg-slate-100 text-green-500 rounded-md shadow-md"
            onClick={handleSaveActivity}
          >
            <span>save</span>
          </button>
          <button
            className="flex items-center gap-2 px-2 py-1 bg-slate-100 text-red-500 rounded-md shadow-md"
            onClick={() => {
              setEditActivity({
                ...editActivity,
                activityId: "",
                activityName: "",
                activityDetail: "",
                activityIsCompleted: false,
              });
              setInEditMode(false);
            }}
          >
            <span>cancel</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ActivityPopUp;

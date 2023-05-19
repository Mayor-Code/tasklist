import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useContext, useState } from "react";
import Activity from "../components/Activity";
import { IoMdAdd } from "react-icons/io";
import ActivityPopUp from "../components/ActivityPopUp";

const Detail = () => {
  const { tasks, setInEditMode, inEditMode } = useContext(DataContext);
  const id = useParams().id;
  const task = tasks.filter((item) => {
    return item.id.toString() === id;
  });
  const [editActivity, setEditActivity] = useState({
    taskId: Number(id),
    activityId: "",
    activityName: "",
    activityDetail: "",
    activityIsCompleted: false,
  });
  const activityDiv = task[0].activity.map((item) => {
    return (
      <Activity
        activity={item}
        taskId={task.id}
        key={item.id}
        editActivity={editActivity}
        setEditActivity={setEditActivity}
      />
    );
  });
  const handleAddActivity = () => {
    setInEditMode(true);
  };
  return (
    <div className="py-3 px-4">
      <h3 className="text-lg font-semibold capitalize px-2 py-1 bg-blue-500 rounded-3xl mb-2 text-white max-w-fit">
        {task[0].name}
      </h3>
      <div>
        <div className="">
          <p className="text-sm">{task[0].desc}</p>
        </div>
        <div className="mt-4">
          <span className="flex flex-col mb-2">
            <span className="font-semibold">Activity</span>
            <span className="block w-1/2 border-2 border-green-400"></span>
          </span>
          <ul className="flex flex-col gap-1">{activityDiv}</ul>
        </div>
        <button
          className="bg-blue-500 absolute bottom-10 shadow-md left-1/2 -translate-x-1/2 text-white p-2 rounded-full text-2xl"
          onClick={handleAddActivity}
        >
          <IoMdAdd />
        </button>
      </div>
      {inEditMode && (
        <ActivityPopUp
          setInEditMode={setInEditMode}
          editActivity={editActivity}
          setEditActivity={setEditActivity}
        />
      )}
    </div>
  );
};

export default Detail;

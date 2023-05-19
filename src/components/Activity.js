import { IoCheckmarkCircle } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const Activity = ({ activity, editActivity, setEditActivity }) => {
  const taskId = useParams().id;
  const { tasks, setTasks, setInEditMode } = useContext(DataContext);
  const task = tasks.filter((item) => {
    return item.id.toString() === taskId;
  })[0];

  const handleActivityEdit = () => {
    setEditActivity({
      ...editActivity,
      activityId: activity.id,
      activityName: activity.name,
      activityDetail: activity.desc,
      activityIsCompleted: activity.isCompleted,
    });
    setInEditMode(true);
  };

  const handleDeleteActivity = () => {
    task.activity = task.activity.filter((item) => {
      return item.id !== activity.id;
    });
    let newTasks = tasks.filter((item) => {
      return item.id !== taskId;
    });
    setTasks([...newTasks, task]);
  };
  return (
    <li className="flex items-center justify-between last:border-none border-b border-sky-200 last:mb-0 pb-2 last-pb-0">
      <div className="flex items-center">
        <div
          className={`${
            activity.isCompleted ? "text-green-500" : "text-gray-200"
          } mr-2`}
        >
          <IoCheckmarkCircle />
        </div>
        <div className="text-sm">
          <h4 className="font-semibold">{activity.name}</h4>
          <p>{activity.desc}</p>
        </div>
      </div>
      <div className="flex text-2xl gap-4">
        <button className="text-blue-300" onClick={handleActivityEdit}>
          <CiEdit className="cursor-pointer" />
        </button>
        <button className="text-red-500" onClick={handleDeleteActivity}>
          <AiFillDelete className=" cursor-pointer" />
        </button>
      </div>
    </li>
  );
};

export default Activity;

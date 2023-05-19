import { IoRadioButtonOn } from "react-icons/io5";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const Completed = task.activity.filter((item) => {
    return item.isCompleted;
  });
  const progressWidth = `${(Completed.length / task.activity.length) * 100}%`;
  const style = { width: progressWidth };
  return (
    <div
      className=" hover:-translate-y-2 border-y border-slate-300 hover:bg-blue-200 hover:shadow-lg px-4 duration-200 transition-all"
      id={`task-${task.id}`}
    >
      <div className="flex items-center ">
        <div className="w-4/5 py-2">
          <div className="flex item-center gap-4 mb-1">
            <Link
              className="font-semibold capitalize flex gap-2 items-center"
              to={`task\\${task.id}`}
            >
              <span>{task.name}</span>
            </Link>
          </div>
          <div className="w-4/5 h-2 rounded-md border-2 border-slate-100 bg-white">
            <div className="h-full bg-blue-400 rounded-md" style={style}></div>
          </div>
          <div className="text-xs text-gray-400">{`${Completed.length} of ${task.activity.length}`}</div>
        </div>
        <div className="w-1/5 flex items-center gap-2">
          <span
            className={`text-xs -mb-1 ${
              Completed.length === task.activity.length
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            <IoRadioButtonOn />
          </span>
          <span>
            {Completed.length === task.activity.length
              ? "Completed"
              : "Ongoing"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;

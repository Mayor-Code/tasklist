import Edit from "../components/Edit";
import { useState } from "react";

const Create = () => {
  const [taskInput, setTaskInput] = useState({
    taskName: "",
    taskDesc: "",
    activityName: "",
    activityDesc: "",
  });
  return <Edit taskInput={taskInput} setTaskInput={setTaskInput} />;
};

export default Create;

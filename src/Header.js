import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="border-b-2 border-gray-400 px-4 py-2">
      <div className="font-bold text-2xl font-pacifico text-slate-600">
        TaskList
      </div>
      <div>
        <ul className="flex gap-4 font-medium">
          <li
            className={`hover:text-blue-200 duration-300 transition-colors ${
              active === "home" ? "text-blue-500" : "text-black"
            }`}
            onClick={() => setActive("home")}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`hover:text-blue-200 duration-500 transition-colors ${
              active === "create" ? "text-blue-500" : "text-black"
            }`}
            onClick={() => setActive("create")}
          >
            <Link to={"/create/"}>Create</Link>
          </li>
          <li
            className={`hover:text-blue-200 duration-500 transition-colors ${
              active === "wordle" ? "text-blue-500" : "text-black"
            }`}
            onClick={() => setActive("wordle")}
          >
            <Link to={"/wordle/"}>Wordle</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

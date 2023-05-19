import React from "react";

function WordBox({ innerText }) {
  let color;
  let shadow;
  if (innerText.state === "correct") {
    color = "bg-green-300";
    shadow = "shadow-green-400";
  } else if (innerText.state === "partial") {
    color = "bg-yellow-200";
    shadow = "shadow-yellow-400";
  } else if (innerText.state === "incorrect") {
    color = "bg-gray-200";
    shadow = "shadow-gray-400";
  } else {
    color = "";
    shadow = "shadow-blue-400";
  }
  return (
    <div
      className={` w-8 h-8 shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1),_0_-5px_15px_-3px_rgb(0_0_0_/_0.1),_0_-4px_6px_-4px_rgb(0_0_0_/_0.1)] ${shadow} flex justify-center items-center font-medium p-1`}
    >
      <div
        className={`w-full h-full p-1 flex justify-center items-center ${color}`}
      >
        {innerText.letter}
      </div>
    </div>
  );
}

export default WordBox;

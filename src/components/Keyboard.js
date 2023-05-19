import React from "react";
import Key from "./Key";
import { BsBackspace } from "react-icons/bs";

function Keyboard() {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m", "Enter"],
  ];
  const topRow = keys[0].map((key) => {
    return <Key k_key={key} />;
  });
  const middleRow = keys[1].map((key) => {
    return <Key k_key={key} />;
  });
  const bottomRow = keys[2].map((key) => {
    return <Key k_key={key} />;
  });
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">{topRow}</div>
        <div className="flex gap-2">{middleRow}</div>
        <div className="flex gap-2">
          <Key k_key={"Backspace"}>
            <BsBackspace />
          </Key>
          {bottomRow}
        </div>
      </div>
    </div>
  );
}

export default Keyboard;

import React from "react";

const Key = ({ k_key, children }) => {
  const keyboardEvent = new KeyboardEvent("keydown", { key: k_key });
  return (
    <button
      className="uppercase w-7 h-7 min-w-fit p-1 flex justify-center items-center bg-gray-700 border-1 border-gray-300 text-gray-300 rounded-md"
      onClick={() => {
        dispatchEvent(keyboardEvent);
      }}
    >
      {children ? children : k_key}
    </button>
  );
};

export default Key;

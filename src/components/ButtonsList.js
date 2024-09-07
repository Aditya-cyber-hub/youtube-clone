import React from "react";

const buttons = ["All", "Live", "Music", "Cricket", "Esports"];

const ButtonsList = () => {
  return (
    <div className="flex">
      {buttons.map((button) => (
        <button className="bg-[rgb(242,242,242)] px-3 pt-1 pb-2 text-sm font-semibold hover:bg-gray-200 rounded-lg m-2">
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;

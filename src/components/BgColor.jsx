import React, { useState } from "react";

function BgColor() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button
          className="w-20 h-18 border-2 bg-red-500 text-white  m-2"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="w-20 h-18 border-2 bg-green-900 text-white m-2"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="w-20 h-18 border-2 bg-pink-300 text-white m-2"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="w-20 h-18 border-2 bg-orange-400 text-white m-2"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="w-20 h-18 border-2 bg-yellow-400 text-black  m-2"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="w-20 h-18 border-2 bg-blue-700 text-white  m-2"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default BgColor;

import React from "react";

export function HomeComponent() {
  return (
    <div className="w-screen h-screen m-4 grid grid-cols-[2fr_1fr]">
      <div className="grid grid-rows-[1fr_5fr]">
        <div className="grid grid-cols-[4fr_1fr]">
          <div className="bg-green-500"></div>
          <div className="bg-gray-500"></div>
        </div>
        <div className="bg-blue-500"></div>
      </div>
      <div className="bg-red-500"></div>
    </div>
  );
}

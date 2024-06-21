import React from "react";

const CryptoHeader = () => {
  return (
    <div className="grid grid-rows-[1fr_6fr] gap-2">
      <div className="bg-green-500 rounded-sm"></div>
      <div className="bg-blue-500 rounded-sm"></div>
    </div>
  );
};

export function HomeComponent() {
  return (
    <div className="w-full h-screen m-4 grid grid-cols-[2fr_1fr] gap-2">
      <CryptoHeader />
      <div className="bg-red-500 rounded-sm"></div>
    </div>
  );
}

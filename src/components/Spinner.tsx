import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-amber-800"></div>
    </div>
  );
}

export default Spinner;

import React from "react";

function HomePageError() {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-amber-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-amber-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-amber-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}

export default HomePageError;

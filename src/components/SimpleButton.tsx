import React from "react";

type prop ={
    lable: string;
}

function SimpleButton({lable}:prop) {
  return (
    <button
      className="relative inline-flex items-center gap-2 px-2 font-semibold text-yellow-50 bg-gradient-to-tr from-yellow-900/30 via-yellow-900/70 to-yellow-900/30 ring-4 ring-yellow-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-yellow-50/10 before:blur-xl"
    >
      {lable}
    </button>
    
  
    
  );
}

export default SimpleButton;

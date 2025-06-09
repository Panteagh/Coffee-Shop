import React from "react";
import Navbar from "./Navbar";
import { Children } from "@/types/Types";

function Layout({ children }: Children) {
  return (
    <div className=" mx-auto">
      <div className="p-2">
        <Navbar />
      </div>
      {children}
   
    </div>
  );
}

export default Layout;

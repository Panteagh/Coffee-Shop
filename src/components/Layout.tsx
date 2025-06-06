import React from "react";
import Navbar from "./Navbar";

interface Children {
  children: React.ReactNode;
}

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

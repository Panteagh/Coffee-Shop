import React from "react";
import Navbar from "./Navbar";
import { Children } from "@/types/Types";
import Footer from "./Footer";

function Layout({ children }: Children) {
  return (
    <div className=" mx-auto">
      <div className="p-2">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

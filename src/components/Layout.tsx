import React from "react";
import Navbar from "./Navbar";
import { Children } from "@/types/Types";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Layout({ children }: Children) {
  return (
    <div className=" mx-auto">
      
      <div className="p-2">
        <Navbar />
      </div>

      {children}

      <Toaster position="top-right" reverseOrder={false} />
      <Footer />

    </div>
  );
}

export default Layout;

import React from "react";

function CopyrightFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-4 mt-8 text-[#FAE7C7] text-center text-sm md:text-base">
      <div className=" mx-auto px-4">
        <p>
          &copy; {currentYear} Pantea. All rights reserved. Designed and
          developed by Pantea.
        </p>
      </div>
    </footer>
  );
}

export default CopyrightFooter;

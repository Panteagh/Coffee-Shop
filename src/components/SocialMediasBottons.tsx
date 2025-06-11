import { Github, Linkedin } from "lucide-react";
import React from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

function SocialMediasBottons() {
  return (
    <div className="flex gap-4 justify-center items-center h-full">
      <a
        href="https://www.linkedin.com/in/panteaghaffari"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FAE7C7] hover:bg-amber-200 transition-colors p-3 rounded-full shadow-lg hover:scale-105 duration-200"
      >
        <Linkedin className="text-[#2f1e10] text-xl" />
      </a>
      <a
        href="https://github.com/Panteagh"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FAE7C7] hover:bg-amber-200 transition-colors p-3 rounded-full shadow-lg hover:scale-105 duration-200"
      >
        <Github className="text-[#2f1e10] text-xl" />
      </a>
    </div>
  );
}

export default SocialMediasBottons;


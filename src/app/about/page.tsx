import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-amber-950">
      <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md">
          <Image
            src="/profile-placeholder.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-base leading-relaxed space-y-4">
          <p>
            Hi! I'm <strong>Panthéa</strong>, a front-end developer with a passion for
            clean code, thoughtful UI, and seamless user experience.
          </p>
          <p>
            I specialize in <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>. I love crafting responsive, dynamic interfaces and bringing ideas to life through code.
          </p>
          <p>
            I'm currently focused on improving my skills in logic, component architecture, and advanced state management with tools like <strong>Zustand</strong> and <strong>React Query</strong>.
          </p>
          <p>
            When I’m not coding, I’m probably learning new tools, reading, or exploring design systems. Let’s build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

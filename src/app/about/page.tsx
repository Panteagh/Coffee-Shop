import DivMotionWrapper from "@/components/DivMotionWrapper";
import SocialMediasBottons from "@/components/SocialMediasBottons";
import React from "react";

const AboutPage = () => {
  return (
    <DivMotionWrapper>
      <div className="max-w-5xl mx-auto px-4 py-16 text-amber-950">
        <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-lg leading-relaxed space-y-6">
            <p>
              Hi! Im <strong>Pantea</strong>, a passionate front-end developer
              who thrives on clean code, elegant UIs, and seamless user
              experiences.
            </p>
            <p>
              I specialize in <strong>React</strong>, <strong>Next.js</strong>,
              and <strong>TypeScript</strong>, building responsive and dynamic
              interfaces that bring ideas to life.
            </p>
            <p>
              My current focus is on sharpening my skills in logic design,
              component architecture, and advanced state management with tools
              like <strong>Zustand</strong> and <strong>React Query</strong>.
            </p>
            <p>
              When Im not coding, you can find me exploring new design systems,
              reading, or learning new tools. Lets build something amazing
              together!
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">Find me on:</h2>
              <SocialMediasBottons />
            </div>
          </div>
        </div>
      </div>
    </DivMotionWrapper>
  );
};

export default AboutPage;

import React from "react";
import Container from "./Container";
import Image from "next/image";
import DivMotionWrapper from "./DivMotionWrapper";

function AboutMeSection() {
  return (
    <DivMotionWrapper>
      <Container>
        <div className=" w-4/5  rounded-4xl shadow bg-[#624023] relative  mx-2.5 flex flex-row-reverse max-sm:flex-col-reverse justify-center items-center">
          <div className="w-1/2 max-sm:w-full">
            <Image
              className="top-[-68] right-0 max-md:w-[350px] max-md:top-2"
              src={"/assets/coffee-landing-transformed.png"}
              alt=""
              width={450}
              height={450}
            />
          </div>
          <div className="w-1/2 max-sm:w-full text-[#FAE7C7] flex flex-col gap-2.5 p-6">
            <h2 className="font-semibold text-2xl">about me</h2>
            <p className="max-md:text-sm">
              Hi, I&apos;m Pantea — a front-end developer with a passion for clean
              design and smooth user experiences. This coffee shop website is a
              personal project I built from scratch to sharpen my skills in
              React, Next.js, and UI development. Hope you enjoy browsing as
              much as I enjoyed building it!
            </p>
          </div>
        </div>
      </Container>
    </DivMotionWrapper>
  );
}

export default AboutMeSection;

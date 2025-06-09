"use client";
import Image from "next/image";
import React from "react";
import ShowMenuButton from "./ShowMenuButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Titlepage from "./Titlepage";
import DivMotionWrapper from "./DivMotionWrapper";

function Hero() {
  return (
    <section className="h-[450px] max-md:h-64 w-full relative">
      <Image
        className="-z-1 "
        src="/assets/HeroImage.jpg"
        alt="coffee"
        priority={true}
        fill={true}
      />
      <div className="top-26 max-md:top-10 text-center relative">
        <Titlepage
          title={`Tast the real taste of coffee
               with us!`}
        />

        <DivMotionWrapper>
          <Link href="/menu">
            <ShowMenuButton />
          </Link>
        </DivMotionWrapper>
      </div>
    </section>
  );
}

export default Hero;

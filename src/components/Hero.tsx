"use client";
import Image from "next/image";
import React from "react";
import ShowMenuButton from "./ShowMenuButton";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-96 max-md:h-64 w-full relative">
      <Image
        className="-z-1 "
        src="/assets/HeroImage.jpg"
        alt="coffee"
        priority={true}
        fill={true}
      />
      <div className="top-26 max-md:top-10 text-center relative">
        <motion.h1
          className="text-amber-950 font-bold text-4xl max-md:text-2xl mb-11"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Taste the real taste of coffee
          <br /> with us!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <ShowMenuButton />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

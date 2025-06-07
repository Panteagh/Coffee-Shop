"use client";
import Image from "next/image";
import React from "react";
import ShowMenuButton from "./ShowMenuButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Titlepage from "./Titlepage";

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
        <motion.div
        className="mt-11"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Link href="/menu">
            <ShowMenuButton />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

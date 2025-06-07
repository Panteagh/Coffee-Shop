"use client";
import React from "react";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
}

function Titlepage({title}: TitleProps) {
  return (
    <div>
      <motion.h1
        className="text-amber-950 font-bold text-4xl max-md:text-2xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {title}
      </motion.h1>
    </div>
  );
}

export default Titlepage;

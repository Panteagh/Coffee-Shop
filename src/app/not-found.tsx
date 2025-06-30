"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Ban } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <Ban size={64} className="text-amber-800" />
        <h1 className="text-4xl font-bold text-amber-950">Page Not Found</h1>
        <p className="text-lg text-amber-700">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <button className="mt-6 px-6 py-2 bg-amber-950 text-white rounded-xl hover:bg-amber-900 transition">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

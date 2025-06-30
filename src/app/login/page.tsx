"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DivMotionWrapper from "@/components/DivMotionWrapper";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "demo@example.com" && password === "password123") {
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <DivMotionWrapper>
      <div className="min-h-screen flex items-center justify-center px-4 ">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-yellow-200">
          <div className="flex flex-col items-center mb-8">
            <svg
              className="w-16 h-16 text-[#624023] mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h6zM14 8h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6a2 2 0 012-2z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 18h.01M16 18h.01M20 18h.01"
              ></path>
            </svg>
            <h2 className="text-4xl max-md:text-2xl font-extrabold text-[#2f1e10] text-center mb-2 leading-tight">
              Welcome Back, Coffee Lover!
            </h2>
            <p className="text-md text-[#52351C] text-center">
              Sign in to enjoy your favorite brews.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-amber-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-xl border border-yellow-300 p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-amber-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-xl border border-yellow-300 p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-900 hover:bg-amber-800 text-white rounded-xl font-semibold transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-amber-800 mt-6">
            Use <strong>demo@example.com</strong> / <strong>password123</strong>{" "}
            to login
          </p>
        </div>
      </div>
    </DivMotionWrapper>
  );
}

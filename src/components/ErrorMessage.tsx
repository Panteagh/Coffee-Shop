import React from "react";
import Link from "next/link";

export default function ErrorMessage({
  message = "Something went wrong...",
}: {
  message?: string;
}) {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center gap-4 text-center">
      <div className="text-red-600 text-4xl">⚠️</div>
      <h2 className="text-lg font-semibold text-red-700">{message}</h2>
      <p className="text-gray-600">
        Please try again or go back to the homepage.
      </p>
      <div className="flex gap-4 mt-2 items-center">
        <button
          onClick={() => location.reload()}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Retry
        </button>
        <Link href="/">
          <span className="px-4 py-2 bg-amber-950 text-white rounded hover:bg-amber-900 cursor-pointer">
            Go Home
          </span>
        </Link>
      </div>
    </div>
  );
}

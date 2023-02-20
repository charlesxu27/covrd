import React from "react";

export default function Footer() {
  return (
    <footer className="bg-indigo-400 text-gray-100 py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Charles Xu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};


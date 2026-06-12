"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Remove from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className={`transition-all duration-1000 transform ${fadeOut ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}>
        <img
          src="/preloader-logo.png"
          alt="Colortechnik Loading Logo"
          className="w-48 md:w-64 h-auto animate-pulse drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

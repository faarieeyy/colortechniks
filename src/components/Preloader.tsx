"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [showName, setShowName] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Phase 2: Show brand name after 1.5s
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 1500);

    // Phase 3: Show loading bar after 3.0s
    const loadingTimer = setTimeout(() => {
      setShowLoading(true);
    }, 3000);

    // Fade out starts at 4.3s (giving 700ms to complete the transition by 5.0s)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4300);

    // Completely remove from DOM at 5.0s
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(loadingTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Animate the progress bar from 0% to 100% when loading phase starts
  useEffect(() => {
    if (showLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 50); // 50ms * 20 steps = 1000ms (1.0s to fill, completing well before the preloader fades out)
      return () => clearInterval(interval);
    }
  }, [showLoading]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div 
        className={`flex flex-col items-center transition-all duration-1000 transform ${
          fadeOut ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Logo container with clipPath transition to reveal the text name */}
        <div className="relative overflow-hidden flex items-center justify-center">
          <img
            src="/preloader-logo.png"
            alt="Colortechnik Loading Logo"
            className="w-80 md:w-[450px] h-auto drop-shadow-2xl"
            style={{
              clipPath: showName ? "inset(0 0 0% 0)" : "inset(0 0 50% 0)",
              transition: "clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>

        {/* Minimalist glowing loading bar */}
        <div
          className={`w-48 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden relative transition-all duration-500 ease-out ${
            showLoading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-y-0 left-0 bg-[#ffdcbe] transition-all duration-75 ease-out rounded-full shadow-[0_0_8px_#ffdcbe]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}


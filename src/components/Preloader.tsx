"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Phase 1: Logo + name appear together immediately (slight fade-in)
    const visibleTimer = setTimeout(() => {
      setVisible(true);
    }, 100);

    // Phase 2: After logo+name have been shown for 2.5s, show loading bar
    // 100ms (fade-in delay) + 2500ms (display time) = 2600ms
    const loadingTimer = setTimeout(() => {
      setShowLoading(true);
    }, 2600);

    // Phase 3: Fade out after loading bar has shown for ~2s
    // 2600ms + 2000ms = 4600ms
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4600);

    // Remove from DOM 700ms after fade starts
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 5300);

    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(loadingTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Animate progress bar from 0% to 100% over ~1.8s when it appears
  useEffect(() => {
    if (showLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 3;
        });
      }, 55); // ~55ms * 34 steps ≈ 1.85s to fill
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
        className={`flex flex-col items-center transition-all duration-700 transform ${
          fadeOut
            ? "scale-110 opacity-0"
            : visible
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      >
        {/* Logo + Name revealed together */}
        <div className="relative overflow-hidden flex items-center justify-center">
          <img
            src="/preloader-logo.png"
            alt="Colortechnik Loading Logo"
            className="w-80 md:w-[450px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Minimalist glowing loading bar — slides in after 2.5s of logo+name display */}
        <div
          className={`w-48 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden relative transition-all duration-500 ease-out ${
            showLoading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-y-0 left-0 bg-[#ffdcbe] rounded-full shadow-[0_0_8px_#ffdcbe]"
            style={{
              width: `${progress}%`,
              transition: "width 55ms linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}


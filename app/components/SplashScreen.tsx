"use client";
 
import { useEffect, useState } from "react";
 
export default function SplashScreen() {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
 
  useEffect(() => {
    let count = 0;
 
    const interval = setInterval(() => {
      count++;
      setCounter(count);
 
      if (count >= 100) {
        clearInterval(interval);
        setTimeout(() => setVisible(false), 100); // fade out
      }
    }, 10); // 3 seconds
 
    return () => clearInterval(interval);
  }, []);
 
  if (!visible) return null;
 
  return (
    // <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center text-4xl font-bold z-[9999] transition-opacity duration-300">
    //   <div>Loading…</div>
    //   <div className="mt-4">{counter}%</div>
    // </div>
    <div className="fixed inset-0 bg-[#085E53] flex items-center justify-center z-[9999]">
  <div className="bg-[#F2F4F3] rounded-xl px-16 py-10 shadow-lg text-center">
    {/* Logo Section */}
    <img
      src="/assests/header/images/leapbridgesplach.png" // Replace with your actual logo path
      alt="Logo"
      className="w-64 mx-auto mb-4 rounded-lg"
    />

    {/* Company Name */}
    <h1 className="text-3xl font-semibold text-[#0A523E]">
      Leap <span className="text-[#1FA45B]">Bridge</span> Consulting
    </h1>

    {/* Percentage Progress */}
    <div className="mt-6 text-xl font-medium text-gray-700">
      {counter}% 
    </div>
  </div>
</div>

  );
}
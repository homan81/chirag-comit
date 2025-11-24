"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Carousel() {
  const totalSlides = 5;

  const [current, setCurrent] = useState(0);

  // Swipe refs
  const startX = useRef(0);
  const isDragging = useRef(false);

  const sliderRef = useRef(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  // Touch / Mouse Start
  const handleTouchStart = (e: any) => {
    isDragging.current = true;
    startX.current = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
  };

  // Touch / Mouse Move
  const handleTouchMove = (e: any) => {
    if (!isDragging.current) return;

    const moveX = e.type.includes("mouse")
      ? e.clientX - startX.current
      : e.touches[0].clientX - startX.current;

    if (moveX < -50) {
      nextSlide();
      isDragging.current = false;
    } else if (moveX > 50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  // Touch / Mouse End
  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-full border-md-[35px] border-[25px] border-[var(--lgreen)] select-none"
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Track */}
      <div
        className="flex transition-transform duration-700 [&_h3]:mb-3 [&_h3]:md:text-4xl [&_h3]:text-3xl [&_h3]:max-w-[250px] [&_h3]:font-semibold [&_p]:px-16 [&_p]:text-2xl"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* -------------------------------- SLIDE 1 -------------------------------- */}
        <div className="min-w-full relative">
          <Image
            src="/assests/header/images/herobanner/Large-mncs.jpg"
            className="object-cover"
            width={1000}
            height={1000}
            alt=""
          />

          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>GTM transformation</h3>
          </div>
        </div>

        {/* -------------------------------- SLIDE 2 -------------------------------- */}
        <div className="min-w-full relative">
          <Image
            src="/assests/header/images/herobanner/Small-mindmnc.jpg"
            className="object-cover"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>Network Efficiency</h3>
          </div>
        </div>

        {/* -------------------------------- SLIDE 3 -------------------------------- */}
        <div className="min-w-full relative">
          <Image
            src="/assests/header/images/herobanner/IndianMNCs.jpg"
            className="object-cover"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>Sales Processes</h3>
          </div>
        </div>

        {/* -------------------------------- SLIDE 4 -------------------------------- */}
        <div className="min-w-full relative">
          <Image
            src="/assests/header/images/herobanner/Familybussiness.jpg"
            className="object-cover"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>People Capability</h3>
          </div>
        </div>

        {/* -------------------------------- SLIDE 5 -------------------------------- */}
        <div className="min-w-full relative">
          <Image
            src="/assests/header/images/herobanner/Large-mncs.jpg"
            className="object-cover"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>Technology and data Analytics</h3>
          </div>
        </div>

        {/* -------------------------------- SLIDE 6 -------------------------------- */}
        {/* <div className="min-w-full relative">
          <Image
            src="/assests/header/images/herobanner/Pharma.jpg"
            className="object-cover"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>Pharma OTC</h3>
          </div>
        </div> */}
      </div>

      {/* ---------------------- DOTS ---------------------- */}
      <div className="absolute top-[45%] w-full md:flex hidden justify-center gap-2 translate-y-[50%]">
        {[0, 1, 2, 3, 4].map((index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-[var(--dgreen2)] w-[30px]" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

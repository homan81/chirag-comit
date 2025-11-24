"use client";
import { useState, useEffect, useRef } from "react";
import useInView from "@/app/hooks/useInView";

export default function Carousel() {
  const heading = useInView({ threshold: 0.2 });

  const totalSlides = 3;
  const [current, setCurrent] = useState(0);

  // Swipe / Drag
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

  // Touch / Mouse handlers
  const handleTouchStart = (e: any) => {
    isDragging.current = true;
    startX.current = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
  };

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

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      {/* Heading */}
      <div
        ref={heading.ref}
        className={`fade-up ${heading.isVisible ? "show" : ""} mb-8`}
      >
        <h2 className="text-white md:text-[60px] text-4xl font-semibold md:leading-22 leading-12">
          Purpose. Path. Principles.
        </h2>
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="max-w-[1024px] mx-auto overflow-hidden select-none"
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Wrapper */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >

          {/* ---------------------- SLIDE 1 ---------------------- */}
          <div className="min-w-full grid lg:grid-cols-2 grid-cols-1 gap-8 *:px-2 lg:items-stretch">

            <div>
              <div className="bg-[var(--lgreen3)] rounded-[30px] md:rounded-tl-[180px] rounded-tl-[100px] 
                md:p-12 px-5 py-8 pt-16 md:pe-14 flex flex-col justify-end h-full">
                
                <h3 className="md:text-[80px] text-6xl text-[var(--dgreen)]">Vision</h3>
                <div className="bg-[var(--dgreen)] h-[1px] w-full mb-5"></div>

                <p className="text-lg">
                  To be the most trusted partner for consumer brands seeking
                  sustainable, profitable and scalable growth — by transforming
                  sales systems, strengthening execution, and unlocking marketplace impact.
                </p>

                <div className="mt-5 flex gap-2">
                  <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                  <span className="h-[32px] w-[55px] bg-[var(--dgreen)] rounded-full block"></span>
                  <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                </div>
              </div>
            </div>

            <div className="lg:block hidden border border-[#8D8D8D] 
              bg-[url('/assests/header/images/vision.jpg')] bg-cover bg-no-repeat bg-center 
              rounded-[30px] rounded-br-[180px]">
            </div>
          </div>

          {/* ---------------------- SLIDE 2 ---------------------- */}
          <div className="min-w-full grid lg:grid-cols-2 grid-cols-1 gap-8 *:px-2 lg:items-stretch">

            <div>
              <div className="bg-[var(--lgreen3)] rounded-[30px] md:rounded-tl-[180px] rounded-tl-[100px] 
                md:p-12 px-5 py-8 pt-16 md:pe-14 flex flex-col justify-end h-full">
                
                <h3 className="md:text-[80px] text-6xl text-[var(--dgreen)]">Mission</h3>
                <div className="bg-[var(--dgreen)] h-[1px] w-full mb-5"></div>

                <p className="text-lg">
                  To help consumer brands achieve profitable growth by designing
                  winning GTM strategies, strengthening network efficiency,
                  enabling disciplined execution, and building capable,
                  future-ready teams.
                </p>

                <div className="mt-5 flex gap-2">
                  <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                  <span className="h-[32px] w-[55px] bg-[var(--dgreen)] rounded-full block"></span>
                  <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                </div>
              </div>
            </div>

            <div className="lg:block hidden border border-[#8D8D8D] 
              bg-[url('/assests/header/images/mission.jpg')] bg-cover bg-no-repeat bg-center 
              rounded-[30px] rounded-br-[180px]">
            </div>
          </div>

          {/* ---------------------- SLIDE 3 ---------------------- */}
          <div className="min-w-full grid lg:grid-cols-2 grid-cols-1 gap-8 *:px-2 lg:items-stretch">

            <div>
              <div className="bg-[var(--lgreen3)] rounded-[30px] md:rounded-tl-[180px] rounded-tl-[100px] 
                md:p-12 px-5 py-8 pt-16 md:pe-14 flex flex-col justify-end h-full">

                <h3 className="md:text-[80px] text-6xl text-[var(--dgreen)]">Values</h3>
                <div className="bg-[var(--dgreen)] h-[1px] w-full mb-5"></div>

                <p className="text-lg">
                  <strong>-</strong> Impact Over Activity <br />
                  <strong>-</strong> Partnership, Not Consultancy <br />
                  <strong>-</strong> Excellence in Execution <br />
                  <strong>-</strong> Simplicity Wins <br />
                  <strong>-</strong> Integrity & Unbiased Thinking <br />
                  <strong>-</strong> People at the Core <br />
                  <strong>-</strong> Continuous Improvement
                </p>

                <div className="mt-5 flex gap-2">
                  <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                  <span className="h-[32px] w-[55px] bg-[var(--dgreen)] rounded-full block"></span>
                  <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                </div>
              </div>
            </div>

            <div className="lg:block hidden border border-[#8D8D8D] 
              bg-[url('/assests/header/images/values.jpg')] bg-cover bg-no-repeat bg-center 
              rounded-[30px] rounded-br-[180px]">
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-8 justify-center">
        <button
          onClick={prevSlide}
          className="lg:absolute top-[100px] right-[100px] text-3xl bg-white border border-[var(--dgreen)] hover:border-white p-2 rounded-full hover:bg-[var(--dgreen)] text-[var(--dgreen)] hover:text-white transition lg:mt-0 mt-8"
        >
          <i className="fa fa-angle-left"></i>
        </button>

        <button
          onClick={nextSlide}
          className="lg:absolute top-[100px] right-[30px] text-3xl bg-white border border-[var(--dgreen)] hover:border-white p-2 rounded-full hover:bg-[var(--dgreen)] text-[var(--dgreen)] hover:text-white transition lg:mt-0 mt-8"
        >
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

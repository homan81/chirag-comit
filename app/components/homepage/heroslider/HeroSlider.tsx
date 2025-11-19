"use client";
import { useState, useEffect } from "react";

export default function Carousel() {
  const totalSlides = 6; // You have 5 slides

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-full border-[35px] border-[var(--lgreen)]">
      {/* Slider Track */}
      <div
        className="flex transition-transform duration-700  [&_h3]:mb-3 [&_h3]:text-4xl [&_h3]:font-semibold [&_p]:px-16 [&_p]:text-2xl "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* Slide 1 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide1.jpg"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>Large MNCs</h3>
            <p>
             Global scale, structured systems, and complex decision networks.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide2.png"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>Small & Mid MNCs</h3>
            <p>
              Agile setups balancing global best practices with local agility.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide3.png"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>
              Indian MNCs
            </h3>
            <p>
              Indian agility fused with international scale and ambition.
            </p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide2.png"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>Family run bussiness</h3>
            <p>
              Legacy enterprises evolving toward process & governance maturity.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide3.png"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>
              PE-Backed Firms
            </h3>
            <p>
              Outcome-driven, milestone-led transformation mandates
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide3.png"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3>
              Pharma OTC
            </h3>
            <p>
              Transitioning from prescription-led to consumer-centric business models.

            </p>
          </div>
        </div>
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ▶
      </button> */}

      {/* Dots */}
      <div className="absolute top-[45%] w-full flex justify-center gap-2  translate-y-[50%]">
        {[0, 1, 2, 3, 4, 5].map((index) => (
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

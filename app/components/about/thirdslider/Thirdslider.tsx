"use client";
import { useState } from "react";
// import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Carousel() {
  const heading = useInView({ threshold: 0.2 });
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? 2 : prev - 1));

  // ✅ Auto Slide Effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 4000); // Change slide every 4 seconds

  //   return () => clearInterval(interval); // cleanup
  // }, [current]); // or use [] to make it constant interval

  return (
    <div className="w-full mx-auto overflow-hidden">
      <div
        ref={heading.ref}
        className={`fade-up ${heading.isVisible ? "show" : ""} mb-8`}
      >
        <h2 className="text-white text-[60px] leading-22">
          Purpose. Path. Principles.
        </h2>
      </div>
      <div className=" max-w-[1024px] mx-auto overflow-hidden">
        <div
        className="flex transition-transform duration-700 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        <div className="min-w-full  relative grid lg:grid-cols-2 grid-cols-1 gap-8 lg:items-stretch *:px-2">
          <div className="">
            <div className="bg-[var(--lgreen3)] rounded-[30px] rounded-tl-[180px] p-12 pt-16  pe-14 flex flex-col justify-end h-full">
              <h3 className="text-[80px] text-[var(--dgreen)] ">Vision</h3>
              <div className="bg-[var(--dgreen)] h-[1px] w-full mb-5"></div>
              <p className="text-lg">
                To be the most trusted partner for consumer brands seeking sustainable, profitable and scalable growth — by transforming sales systems, strengthening execution, and unlocking marketplace impact.
              </p>

              <div className="mt-5 flex gap-2">
                <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                <span className="h-[32px] w-[55px] bg-[var(--dgreen)] rounded-full block"></span>
                <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
              </div>
            </div>
          </div>

          <div className="lg:block hidden border border-[#8D8D8D] bg-[url('/assests/header/images/vision.jpg')] bg-cover bg-no-repeat bg-center rounded-[30px] rounded-br-[180px] "></div>
        </div>
        <div className="min-w-full relative grid lg:grid-cols-2 grid-cols-1 gap-8 lg:items-stretch *:px-2">
          <div className="">
            <div className="bg-[var(--lgreen3)] rounded-[30px] rounded-tl-[180px]  p-12 pt-16  pe-14 flex flex-col justify-end h-full">
              <h3 className="text-[80px] text-[var(--dgreen)] ">Mission</h3>
              <div className="bg-[var(--dgreen)] h-[1px] w-full mb-5"></div>
              <p className="text-lg">
                To help consumer brands achieve profitable growth by designing winning GTM strategies, strengthening network efficiency, enabling disciplined execution, and building capable, future-ready teams.
              </p>

              <div className="mt-5 flex gap-2">
                <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
                <span className="h-[32px] w-[55px] bg-[var(--dgreen)] rounded-full block"></span>
                <span className="h-[32px] w-[32px] bg-[#7BBD93] rounded-full block"></span>
              </div>
            </div>
          </div>

          <div className="lg:block hidden border border-[#8D8D8D] bg-[url('/assests/header/images/mission.jpg')] bg-cover bg-no-repeat bg-center rounded-[30px] rounded-br-[180px] "></div>
        </div>
        <div className="min-w-full relative grid lg:grid-cols-2 grid-cols-1 gap-8 lg:items-stretch *:px-2">
          <div className="">
            <div className="bg-[var(--lgreen3)] rounded-[30px] rounded-tl-[180px]  p-12 pt-16 pe-14  flex flex-col justify-end h-full">
              <h3 className="text-[80px] text-[var(--dgreen)] ">Values</h3>
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
          <div className="lg:block hidden border border-[#8D8D8D] bg-[url('/assests/header/images/values.jpg')] bg-cover  bg-no-repeat bg-center rounded-[30px] rounded-br-[180px] "></div>
        </div>
      </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-8 justify-center">
        <button
          onClick={prevSlide}
          className="lg:absolute top-[100px] right-[100px] md:-translate-y-1/2 text-3xl bg-white border border-[var(--dgreen)] hover:border-white p-2 rounded-full hover:bg-[var(--dgreen)] text-[var(--dgreen)] hover:text-white transition lg:mt-0 mt-8"
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>

        <button
          onClick={nextSlide}
          className="lg:absolute top-[100px] right-[30px] md:-translate-y-1/2 text-3xl bg-white border border-[var(--dgreen)] hover:border-white p-2 rounded-full hover:bg-[var(--dgreen)] text-[var(--dgreen)] hover:text-white transition lg:mt-0 mt-8"
        >
          <i className="fa fa-angle-right " aria-hidden="true"></i>
        </button>
      </div>

      {/* Dots */}
      {/* <div className="absolute top-[45%] w-full flex justify-center gap-2  translate-y-[50%]">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
}

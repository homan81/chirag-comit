"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Carousel() {
  const router = useRouter();

  const totalSlides = 4; // You have 5 slides

  const [current, setCurrent] = useState(0);
  const startX = useRef(0); // To track the starting touch position
  const isDragging = useRef(false); // To track the drag state
  const carouselRef = useRef(null); // To reference the carousel container

  // Function to move to the next slide
  const nextSlide = () =>
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  // Function to move to the previous slide
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  // Swipe logic to handle dragging/swiping
  const handleTouchStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.type.includes("mouse")
      ? (e as React.MouseEvent).clientX
      : (e as React.TouchEvent).touches[0].clientX;
  };
  const handleTouchMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;

    const moveX = e.type.includes("mouse")
      ? (e as React.MouseEvent).clientX - startX.current
      : (e as React.TouchEvent).touches[0].clientX - startX.current;

    if (moveX < -50) {
      nextSlide(); // Swipe left
      isDragging.current = false; // Disable dragging until the next swipe
    } else if (moveX > 50) {
      prevSlide(); // Swipe right
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      className="relative w-full container md:px-5 mx-auto overflow-hidden"
      ref={carouselRef}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden ">
        <div
          className="flex transition-transform duration-700 "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          <div className="min-w-full relative flex items-center">
            <div>
              <div className="flex gap-5 items-center w-fit mx-auto mb-5 cursor-default">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src="/assests/testimonials/Harsh-testi.jpg"
                    className="w-[70px]"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[var(--dgreen)] text-xl font-medium">
                    Harsh Agarwal
                  </h3>
                  <p className="text-[var(--dgreen2)] text-lg">
                    Vice Chairman & MD Emami Ltd.
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="text-[var(--dgreen2)] mb-3 px-[50px]">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="relative md:px-[50px] px-[20px] pb-[25px]">
                    <Image
                      src="/assests/testimonials/colon-start.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute -top-[25px] left-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                    <p className="text-center text-xl text-[#252525] cursor-default">
                      Vinod shows a clear strategic outlook, combining long-term
                      planning with practical execution. He uses data and
                      analytics thoughtfully to guide decisions, improve
                      performance, and identify new opportunities for growth. He
                      has driven many initiatives for the organisation which are
                      both expansions led as well as efficiency led. His strong
                      execution focus ensures that strategies are translated
                      into measurable business impact and sustained progress.
                    </p>
                    <Image
                      src="/assests/testimonials/colon-end.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute bottom-0 right-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full relative flex items-center">
            <div>
              <div className="flex gap-5 items-center w-fit mx-auto mb-5 cursor-default">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src="/assests/testimonials/Mohan-testi.jpg"
                    className="w-[70px]"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[var(--dgreen)] text-xl font-medium">
                    Mohan Goenka
                  </h3>
                  <p className="text-[var(--dgreen2)] text-lg">
                    Vice Chairman & Whole Time Director Emami Ltd.
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="text-[var(--dgreen2)] mb-3 px-[50px]">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="relative md:px-[50px] px-[20px] pb-[25px]">
                    <Image
                      src="/assests/testimonials/colon-start.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute -top-[25px] left-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                    <p className="text-center text-xl text-[#252525] cursor-default">
                      Vinod has been a key leader in driving our Go-to-Market
                      (GTM) transformation journey. Over the past few years, he
                      has shaped and executed a well-defined roadmap that has
                      successfully aligned our growth ambitions with operational
                      excellence. His ability to leverage data, technology, and
                      analytics has been instrumental in developing models that
                      provide actionable insights—helping us identify upsell and
                      cross-sell opportunities, enhance revenue productivity,...
                    </p>
                    <Image
                      src="/assests/testimonials/colon-end.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute bottom-0 right-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full relative flex items-center">
            <div>
              <div className="flex gap-5 items-center w-fit mx-auto mb-5 cursor-default">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src="/assests/testimonials/Vivek-testi.jpg"
                    className="w-[70px]"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[var(--dgreen)] text-xl font-medium">
                    Vivek Gambhir
                  </h3>
                  <p className="text-[var(--dgreen2)] text-lg">
                    Venture Partner – Lightspeed India.
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="text-[var(--dgreen2)] mb-3 px-[50px]">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="relative md:px-[50px] px-[20px] pb-[25px]">
                    <Image
                      src="/assests/testimonials/colon-start.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute -top-[25px] left-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                    <p className="text-center text-xl text-[#252525] cursor-default">
                      Jatin Panchal brings a rare blend of strategic foresight
                      and on-ground precision to the world of sales and
                      distribution. At Godrej Consumer Products, he helped shape
                      sales strategy, strengthen digital execution, and unlock
                      new levels of channel performance across GT and MT. What
                      distinguishes him is his ability to simplify complexity —
                      connecting strategic vision with market reality. Deeply
                      collaborative and grounded, Jatin works as a true partner,
                      building trust, energising teams, ...
                    </p>
                    <Image
                      src="/assests/testimonials/colon-end.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute bottom-0 right-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full relative flex items-center">
            <div>
              <div className="flex gap-5 items-center w-fit mx-auto mb-5 cursor-default">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src="/assests/testimonials/Sunil-testi.jpg"
                    className="w-[70px]"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[var(--dgreen)] text-xl font-medium">
                    Sunil Kataria
                  </h3>
                  <p className="text-[var(--dgreen2)] text-lg">
                    CEO &MD - Godrej Agrovet Limited
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="text-[var(--dgreen2)] mb-3 px-[50px]">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="relative md:px-[50px] px-[20px] pb-[25px]">
                    <Image
                      src="/assests/testimonials/colon-start.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute -top-[25px] left-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                    <p className="text-center text-xl text-[#252525] cursor-default">
                      During our time together at GCPL, I had the opportunity to
                      see Jatin’s remarkable professional journey — from a
                      mid-level manager to a key leader driving several
                      high-impact initiatives for the business. He consistently
                      demonstrated the ability to translate strategic thinking
                      into grounded execution that delivered measurable results.
                      Jatin played a pivotal role in redesigning our
                      Go-To-Market architecture, ...
                    </p>
                    <Image
                      src="/assests/testimonials/colon-end.svg"
                      className="w-5 h-5 md:w-10 md:h-10 absolute bottom-0 right-0 "
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
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
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full flex justify-start gap-2 ">
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full border-2 border-[var(--dgreen)] cursor-pointer transition ${
                current === index
                  ? "bg-[var(--dgreen)]  w-[50px]"
                  : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="w-full mt-10 flex justify-center">
        <button
          onClick={() => router.push("/testimonials")}
          className="px-6 py-3 bg-[var(--dgreen)] text-white text-lg rounded-lg hover:bg-[var(--dgreen2)] transition"
        >
          View All Testimonials
        </button>
      </div>
    </div>
  );
}

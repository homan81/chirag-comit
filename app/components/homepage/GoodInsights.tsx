"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

const GoodInsights = () => {
  const heading = useInView({ threshold: 0.2 });
  const subheading = useInView({ threshold: 0.2 });

  const card1 = useInView({ threshold: 0.2 });
  const card2 = useInView({ threshold: 0.2 });
  const card3 = useInView({ threshold: 0.2 });
  const card4 = useInView({ threshold: 0.2 });
  const card5 = useInView({ threshold: 0.2 });
  const card6 = useInView({ threshold: 0.2 });

  return (
    <div className="py-16 bg-[#ECF6F2]">
      <div className="container mx-auto px-4 sm:px-5">
        <h2
          ref={heading.ref}
          className={`fade-up ${
            heading.isVisible ? "show" : ""
          } text-5xl font-semibold text-[#1B3233] mb-4 text-center`}
        >
          Testimonials
        </h2>

        <p
          ref={subheading.ref}
          className={`fade-up ${
            subheading.isVisible ? "show" : ""
          } text-[#1B3233] mb-10 text-xl text-center max-w-xl mx-auto`}
        >
          Discover how our collaboration has enabled brands to accelerate
          performance and scale with confidence
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 *:sm:max-w-lg *:xl:max-w-none gap-6  mb-12">
          {/* Card 1 */}
          <article
            ref={card6.ref}
            className={`fade-up ${
              card6.isVisible ? "show" : ""
            }  mx-auto`}
          >
            <div className="p-2  h-full transition-all duration-300 ease-in-out bg-[#daebe3] hover:bg-[#aac5b4] hover:shadow-lg rounded-xl">
              <div className="relative grid grid-cols-[35%_65%] h-full">
                <Image
                  src="/assests/header/images/goodinsights/Mohan-Goenka.png"
                  alt="Mohan Goenka"
                  width={700}
                  height={700}
                  className="object-cover w-full rounded-tl-[10px] rounded-bl-[10px] h-full"
                />
                <div className="h-auto ps-3">
                  <h3 className="text-xl font-semibold text-[var(--dgreen)] mb-1">
                    Mohan Goenka
                  </h3>
                  <p className="text-[15px] text-[var(--dgreen)] mb-[7px]">
                    Vice Chairman & Whole Time Director ~{" "}
                    <span className="font-semibold"> Emami Ltd.</span>
                  </p>
                  <p className="text-[var(--dgreen)] text-[16px] pe-2 mb-[25px]">
                    “Through his data-driven thinking, strong execution and
                    balanced focus on sustainable growth, Vinod has built a
                    solid foundation”
                  </p>
                </div>
                <a href="#" className="absolute right-0 bottom-0">
                  <Image
                    src="/assests/header/images/goodinsights/plus_circle.png"
                    alt="More"
                    width={23}
                    height={23}
                  />
                </a>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article
            ref={card6.ref}
            className={`fade-up ${
              card6.isVisible ? "show" : ""
            }  mx-auto`}
          >
            <div className="p-2  h-full transition-all duration-300 ease-in-out bg-[#daebe3] hover:bg-[#aac5b4] hover:shadow-lg rounded-xl">
              <div className="relative grid grid-cols-[35%_65%] h-full">
                <Image
                  src="/assests/header/images/goodinsights/Sanjay-Purohit.png"
                  alt="Sanjay Purohit"
                  width={700}
                  height={700}
                  className="object-cover w-full rounded-tl-[10px] rounded-bl-[10px] h-full"
                />
                <div className="h-auto ps-3">
                  <h3 className="text-xl font-semibold text-[var(--dgreen)] mb-1">
                    Sanjay Purohit
                  </h3>
                  <p className="text-[15px] text-[var(--dgreen)] mb-[7px]">
                    Whole Time Director and Group CEO ~{" "}
                    <span className="font-semibold"> Sapphire Foods.</span>
                  </p>
                  <p className="text-[var(--dgreen)] text-[16px] pe-2 mb-[25px]">
                    “Vinod combines data-driven insight with clear business
                    judgment, translating strategy into results with speed and
                    precision…..”
                  </p>
                </div>
                <a href="#" className="absolute right-0 bottom-0">
                  <Image
                    src="/assests/header/images/goodinsights/plus_circle.png"
                    alt="More"
                    width={23}
                    height={23}
                  />
                </a>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article
            ref={card6.ref}
            className={`fade-up ${
              card6.isVisible ? "show" : ""
            }  mx-auto`}
          >
            <div className="p-2  h-full transition-all duration-300 ease-in-out bg-[#daebe3] hover:bg-[#aac5b4] hover:shadow-lg rounded-xl">
              <div className="relative grid grid-cols-[35%_65%] h-full">
                <Image
                  src="/assests/header/images/goodinsights/Sunil-Kataria.png"
                  alt="Sunil Kataria"
                  width={700}
                  height={700}
                  className="object-cover w-full rounded-tl-[10px] rounded-bl-[10px] h-full"
                />
                <div className="h-auto ps-3">
                  <h3 className="text-xl font-semibold text-[var(--dgreen)] mb-1">
                    Sunil Kataria
                  </h3>
                  <p className="text-[15px] text-[var(--dgreen)] mb-[7px]">
                    CEO &MD ~{" "}
                    <span className="font-semibold"> Godrej Agrovet Ltd.</span>
                  </p>
                  <p className="text-[var(--dgreen)] text-[16px] pe-2 mb-[25px]">
                    “What stands out most about Jatin is his ability to balance
                    strategy with pragmatism, to think long- term while
                    executing with precision”
                  </p>
                </div>
                <a href="#" className="absolute right-0 bottom-0">
                  <Image
                    src="/assests/header/images/goodinsights/plus_circle.png"
                    alt="More"
                    width={23}
                    height={23}
                  />
                </a>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article
            ref={card6.ref}
            className={`fade-up ${
              card6.isVisible ? "show" : ""
            }  mx-auto`}
          >
            <div className="p-2  h-full transition-all duration-300 ease-in-out bg-[#daebe3] hover:bg-[#aac5b4] hover:shadow-lg rounded-xl">
              <div className="relative grid grid-cols-[35%_65%] h-full">
                <Image
                  src="/assests/header/images/goodinsights/Praveen-Jakate.png"
                  alt="Praveen Jakate"
                  width={700}
                  height={700}
                  className="object-cover w-full rounded-tl-[10px] rounded-bl-[10px] h-full"
                />
                <div className="h-auto ps-3">
                  <h3 className="text-xl font-semibold text-[var(--dgreen)] mb-1">
                    Praveen Jakate
                  </h3>
                  <p className="text-[15px] text-[var(--dgreen)] mb-[7px]">
                    Ex Chairman and Managing Director ~{" "}
                    <span className="font-semibold">
                      {" "}
                      South Asia Hershey India Pvt Ltd.
                    </span>
                  </p>
                  <p className="text-[var(--dgreen)] text-[16px] pe-2 mb-[25px]">
                    “He played a key role in turning around the Hershey India
                    business.”
                  </p>
                </div>
                <a href="#" className="absolute right-0 bottom-0">
                  <Image
                    src="/assests/header/images/goodinsights/plus_circle.png"
                    alt="More"
                    width={23}
                    height={23}
                  />
                </a>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article
            ref={card6.ref}
            className={`fade-up ${
              card6.isVisible ? "show" : ""
            }  mx-auto`}
          >
            <div className="p-2  h-full transition-all duration-300 ease-in-out bg-[#daebe3] hover:bg-[#aac5b4] hover:shadow-lg rounded-xl">
              <div className="relative grid grid-cols-[35%_65%] h-full">
                <Image
                  src="/assests/header/images/goodinsights/Neil-George.png"
                  alt="Neil George"
                  width={700}
                  height={700}
                  className="object-cover w-full rounded-tl-[10px] rounded-bl-[10px] h-full"
                />
                <div className="h-auto ps-3">
                  <h3 className="text-xl font-semibold text-[var(--dgreen)] mb-1">
                    Neil George
                  </h3>
                  <p className="text-[15px] text-[var(--dgreen)] mb-[7px]">
                    Ex MD ~{" "}
                    <span className="font-semibold">
                      {" "}
                      Abbott Nutrition India Ltd.
                    </span>
                  </p>
                  <p className="text-[var(--dgreen)] text-[16px] pe-2 mb-[25px]">
                    “Jatin is the person you want to have on your team when you
                    want to grow your brand in India.”
                  </p>
                </div>
                <a href="#" className="absolute right-0 bottom-0">
                  <Image
                    src="/assests/header/images/goodinsights/plus_circle.png"
                    alt="More"
                    width={23}
                    height={23}
                  />
                </a>
              </div>
            </div>
          </article>

          {/* Card 6 */}
          <article
            ref={card6.ref}
            className={`fade-up ${
              card6.isVisible ? "show" : ""
            }  mx-auto`}
          >
            <div className="p-2  h-full transition-all duration-300 ease-in-out bg-[#daebe3] hover:bg-[#aac5b4] hover:shadow-lg rounded-xl">
              <div className="relative grid grid-cols-[35%_65%] h-full">
                <Image
                  src="/assests/header/images/goodinsights/Bill-Brothers.png"
                  alt="Bill Brothers"
                  width={700}
                  height={700}
                  className="object-cover w-full rounded-tl-[10px] rounded-bl-[10px] h-full"
                />
                <div className="h-auto ps-3">
                  <h3 className="text-xl font-semibold text-[var(--dgreen)] mb-1">
                    Bill Brothers
                  </h3>
                  <p className="text-[15px] text-[var(--dgreen)] mb-[7px]">
                    Ex Director Global Sales Development (Retired) ~{" "}
                    <span className="font-semibold"> The Hershey Company</span>
                  </p>
                  <p className="text-[var(--dgreen)] text-[16px] pe-2 mb-[25px]">
                    “Vinod knows the diversity of the Indian markets very well
                    and sets plans and resources accordingly.”
                  </p>
                </div>
                <a href="#" className="absolute right-0 bottom-0">
                  <Image
                    src="/assests/header/images/goodinsights/plus_circle.png"
                    alt="More"
                    width={23}
                    height={23}
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
        <div className="text-center">
          <Link
            href="/"
            className="bg-[#1B3233] text-[#ECF6F2] text-[20px] px-5 py-2 rounded-[40px] transition-all ease-in-out hover:opacity-90"
          >
            Read All Testimonails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoodInsights;

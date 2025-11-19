"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function ClientList() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <>
      <div className="bg-[var(--lgreen2)]">
        <div className=" w-full container mx-auto py-15 px-5">
        <h2
          ref={ref}
          className={`fade-up ${
            isVisible ? "show" : ""
          } text-4xl font-semibold text-[var(--dgreen)] text-center mb-[30px]`}
        >
          Exposure Across Iconic Brands
        </h2>
        <div
          ref={ref}
          className={`fade-up ${
            isVisible ? "show" : ""
          } flex flex-wrap  justify-between w-full  *:lg:px-12 *:md:px-10 *:sm:px-8 *:px-6 *:py-5 *:w-1/2 *:lg:w-1/6 *:md:w-1/4`}
        >
          <Image
            src="/assests/header/logoimage/abbot.png"
            alt="Logo 1"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/Cipla_logo.png"
            alt="Logo 2"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/DANONE_LOGO_HORIZONTAL.png"
            alt="Logo 3"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/emami.png"
            alt="Logo 4"
            width={100}
            height={60}
            className="h-auto object-contain lg:!px-14 md:!px-12  sm:!px-10"
          />
          <Image
            src="/assests/header/logoimage/godrej.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/hershey_company-logo_brandlogos.net_pcliv.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />

          <Image
            src="/assests/header/logoimage/mondelez-international-logo.png"
            alt="Logo 1"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/Marico_Logo.png"
            alt="Logo 2"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/nobel-hygine.png"
            alt="Logo 3"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/P&G-Logo.png"
            alt="Logo 4"
            width={100}
            height={60}
            className="h-auto object-contain   lg:!px-15 md:!px-13  sm:!px-11"
          />
          <Image
            src="/assests/header/logoimage/parle-Agro.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain  lg:!px-15 md:!px-13  sm:!px-11"
          />
          <Image
            src="/assests/header/logoimage/Reckitt-Benckiser-logo.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
        </div>
      </div>
      </div>
    </>
  );
}

"use client";

import React from "react";
// import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Banner() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
         <div className="bg-[url('/assests/header/images/aboutbanner.jpg')] bg-fixed bg-cover bg-no-repeat bg-center min-h-[635px] flex items-end">
          <div className="container mx-auto px-5 py-10">
            <div
              ref={heading.ref}
              className={`fade-up ${
                heading.isVisible ? "show" : ""
              } max-w-[700px] w-fit p-8 bg-[#1b323345] backdrop-blur-[8px] border border-[#C8C8C8] rounded-[20px]`}
            >
              <h1 className="text-white sm:text-start text-center lg:text-[50px] md:text-5xl sm:text-4xl text-3xl lg:leading-14 md:leading-10 sm:leading-8 leading-12">
                Trusted by Customers Everywhere
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import React from "react";
// import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Parallax() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[url('/assests/header/images/about-parallax.png')] bg-fixed bg-cover bg-no-repeat bg-center min-h-[80vh] flex items-center">
          <div className="w-full">
            <div
              ref={heading.ref}
              className={`fade-up ${
                heading.isVisible ? "show" : ""
              } w-[50%] py-12 px-6 bg-white/20 backdrop-blur-sm  rounded-tr-[20px] rounded-br-[20px] `}
            >
              <h1 className="text-white 2xl:max-w-[700px] xl:max-w-[600px] lg:max-w-[470px] w-fit ms-auto sm:text-start text-center xl:text-[50px] md-[40px] text-3xl xl:leading-18 md:leading-10 sm:leading-16 leading-12">
                <strong className="font-bold">Design the Strategy. </strong>
                 Drive the Outcome.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

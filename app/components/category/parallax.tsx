"use client";

import React from "react";
// import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Parallax() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[url('/assests/header/images/category-parlalax.webp')] bg-fixed bg-cover bg-no-repeat bg-center min-h-[90vh] flex items-center">
          <div className="w-full">
            <div
              ref={heading.ref}
              className={`fade-up ${
                heading.isVisible ? "show" : ""
              } w-[65%] py-12 px-6 bg-white/20 backdrop-blur-sm  rounded-tr-[20px] rounded-br-[20px] `}
            >
              <h1 className="text-white 2xl:max-w-[900px] xl:max-w-[800px] lg:max-w-[670px] w-fit ms-auto sm:text-start text-center xl:text-[50px] md-[40px] text-3xl xl:leading-15 md:leading-7 sm:leading-13 leading-9">
                <strong className="font-bold">Transforming Consumer Businesses </strong>
                 Across Categories and Channels.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

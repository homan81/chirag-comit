"use client";

import React from "react";
// import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Banner() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[var(--dgreen)]">
          <div className="container mx-auto px-5 py-10">
            <div
              ref={heading.ref}
              className={`fade-up ${heading.isVisible ? "show" : ""
                } `}
            >
              <h1 className="text-[var(--lgreen)] text-center  md:text-8xl text-5xl lg:leading-22 md:leading-18 sm:leading-16 leading-12 md:mt-20 mt-5 mb-45">
                Let&apos;s Talk
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

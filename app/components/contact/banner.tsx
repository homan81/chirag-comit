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
              <h1 className="text-[var(--lgreen)] text-center  md:text-8xl sm:text-4xl text-3xl lg:leading-22 md:leading-18 sm:leading-16 leading-12 mt-20 mb-45">
                Let&apos;s Talk
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

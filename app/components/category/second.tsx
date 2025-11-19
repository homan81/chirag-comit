"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Second() {
  const heading1 = useInView({ threshold: 0.2 });
  const image = useInView({ threshold: 0.6 });
  const heading2 = useInView({ threshold: 0.9 });
  return (
    <>
      <section>
        <div className="bg-[var(--lgreen2)]">
          <div className="mx-auto lg:max-w-[1150px] container px-5 py-10">
            <div
              ref={heading1.ref}
              className={`fade-up ${
                heading1.isVisible ? "show" : ""
              } max-w-[500px] w-fit`}
            >
              <p className="text-[var(--dgreen)] text-3xl font-normal">
                Empowering growth across consumer categories
              </p>
            </div>

            <div className="md:flex items-stretch w-full gap-5">
              <div
                ref={image.ref}
                className={`fade-up ${image.isVisible ? "show" : ""}  w-full`}
                >
                <Image
                  src="assests/header/images/category-border.svg"
                  className="w-[270px] ms-auto mb-10"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div
                ref={heading2.ref}
                className={`fade-up ${
                  heading2.isVisible ? "show" : ""
                } w-full flex items-end`}
              >
                <p className="text-[var(--dgreen)] text-3xl font-thin">
                  We shape go-to-market excellence across India’s consumer ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

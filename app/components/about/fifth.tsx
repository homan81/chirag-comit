"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";
import Link from "next/link";

export default function Fifth() {
  const heading = useInView({ threshold: 0.2 });

  return (
    <>
      <section>
        <div className="bg-[#d9e6dc]">
          <div className="container mx-auto px-5 py-15">
            <div className="md:flex items-center gap-16 *:w-1/2">
              <div>
                <div className="h-full flex flex-col justify-center md:pr-12">
                  <h2
                    ref={heading.ref}
                    className={`fade-up ${
                      heading.isVisible ? "show" : ""
                    } text-[60px] lg:mb-12 mb-5 text-[var(--dgreen)] leading-18`}
                  >
                    Our Approach to <strong>Create Value</strong>
                  </h2>

                  <p
                    ref={heading.ref}
                    className={`fade-up ${
                      heading.isVisible ? "show" : ""
                    } text-xl text-[var(--dgreen)] font-medium`}
                  >
                    We operate on a fractional leadership and project-based
                    model, enabling clients to access senior industry expertise
                    without long-term overheads.
                    <br />
                    <br />
                    At LeapBridge, we believe in bridging the gap between
                    Organisation Strategy &amp; On ground Execution. Our
                    approach blends data-backed analytics with field-tested
                    pragmatism, ensuring every recommendation can be executed
                    and sustained on ground.
                  </p>

                  {/* <Link
                    href="/"
                    className="text-[23px] text-white lg:mt-12 mt-6 bg-[var(--dgreen)] w-fit px-16 py-2 rounded-full transition ease-in-out hover:opacity-90"
                  >
                    Let&apos;s talk
                  </Link> */}
                </div>
              </div>

              <div className="lg:p-22 p-12">
                <Image
                  src="/assests/about/create-value.png"
                  className="w-full h-auto object-contain block"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

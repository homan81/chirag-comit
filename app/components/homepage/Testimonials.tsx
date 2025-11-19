"use client";

import React from "react";
import Image from "next/image";
// import useInView from "@/app/hooks/useInView";
import Testimonialslider from "./testimonials/testimonials";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="px-5  py-15 bg-white">
          <div className="container mx-auto text-[var(--dgreen)]">
            <div className="text-[var(--dgreen)] text-center mb-10">
              <h2 className="text-4xl font-semibold mb-2">Testimonials</h2>
              <p className="text-xl max-w-[550px] mx-auto">Discover how our collaboration has enabled brands to accelerate performance and scale with confidence</p>
            </div>


            <Testimonialslider />
          </div>
        </div>
      </section>
    </>
  );
}

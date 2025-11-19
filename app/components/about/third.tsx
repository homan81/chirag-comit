"use client";

import React from "react";
// import Image from "next/image";
// import useInView from "@/app/hooks/useInView";
import Thirdslider from "./thirdslider/Thirdslider";

export default function Third() {
  // const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[var(--dgreen)]">
          <div className="max-w-[1350px] mx-auto px-5 py-12 pb-18 overflow-hidden relative">
            <Thirdslider />
          </div>
        </div>
      </section>
    </>
  );
}

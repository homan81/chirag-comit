"use client";

import React from "react";
// import Image from "next/image";
// import useInView from "@/app/hooks/useInView";
import Accordion from "./accordion";

export default function Third() {
  // const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[var(--lgreen3)]">
          <div className="max-w-[1350px] mx-auto px-5 py-12 pb-18 overflow-hidden relative">
            <h2 className="text-[40px] text-[var(--dgreen)] text-center mb-6">Some questions, some answers</h2>
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
}

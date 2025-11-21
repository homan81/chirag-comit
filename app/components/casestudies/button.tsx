"use client";

import React from "react";
// import Image from "next/image";

export default function Button() {
  return (
    <>
      <section className="mb-3">
        <div className="text-center">
            <button
              className="top bg-[var(--dgreen2)] py-2.5 px-5 rounded-[14px] text-white text-[20px] "
              onClick={() => {
                document.getElementById("topcasestudies")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              view case studies
            </button>
          </div>
      </section>
    </>
  );
}

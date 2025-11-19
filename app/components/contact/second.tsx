"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";
import ContactForm from "../homepage/ContactForm";

export default function Second() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[var(--lgreen2)]">
          <div className="container mx-auto px-5 py-12">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 -mt-[200px] mb-[70px] *:p-10 *:bg-[var(--lgreen3)] *:text-[20px] *:rounded-[12px]">

              <a
                href="mailto:connect@leapbridgeconsulting.com"
                className="flex flex-col items-center gap-3 text-lg"
              >
                <Image
                  src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13313_send-mail.svg"
                  alt="Mail Icon"
                  width={80}
                  height={80}
                  className="py-5"
                />
                <div className="text-center text-lg font-bold text-[var(--dgreen)]">connect@leapbridgeconsulting.com</div>
                <div className="text-center text-lg">Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl.</div>
              </a>
              <a
                href="tel:+91-91670 63112"
                className="flex flex-col items-center gap-3 text-lg"
              >
                <Image
                  src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13312_phone.svg"
                  alt="Phone Icon"
                  width={80}
                  height={80}
                  className="py-5"
                />
                <div className="text-center text-lg font-bold text-[var(--dgreen)]">+91-91670 63112</div>
                <div className="text-center text-lg">Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl.</div>
              </a>

              <a
                href="tel:+91 97691 00915"
                className="flex flex-col items-center gap-3 text-lg"
              >
                <Image
                  src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13312_phone.svg"
                  alt="Phone Icon"
                  width={80}
                  height={80}
                  className="py-5"
                />
                <div className="text-center text-lg font-bold text-[var(--dgreen)]">+91 97691 00915</div>
                <div className="text-center text-lg">Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl.</div>
              </a>
            </div>
            <h2 className="text-[40px] text-[var(--dgreen)] text-center mb-6">or fill in the form</h2>
            <div className="bg-[var(--lgreen3)] p-8 w-fit mx-auto rounded-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

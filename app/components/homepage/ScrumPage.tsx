"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ScrumPage() {
  return (
    <section className="w-full bg-[var(--lgreen2)] py-16">
      <div className="container mx-auto px-6 text-[#1B3233]">
        {/* Title */}
        <h2 className="text-7xl font-normal text-center mb-8">
          Let&apos;s Talk
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="bg-[var(--lgreen3)] p-16 rounded-xl">
            <div className="flex gap-2 mb-12">
              <span className="w-[30px] h-[30px] bg-[var(--dgreen)] rounded-full block" />
              <span className="w-[50px] h-[30px] bg-[#455959] rounded-full block" />
            </div>

            <h3 className="text-4xl font-medium mb-5">
              Schedule a call with us to see if we can help
            </h3>
            <p className="text-lg">
              Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit
              ac nisl. Sed aliquam ultrices.
            </p>

            <div className="h-[1px] bg-[#1b32334d] my-10" />

            <div className="flex flex-col gap-4">
              <a
                href="tel:+91-91670 63112"
                className="flex items-center gap-3 text-lg"
              >
                <Image
                  src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13312_phone.svg"
                  alt="Phone Icon"
                  width={24}
                  height={24}
                />
                <div>+91-91670 63112</div>
              </a>

              <a
                href="tel:+91 97691 00915"
                className="flex items-center gap-3 text-lg"
              >
                <Image
                  src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13312_phone.svg"
                  alt="Phone Icon"
                  width={24}
                  height={24}
                />
                <div>+91 97691 00915</div>
              </a>

              <a
                href="mailto:connect@leapbridgeconsulting.com"
                className="flex items-center gap-3 text-lg"
              >
                <Image
                  src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13313_send-mail.svg"
                  alt="Mail Icon"
                  width={24}
                  height={24}
                />
                <div>connect@leapbridgeconsulting.com</div>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-4">
            <div className="p-5">
              <h3 className="text-[23px] font-medium max-w-[370px] mx-auto text-center px-3">
                Fill in the form and we will get back to you within 24h
              </h3>
              
              <ContactForm />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import AppointmentButton from "../AppointmentButton";
import useInView from "@/app/hooks/useInView";

export default function ConsultationSection() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <section className="bg-[#DAEBE3] py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 xl:w-[1400px] xl:h-[1400px] lg:w-[1100px] lg:h-[1100px]  md:w-[800px] md:h-[800px] w-[800px] h-[800px] rounded-full bg-[#1b3233]"></div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[28px] md:gap-[32px]">
        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/assests/header/scrumpage-logos/consultationtoday.jpg"
            alt="Consultation"
            width={500}
            height={600}
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>

        <div
          ref={ref}
          className={`fade-up ${
            isVisible ? "show" : ""
          } bookbox text-center md:text-left`}
        >
          <h2 className="text-[40px] md:text-4xl font-thin text-[#1B3233] mb-4">
            Book your free consultation today!
          </h2>
          <p className="text-[20px] text-[#1B3233] mb-6">
            Pellentesque ut neque. Duis arcu tortor, suscipit eget, imperdiet
            nec, imperdiet iaculis, ipsum. Sed mollis, eros et ultrices tempus.
          </p>

          <AppointmentButton />
        </div>
      </div>
    </section>
  );
}

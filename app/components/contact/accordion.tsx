"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

const faqData: AccordionItem[] = [
  {
    question: "Why is We Consult the best agency?",
    answer:
      "Sed cursus turpis vitae tortor. Curabitur nisi. In consectetuer turpis ut velit. Maecenas vestibulum mollis diam.",
  },
  {
    question: "Is WeConsult a Webflow Template?",
    answer:
      "Sed cursus turpis vitae tortor. Curabitur nisi. In consectetuer turpis ut velit. Maecenas vestibulum mollis diam.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Sed cursus turpis vitae tortor. Curabitur nisi. In consectetuer turpis ut velit. Maecenas vestibulum mollis diam.",
  },
  {
    question: "Who is Wavesdesign?",
    answer:
      "Sed cursus turpis vitae tortor. Curabitur nisi. In consectetuer turpis ut velit. Maecenas vestibulum mollis diam.",
  },
  {
    question: "How Wavesdesign makes so amazing templates?",
    answer:
      "Sed cursus turpis vitae tortor. Curabitur nisi. In consectetuer turpis ut velit. Maecenas vestibulum mollis diam.",
  },
  {
    question: "What value I get with WeConsult?",
    answer:
      "Sed cursus turpis vitae tortor. Curabitur nisi. In consectetuer turpis ut velit. Maecenas vestibulum mollis diam.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[700px] border-b border-black mx-auto my-12 ">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          isOpen={openIndex === index}
          question={item.question}
          answer={item.answer}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </section>
  );
}

interface ItemProps extends AccordionItem {
  isOpen: boolean;
  index: number;
  toggleAccordion: (index: number) => void;
}

function AccordionItem({ question, answer, isOpen, index, toggleAccordion }: ItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-t  border-black py-6">
      {/* Header */}
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-[#1B3233] hover:text-[var(--dgreen)] transition-colors"
      >
        <span className="text-faq-heading text-[24px]">{question}</span>
        <div
          className={`transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* plus/minus icon made with CSS lines */}
          <div className="relative w-4 h-4">
            <span
              className="absolute top-1/2 left-0 w-4 h-[2px] bg-[#1B3233] rounded transform -translate-y-1/2"
            />
            <span
              className={`absolute top-1/2 left-0 w-4 h-[2px] bg-[#1B3233] rounded transform -translate-y-1/2 transition-all duration-500 ${
                isOpen ? "opacity-0" : "rotate-90 opacity-100"
              }`}
            />
          </div>
        </div>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: height }}
      >
        <div className="pt-3 text-gray-700 text-base leading-relaxed text-[18px] pe-10 max-w-[630px]">
          {answer}
        </div>
      </div>
    </div>
  );
}

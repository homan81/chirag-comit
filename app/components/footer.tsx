"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  useEffect(() => {
    const btn = document.getElementById("scrollTopBtn");

    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        btn?.classList.remove("opacity-0", "pointer-events-none");
        btn?.classList.add("opacity-60");
      } else {
        btn?.classList.add("opacity-0", "pointer-events-none");
        btn?.classList.remove("opacity-60");
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[var(--dgreen)] text-white pt-8">
        <div className="container px-4 sm:px-6 mx-auto">
          {/* <div className="  py-16 px-14 mx-auto flex flex-col md:flex-row justify-between items-center bg-[#253c3d] rounded-[10px] gap-6border-b border-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--lgreen)]">
                Subscribe to our newsletter!
              </h2>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-auto items-center md:bg-[#1B3233] md:rounded-full md:overflow-hidden md:border md:border-gray-600 gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-4 md:px-4 md:py-2 bg-[#1B3233] text-gray-200 placeholder-gray-400 focus:outline-none rounded-[50px] md:rounded-none text-center md:text-left"
              />

              <button className="ebutton bg-[#cde8d9] text-[#05201d] font-medium px-6 py-4 md:px-6 md:py-2 hover:bg-[#bde0cc] transition rounded-[50px] w-full md:w-auto md:rounded-none">
                Subscribe
              </button>
            </div>
          </div> */}

          {/* Top Section */}
          <div
            id="contact"
            className=" container mx-auto px-4   py-10 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-10"
          >
            {/* Logo */}
            <div className="flex flex-col items-start sm:border-r lg:border-r-0 border-dotted border-[#356E54]">
              <img
                src="/assests/header/images/leapbridgelogo.svg"
                alt="Leap Bridge Consulting Logo"
                width={500}
                height={500}
                className="mb-4 w-full h-auto max-w-[250px]"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 lg:border-r *:text-xl border-dotted border-[#356E54]">
             
                <Link
                  href="/home"
                  className={`hover:text-[#53FFA9] transition ${
                    pathname === "/"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`hover:text-[#53FFA9] transition ${
                    pathname === "/about"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                   About Us
                </Link>
                <Link
                  href="/category"
                  className={`hover:text-[#53FFA9] transition ${
                    pathname === "/category"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Category Experience
                </Link>
                <Link
                  href="/industries"
                  className={`hover:text-[#53FFA9] transition ${
                    pathname === "/industries"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Industries
                </Link>
                <Link
                  href="/casestudies"
                  className={`hover:text-[#53FFA9] transition ${
                    pathname === "/casestudies"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Case Studies
                </Link>
                <Link
                  href="/contact"
                  className={`hover:text-[#53FFA9] transition ${
                    pathname === "/contact"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Contact Us
                </Link>
              {/* <Link href="/" className="hover:text-[#9BE3B3] transition">
                Home
              </Link> */}
              {/* <Link href="#about" className="hover:text-[#9BE3B3] transition">
                About Us
              </Link> */}
              {/* <Link
                href="#category"
                className="hover:text-[#9BE3B3] transition"
              >
                Category Experience
              </Link> */}
              {/* <Link href="#service" className="hover:text-[#9BE3B3] transition">
                Industries
              </Link> */}
              {/* <Link href="#service" className="hover:text-[#9BE3B3] transition">
                Case Studies
              </Link> */}
              {/* <Link href="#contact" className="hover:text-[#9BE3B3] transition">
                Contact Us
              </Link> */}
            </div>

            {/* Policies */}
            <div className="flex flex-col space-y-2 sm:border-r  *:text-xl border-dotted border-[#356E54]">
              <Link href="" className="hover:text-[#9BE3B3] transition">
                Privacy Policy
              </Link>
              <Link href="" className="hover:text-[#9BE3B3] transition">
                Terms & Conditions
              </Link>
              <Link href="" className="hover:text-[#9BE3B3] transition">
                Cookie Policy
              </Link>
            </div>

            {/* Contact + Social */}
            <div className="space-y-3  *:text-xl">
              <a
                href="tel:9167063112"
                className="text-sm hover:text-[#9BE3B3] transition"
              >
                +91-91670 63112
              </a>{" "}
              <br />
              <a
                href="tel:9769100915"
                className="text-sm hover:text-[#9BE3B3] transition"
              >
                +91 97691 00915
              </a>{" "}
              <br />
              <a
                href="mailto:connect@leapbridgeconsulting.com"
                className="text-sm hover:text-[#9BE3B3] transition"
              >
                connect@leapbridgeconsulting.com
              </a>
              <div className="flex space-x-3 mt-2">
                <Link href="https://www.linkedin.com" target="_blank">
                  <img
                    src="/assests/header/images/linkdin.svg"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                    className="hover:opacity-80 transition"
                  />
                </Link>
                <Link href="https://wa.me/919769100915" target="_blank">
                  <img
                    src="/assests/header/images/whtsapp.svg"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="hover:opacity-80 transition"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#147e5d] text-center py-3 text-sm text-white">
          Copyright © 2025 Leap Bridge Consulting. All rights reserved.
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scrollTopBtn"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white border-2 border-[#234C3A] text-[#234C3A] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#9BE3B3] hover:text-[#18392B] transition opacity-0 pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}

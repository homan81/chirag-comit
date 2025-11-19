"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { satoshi } from "../fonts";
import AppointmentButton from "./AppointmentButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const [minTime, setMinTime] = useState("");
  const pathname = usePathname();

  // toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const now = new Date();
    if (selectedDate === now.toISOString().split("T")[0]) {
      setMinTime(now.toTimeString().slice(0, 5));
    } else {
      setMinTime("");
    }
  };

  return (
    <header className={`sticky top-0 z-50 ${satoshi.className}`}>
      <nav className="bg-[var(--dgreen)] border-b border-gray-700 relative">
        <div className="container mx-auto px-4 sm:px-5">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-800">
              <img
                src="/assests/header/images/leapbridgelogo.svg"
                alt="Logo"
                width={500}
                height={500}
                // className="h-[50px] w-auto"
                className="my-4 w-full h-auto max-w-[230px]"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex [&_a]:text-xl items-center justify-end flex-1 ">
              <div className="relative group">
                <Link
                  href="/"
                  className={`text-lg p-3 flex items-center ${
                    pathname === "/" ? "text-[#53FFA9]" : "text-[var(--lgreen)]"
                  }`}
                >
                  Home
                </Link>
              </div>

              <div className="relative group">
                <Link
                  href="/about"
                  className={`text-lg p-3 flex items-center ${
                    pathname === "/about"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  About Us
                </Link>
              </div>

              <div className="relative group">
                <Link
                  href="/category"
                  className={`text-lg p-3 flex items-center ${
                    pathname === "/category"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Category Experience
                </Link>
              </div>

              <div className="relative group">
                <Link
                  href="/testimonials"
                  className={`text-lg p-3 flex items-center ${
                    pathname === "/testimonials"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Testimonials
                </Link>
              </div>

              <div className="relative group">
                <Link
                  href="/casestudies/pharma"
                  className={`text-lg p-3 flex items-center ${
                    pathname === "/casestudies/pharma"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Case Studies
                </Link>
              </div>

              <div className="relative group">
                <Link
                  href="/contact"
                  className={`text-lg p-3 flex items-center ${
                    pathname === "/contact"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                  }`}
                >
                  Contact Us
                </Link>
              </div>

              <AppointmentButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div
                onClick={toggleMenu}
                className={`flex flex-col justify-center items-center gap-[6px] h-[47px] w-[47px] rounded-full transition-colors duration-300 ${
                  menuOpen ? "bg-[var(--lgreen)]" : "bg-[#ceead51a]"
                }`}
              >
                <div
                  className={`h-[2px] transition-all duration-300 ${
                    menuOpen ? "w-[20px] bg-[#000]" : "w-[30px] bg-[#ceead5]"
                  }`}
                ></div>
                <div
                  className={`h-[2px] transition-all duration-300 ${
                    menuOpen ? "w-[30px] bg-[#000]" : "w-[20px] bg-[#ceead5]"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden py-[25px] px-[45px] space-y-2 absolute bg-[var(--dgreen)] w-full top-[82px] max-h-[calc(100vh-82px)] overflow-y-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </summary>
          </details>

          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              <Link href="/about" onClick={closeMenu}>
                About us
              </Link>
            </summary>
          </details>

          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="/category" onClick={closeMenu}>
                Category Experience
              </Link>
            </summary>
          </details>

          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="/testimonials" onClick={closeMenu}>
                Testimonials
              </Link>
            </summary>
          </details>

          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="/casestudies/pharma" onClick={closeMenu}>
                Case Studies
              </Link>
            </summary>
          </details>

          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </summary>
          </details>

          <AppointmentButton />
        </div>

        {/* Contact Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#00000040] backdrop-blur-md flex justify-center items-center z-50">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative border border-white/40">
              <div
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </div>

              <h2 className="text-2xl font-semibold text-[#356E54] mb-4 text-center">
                Contact Us
              </h2>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    mobile: formData.get("mobile"),
                    company: formData.get("company"),
                    date: formData.get("date"),
                    time: formData.get("time"),
                    agree: formData.get("agree"),
                  };

                  if (!data.agree) {
                    alert("You must agree to the Terms and Conditions.");
                    return;
                  }

                  const response = await fetch("/api/sendAppointmentEmail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  if (response.ok) {
                    alert("Appointment submitted successfully!");
                    setIsOpen(false);
                  } else {
                    alert("Failed to submit. Please try again.");
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Mobile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Company"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Appointment
                    </label>
                    <input
                      type="date"
                      name="date"
                      min={today}
                      onChange={handleDateChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Time of Appointment
                    </label>
                    <input
                      type="time"
                      name="time"
                      min={minTime}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    required
                    className="h-4 w-4 text-[#356E54] border-gray-300 rounded focus:ring-[#356E54]"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-[#356E54] underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#356E54] text-white py-2 rounded-md hover:bg-[#2d5946] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

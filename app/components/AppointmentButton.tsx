"use client";
import { useState, FormEvent } from "react";

export default function AppointmentButton() {
  const [isOpen, setIsOpen] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const minTime = "09:00";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

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
  };

  return (
    <>
      {/* Trigger Button */}
      <div
        className="flex text-xl items-center w-fit justify-center gap-2 bg-[#3BB273] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#34a266] hover:shadow-lg transition-all duration-300 cursor-pointer md:mx-0 mx-auto"
        onClick={() => setIsOpen(true)}
      >
        Schedule Appointment
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#00000040] backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative border border-white/40">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-4 text-center">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[var(--dgreen)]"
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
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[var(--dgreen)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  pattern="[0-9]{10}"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[var(--dgreen)]"
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
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[var(--dgreen)]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={today}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[var(--dgreen)]"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    min={minTime}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[var(--dgreen)]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  required
                  className="h-4 w-4"
                />
                <label className="text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-[var(--dgreen)] underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--dgreen)] text-white py-2 rounded-md hover:bg-[var(--dgreen2)] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

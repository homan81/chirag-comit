"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData);
    data.type = "contact";

    if (!data.agree) {
      alert("You must agree to the Terms & Privacy Policy.");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/sendAppointmentEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      alert("Contact form submitted successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Failed to submit. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form className="space-y-2 max-w-md md:p-7 py-5 mx-auto" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233]"
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233]"
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233]"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone (optional)"
        className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] mb-2 px-5 py-3 text-[#1B3233]"
      />

      <label className="flex items-center gap-3 text-[#1B3233] text-sm ms-2 cursor-pointer">
        <input
          type="checkbox"
          name="agree"
          className="h-4 w-4 accent-[#1B3233]"
          required
        />
        <span>I agree to the Terms & Privacy Policy</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[var(--dgreen)] text-white text-lg py-3 mt-2 hover:opacity-90 transition ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

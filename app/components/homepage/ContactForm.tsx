import Image from "next/image";
export default function ContactForm() {
  return (
    <>
      <form className="space-y-2 max-w-md p-7 mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
        />
        <input
          type="text"
          placeholder="Phone (optional)"
          className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] mb-2 px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
        />

        <label className="flex items-center gap-3 text-[#1B3233] text-sm ms-2 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 accent-[#1B3233]"
            required
          />
          <span>I agree to the Terms &amp; Privacy Policy</span>
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-[var(--dgreen)] text-white text-lg py-3 mt-2 hover:opacity-90 transition ease-in-out"
        >
          Submit
        </button>
      </form>
    </>
  );
}

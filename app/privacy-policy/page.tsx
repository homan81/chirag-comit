import Link from "next/link";
import "../globals.css";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="container mx-auto max-w-4xl px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--dgreen)] mb-8">
            Privacy Policy
          </h1>

          {/* <p className="text-gray-600 mb-10">
            Last Updated: <strong>[Date]</strong>
          </p> */}

          {/* SECTION 1 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            1. Introduction
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            Welcome to <strong className="text-[var(--dgreen2)]">LeapBridge Consulting</strong>. We are committed to protecting your privacy and handling your
            data responsibly. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            and interact with our services.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            2. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Personal Data
          </h3>
          <p className="mb-4 text-black leading-relaxed">
            We may collect personally identifiable information such as your
            name, email address, phone number, company name, and professional
            title when you fill contact forms or inquire about our services.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Usage Data
          </h3>
          <p className="mb-4 text-black leading-relaxed">
            This includes your IP address, browser type, pages visited, date and
            time of visit, and other diagnostic data.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Cookies & Tracking Technologies
          </h3>
          <p className="mb-6 text-black leading-relaxed">
            We use cookies to improve website functionality, enhance user
            experience, and collect analytical insights. (See our Cookie Policy
            for more detail.)
          </p>

          {/* SECTION 3 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-black mb-6 leading-relaxed">
            <li>To operate and maintain our website.</li>
            <li>To respond to your inquiries and client support requests.</li>
            <li>To notify you about updates, service changes, or announcements.</li>
            <li>
              To improve our website using analytics and AI-driven insights.
            </li>
            <li>To monitor security and detect technical issues.</li>
            <li>
              To send marketing or promotional content, where consent is
              provided.
            </li>
          </ul>

          {/* SECTION 4 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            4. Legal Basis for Processing (GDPR)
          </h2>
          <p className="mb-6 text-black leading-relaxed">
            If you are from the EEA, we process your data based on:
          </p>
          <ul className="list-disc pl-6 text-black mb-6 leading-relaxed">
            <li>Performance of a contract or pre-contractual steps.</li>
            <li>Your explicit consent (e.g., newsletters).</li>
            <li>
              Our legitimate business interests that don’t override your rights.
            </li>
          </ul>

          {/* SECTION 5 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            5. Data Sharing & Disclosure
          </h2>
          <p className="mb-6 text-black leading-relaxed">
            We do not sell or rent your data. However, we may share data with:
          </p>
          <ul className="list-disc pl-6 text-black mb-6 leading-relaxed">
            <li>
              Service providers assisting with hosting, analytics, and platform
              operations.
            </li>
            <li>Legal authorities when required by law.</li>
          </ul>

          {/* SECTION 6 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            6. Data Security
          </h2>
          <p className="mb-6 text-black leading-relaxed">
            We use industry-standard security measures to protect your data.
            However, no transmission method over the internet is 100% secure.
          </p>

          {/* SECTION 7 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            7. Your Data Protection Rights
          </h2>
          <ul className="list-disc pl-6 text-black mb-6 leading-relaxed">
            <li>Access, update, or delete your personal data.</li>
            <li>Correct inaccuracies.</li>
            <li>Request restriction or object to processing.</li>
            <li>Request data portability.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p className="mb-6 text-black leading-relaxed">
            To exercise these rights, email us at: 
           
            <Link className="hover:text-[var(--dgreen2)]" href="mailto:connect@leapbridgeconsulting.com"> connect@leapbridgeconsulting.com</Link>
          </p>

          {/* SECTION 8 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            8. Changes to This Policy
          </h2>
          <p className="mb-6 text-black leading-relaxed">
            We may update this Privacy Policy periodically. Updates will be
            reflected by the “Last Updated” date at the top of this page.
          </p>

          {/* SECTION 9 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            9. Contact Us
          </h2>
          <p className="mb-2 text-black leading-relaxed">
            LeapBridge Consulting  
            <br />
            Email:{" "}
            <Link className="hover:text-[var(--dgreen2)]" href="mailto:connect@leapbridgeconsulting.com">connect@leapbridgeconsulting.com</Link>
            <br />
            Phone: <Link className="hover:text-[var(--dgreen2)]" href="tel:+91 91670 63112">+91 91670 63112</Link>, <Link className="hover:text-[var(--dgreen2)]" href="tel:+91 97691 00915">+91 97691 00915</Link>
          </p>
        </div>
      </section>
    </>
  );
}

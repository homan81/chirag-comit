import Link from "next/link";
import "../globals.css";

export default function TermsConditions() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="container mx-auto max-w-4xl px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--dgreen)] mb-8">
            Terms & Conditions
          </h1>

          {/* <p className="text-gray-600 mb-10">
            Last Updated: <strong>[Date]</strong>
          </p> */}

          {/* SECTION 1 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            1. Agreement to Terms
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            By accessing and using the website of{" "}
            <strong className="text-[var(--dgreen2)]">LeapBridge Consulting</strong>, you accept and agree to be bound by these Terms and Conditions.  
            If you do not agree, you must discontinue use of the Site immediately.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            2. Intellectual Property
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            All content, features, and functionality on this Site—including text, images,
            design, layout, software, and graphics—are owned by LeapBridge Consulting and
            protected under international copyright, trademark, and intellectual property
            laws.  
            You may not reproduce, distribute, or reuse any material without prior written
            consent.
          </p>

          {/* SECTION 3 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            3. No Professional Advice
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            All information on this Site is provided for general informational purposes
            only. It does not constitute professional advice—business, legal, financial,
            or otherwise.  
            You should consult qualified professionals before acting on any information
            from this Site. LeapBridge Consulting shall not be liable for decisions made
            based on Site content.
          </p>

          {/* SECTION 4 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            4. User Representations
          </h2>
          <p className="mb-4 leading-relaxed text-black">
            You agree not to use the Site:
          </p>

          <ul className="list-disc pl-6 text-black mb-6 leading-relaxed">
            <li>In violation of any applicable national or international law.</li>
            <li>
              To transmit any unsolicited advertising, promotional materials, or spam.
            </li>
            <li>
              To impersonate LeapBridge Consulting, its employees, other users, or any
              other person or entity.
            </li>
          </ul>

          {/* SECTION 5 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            5. Links to Third-Party Websites
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            The Site may contain links to third-party websites. LeapBridge Consulting has
            no control over the content, policies, or practices of these websites and is
            not responsible for any damages or losses arising from their use.
          </p>

          {/* SECTION 6 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            6. Termination
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            We reserve the right to terminate or suspend your access to the Site at any
            time, without notice, for any violation of these Terms and Conditions or for
            any other reason deemed appropriate by LeapBridge Consulting.
          </p>

          {/* SECTION 7 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            7. Limitation of Liability
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            LeapBridge Consulting and its team shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, including loss of
            profits, data, goodwill, or business opportunities resulting from your use or
            inability to use the Site.
          </p>

          {/* SECTION 8 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            8. “AS IS” and “AS AVAILABLE” Disclaimer
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            The Site is provided on an “AS IS” and “AS AVAILABLE” basis, without
            warranties of any kind—express or implied. We do not guarantee uninterrupted
            service, accuracy of content, or error-free operation.
          </p>

          {/* SECTION 9 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            9. Governing Law
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            These Terms shall be governed by the laws of{" "}
            <strong>[Your Country/State]</strong>, without regard to conflict of law
            principles.
          </p>

          {/* SECTION 10 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            10. Changes to Terms
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            We may modify these Terms at any time. Updates will become effective as soon
            as they are posted on this page.  
            By continuing to use the Site, you agree to be bound by the revised Terms.
          </p>

          {/* SECTION 11 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            11. Contact Us
          </h2>
          <p className="mb-2 text-black leading-relaxed">
            If you have any questions regarding these Terms and Conditions, please
            contact:
            <br />
            Email:{" "}
            <Link
              href="mailto:connect@leapbridgeconsulting.com"
              className="hover:text-[var(--dgreen2)]"
            >
              connect@leapbridgeconsulting.com
            </Link>
            <br />
            Phone:{" "}
            <Link
              href="tel:+91 91670 63112"
              className="hover:text-[var(--dgreen2)]"
            >
              +91 91670 63112
            </Link>
            ,{" "}
            <Link
              href="tel:+91 97691 00915"
              className="hover:text-[var(--dgreen2)]"
            >
              +91 97691 00915
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

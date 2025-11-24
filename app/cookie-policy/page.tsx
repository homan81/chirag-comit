import Link from "next/link";
import "../globals.css";

export default function CookiePolicy() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="container mx-auto max-w-4xl px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--dgreen)] mb-8">
            Cookies Policy
          </h1>

          {/* <p className="text-gray-600 mb-10">
            Last Updated: <strong>[Date]</strong>
          </p> */}

          {/* SECTION 1 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            1. What Are Cookies?
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            Cookies are small text files placed on your computer or mobile device when
            you visit a website. They are widely used to make websites function
            efficiently and provide useful information to website owners.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            2. How We Use Cookies
          </h2>
          <p className="mb-4 leading-relaxed text-black">
            <strong className="text-[var(--dgreen2)]">LeapBridge Consulting</strong>{" "}
            uses cookies for the following purposes:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Essential Cookies
          </h3>
          <p className="mb-4 text-black leading-relaxed">
            These cookies are necessary for the website to function and cannot be turned
            off. They are typically set in response to actions you take, such as filling
            in forms or setting your privacy preferences.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Analytics Cookies
          </h3>
          <p className="mb-4 text-black leading-relaxed">
            These cookies help us count visits and traffic sources so we can measure
            and improve our website performance. All information collected through these
            cookies is aggregated and anonymous.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Functional Cookies
          </h3>
          <p className="mb-4 text-black leading-relaxed">
            These cookies enable advanced features and personalization, such as
            remembering your preferences. They may be set by LeapBridge Consulting or
            by third-party providers.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Targeting Cookies
          </h3>
          <p className="mb-6 text-black leading-relaxed">
            These cookies may be set by advertising partners to build a profile of your
            interests and show relevant advertisements on other websites.
          </p>

          {/* SECTION 3 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            3. Your Choices Regarding Cookies
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            Most web browsers accept cookies by default. You can modify your browser
            settings to block or remove cookies. However, disabling cookies may impact
            certain features or functionality of our Site.
          </p>

          {/* SECTION 4 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            4. Changes to This Cookies Policy
          </h2>
          <p className="mb-6 leading-relaxed text-black">
            We may update this Cookies Policy periodically. Updates will be posted on
            this page, and the “Last Updated” date will be modified accordingly.
          </p>

          {/* SECTION 5 */}
          <h2 className="text-2xl font-semibold text-[var(--dgreen)] mb-3">
            5. Contact Us
          </h2>
          <p className="mb-2 leading-relaxed text-black">
            If you have any questions about our use of cookies, please contact us at:
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

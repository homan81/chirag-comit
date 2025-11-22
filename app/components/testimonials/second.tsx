"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Second() {
  const heading = useInView({ threshold: 0.2 });
  const subheading = useInView({ threshold: 0.2 });
  const testimonial1 = useInView({ threshold: 0.2 });
  const testimonial2 = useInView({ threshold: 0.2 });
  const testimonial3 = useInView({ threshold: 0.2 });
  const testimonial4 = useInView({ threshold: 0.2 });
  const testimonial5 = useInView({ threshold: 0.2 });
  const testimonial6 = useInView({ threshold: 0.2 });
  const testimonial7 = useInView({ threshold: 0.2 });
  const testimonial8 = useInView({ threshold: 0.2 });
  const testimonial9 = useInView({ threshold: 0.2 });
  const testimonial10 = useInView({ threshold: 0.2 });
  const testimonial11 = useInView({ threshold: 0.2 });
  const testimonial12 = useInView({ threshold: 0.2 });
  const testimonial13 = useInView({ threshold: 0.2 });
  const testimonial14 = useInView({ threshold: 0.2 });
  const testimonial15 = useInView({ threshold: 0.2 });
  const testimonial16 = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="">
          <div className="container mx-auto px-5 py-15">
            <div>
              <h1
                ref={heading.ref}
                className={`fade-up ${
                  heading.isVisible ? "show" : ""
                } text-4xl font-bold text-[var(--dgreen)] text-center mb-5`}
              >
                Real Experiences. Real Results.
              </h1>
              <p
                ref={subheading.ref}
                className={`fade-up ${
                  subheading.isVisible ? "show" : ""
                } md:text-xl text-lg text-center max-w-[900px] mx-auto`}
              >
                Each testimonial is a glimpse into the positive impact we
                create. From service quality to timely support, our clients
                share how we’ve helped them achieve real success.
              </p>
            </div>

            <div className="*:mt-10 [&_p]:md:text-xl [&_p]:text-lg [&_h3]:md:text-3xl [&_h3]:text-2xl *:md:px-14  *:md:py-10 *:p-5 *:border *:border-[#C8C8C8] *:shadow-[2px_4px_25px_0px_rgba(0,0,0,0.25)]">
              <div
                ref={testimonial1.ref}
                className={`fade-up ${
                  testimonial1.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Vinod has strong execution focus and ensures that strategies
                  are translated into measurable business impact and sustained
                  progress.
                </h3>
                <p className="text-black mb-8">
                  Vinod shows a clear strategic outlook, combining long-term
                  planning with practical execution. He uses data and analytics
                  thoughtfully to guide decisions, improve performance, and
                  identify new opportunities for growth. He has driven many
                  initiatives for the organisation which are both expansions led
                  as well as efficiency led. His strong execution focus ensures
                  that strategies are translated into measurable business impact
                  and sustained progress.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Harsh-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Harsh Agarwal
                    </h4>
                    <p className="text-[var(--dgreen)]">
                      Vice Chairman & MD Emami Ltd.
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial2.ref}
                className={`fade-up ${
                  testimonial2.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Vinod ability to leverage data, technology, and analytics has
                  been instrumental in developing models that provide actionable
                  insights
                </h3>
                <p className="text-black mb-8">
                  Vinod has been a key leader in driving our Go-to-Market (GTM)
                  transformation journey. Over the past few years, he has shaped
                  and executed a well-defined roadmap that has successfully
                  aligned our growth ambitions with operational excellence.
                  <br />
                  <br />
                  His ability to leverage data, technology, and analytics has
                  been instrumental in developing models that provide actionable
                  insights—helping us identify upsell and cross-sell
                  opportunities, enhance revenue productivity, and improve trade
                  performance across markets.
                  <br />
                  <br />
                  Vinod has also led important initiatives around trade
                  optimization and cost efficiency, simplifying channel
                  operations and ensuring better utilization of resources to
                  strengthen ROI.
                  <br />
                  <br />
                  Equally noteworthy is his contribution to our rural growth
                  agenda, where he used spatial mapping and potential estimation
                  to identify new opportunities and guide focused market
                  expansion.
                  <br />
                  <br />
                  Through his data-driven thinking, strong execution, and
                  balanced focus on sustainable growth, Vinod has built a solid
                  foundation that will continue to support our business momentum
                  and market leadership.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Mohan-Goenka.png"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Mohan Goenka
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Vice Chairman & Whole Time Director Emami Ltd.
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial3.ref}
                className={`fade-up ${
                  testimonial3.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin brings a rare blend of strategic foresight and on-ground
                  precision to the world of sales and distribution.
                </h3>
                <p className="text-black mb-8">
                  At Godrej Consumer Products, he helped shape sales strategy,
                  strengthen digital execution, and unlock new levels of channel
                  performance across GT and MT. What distinguishes him is his
                  ability to simplify complexity — connecting strategic vision
                  with market reality. Deeply collaborative and grounded, Jatin
                  works as a true partner, building trust, energising teams, and
                  turning plans into measurable business impact. With a
                  combination of insight, discipline, and practical wisdom, he
                  helps organisations elevate how they sell, lead, and grow —
                  transforming sales into a true competitive advantage.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/vivek-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Vivek Gambhir
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Venture Partner – Lightspeed India.
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial4.ref}
                className={`fade-up ${
                  testimonial4.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  What stands out most about Jatin is his ability to balance
                  strategy with pragmatism — to think long-term while executing
                  with precision
                </h3>
                <p className="text-black mb-8">
                  During our time together at GCPL, I had the opportunity to see
                  Jatin’s remarkable professional journey — from a mid-level
                  manager to a key leader driving several high-impact
                  initiatives for the business. He consistently demonstrated the
                  ability to translate strategic thinking into grounded
                  execution that delivered measurable results. Jatin played a
                  pivotal role in redesigning our Go-To-Market architecture,
                  creating state-specific and channel-focused playbooks that
                  sharpened coverage, improved channel productivity, and
                  enhanced overall sales effectiveness. He also led the
                  e-commerce acceleration agenda, helping integrate online and
                  modern trade into a cohesive growth framework. What stands out
                  most about Jatin is his ability to balance strategy with
                  pragmatism — to think long-term while executing with
                  precision. He brings tremendous energy, authenticity, and
                  resilience to every mandate he takes on.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Sunil-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Sunil Kataria
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      CEO &MD - Godrej Agrovet Limited
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial5.ref}
                className={`fade-up ${
                  testimonial5.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Vinod brings a good mix of strategic thinking and execution
                  focus, and has been a steady contributor to overall
                  performance.
                </h3>
                <p className="text-black mb-8">
                  Thinking and execution focus, and has been a steady
                  contributor to overall performance. I worked with Vinod during
                  his tenure as Regional Head, where he contributed to strong
                  business growth and helped improve team culture and operating
                  discipline. His leadership also led to lower attrition and
                  positive gains in a few challenging markets. Vinod brings a
                  good mix of strategic thinking and execution focus, and has
                  been a steady contributor to overall performance.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/sunil-sethi.png"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Sunil Sethi
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Executive Chairman Modenik Lifestyle Pvt Ltd
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial6.ref}
                className={`fade-up ${
                  testimonial6.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin is the person you want to have on your team when you
                  want to grow your brand in India. he has vast knowledge of the
                  Indian sales ecosystem and it’s workings.
                </h3>
                <p className="text-black mb-8">
                  Mr. Jatin Panchal and I know each other since 2022 and more
                  recently we were work colleagues at Abbott Nutrition where he
                  was the National Head of Trade Sales. First - he is a top
                  notch Sales leader and has deep understanding of both Sales
                  strategy and execution. Second - he has vast knowledge of the
                  Indian sales ecosystem and it’s workings. Therefore, he is the
                  person you want to have on your team when you want to grow
                  your brand in India. Finally - he has amazing connections in
                  the industry especially when it comes to hiring people,
                  agencies etc. I will highly recommend Mr. Panchal and his team
                  for taking your business to the next level.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Neil-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Neil George
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Ex MD – Abbott Nutrition India Ltd.
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial7.ref}
                className={`fade-up ${
                  testimonial7.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Vinod combines data-driven insight with clear business
                  judgment, translating strategy into results with speed and
                  precision.
                </h3>
                <p className="text-black mb-8">
                  I have worked with Vinod on several key initiatives at
                  Cadbury, and he stands out for his analytical ability,
                  strategic thinking and execution. Vinod combines data-driven
                  insight with clear business judgment, translating strategy
                  into results with speed and precision.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Sanjay-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Sanjay Purohit
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Group CEO Sapphire Foods
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial8.ref}
                className={`fade-up ${
                  testimonial8.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin’s bias for action, process orientation, and channel
                  understanding make him a leader who delivers both immediate
                  impact and sustainable change.
                </h3>
                <p className="text-black mb-8">
                  I’ve had the privilege of observing Jatin’s professional
                  growth closely — from his early days at Marico, where he
                  worked under my leadership, to his later roles across
                  organizations where he continued to make a mark in FMCG sales
                  and distribution excellence. Jatin’s work across the Eastern
                  and Western regions at Marico demonstrated a rare ability to
                  understand diverse market realities while driving consistent
                  execution. He was instrumental in building the rural
                  distribution model in Bihar, a project that combined strategic
                  planning with on-ground agility. In Modern Trade, he laid down
                  structured JBP and account reconciliation processes, ensuring
                  commercial clarity and collaborative growth with key accounts.
                  Jatin’s bias for action, process orientation, and channel
                  understanding make him a leader who delivers both immediate
                  impact and sustainable change. His evolution into a
                  transformation-focused business leader is a testament to his
                  depth, adaptability, and passion for building future-ready
                  sales systems.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/SridharBalakrishnan-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Sridhar Balakrishnan
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Group CEO – Duroflex
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial9.ref}
                className={`fade-up ${
                  testimonial9.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Vinod is an outstanding sales and business leader. He has led
                  the transformation of the India sales route to market with
                  excellence.
                </h3>
                <p className="text-black mb-8">
                  Vinod is an outstanding sales and business leader. He has led
                  the transformation of the India sales route to market with
                  excellence. He transformed a rural focused sales organization
                  into a high performing best in class urban sales force. He has
                  a strong understanding of business fundamentals and P&L
                  management. Under his Sales Leadership, India has become the
                  fastest growing market for Hershey globally. He played a key
                  role in turning around the Hershey India business. He is
                  mature and driven, yet humble and treats people with respect
                  they deserve. A highly respected leader in the Hershey India
                  Organization.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Praveen-Jakate.png"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Praveen Jakate
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Ex Chairman and Managing Director - South Asia Hershey
                      India Pvt Ltd
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial10.ref}
                className={`fade-up ${
                  testimonial10.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin’s depth of understanding across trade levers, data
                  systems, and frontline processes enables organizations to
                  deliver sharper execution and measurable impact.
                </h3>
                <p className="text-black mb-8">
                  During our time at Marico, Jatin consistently demonstrated a
                  blend of strategic clarity and execution excellence. His
                  leadership in implementing distributor automation and go to
                  market models brought significant efficiency to our sales
                  systems. His depth of understanding of the channel dynamics,
                  data systems, and frontline processes enabled Marico to
                  deliver best in class execution and high impact. Jatin’s
                  ability to translate strategy into scalable actions and his
                  relentless focus on outcomes set him apart. Beyond his
                  professional acumen, his resilience and integrity always made
                  Jatin stand out.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Sandeep-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Sandeep Khandelwal
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Head – India Subcontinent Business – Dr. Reddy’s
                      Laboratories
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial11.ref}
                className={`fade-up ${
                  testimonial11.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin led one of the most meaningful business transformations
                  I’ve witnessed. he successfully pivoted the Pharma business
                  toward a consumer-centric, FMCG-style operation.
                </h3>
                <p className="text-black mb-8">
                  Vinod has been instrumental in shaping and leading the
                  company’s rural business vertical, driving transformative
                  growth through strategic vision and flawless execution. He
                  spearheaded the development of a scalable and efficient
                  Route-to-Market (RTM) model, which tripled the rural
                  distribution footprint and delivered above-market growth
                  across key categories. With a strong ‘Right First Time’
                  mindset, Vinod led the rural expansion using a
                  custom-developed Village Potential Index,a data-driven
                  framework tailored to the company’s unique context and
                  category dynamics. This enabled precise market prioritization
                  and created a replicable, scalable expansion model that
                  continues to fuel sustainable business growth. Through his
                  leadership, Vinod has set a benchmark for building impactful,
                  insight-led rural strategies that combine innovation,
                  discipline, and long-term value creation.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Sunilt-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Vinod 
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      MD & CEO Airtel Africa PLC
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial12.ref}
                className={`fade-up ${
                  testimonial12.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin led one of the most meaningful business transformations
                  I’ve witnessed. he successfully pivoted the Pharma business
                  toward a consumer-centric, FMCG-style operation.
                </h3>
                <p className="text-black mb-8">
                  I had the opportunity to work closely with Jatin during his
                  time at Danone, where he led one of the most meaningful
                  business transformations I’ve witnessed. Taking charge of a
                  predominantly pharma and prescription-driven model, he
                  successfully pivoted the business toward a consumer-centric,
                  FMCG-style operation with renewed energy and purpose. Under
                  his leadership, the team implemented significant structural
                  and cultural shifts — redefined trade policies, strengthened
                  channel partnerships, and built a strong e-commerce growth
                  engine to complement offline channels. His focus on
                  profitable, channel-specific growth and capability building
                  helped unlock both topline and margin improvements, while
                  instilling a strong performance culture within the team.
                  Jatin’s leadership is marked by authenticity, clarity, and an
                  innate ability to turn strategy into tangible results. His
                  journey through Danone and Abbott stands as proof of his
                  capacity to inspire teams and build sustainable commercial
                  engines that deliver consistent business outcomes.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Himanshu-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Himanshu Bakshi
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      MD, South Asia – Sanofi
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial13.ref}
                className={`fade-up ${
                  testimonial13.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Vinod possesses exceptional analytical capabilities, and his
                  insights have played a pivotal role in shaping overall
                  business strategy
                </h3>
                <p className="text-black mb-8">
                  I have had the privilege of working with Vinod both as a
                  colleague and as a member of the Sales Leadership team. During
                  this time, I have witnessed his ability to successfully
                  transition across diverse roles and make a meaningful impact
                  on the organization’s growth. Vinod possesses exceptional
                  analytical capabilities, and his insights have played a
                  pivotal role in shaping overall business strategy. He combines
                  strategic thinking with a strong execution mindset,
                  consistently driving results. In addition, Vinod demonstrates
                  outstanding people leadership skills, fostering high
                  performing teams and creating an environment that encourages
                  collaboration and accountability.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/ashish-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Ashish Pisharodi
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Ex Managing Director – Philippines, Vice President
                      Mondelez International
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial14.ref}
                className={`fade-up ${
                  testimonial14.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin brings a strong commercial mindset, deep channel
                  understanding, and the rare ability to align teams behind
                  complex growth objectives.
                </h3>
                <p className="text-black mb-8">
                  During our tenure together at Marico, Jatin played a pivotal
                  role in strengthening the company’s overall sales and
                  distribution engine, especially in shaping the Modern Trade
                  channel during its formative years. His sharp understanding of
                  trade structures, process design, and customer partnerships
                  helped build a more disciplined and performance-oriented
                  commercial framework. What truly stands out about Jatin is his
                  holistic grasp of GTM transformation — combining strategy,
                  process, and capability building to create lasting sales
                  effectiveness. He builds strong systems and teams that can
                  sustain growth across channels, markets, and partners. He
                  brings a strong commercial mindset, deep channel
                  understanding, and the rare ability to align teams behind
                  complex growth objectives. Above all, Jatin embodies
                  resilience and authenticity, which make him a true leader and
                  partner in transformation.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Madan-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Madan Mohan Pandey
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      MD & CEO - Zuari FarmHub Ltd.
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial15.ref}
                className={`fade-up ${
                  testimonial15.isVisible ? "show" : ""
                } bg-white`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Vinod knows the diversity of the Indian markets very well and
                  sets plans and resources accordingly.
                </h3>
                <p className="text-black mb-8">
                  Vinod is a skilled and veteran sales leader. He is very
                  collaborative in his approach. Vinod knows the diversity of
                  the Indian markets very well and sets plans and resources
                  accordingly. Through his leadership with Hershey, he and his
                  team has successfully accomplished numerous new item rollouts
                  and first to market executions. These have resulted in
                  business growth and profitability, as well establishing
                  Hershey’s presence in India.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Bill-Brothers.png"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Bill Brothers
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Ex Director Global Sales Development (Retired) The Hershey
                      Company
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={testimonial16.ref}
                className={`fade-up ${
                  testimonial16.isVisible ? "show" : ""
                } bg-[var(--lgreen2)]`}
              >
                <h3 className=" text-[var(--dgreen)]  font-medium mb-5">
                  Jatin’s strength lies in his bias for action, ability to
                  connect market realities with business strategy, and his focus
                  on building robust, scalable systems.
                </h3>
                <p className="text-black mb-8">
                  Having worked closely with Jatin over several years at Godrej
                  Consumer Products, I had the opportunity to see him evolve
                  from a capable mid-level manager into a well-rounded
                  commercial leader with a strong grasp of both strategy and
                  execution. In his various roles — leading Alternate Channels,
                  heading Sales Development, and later managing the Eastern
                  Division — Jatin consistently brought clarity of thought,
                  sharp problem-solving, and a deep sense of ownership. He
                  played a key role in setting up the e-commerce business for
                  GCPL and strengthening the company’s alternate channel
                  presence during a critical phase of growth. Jatin’s strength
                  lies in his bias for action, ability to connect market
                  realities with business strategy, and his focus on building
                  robust, scalable systems. He blends strategic foresight with
                  operational discipline — a combination that makes him stand
                  out as a high-impact leader.”
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Praveen-testi.jpg"
                    className="w-[70px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="md:text-2xl text-xl font-semibold text-[var(--dgreen)]">
                      Praveen Dalal
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Managing Director – Indonesia, Mondelez International.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

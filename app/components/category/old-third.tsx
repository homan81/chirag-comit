"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Third() {
  // const heading1 = useInView({ threshold: 0.2 });
  const image = useInView({ threshold: 0.6 });
  // const heading2 = useInView({ threshold: 0.9 });
  return (
    <>
      <section>
        <div className="bg-[var(--dgreen)]">
          <div className="mx-auto  container relative overflow-hidden px-5 pb-10">
            <div className="hidden lg:block absolute right-0 top-0">
              <div
                ref={image.ref}
                className={`fade-up ${image.isVisible ? "show" : ""}  w-full `}
              >
                <Image
                  src="assests/header/images/category-third.svg"
                  className="2xl:w-[230px] lg:w-[170px]"
                  width={500}
                  height={100}
                  alt=""
                />
              </div>
            </div>
            <div className="text-white max-w-[770px] pt-10 mb-12">
              <h2 className="text-4xl mb-3">
                Depth in Categories, Breadth in Execution
              </h2>
              <p className="text-md font-thin">
                Our work covers a wide spectrum of industries, helping companies
                strengthen market presence, accelerate sales, and deliver
                measurable growth. With expertise built across product lines and
                consumer needs, we bring the right strategy for every business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 text-white 2xl:max-w-[1300px] lg:max-w-[1150px]">
              <div className="pe-20">
                <div className="bg-[#A3B5A7] pt-5 pb-12 rounded-xl">
                  <h3 className="text-[25px] font-normal text-center text-[var(--dgreen)]">
                    Home & Personal Care
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 -mt-[32px] mb-[40px] *:bg-[#5B6F60] *:2xl:text-[18px] *:text-[16px] *:border *:border-[#859D8A]  *:px-6 *:py-3 *:flex *:items-center  *:gap-5">
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/soaps.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Soaps</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/laundry.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Laundry & Home cleaners</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/skin.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Skin Care</p>
                  </div>
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/insect.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Insect repellent</p>
                  </div>

                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/diapers.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Baby & Adult Diapers</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/perfume.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Male Grooming</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/haircare.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Hair care</p>
                  </div>
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/hygene.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Fem Hygiene</p>
                  </div>
                </div>
              </div>
              <div className="pe-20">
                <div className="bg-[#A3B5A7] pt-5 pb-12 rounded-xl">
                  <h3 className="text-[25px] font-normal text-center text-[var(--dgreen)]">
                    Foods
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 -mt-[32px] mb-[40px] *:bg-[#5B6F60] *:2xl:text-[18px] *:text-[16px] *:border *:border-[#859D8A]  *:px-6 *:py-3 *:flex *:items-center  *:gap-5">
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/choclate.svg"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Chocolates & Confectionery</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/soft-drink.svg"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Biscuits & Cookies</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/skin.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Soft Drink and Beverage</p>
                  </div>
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/insect.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Malt Food Drinks</p>
                  </div>

                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/diapers.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Edible Oils</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/perfume.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Syrups & Spreads</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/haircare.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Dairy</p>
                  </div>
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/hygene.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Savoury Snacks</p>
                  </div>
                </div>
              </div>
              <div className="pe-20">
                <div className="bg-[#A3B5A7] pt-5 pb-12 rounded-xl">
                  <h3 className="text-[25px] font-normal text-center text-[var(--dgreen)]">
                    Pharma & OTC
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 -mt-[32px] mb-[40px] *:bg-[#5B6F60] *:2xl:text-[18px] *:text-[16px] *:border *:border-[#859D8A]  *:px-6 *:py-3 *:flex *:items-center  *:gap-5">
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/soaps.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Protein Powders</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/laundry.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Rubefacient</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/skin.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Infant Formula</p>
                  </div>
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/insect.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Ayurvedic and Herbals</p>
                  </div>

                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/diapers.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Nutraceuticals</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/perfume.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Vitamins and Supplements</p>
                  </div>
                  <div className="rounded-tl-3xl rounded-br-3xl  ">
                    <Image
                      src="/assests/header/images/haircare.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Weight Management</p>
                  </div>
                  <div className="rounded-tr-3xl rounded-bl-3xl  ">
                    <Image
                      src="/assests/header/images/hygene.png"
                      className="w-[50px] h-auto p-1"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <p>Paediatric Special Care</p>
                  </div>
                </div>
              </div>

              <div className="">
                <h3 className="text-3xl mb-5">Channels & Geographies Expertise</h3>
                <ul className="*:text-[25px] *:border-b *:border-dotted *:border-[#859D8A] *:ps-14">
                  <li><div className="border-l border-[#859D8A] border-dotted py-2 px-4">Pan India : GT - Urban – Rural</div></li>
                  <li><div className="border-l border-[#859D8A] border-dotted py-2 px-4">CSD, CPC</div></li>
                  <li><div className="border-l border-[#859D8A] border-dotted py-2 px-4">Modern Trade</div></li>
                  <li><div className="border-l border-[#859D8A] border-dotted py-2 px-4">E-com, Q-com</div></li>
                  <li><div className="border-l border-[#859D8A] border-dotted py-2 px-4">Out of Home</div></li>
                  <li className="!border-b-0"><div className="border-l border-[#859D8A] border-dotted py-2 px-4">HORECA</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

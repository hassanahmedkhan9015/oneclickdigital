"use client";
import React from "react";
import Slider from "./Slider";
import Auto from "@public/assets/Hero/auto.svg";
import Travel from "@public/assets/Hero/travel.svg";
import Health from "@public/assets/Hero/health.svg";
import Family from "@public/assets/Hero/family.svg";
import Image from "next/image";
import "@/app/globals.css";
const HeroMain = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-10 hero-main">
        {/* Carousel */}
        <div className="m-auto">
          <Slider />
        </div>
        {/* Card Part */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div>
            <p className="text-black text-2xl font-semibold font-sans">
              Let&apos;s find the
            </p>
            <h1 className="text-4xl text-neutral-500 font-extrabold mt-3 font-sans">
              Best <span className="text-blue-500">1ClickDigital Plan</span>
            </h1>
            <p className="mt-1 text-gray-600 font-sans font-semibold">
              Pakistan&apos;s only Digital OneClickDigital Solution for All
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-5">
              {/* Auto */}
              <div className="w-24 h-24 flex flex-col justify-center text-gray-800 hover:border-blue-400 items-center relative rounded-xl overflow-hidden border border-gray-300 group bg-neutral-50 shadow-md duration-500">
                <Image
                  src={Auto}
                  className="absolute z-10 w-full blur-md fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105"
                  alt="auto_image"
                />
                <div className="z-20 flex flex-col justify-center items-center">
                  <span className="font-semibold font-sans text-lg ml-2 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                    Auto
                  </span>
                </div>
              </div>

              {/* Travel */}
              <div className="w-24 h-24 flex flex-col justify-center text-gray-800 hover:border-blue-400 items-center relative rounded-xl overflow-hidden border border-gray-300 group bg-neutral-50 shadow-md duration-500">
                <Image
                  src={Travel}
                  className="absolute z-10 w-full blur-md fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105"
                  alt="travel_icon"
                />
                <div className="z-20 flex flex-col justify-center items-center">
                  <span className="font-semibold font-sans text-lg ml-2 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                    Travel
                  </span>
                </div>
              </div>

              {/* Health */}
              <div className="w-24 h-24 flex flex-col justify-center text-gray-800 hover:border-blue-400 items-center relative rounded-xl overflow-hidden border border-gray-300 group bg-neutral-50 shadow-md duration-500">
                <Image
                  src={Health}
                  className="absolute z-10 w-full blur-md fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105"
                  alt="health_icon"
                />
                <div className="z-20 flex flex-col justify-center items-center">
                  <span className="font-semibold font-sans text-lg ml-2 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                    Health
                  </span>
                </div>
              </div>

              {/* Family */}
              <div className="w-24 h-24 flex flex-col justify-center text-gray-800 hover:border-blue-400 items-center relative rounded-xl overflow-hidden border border-gray-300 group bg-neutral-50 shadow-md duration-500">
                <Image
                  src={Family}
                  className="absolute z-10 w-full blur-md fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105"
                  alt="family_icon"
                />
                <div className="z-20 flex flex-col justify-center items-center">
                  <span className="font-semibold font-sans text-lg ml-2 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                    Family
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroMain;

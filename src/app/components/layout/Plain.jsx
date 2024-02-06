import Image from "next/image";
import React from "react";
import partner1 from "@public/assets/Slider/partner1.png";
import partner2 from "@public/assets/Slider/partner2.jpeg";
import partner3 from "@public/assets/Slider/partner3.jpeg";
import partner4 from "@public/assets/Slider/partner4.png";
import partner5 from "@public/assets/Slider/partner5.png";
import partner6 from "@public/assets/Slider/partner6.png";
import partner7 from "@public/assets/Slider/partner8.jpeg";
import "@/app/globals.css";

const Plains = () => {
  return (
    <>
      <div className="slider-container overflow-hidden  max-w-4xl m-auto mb-10 plain-bg ">
        <div className="text-center mb-8">
          <h1 className="text-blue-400 text-lg font-sans mb-3">
            Our Community
          </h1>
          <h1 className="text-3xl font-bold text-gray-600 font-sans">
            {" "}
            OUR PROUD PARTNERS
          </h1>
        </div>
        <div className="slider flex">
          <div className="slide w-full flex justify-center items-center">
            <Image src={partner1} />
          </div>
          <div className="slide w-full flex justify-center items-center">
            <Image src={partner2} />
          </div>
          <div className="slide w-full flex justify-center items-center">
            <Image src={partner3} />
          </div>
          <div className="slide w-full flex justify-center items-center">
            <Image src={partner4} />
          </div>
          <div className="slide w-full flex justify-center items-center">
            <Image src={partner5} />
          </div>
          <div className="slide w-full flex justify-center items-center">
            <Image src={partner6} />
          </div>
          <div className="slide w-full flex justify-center items-center">
            <Image src={partner7} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plains;

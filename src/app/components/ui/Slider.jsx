import { useState, useEffect } from "react";
import Image from "next/image";
// import SlideOne from "@public/assets/Hero/heroone.svg";
import SlideTwo from "@public/assets/Hero/herotwo.svg";
import SlideThree from "@public/assets/Hero/herothree.svg";
import SlideFour from "@public/assets/Hero/herofour.svg";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [SlideTwo, SlideThree, SlideFour];
  const changeTime = 4000; // Change image every 4 seconds (4000 milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      showNextSlide();
    }, changeTime);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const showNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="slider-container relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === slideIndex ? "visible" : "hidden"}`}
        >
          <Image src={slide}  alt="slide_image"/>
        </div>
      ))}
    </div>
  );
};

export default Slider;

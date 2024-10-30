import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { images } from "./images"; // Import the images array

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  // Determine the number of images to show based on screen size
  const getImagesToShow = () => {
    if (window.innerWidth <= 640) {
      return 1; // Small devices
    } else if (window.innerWidth <= 1024) {
      return 2; // Medium devices
    } else {
      return 3; // Large devices
    }
  };

  const [imagesToShow, setImagesToShow] = useState(getImagesToShow());

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? totalSlides - imagesToShow : currentSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === totalSlides - imagesToShow ? 0 : currentSlide + 1
    );
  };

  // Auto-slide feature
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [currentSlide]);

  // Adjust the number of images to show on window resize
  useEffect(() => {
    const handleResize = () => {
      setImagesToShow(getImagesToShow());
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center py-10">
      <div className="w-full max-w-[1250px] overflow-hidden">
        {/* Left Arrow */}
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute left-6 top-[45%] text-3xl text-gray-900 cursor-pointer z-10 hover:text-gray-500 transform -translate-y-1/2"
        />

        {/* Image Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / imagesToShow)}%)`,
          }}
        >
          {images.map((imageItem) => (
            <div
              key={imageItem.id}
              className={`w-1/${imagesToShow} flex-shrink-0`}
            >
              <img
                src={imageItem.img}
                alt={`Slide ${imageItem.id}`}
                className="object-cover w-full shadow-md h-[230px]"
              />
              <p className="font-sans">{imageItem.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute right-6 top-[45%] text-3xl text-gray-900 cursor-pointer z-10 hover:text-gray-500 transform -translate-y-1/2"
        />

        {/* Pagination Dots */}
        <div className="relative w-full flex justify-center gap-3">
          {images.slice(0, totalSlides - imagesToShow + 1).map((_, index) => (
            <button
              key={index}
              className={`w-[6px] h-[6px] rounded-full outline-none mt-8 ${
                currentSlide === index ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

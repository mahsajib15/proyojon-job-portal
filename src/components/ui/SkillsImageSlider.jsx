import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, SearchIcon } from "lucide-react";

import bikeService from  "/public/Images/Services/bike-service.jpg";
import carService from  "/public/Images/Services/car-service.jpg";
import desktop from  "/public/Images/Services/desktop.jpg";
import gas from  "/public/Images/Services/gas.jpg";
import electricians from  "/public/Images/Services/electricians.jpg";
import geyser from  "/public/Images/Services/geyser-repair.jpg";


const ImageSlider = () => {
  const images = [
    bikeService,
    carService,
    desktop,
    gas,
    electricians,
    geyser,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mt-24 relative w-full max-w-5xl border rounded-lg p-10 mx-auto container">
      {/* Slider */}
      <div className="relative overflow-hidden rounded-lg h-64 sm:h-72 md:h-80 lg:h-96">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Search Box */}

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg w-full px-4 py-3 bg-white">
            <SearchIcon className="text-red-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Learn & Grow Skills..."
                className="flex-1 focus:outline-none"
              />
            </div>
            <button className="bg-green-500 hover:bg-green-700 rounded-md px-6 py-3 text-white font-semibold">
              Search
            </button>
          </div>

          {/* Popular Categories */}
          <div className="text-white sajibCategory mt-6 text-center">
            <span className="font-medium">Popular:</span>
            <button className="ml-2 border text-white hover:bg-white hover:text-black px-3 py-1 rounded-full font-bold">
              SEO
            </button>
            <button className="ml-2 border text-white hover:bg-white hover:text-black px-3 py-1 rounded-full font-bold">
              Photoshop
            </button>
            <button className="ml-2 border text-white hover:bg-white hover:text-black px-3 py-1 rounded-full font-bold">
              Freelancing
            </button>
            <button className="ml-2 border text-white hover:bg-white hover:text-black px-3 py-1 rounded-full font-bold">
              eCommerce
            </button>
            <button className="ml-2 border text-white hover:bg-white hover:text-black px-3 py-1 rounded-full font-bold">
              Social Media
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
      >
        <ChevronRight />
      </button>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

import { useEffect, useRef, useState } from "react";

const ShopCarosel = () => {
      const sliderRef = useRef(null);
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      useEffect(() => {
        const slider = sliderRef.current;
    
        const interval = setInterval(() => {
          const newIndex = (currentIndex + 1) % slider.children.length;
          setCurrentIndex(newIndex);
          slider.style.transform = `translateX(-${newIndex * 100}%)`;
        }, 3000);
    
        return () => clearInterval(interval);
      }, [currentIndex]);

  return (
    <>
      <div className="w-full max-w-1/2 container mb-10 flex justify-center overflow-hidden relative">
        <div className="w-full relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg">
          <div
            className="flex w-full h-full"
            ref={sliderRef}
            style={{ transition: "transform 0.5s ease" }}
          >
            {[
              "https://img.freepik.com/free-photo/high-angle-hands-with-gloves-working-hard-disk_23-2149413372.jpg?t=st=1735899102~exp=1735902702~hmac=83b0eebefc7ebf529dcf77319771e302e20cef4d8c750faf5a749f6418b3122e&w=996",

              "https://img.freepik.com/free-photo/front-view-man-troubleshooting-computer_23-2148419156.jpg?t=st=1735899291~exp=1735902891~hmac=78325dd0062b1edcfa973fc3bde92bcf63e17300877aed9eb468124beedf130f&w=996",

              "https://img.freepik.com/free-photo/it-person-repairing-hardware-equipment-s_23-2147883619.jpg?t=st=1735899394~exp=1735902994~hmac=203f07b03defd04612f28bfd31032b12e919185836180e8ad66539f7ffd78d65&w=740",

              "https://img.freepik.com/free-photo/close-up-person-repairing-motherboard_23-2148419142.jpg?t=st=1735899466~exp=1735903066~hmac=af0b5245748300c95dc1527ced5c66873b79621afe1c34dbb5373dcc4c5d6408&w=1380",

              "https://img.freepik.com/free-photo/assortment-sorted-tech-objects_23-2148996916.jpg?t=st=1735899589~exp=1735903189~hmac=36c544979962a8263694a09965a75210d21b4e14b75aedda6c3ddc26394a98b5&w=1380",
            ].map((src, index) => (
              <div
                key={index}
                className="w-full bg-cover bg-center flex-shrink-0 h-full"
                style={{ backgroundImage: `url('${src}')` }}
              ></div>
            ))}
          </div>
          {/* Pagination Dots */}
          <div className="absolute bottom-4 w-full flex justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCarosel;

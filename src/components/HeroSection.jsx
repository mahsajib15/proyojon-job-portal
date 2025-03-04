import { useEffect, useState, useRef } from "react";
import SearchSystem from "./ui/SearchSystem";

function HeroSection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  const sliderImages = [
    "https://img.freepik.com/free-photo/male-technician-working-broken-computer_23-2147922177.jpg",
    "https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721551.jpg",
    "https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721551.jpg",
    "https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721551.jpg",
    "https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721551.jpg",
  ];

  useEffect(() => {
    fetch("/ServiceSection.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        setFilteredServices(data.services);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  // Automatic slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [sliderImages.length]);

  // Update slider position
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <>
      <div>
        <div className="relative flex flex-col justify-center items-center mt-36">
          <div className="w-full max-w-4xl relative">
            <SearchSystem />

            {/* Background Image Slider */}
            <div className="flex justify-center overflow-hidden w-full relative">
              <div className="w-full h-full relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg">
                <div
                  className="flex w-full h-full"
                  ref={sliderRef}
                  style={{
                    width: `${sliderImages.length * 100}%`,
                    display: "flex",
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {sliderImages.map((src, index) => (
                    <div
                      key={index}
                      className="w-full bg-cover bg-center flex-shrink-0 h-full"
                      style={{ backgroundImage: `url('${src}')` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

import { useRef } from 'react';

import waterPurifier from '/public/Images/Services/water-purifier.jpg'
import grocery from '/public/Images/Services/grocery.jpg';
import tvRepair from '/public/Images/Services/tv-repair.jpg';
import salons from '/public/Images/Services/salons.jpg';
import bridalRequisite from '/public/Images/Services/jewelry.jpg';
import ecoSolution from '/public/Images/Services/ecomsolution.jpg';
import spaMessage from '/public/Images/Services/spa&messages.jpg';
import acRepair from '/public/Images/Services/ac-service.jpg';
import electritians from '/public/Images/Services/electricians.jpg';
import appDev from '/public/Images/Services/appDev.jpg';


const services = [
  { title: 'Water Purifier Service', color: 'bg-green-700', image: waterPurifier},
  { title: 'Grocery', color: 'bg-orange-500', image: grocery},
  { title: 'TV Repair Service', color: 'bg-green-900', image: tvRepair },
  { title: 'Salons', color: 'bg-rose-800', image:  salons},
  { title: 'Bridal Requisite', color: 'bg-lime-700', image: bridalRequisite },
  { title: 'E-commerce Solutions', color: 'bg-blue-700', image:ecoSolution },
  { title: 'Spa & Massage', color: 'bg-indigo-600', image: spaMessage },
  { title: 'AC Repair', color: 'bg-indigo-600', image: acRepair},
  { title: 'Electricians', color: 'bg-indigo-600', image: electritians },
  { title: 'App Development', color: 'bg-indigo-600', image: appDev }
];

const PopularServices = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto mb-5 relative container">
      <h2 className="font-bold text-2xl mb-8">Popular services</h2>
      <div className="relative flex items-center">
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ◀
        </button>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden w-full"
          style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} text-white w-60 rounded-xl flex flex-col justify-between p-5 min-h-[220px] shadow-lg flex-shrink-0`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <div className="bg-white rounded-lg flex items-center justify-center h-32">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default PopularServices;

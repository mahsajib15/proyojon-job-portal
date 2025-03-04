import acRepair from "../../../src/images/icons/acRepair.png";
import appliances from "../../../src/images/icons/appliances.png";
import beauty from "../../../src/images/icons/beauty.png";
import carRent from "../../../src/images/icons/carRent.png";
import driverService from "../../../src/images/icons/driverService.png";
import flatRent from "../../../src/images/icons/flatRent.png";
import gadgets from "../../../src/images/icons/gadgets.png";
import healthcare from "../../../src/images/icons/healthcare.png";
import maidService from "../../../src/images/icons/maid-service.png";
import mop from "../../../src/images/icons/mop.png";
import plumbing from "../../../src/images/icons/plumbing.png";
import repair from "../../../src/images/icons/repair.png";
import salon from "../../../src/images/icons/salon.png";
import shifting from "../../../src/images/icons/shifting.png";
import spray from "../../../src/images/icons/spray.png";
import travels from "../../../src/images/icons/travels.png";

const services = [
  { name: "AC Repair", icon: acRepair },
  { name: "Home Appliances", icon: appliances },
  { name: "Beauty & Spa", icon: beauty },
  { name: "Car Rent", icon: carRent },
  { name: "Driver Services", icon: driverService },
  { name: "Flat Rent", icon: flatRent },
  { name: "Gadgets", icon: gadgets },
  { name: "Health Care", icon: healthcare },
  { name: "Maid Services", icon: maidService },
  { name: "Cleaning Service", icon: mop },
  { name: "Plumber Service", icon: plumbing },
  { name: "PC Repair", icon: repair },
  { name: "Salons", icon: salon },
  { name: "Home Shifting", icon: shifting },
  { name: "Pest Control", icon: spray },
  { name: "Trips & Travels", icon: travels }
];

const SubHeroSection = () => {
  return (
    <div className="container grid grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="cursor-pointer flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition"
        >
          <img
            src={service.icon}
            alt={service.name}
            className="w-16 h-16 object-contain mb-2"
          />
          <p className="text-sm font-semibold text-center">{service.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SubHeroSection;

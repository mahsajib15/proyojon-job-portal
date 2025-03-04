import { CircleCheck, Lightbulb, MapIcon, MapPin, SearchIcon, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/ServiceSection.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data.services.flatMap((service) => service.items));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const foundService = services.find((service) => service.id === serviceId);
      setServiceData(foundService || {});
    }
  }, [services, serviceId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500">Loading service details...</p>
      </div>
    );
  }

  if (!serviceData || Object.keys(serviceData).length === 0) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-10 mx-auto px-4 py-10 w-3/4">
      <div className="items-center justify-center flex gap-3">
        <div className="w-28 hover:border flex items-center gap-1 text-sm text-white ml-5 h-11 font-bold text-center p-3 rounded-lg cursor-pointer bg-violet-600">
          <span>
            <MapPin />
          </span>
          Noakhali
        </div>
        <div className="relative w-96">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for a service..."
            className="w-full border bg-violet-200 border-red-600 rounded-md px-4 py-2 focus:outline-none"
          />
          <button
            className="absolute right-2 top-1 bg-violet-600 p-2 rounded-md"
          >
            <SearchIcon className="w-4 h-4 text-white text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-white border rounded-lg shadow-md p-6 max-w-3xl mx-auto flex gap-6">
          <img
            src={serviceData.image || "https://via.placeholder.com/100"}
            alt={serviceData.name || "Service Image"}
            className="h-48 w-60 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">
              {serviceData.person}
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-1">
              {serviceData.name || "Service Name"}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <p className="text-red-500 font-semibold text-sm">
                {serviceData.rating || "No rating"}
              </p>
              <span className="text-gray-500 text-sm">
                ({serviceData.reviews || "20"} reviews)
              </span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1 mt-2">
              <CircleCheck className="w-4 h-4" /> Verified
            </button>
            <p className="text-black text-sm flex mt-4">
              <Lightbulb className="text-red-400" /> 10 Years of Experience
            </p>
            <p className="text-black text-sm font-bold flex gap-2 mt-4">
              <MapIcon className="text-red-400" /> Dhaka
            </p>
            <p className="mt-4 text-gray-600">
              {serviceData.description ||
                "No description available for this service."}
            </p>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h4 className="text-lg font-bold">About the Service:</h4>
              <div>
                <p className="mt-2 text-sm text-gray-700">
                  {" "}
                  {serviceData.details || "No additional details available."}
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded font-bold">
                Get a Service
              </button>
              <button className="border border-red-500 hover:bg-red-700 text-black hover:text-white px-4 py-2 rounded font-bold">
                Pricing
              </button>
              <button className="border border-red-500 hover:bg-red-700 text-black hover:text-white px-4 py-2 rounded font-bold">
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}

      <div className="mt-10">
        <div className="bg-white border rounded-lg shadow-md p-6 max-w-3xl mx-auto flex gap-6">
          <img
            src="https://www.clickbd.com/global/classified/item_img/2689467_0_original.jpg"
            alt={serviceData.name || "Service Image"}
            className="h-48 w-60 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Shakib Khan</h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-1">
              {serviceData.name || "Service Name"}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star />
              <p className="text-red-500 font-semibold text-sm">4</p>
              <span className="text-gray-500 text-sm">
                ({serviceData.reviews || "35"} reviews)
              </span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1 mt-2">
              <CircleCheck className="w-4 h-4" /> Verified
            </button>
            <p className="text-black text-sm flex mt-4">
              <Lightbulb className="text-red-400" /> 10 Years of Experience
            </p>
            <p className="text-black text-sm font-bold flex gap-2 mt-4">
              <MapIcon className="text-red-400" /> Chittagong
            </p>
            <p className="mt-4 text-gray-600">
              {serviceData.description ||
                "No description available for this service."}
            </p>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h4 className="text-lg font-bold">About the Service:</h4>
              <p className="mt-2 text-sm text-gray-700">
                {serviceData.details || "No additional details available."}
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                Get a Service
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Pricing
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card */}

      <div className="mt-10">
        <div className="bg-white border rounded-lg shadow-md p-6 max-w-3xl mx-auto flex gap-6">
          <img
            src="https://5.imimg.com/data5/HC/HO/CX/SELLER-75066819/refrigerator-repair-service.png"
            alt={serviceData.name || "Service Image"}
            className="h-48 w-60 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Tawsif Mahbub</h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-1">
              {serviceData.name || "Service Name"}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star />
              <p className="text-red-500 font-semibold text-sm">4</p>
              <span className="text-gray-500 text-sm">
                ({serviceData.reviews || "19"} reviews)
              </span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1 mt-2">
              <CircleCheck className="w-4 h-4" /> Verified
            </button>
            <p className="text-black text-sm flex mt-4">
              <Lightbulb className="text-red-400" /> 10 Years of Experience
            </p>
            <p className="text-black text-sm font-bold flex gap-2 mt-4">
              <MapIcon className="text-red-400" /> Noakhali
            </p>
            <p className="mt-4 text-gray-600">
              {serviceData.description ||
                "No description available for this service."}
            </p>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h4 className="text-lg font-bold">About the Service:</h4>
              <p className="mt-2 text-sm text-gray-700">
                {serviceData.details || "No additional details available."}
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                Get a Service
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Pricing
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="mt-10">
        <div className="bg-white border rounded-lg shadow-md p-6 max-w-3xl mx-auto flex gap-6">
          <img
            src="https://wilshirerefrigeration.com/wp-content/uploads/2020/05/Service-technician-refrigerator-appliance-repair.jpg"
            alt={serviceData.name || "Service Image"}
            className="h-48 w-60 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Mashrafi Bin Mortaza
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-1">
              {serviceData.name || "Service Name"}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <p className="text-red-500 font-semibold text-sm">5</p>
              <span className="text-gray-500 text-sm">
                ({serviceData.reviews || "130"} reviews)
              </span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1 mt-2">
              <CircleCheck className="w-4 h-4" /> Verified
            </button>
            <p className="text-black text-sm flex mt-4">
              <Lightbulb className="text-red-400" /> 10 Years of Experience
            </p>
            <p className="text-black text-sm flex gap-2 mt-4">
              <MapIcon className="text-red-400" /> Chittagong
            </p>
            <p className="mt-4 text-gray-600">
              {serviceData.description ||
                "No description available for this service."}
            </p>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h4 className="text-lg font-bold">About the Service:</h4>
              <p className="mt-2 text-sm text-gray-700">
                {serviceData.details || "No additional details available."}
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                Get a Service
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Pricing
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Card */}
      <div className="mt-10">
        <div className="bg-white border rounded-lg shadow-md p-6 max-w-3xl mx-auto flex gap-6">
          <img
            src="https://easyservicebd.com/wp-content/uploads/2024/02/refiregrator.webp"
            alt={serviceData.name || "Service Image"}
            className="h-48 w-60 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Obaydul Kader</h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-1">
              {serviceData.name || "Service Name"}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star />
              <p className="text-red-500 font-semibold text-sm">4</p>
              <span className="text-gray-500 text-sm">
                ({serviceData.reviews || "50"} reviews)
              </span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1 mt-2">
              <CircleCheck className="w-4 h-4" /> Verified
            </button>
            <p className="text-black text-sm flex mt-4">
              <Lightbulb className="text-red-400" /> 10 Years of Experience
            </p>
            <p className="text-black text-sm flex gap-2 mt-4">
              <MapIcon className="text-red-400" /> Chittagong
            </p>
            <p className="mt-4 text-gray-600">
              {serviceData.description ||
                "No description available for this service."}
            </p>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h4 className="text-lg font-bold">About the Service:</h4>
              <p className="mt-2 text-sm text-gray-700">
                {serviceData.details || "No additional details available."}
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                Get a Service
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Pricing
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Card */}
      <div className="mt-10">
        <div className="bg-white border rounded-lg shadow-md p-6 max-w-3xl mx-auto flex gap-6">
          <img
            src={serviceData.image || "https://via.placeholder.com/100"}
            alt={serviceData.name || "Service Image"}
            className="h-48 w-60 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Mr. Papon</h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-1">
              {serviceData.name || "Service Name"}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star className="text-red-400" />
              <Star />
              <Star />
              <p className="text-red-500 font-semibold text-sm">3</p>
              <span className="text-gray-500 text-sm">
                ({serviceData.reviews || "10"} reviews)
              </span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1 mt-2">
              <CircleCheck className="w-4 h-4" /> Verified
            </button>
            <p className="text-black text-sm flex mt-4">
              <Lightbulb className="text-red-400" /> 10 Years of Experience
            </p>
            <p className="text-black text-sm flex gap-2 mt-4">
              <MapIcon className="text-red-400" /> Chittagong
            </p>
            <p className="mt-4 text-gray-600">
              {serviceData.description ||
                "No description available for this service."}
            </p>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h4 className="text-lg font-bold">About the Service:</h4>
              <p className="mt-2 text-sm text-gray-700">
                {serviceData.details || "No additional details available."}
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                Get a Service
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Pricing
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;

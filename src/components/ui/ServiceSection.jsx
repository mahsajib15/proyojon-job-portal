import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import services from '/public/ServiceSection.json';

function ServiceSection() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/ServiceSection.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data.services);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      });
  }, []);

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <hr />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <div className="col-span-full text-center">
            <div className="loader w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-500">Loading services...</p>
          </div>
        ) : services.length > 0 ? (
          services.map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-4 text-blue-600">
                {section.title}
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer text-center hover:scale-105 transition-transform duration-300"
                    onClick={() => handleServiceClick(item.id)}
                  >
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <p className="mt-2 text-sm font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No services available.</p>
        )}
      </div>
    </div>
  );
}

export default ServiceSection;

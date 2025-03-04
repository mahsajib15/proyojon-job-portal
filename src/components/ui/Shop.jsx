import { useEffect, useState } from "react";
import { MapPin, Search, X } from "lucide-react";
import ShopCarosel from "./ShopCarosel";
import ShopCard from "./ShopCard";
import SideBar from "../shared/SideBar";



const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Departments");
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [showDistricts, setShowDistricts] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("Noakhali");

  useEffect(() => {
    fetch("/ServiceSection.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        setFilteredServices(data.services);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    filterServices("", category);
  };

  const handleSearch = () => {
    filterServices(query, category);
  };

  const filterServices = (searchQuery, selectedCategory) => {
    let filtered = services.map((service) => {
      const filteredItems = service.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (selectedCategory === "All Departments" || service.category === selectedCategory) {
        return { ...service, items: filteredItems };
      }
      return null;
    });

    filtered = filtered.filter((service) => service && service.items.length > 0);
    setFilteredServices(filtered);
  };

  return (
    <>
      <div className="h-36">
        <div className="bg-gray-900 h-36 fixed inset-x-0 z-20 flex justify-center items-center container">
          <div className="mt-40 mb-24 flex items-center border-gray-300 rounded-lg overflow-hidden max-w-2xl">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                filterServices(query, e.target.value);
              }}
              className="bg-gray-100 px-4 py-2 text-sm"
            >
              <option>Category</option>
              <option>Appliance Services</option>
              <option>Daily Needs</option>
              <option>Electronics & Gadgets Services</option>
              <option>Wedding Requisites</option>
              <option>Beauty & Spa</option>
              <option>Health Care</option>
            </select>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search Proyojon"
              className="w-full px-4 py-2 outline-none text-sm"
            />
            {query && (
              <button onClick={clearSearch} className="text-gray-500 hover:text-gray-700 px-2">
                <X size={20} />
              </button>
            )}
            <button onClick={handleSearch} className="bg-yellow-500 hover:bg-red-500 text-white px-4 py-2">
              <Search size={20} />
            </button>
            <div className="hover:border flex items-center gap-1 text-sm text-white ml-5 w-full h-10 text-center p-3 rounded-lg cursor-pointer">
              <span><MapPin /></span>Delivery to {selectedDistrict}
            </div>
          </div>
        </div>
      </div>
      <SideBar />
      <div className="mt-5">
      <ShopCarosel />
      </div>
      <div className="container mt-10 mb-10">
        <ShopCard />
      </div>
    </>
  );
};

export default SearchBar;

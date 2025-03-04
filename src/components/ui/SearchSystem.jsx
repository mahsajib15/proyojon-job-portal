import { useState, useEffect } from "react";
import { MapPin, SearchIcon } from "lucide-react";

function SearchSystem() {
  const [query, setQuery] = useState("");
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("Noakhali");

  const districts = [
    "Dhaka", "Chittagong", "Khulna", "Barisal", "Sylhet", "Rajshahi",
    "Rangpur", "Mymensingh", "Comilla", "Jessore", "Cox's Bazar", "Sirajganj"
  ];

  useEffect(() => {
    fetch("/ServiceSection.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const newSuggestions = services
        .flatMap((section) => section.items)
        .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        .map((item) => item.name)
        .slice(0, 6);

      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    const filtered = services
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((section) => section.items.length > 0);

    setFilteredServices(filtered);
    setSuggestions([]);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setShowDropdown(false);
  };

  return (
    <div className="fixed mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md mx-auto">
      <div className="flex gap-3">
        <div
          className="w-28 hover:border flex items-center gap-1 text-sm text-white ml-5 h-11 font-bold text-center p-3 rounded-lg cursor-pointer bg-violet-600 relative"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>
            <MapPin />
          </span>
          {selectedDistrict}
          {showDropdown && (
            <ul className="absolute top-12 left-0 w-full bg-white border rounded-md shadow-lg z-20">
              {districts.map((district, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDistrictSelect(district)}
                >
                  {district}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative w-96">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a service..."
            className="w-full border bg-violet-200 border-red-600 rounded-md px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1 bg-violet-600 p-2 rounded-md"
          >
            <SearchIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border rounded-md shadow-lg mt-2 z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5">
        {filteredServices.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{section.category}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="ml-4 list-disc">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchSystem;

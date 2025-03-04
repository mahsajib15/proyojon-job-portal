import { useState } from 'react';
import { ChevronDown, ChevronUp, X, Menu } from 'lucide-react';

const categories = [
  {
    name: 'Appliance Services',
    subCategories: ['AC Appliance', 'Refrigerator Appliance', 'Oven Appliance', 'TV Appliance', 'Gas Appliance']
  },
  {
    name: 'Daily Needs',
    subCategories: ['Groceries', 'Electricians', 'Pet Supplies']
  },
  {
    name: 'Electronics & Gadgets',
    subCategories: ['Mobile Repair', 'Computer Services', 'TV Repair', 'Headphones', 'Speaker']
  },
  {
    name: 'Wedding Requisites',
    subCategories: ['Event Planning', 'Catering', 'Photography']
  }
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="flex mt-34">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Categories</h2>
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div>
          {categories.map((category, index) => (
            <div key={index}>
              <div
                onClick={() => toggleCategory(index)}
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-500"
              >
                <span>{category.name}</span>
                {expandedCategory === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {expandedCategory === index && (
                <div className="bg-red-600 pl-6">
                  {category.subCategories.map((sub, subIndex) => (
                    <p
                      key={subIndex}
                      className="py-2 p-4 hover:bg-red-900 rounded-md cursor-pointer"
                    >
                      {sub}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed mt-16 top-0 left-0 z-50 bg-gray-900 text-white h-20 p-5 border-red-500 text-center hover:bg-gray-700"
        >
          <Menu size={28} />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 border-white bg-black opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default SideBar;

import { Star } from "lucide-react"; // Using 'Star' instead of 'StarIcon'
import { useEffect, useState } from "react";

const ShopCard = () => {
  // Shop Card Items Fetch Data..................
  const [shopCardItems, setShopCardItems] = useState([]);

  useEffect(() => {
    fetch("/ShopCard.json")
      .then((res) => res.json())
      .then((data) => {
        setShopCardItems(data.product);
        console.log(data.product);
      })
      .catch((err) => console.error("Error Fetching Products:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-6">
      {shopCardItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
        >
          <div className="h-48 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full p-10 object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
            <div className="flex items-center justify-between mt-3">
              <p className="text-xl font-bold text-red-500">৳{item.price}</p>
              <span className="text-sm text-gray-500">-{item.discount}%</span>
            </div>
            <div className="flex items-center mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < item.ratings ? "text-yellow-400" : "text-gray-300"
                  }
                  fill={i < item.ratings ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between px-6 pb-6">
            <button className=" bg-red-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all text-xs">
              Buy Now
            </button>
            <button className=" bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500 transition-all text-xs">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;

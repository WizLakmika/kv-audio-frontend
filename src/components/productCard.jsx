export default function ProductCard({ item }) {
    return (
      <div className="w-80 bg-white shadow-md rounded-2xl p-4 m-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
        {/* Product Image */}
        <div className="w-full h-48 overflow-hidden rounded-xl">
          <img
            src={item.image[0]}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Product Info */}
        <div className="mt-4 space-y-2 flex-grow">
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.category}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
  
          {/* Price and Availability */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-green-600 font-semibold text-lg">Rs. {item.price}</span>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                item.availability ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {item.availability ? "Available" : "Out of Stock"}
            </span>
          </div>
        </div>
  
        {/* View Details Button */}
        <div className="mt-4">
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
            onClick={() => alert(`Viewing details for: ${item.name}`)} // You can replace this with navigation
          >
            View Details
          </button>
        </div>
      </div>
    );
  }
  
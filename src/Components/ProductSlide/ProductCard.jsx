/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";

const ProductCard = (props) => {
  const { id, title, image, price, visible } = props;
  return (
    <div>
      <div className="bg-gray-200 rounded-md relative overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={image}
          alt="Product Image"
        />
        {/* more and favorite button in hove */}
        <div className="absolute  group-hover:right-5 group-hover:top-5 ">
          <CiHeart
            className="bg-white p-1 rounded-md mb-2 cursor-pointer"
            size={30}
            color="black"
          />
          <LuArrowLeftRight
            className="bg-white text-gray-700 p-1 rounded-md cursor-pointer"
            size={30}
          />
        </div>

        {/* add to cart button */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 ${
            visible === id
              ? "-translate-y-16 duration-300"
              : "translate-y-0 duration-300"
          }`}
        >
          <button className=" bg-white text-[#171e3c] rounded-lg text-sm py-2 w-[150px] font-semibold  ">
            Add to Cart
          </button>
        </div>
      </div>
      <span className="absolute top-5 left-6 text-sm px-2  text-white rounded-full bg-[#171e3c]">
        New
      </span>
      <h3 className="text-xl font-medium text-black font-Roboto py-3">
        {title}
      </h3>
      <p className="text-gray-600">
        As low as
        <span className="text-black text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default ProductCard;
// hello

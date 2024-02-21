import { PiShoppingBagOpenThin } from "react-icons/pi";

import { BiSupport } from "react-icons/bi";
import Container from "./Shared/Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";

const OurSupport = () => {
  return (
    <div className="bg-white py-10 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-lg:px-5">
          {/* 1st cart */}
          <div className="flex items-center gap-10 lg:gap-5 p-5 rounded-md">
            <div className="text-3xl text-black border border-black rounded-full p-3">
              <CiDeliveryTruck />
            </div>
            <div>
              <p className="text-black font-semibold pb-2 font-Playfair">Free Shopping</p>
              <p className="leading-5 text-sm text-neutral-400 font-medium font-Roboto">
                Enjoy free shipping on all orders
              </p>
            </div>
          </div>
          {/* 2nd cart */}
          <div className="flex items-center gap-10 lg:gap-5 p-5 rounded-md">
            <div className="text-3xl text-black border border-black rounded-full p-3">
              <PiShoppingBagOpenThin />
            </div>
            <div>
              <p className="text-black font-semibold pb-2 font-Playfair">Product Replace</p>
              <p className="leading-5 text-sm text-neutral-400 font-medium font-Roboto">
                Easy Product Replacement Available!
              </p>
            </div>
          </div>
          {/* 3rd cart */}
          <div className="flex items-center gap-10 lg:gap-5 p-5 rounded-md">
            <div className="text-3xl text-black border border-black rounded-full p-3">
              <TbCurrencyDollar />
            </div>
            <div>
              <p className="text-black font-semibold pb-2 font-Playfair">Emi Available</p>
              <p className="leading-5 text-sm text-neutral-400 font-medium font-Roboto">
                No cost EMI available on all major credit cards
              </p>
            </div>
          </div>
          {/* 4th cart */}
          <div className="flex items-center gap-10 lg:gap-5 p-5 rounded-md">
            <div className="text-3xl text-black border border-black rounded-full p-3">
              <BiSupport />
            </div>
            <div>
              <p className="text-black font-semibold pb-2 font-Playfair">24/7 Support</p>
              <p className="leading-5 text-sm text-neutral-400 font-medium font-Roboto">
                Dedicated 24/7 support via chat and email
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurSupport;

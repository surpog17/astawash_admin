import React from "react";
import { BsCreditCard2Front } from "react-icons/bs";

const Header = () => {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <div className="px-4 py-2">
        <div className="flex items-center gap-10">
          <h1 className="text-lg font-bold text-gray-800 font-archivo">
            Total earning
          </h1>
          <BsCreditCard2Front className="text-secondary text-xl" />
        </div>
        <div className="flex items-center gap-10 pt-3">
          <h1 className="text-3xl font-bold text-gray-800 font-archivo">
            $22.800.50
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

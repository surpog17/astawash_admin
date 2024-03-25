import React from "react";
import { FaCarSide } from "react-icons/fa6";

const CardReport = () => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden md:my-5 mt-4 z-1">
      <div className="absolute left-0 bottom-11 px-6 py-6 rounded-lg bg-gray-100 z-10">
        <FaCarSide className="text-black text-4xl" />
      </div>
      <div className="px-4 py-8">
        <div className="flex flex-col items-end      ">
          <h1 className="text-lg font-light text-[#344767]font-archivo ">
            Total Cars
          </h1>
          <p className="text-2xl font-bold text-[#344767] font-archivo ">
            1222
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardReport;

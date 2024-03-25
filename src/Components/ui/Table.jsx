import React from "react";
import Input from "../Fields/Input";
import NoRecords from "./NoRecords";

export default function Table({ data = [] }) {
  return (
    <div className="bg-white">
      {data?.length ? (
        <>
          <div className="flex gap-5 items-center  border-b-2 border-gray-400 w-full p-5 font-archivo mb-2">
            <div className="w-10">
              <Input type={"checkbox"} className="w-5 h-5" />
            </div>
            <div className="w-45">image</div>
            <div className="w-96">name</div>
            <div className="w-96">Date</div>
          </div>
          {data?.map((items) => (
            <div className="flex gap-5 items-center bg-white border-b-[1px] border-gray-400 w-full p-5 font-archivo">
              <div className="w-10">
                <Input type={"checkbox"} className="w-4 h-4" />
              </div>

              <div className="w-45">
                {items?.imageUrl ? (
                  <img
                    alt="tania andrew"
                    src={items?.imageUrl}
                    className=" inline-block object-cover  md:w-9 md:h-9 w-32 h-10 rounded-full cursor-pointer"
                    data-popover-target="profile-menu"
                  />
                ) : (
                  <div className="w-9 h-9 bg-secondary text-yellow-400 text-center text-sm rounded-full flex justify-center items-center">
                    {items?.name[0]}
                  </div>
                )}
              </div>
              <div className="w-96">{items?.name}</div>
              <div className="w-96">{items?.date}</div>
            </div>
          ))}
        </>
      ) : (
        <NoRecords title={"Users"} />
      )}
    </div>
  );
}

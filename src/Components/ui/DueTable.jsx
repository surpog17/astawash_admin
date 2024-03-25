import React from "react";
import NoRecords from "./NoRecords";

export default function DueTable({ title = "Due This week", data = [] }) {
  return (
    <div>
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden md:my-5 mt-4 z-1 pb-2">
        <div className="">
          <div className="text-start px-4 py-8">
            <h1 className="text-lg font-bold text-[#344767] font-archivo ">
              {title}
            </h1>
          </div>
          <div className="flex justify-between items-center px-4 py-8     ">
            <p className="text-sm font-bold text-[#344767] font-archivo ">
              Name
            </p>
            <p className="text-sm font-bold text-[#344767] font-archivo">
              Type
            </p>
          </div>
          {data?.length ? (
            <>
              {data?.map((items) => (
                <div className="flex justify-between items-center m-2 border-t-[1px] border-b-[1px] border-gray-400 py-2 ">
                  <div className="flex items-center gap-2">
                    <img
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      className=" inline-block object-cover object-center w-9 h-9 rounded-full cursor-pointer"
                      data-popover-target="profile-menu"
                    />
                    <p className="text-sm font-bold text-[#344767] font-archivo">
                      {items?.name}
                    </p>
                  </div>

                  <p className="text-sm font-bold text-[#344767] font-archivo">
                    {items?.type}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <NoRecords title={"Due"} />
          )}
        </div>
      </div>
    </div>
  );
}

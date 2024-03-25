import React from "react";
import Notifications from "./Notifications";
import ProfileMenu from "./ProfileMenu";
export default function NavBar({ toggleTextVisibility }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white ">
      <div className="px-3  lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between gap-5">
          {/* Logo and sidebar toggle button */}
          <div className="flex items-center justify-start rtl:justify-end">
            <div className="flex ms-2 md:me-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
                onClick={() => toggleTextVisibility()}
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white font-archivo hidden md:block">
                Astawash
              </span>
            </div>
          </div>
          {/* User profile button and dropdown */}
          <div className="flex items-center md:w-96 gap-5">
            <Notifications />
            <div className="border-r-2 border-gray-400 h-6 w-2"></div>
            <ProfileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

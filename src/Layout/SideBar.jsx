import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { TbReport } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

export default function SideBar({ children, hideText }) {
  const path = useLocation()?.pathname;

  return (
    <div>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 ${
          hideText ? "w-16" : "w-64" // Set the width based on hideText state
        } h-screen pt-20 transition-transform ${
          hideText ? "-translate-x-full" : "translate-x-0"
        } bg-white sm:translate-x-0 duration-300 ease-in-out`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white  font-archivo">
          <p className={`font-semibold ${hideText && "text-[9px]"}`}>Menu</p>
          <ul className="space-y-2 font-medium mb-5">
            <li>
              <NavLink
                to="/"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <MdDashboard className="w-5 h-5" />
                <span
                  className={`ms-3 ${
                    hideText ? "hidden" : ""
                  } whitespace-nowrap`}
                >
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/users"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <CiUser className="w-5 h-5" />
                <span
                  className={`ms-3 ${
                    hideText ? "hidden" : "block"
                  } whitespace-nowrap`}
                >
                  Users
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/reports"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <TbReport className="w-5 h-5" />
                <span className={`ms-3 ${hideText && "hidden"}`}>Report</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/transactions"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <AiOutlineTransaction className="w-5 h-5" />
                <span className={`ms-3 ${hideText && "hidden"}`}>
                  Transactions
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/statistics"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <IoStatsChart className="w-5 h-5" />
                <span className={`ms-3 ${hideText && "hidden"}`}>
                  Statistics
                </span>
              </NavLink>
            </li>
          </ul>
          <p className={`font-semibold ${hideText && "text-[9px]"}`}>
            Miscellaneous
          </p>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/calender"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/calender"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <IoCalendarOutline className="w-5 h-5" />
                <span className={`ms-3 ${hideText && "hidden"}`}>Calendar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mails"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/mails"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <IoMailOutline className="w-5 h-5" />
                <span className={`ms-3 ${hideText && "hidden"}`}>Mails</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/support"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100  text-gray-400"
                } group`}
              >
                <RiErrorWarningLine className="w-5 h-5" />
                <span className={`ms-3 ${hideText && "hidden"}`}>Support</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={`flex items-center p-2 text-gray-900 rounded-lg ${
                  location.pathname === "/settings"
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100 text-gray-400"
                } group`}
              >
                <IoSettingsOutline className="w-5 h-5 " />
                <span className={`ms-3 ${hideText && "hidden"}`}>Setting</span>
              </NavLink>
            </li>
            <li>
              <button
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group w-full"
              >
                <RiLogoutCircleRLine className="w-5 h-5" />
                <span className={`ms-3 ${hideText && "hidden"}`}>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div
        className={`sm:ml-${
          hideText ? "20" : "64"
        } bg-primary min-h-screen transition-all duration-300 ease-in-out`}
      >
        <div className={`p-4 mt-14 ${hideText ? "md:ml-20 " : "md:ml-64"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

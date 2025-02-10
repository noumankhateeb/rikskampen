"use client";

import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleHamburger } from "@/store/Navbar/Navbar-Slice";
import { useState, useRef, useEffect } from "react";
import { PiBell, PiBellDuotone, PiGearDuotone, PiPulseDuotone, PiSignOut, PiUserDuotone } from "react-icons/pi";
import { setActiveMenu } from "@/store/Sidebar/Sidebar-Slice";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useDispatch();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const notificationDropdownRef = useRef<HTMLDivElement>(null);

  const handleHamburgerClick = () => {
    dispatch(toggleHamburger());
    dispatch(setActiveMenu(null));
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }

      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target as Node)
      ) {
        setIsNotificationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 shadow flex items-center justify-between p-4 h-16">
      <div className="flex items-center gap-2">
        <FiMenu
          size={24}
          className="cursor-pointer"
          onClick={handleHamburgerClick}
        />
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4 relative">

        {/* Notification Icon */}
        <div className="relative">
          <PiBellDuotone
            size={24}
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={toggleNotificationDropdown}
          />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>

          {isNotificationDropdownOpen && (
            <div
              ref={notificationDropdownRef}
              className="absolute right-0 mt-2 w-72 p-3 bg-white shadow-lg rounded-lg border border-gray-200 z-10"
            >
              <h3 className="text-sm font-bold text-gray-800 mb-2">Notifications</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2 p-2 border-b border-gray-200">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Jeremiah Minsk <span className="text-gray-600">mentioned you in a comment.</span>
                    </p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2 border-b border-gray-200">
                  <img
                    src="https://randomuser.me/api/portraits/women/40.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Max Alexander <span className="text-gray-600">invited you to a new project.</span>
                    </p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    📅
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Please submit your daily report.</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
              </div>
              <button className="mt-3 w-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2">
                View All Activity
              </button>
            </div>
          )}
        </div>

        <PiGearDuotone
          size={24}
          className="cursor-pointer text-gray-600 hover:text-black"
        />

        {/* Profile Icon */}
        <div className="relative">
          <div
            onClick={toggleProfileDropdown}
            className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center text-black font-semibold cursor-pointer"
          >
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>

          {isProfileDropdownOpen && (
            <div
              ref={profileDropdownRef}
              className="absolute right-0 mt-2 w-max min-w-40 p-3 bg-white shadow-lg rounded-lg border border-gray-200 z-10"
            >
              {/* Profile Section with Image */}
              <div className="flex items-center gap-2 p-2">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-bold text-gray-800">Angelina Gotelli</p>
                  <p className="text-xs text-gray-500">admin-01@ecme.com</p>
                </div>
              </div>

              <hr className="my-2 border-t border-gray-200" />

              <div>
                <ul>
                  <Link href="/edit-profile">
                    <li className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-black cursor-pointer flex items-center gap-2 h-10">
                      <PiUserDuotone size={20} />
                      Profile
                    </li>
                  </Link>
                  <li className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-black cursor-pointer flex items-center gap-2 h-10">
                    <PiGearDuotone size={20} />
                    Account Settings
                  </li>
                  <li className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-black cursor-pointer flex items-center gap-2 h-10">
                    <PiPulseDuotone size={20} />
                    Activity Log
                  </li>

                  <hr className="my-2 border-t border-gray-200" />

                  <li className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-black hover:bg-gray-100 cursor-pointer flex items-center gap-2 h-10">
                    <PiSignOut size={20} />
                    Sign Out
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

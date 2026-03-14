"use client";
import { useState, useEffect } from "react";
import user from "@/public/user.jpg";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCommentDots,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Navbar({ setIsOpen }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
    setNotificationOpen(false);
  };

  const toggleNotification = () => {
    setNotificationOpen(!isNotificationOpen);
    setUserMenuOpen(false);
  };

  // Kənara klikləyəndə menuları bağlamaq üçün
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user") && !e.target.closest(".notification")) {
        setUserMenuOpen(false);
        setNotificationOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="bg-white h-22.5 shadow-lg flex justify-between items-center gap-3 px-[2%]">
        <div className="search-box border border-[#dfe0e4] relative h-11.25 hidden lg:flex items-center rounded-full w-70 outline-none">
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full ps-4 outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute bg-[#006dca] text-white right-0.5 p-3 rounded-[50%]"
          />
        </div>

        <div
          className="toggle lg:hidden flex cursor-pointer text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="flex gap-3 items-center">
          <span className="border border-[#006dca] hover:bg-[#006dca] hover:text-white px-4 rounded-full py-2 cursor-pointer transition-colors duration-300 hidden lg:flex">
            Create a New Course
          </span>

          {/* Notification */}
          <div
            className="notification cursor-pointer border border-[#c1c4cc] rounded-full min-w-11.25 hidden lg:flex justify-center items-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300"
            onClick={toggleNotification}
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="badge text-xs text-white bg-[#006dca] px-1 rounded-2xl absolute top-0 right-0">
              2
            </span>

            {isNotificationOpen && (
              <ul className="fixed top-20 right-5 bg-white w-87.5 p-3 flex flex-col gap-2 rounded-2xl shadow-xl animate-fade-in z-9999">
                <li className="text-sm text-gray-700">
                  <Link
                    href="/"
                    className="w-full flex justify-between items-start"
                  >
                    <div className="flex items-start gap-2">
                      <Image
                        src={user}
                        alt="user image"
                        className="w-14 h-14"
                      />
                      <div>
                        <span className="text-[#212529] sora-font text-lg">
                          Ronald Richard
                        </span>
                        <p className="text-[#4f586d] text-xs">
                          You can stitch between artboards
                        </p>
                      </div>
                    </div>
                    <span className="text-[#4f586d] text-xs font-medium">
                      23 Mins ago
                    </span>
                  </Link>
                </li>
                <li className="text-sm text-gray-700">
                  <Link
                    href="/"
                    className="w-full flex justify-between items-start"
                  >
                    <div className="flex items-start gap-2">
                      <Image
                        src={user}
                        alt="user image"
                        className="w-14 h-14"
                      />
                      <div>
                        <span className="text-[#212529] sora-font text-lg">
                          Ronald Richard
                        </span>
                        <p className="text-[#4f586d] text-xs">
                          You can stitch between artboards
                        </p>
                      </div>
                    </div>
                    <span className="text-[#4f586d] text-xs font-medium">
                      23 Mins ago
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="comment cursor-pointer border border-[#c1c4cc] rounded-[50%] min-w-11.25 min-h-11.25 hidden lg:flex justify-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>

          <div
            className="user cursor-pointer rounded-[50%] w-12.5 h-12.5 flex justify-center items-center relative"
            onClick={toggleUserMenu}
          >
            <Image
              src={user}
              alt="user-image"
              className="w-full h-full relative"
            />

            {isUserMenuOpen && (
              <ul className="fixed top-20 right-5 bg-white w-50 p-3 flex flex-col gap-3 rounded-2xl shadow-xl animate-fade-in z-9999">
                <li>
                  <Link
                    href="/profile"
                    className="text-md hover:text-[#006dca] transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="pe-2" />
                  </Link>
                  My Profile
                </li>
                <li>
                  <Link
                    href="/settings"
                    className="text-md hover:text-[#006dca] transition-colors duration-300"
                  >
                    <i className="ri-settings-5-line pe-2 text-[18px]"></i>
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logout"
                    className="text-md hover:text-[#006dca] transition-colors duration-300"
                  >
                    <i className="ri-shut-down-line pe-2 text-[18px]"></i>
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

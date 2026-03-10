import {
  faBookmark,
  faClipboard,
  faHome,
  faMessage,
  faStar,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`h-100vh w-[320px] min-h-screen pb-0 p-5 sidebar bg-white 
            shadow-xl fixed lg:relative transition-transform duration-300 z-50 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="nav-logo text-center py-2">
          <Link href="/" className="cursor-pointer">
            <h1 className="text-3xl font-semibold font-unbounded">
              Learn<span className="text-[#066dca] font-unbounded">Hub</span>
            </h1>
          </Link>
        </div>
        <span className="h-[1.5px] bg-[#dfe0e4] w-full block my-2"></span>
        <p className="text-neutral-500 font-sora tracking-wide py-3">
          Welcome Henry
        </p>
        <ul
          className="flex flex-col gap-3 sidebar-nav relative z-20 
        overflow-y-scroll"
        >
          <li
            className="py-4 px-4 rounded-xl active text-neutral-500
            font-sora transition-colors duration-300"
          >
            <Link href="/Dashboard" className="text-md">
              <FontAwesomeIcon
                icon={faHome}
                className="pe-2 text-[#066dca]
                transition-colors duration-300"
              />
              Dashboard
            </Link>
          </li>
          <li
            className="py-4 px-4 rounded-xl text-neutral-500
            font-sora transition-colors duration-300"
          >
            <Link href="/Profile" className="text-md">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="pe-2 text-[#066dca]
                transition-colors duration-300"
              />
              My Profile
            </Link>
          </li>
          <li
            className="py-4 px-4 rounded-xl text-neutral-500
            font-sora transition-colors duration-300"
          >
            <Link href="/Message" className="text-md">
              <FontAwesomeIcon
                icon={faMessage}
                className="pe-2 text-[#066dca]
                transition-colors duration-300"
              />
              Message
            </Link>
          </li>
          <li
            className="py-4 px-4 rounded-xl text-neutral-500
            font-sora transition-colors duration-300"
          >
            <Link href="/Courses" className="text-md">
              <FontAwesomeIcon
                icon={faClipboard}
                className="pe-2 text-[#066dca]
                transition-colors duration-300"
              />
              Courses
            </Link>
          </li>
          <li
            className="py-4 px-4 rounded-xl text-neutral-500
            font-sora transition-colors duration-300"
          >
            <Link href="/Wishlist" className="text-md">
              <FontAwesomeIcon
                icon={faBookmark}
                className="pe-2 text-[#066dca]
                transition-colors duration-300"
              />
              Wishlist
            </Link>
          </li>
          <li
            className="py-4 px-4 rounded-xl text-neutral-500
            font-sora transition-colors duration-300"
          >
            <Link href="/Reviews" className="text-md">
              <FontAwesomeIcon
                icon={faStar}
                className="pe-2 text-[#066dca]
                transition-colors duration-300"
              />
              Reviews
            </Link>
          </li>

          <p
            className="text-neutral-500 font-sora tracking-wide 
          py-3"
          >
            Admin
          </p>
          <ul className="flex sidebar-nav flex-col gap-3">
            <li
              className="py-4 px-4 rounded-xl text-neutral-500 font-sora
             trasition-colors duration-300"
            >
              <Link href="/Settings" className="text-md">
                <FontAwesomeIcon
                  icon={faStar}
                  className="pe-2 text-[#066dca]
                transition-colors duration-300"
                />
                <i className="ri-settings-5-line pe-2 text-[#066dca] text-[20px] transition-colors duration-300"></i>
                Settings
              </Link>
            </li>
          </ul>
        </ul>

        <ul
          className="flex sidebar-nav flex-col justify-end items-start gap-3
        absolute bottom-0 left-0 right-0 w-full p-5 pb-2"
        >
          <li
            className="py-4 px-4 rounded-xl active text-neutral-500
            font-sora transition-colors duration-300"
          >
            <Link href="/logout" className="text-md">
              <i
                className="ri-logout-box-r-line pe-2 text-[#066dca]
              text-[20px] transition-colors duration-300 w-full"
              ></i>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen h-100vh overflow-y-hidden">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex-1 bg-gray-100 h-screen min-h[100vh] overflow-y-scroll">
          <Navbar setIsOpen={setIsOpen} />
          <div className="main-content p-5 bg-[#f3f8fe]">
            <Main />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

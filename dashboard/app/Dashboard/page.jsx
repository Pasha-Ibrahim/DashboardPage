"use client";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import main from "./Components/Main";

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen h-100vh overflow-y-hidden">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

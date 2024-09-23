"use client";
import React, { useState,useEffect } from "react";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Automatically close menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    // <div className="bg-red-500">
    <header className="w-11/12 m-auto">
      <div className="flex gap-8 md:h-24 md:items-center">
        <div className="w-[80%] md:w-3/6 md:p-4">
          <h1 className="font-extrabold text-xl">Fahad</h1>
        </div>
        <nav className="w-3/6 p-4">
          <ul className="hidden md:flex justify-end gap-12">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <AlignJustify onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile navigation that pushes content */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto' : 'h-0'}`}>
        <nav className="w-full p-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // </div>
  );
};

export default Navbar;

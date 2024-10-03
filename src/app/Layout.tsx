import { Link, Outlet } from "react-router-dom";

import navLogo from "../assets/img/logo.png";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl m-auto flex flex-row justify-between items-center">
          <img src={navLogo} alt="nav logo" className="w-16 h-16" />

          <ul className="flex flex-row gap-10">
            <Link
              to={"/"}
              className="text-sm hover:text-blue-800 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-sm hover:text-blue-800 cursor-pointer"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="text-sm hover:text-blue-800 cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to={"/challenge"}
              className="text-sm hover:text-blue-800 cursor-pointer"
            >
              Challenge
            </Link>
          </ul>
        </div>
      </nav>

      <Outlet />

      <footer className="bg-zinc-800">
        <div className="max-w-7xl m-auto py-12">
          <h5 className="text-white mb-4">Business Info</h5>
          <div className="flex flex-row gap-2">
            <FaLocationDot className="text-zinc-300 text-md" />
            <div className="text-zinc-500 text-sm">
              <h6>Office Representative:</h6>
              <p>
                JDC Buliding 6th Floor, Jl. Gatot Subroto Kav. 53 Jakarta 10260
              </p>
              <h6>Workshop:</h6>
              <p>
                JL. Kafi II Komplek Mabad II , Kel.Srengseng Sawah Kec.
                Jagakarsa , Jakarta Selatan
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <IoMail className="text-zinc-300 text-md" />
            <h6 className="text-zinc-400 text-sm">info@mksolusi.id</h6>
          </div>
        </div>

        <div className="bg-zinc-900">
          <div className="flex flex-row justify-between max-w-7xl m-auto py-4 text-zinc-500">
            <h6 className="text-sm">
              Copyright Multi Karya Solusi @2024 - All Rights Reserved
            </h6>

            <ul className="flex flex-row gap-10">
              <Link
                to={"/"}
                className="text-sm hover:text-blue-800 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to={"/contact"}
                className="text-sm hover:text-blue-800 cursor-pointer"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

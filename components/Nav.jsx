"use client";

import Img from "../public/assets/images/logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
const Nav = () => {
  const [toggleDropdown, settoggleDropdown] = useState(false);
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <nav className={`relative w-full p-4 ${stickyClass}`}>
      <div className={`flex-between w-full   `}>
        <Link
          to="/"
          className="flex gap-2 flex-center"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Image
            src={Img}
            alt="Promptopia Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Promptopia</p>
        </Link>
        {/* Desktop Navigation */}
        <div className="md:flex hidden">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="font-medium text-base text-black cursor-pointer"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                className="font-medium text-base text-black cursor-pointer"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="priceing"
                className="font-medium text-base text-black cursor-pointer"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Priceing
              </Link>
            </li>
            <li>
              <Link
                to="client"
                className="font-medium text-base text-black cursor-pointer"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Client
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="font-medium text-base text-black cursor-pointer"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Latest Post
            </Link>
            <button type="button" className="outline_btn">
              Get Started
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden flex relative shadow-sm">
          <div className="flex">
            {/* toggle button */}
            {toggleDropdown ? (
              <button
                type="button"
                onClick={() => settoggleDropdown((prev) => !prev)}
              >
                <IoClose size={35} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => settoggleDropdown((prev) => !prev)}
              >
                <BiMenuAltLeft size={35} />
              </button>
            )}
            {/* <label for="check">
              <input
                type="checkbox"
                id="check"
                onClick={() => settoggleDropdown((prev) => !prev)}
              />
              <span></span>
              <span></span>
              <span></span>
            </label> */}

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  to="/"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  to="services"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Services
                </Link>
                <Link
                  to="priceing"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Priceing
                </Link>
                <Link
                  to="client"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Client
                </Link>
                <Link
                  to="contact"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}
                >
                  Contact
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    settoggleDropdown(false);
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

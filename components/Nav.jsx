"use client";
import Link from "next/link";
import Img from "../public/assets/images/logo.svg";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [toggleDropdown, settoggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
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
            <Link href="/home" className="font-medium text-base text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-medium text-base text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/priceing" className="font-medium text-base text-black">
              Priceing
            </Link>
          </li>
          <li>
            <Link href="/Client" className="font-medium text-base text-black">
              Client
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-medium text-base text-black">
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
          <label for="check">
            <input
              type="checkbox"
              id="check"
              onClick={() => settoggleDropdown((prev) => !prev)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>

          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/home"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                About
              </Link>
              <Link
                href="/priceing"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Priceing
              </Link>
              <Link
                href="/client"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Client
              </Link>
              <Link
                href="/contact"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
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
    </nav>
  );
};

export default Nav;

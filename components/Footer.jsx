import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/images/logo.svg";
const Footer = () => {
  return (
    <section className="w-full  border-t-2 ">
      <div className="max-w-[500px] m-auto mt-7">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 font-bold text-[20px] mb-7"
        >
          <Image src={logo} className="w-[30px] h-[30px]" />
          Promptopia Landing
        </Link>
        <ul className="flex gap-6 justify-center items-center mb-5">
          <li>
            <Link
              href="/home"
              className=" text-base text-black hover:text-[#EA3A60]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className=" text-base text-black hover:text-[#EA3A60]"
            >
              Adversite
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className=" text-base text-black hover:text-[#EA3A60]"
            >
              Supports
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className=" text-base text-black hover:text-[#EA3A60]"
            >
              Marketing
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className=" text-base text-black hover:text-[#EA3A60]"
            >
              Contact
            </Link>
          </li>
        </ul>
        <h3 className="text-[16px] text-black text-center mb-10">
          Copyright by 2023 Sabbir Hossain
        </h3>
      </div>
    </section>
  );
};

export default Footer;

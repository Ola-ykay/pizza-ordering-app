"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const NavContent = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return (
      <div>
        <div className="block md:hidden ms-[20%] z-[30]">
          {showMenu ? (
            <FaTimes
              onClick={toggleMenu}
              className="w-10 h-10 absolute top-5 right-5 z-50 text-white"
            />
          ) : (
            <FaBars onClick={toggleMenu} className="w-10 h-10" />
          )}
        </div>
        {showMenu ? (
          <div className="fixed inset-0 bg-yellow-800 z-40 flex justify-center items-center">
            <ul className="text-white text-center">
              <li className="uppercase text-md py-4">
                <Link href="/">Home</Link>
              </li>
              <li className="uppercase text-md py-4">
                <Link href="/products">Products</Link>
              </li>
              <li className="uppercase text-md py-4">
                <Link href="/">Pages</Link>
              </li>
              <li className="uppercase text-md py-4">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="uppercase text-md py-4">
                <Link href="/">Contact</Link>
              </li>
              <div className="flex items-center gap-5 ml-6">
                <FaSearch className="hidden md:block w-6 h-6" />
                <FaShoppingCart className="text-blue-500 h-8 w-8 items-center" />
                <span className="absolute right-6 top-4 lg:right-8 text-xs text-white bg-red-600 rounded-full px-2 py-1 relative top-[-3px]">
                  0
                </span>
              </div>
            </ul>
          </div>
        ) : (
          <ul className="hidden md:flex md:gap-10 md:items-center md:h-full md:font-bold md:cursor-pointer md:mt-">
            <li className="md:block uppercase text-md">
              <Link href="/">Home</Link>
            </li>
            <li className="md:block uppercase text-md">
              <Link href="/products">Products</Link>
            </li>
            <li className="md:block uppercase text-md">
              <Link href="/">Pages</Link>
            </li>
            <li className="md:block uppercase text-md">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="md:block uppercase text-md">
              <Link href="/">Contact</Link>
            </li>

            <div className="flex items-center gap-5">
              <FaSearch className="hidden md:block w-6 h-6" />
              <FaShoppingCart className="text-blue-500 h-8 w-8" />
              <span className="absolute right-6 top-[-6px] lg:right-8 text-xs text-white bg-red-600 rounded-full px-2 py-1 md:relative right-6 top-[-2px]">
                0
              </span>
            </div>
          </ul>
        )}
      </div>
    );
  };

  return (
    <>
      <nav className="sticky top-0 inset-x-0 bg-white z-[100]">
        <div className="w-full max-w-[1440px] h-[100px] px-6">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Image
                src="/Images/pizza-logo.png"
                alt="pizzon"
                height={60}
                width={50}
                className="self-center h-[48px] w-[53px] md:h-20 md:w-20"
              />
            </Link>

            <Image
              src="/Images/pizza-header.png"
              alt="header-image"
              height={60}
              width={150}
              className="hidden lg:block self-start w-auto h-auto"
            />
            <div>
              <NavContent />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

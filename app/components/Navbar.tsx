import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, page: "home", sectionId: "home-section" },
    { id: 2, page: "Services", sectionId: "training-section" },
    { id: 3, page: "career choice", sectionId: "career-choice-section" },
    { id: 4, page: "about", sectionId: "about-section" },
    { id: 5, page: "contact", sectionId: "contact" },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNav(false); // Close the mobile nav menu after clicking
    }
  };

  return (
    <nav className=" flex justify-between items-center w-full h-14 px-1 text-white bg-gradient-to-bl from-pink-700 to-pink-100 sticky top-0">
      <div className="px-2">
        <a
          className="link-underline link-underline-black flex flex-row justify-center"
          href="#"
          rel="noreferrer"
        >
          <div className="flex justify-center px-4 items-center opacity-100">
            
            <Image
              src="/logo.jpg" // Use leading slash for relative path
              alt="Consultancy Image"
              width={40} // Set width (adjust as per your design)
              height={40} // Set height (adjust as per your design)
              className="object-fit w-8 lg:w-10 shadow-2xl shadow-zinc-100 rounded-full"
            />
          </div>
          <h1 className="text-md lg:text-xl py-1 uppercase font-bold font-sans text-zinc-50 ">
            Klusaacounting services
          </h1>
        </a>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, page, sectionId }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-pink-100 hover:scale-110 hover:text-pink-900 duration-200 link-underline"
            onClick={() => handleLinkClick(sectionId)}
          >
            {page}
          </li>
        ))}
      </ul>

      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-10 text-zinc-50 md:hidden"
      >
        {nav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-14 right-0 w-auto bg-gradient-to-t from-pink-200 to-pink-500">
          {links.map(({ id, page, sectionId }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-pink-900 hover:scale-110 hover:text-pink-100 duration-200 link-underline"
              onClick={() => handleLinkClick(sectionId)}
            >
              {page}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

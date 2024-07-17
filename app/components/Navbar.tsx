import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/" ,page: "home"},
    { id: 2, link: "/" , page: "accounting" },
    { id: 3, link: "/" , page: "career-choice" },
    { id: 4, link: "/" , page: "taxation" },
    { id: 5, link: "/" , page: "contact" },
  ];

  return (
//     <nav className="bg-gray-800 p-4">
//     <div className="max-w-7xl mx-auto flex justify-between items-center">
//       <div className="text-white font-bold text-lg">Consultancy Name</div>
//       <ul className="flex space-x-4 text-white">
//         <li className="hover:text-gray-300">Accounting</li>
//         <li className="hover:text-gray-300">Career Choice</li>
//         <li className="hover:text-gray-300">Taxation</li>
//       </ul>
//     </div>
//   </nav>
    <nav className="flex justify-between items-center w-full h-16 px-4 text-white bg-pink-700 ">
      <div>
        <h1 className="text-xl font-semibold font-sans ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Consultancy Logo
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link,page }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-pink-300 hover:scale-105 hover:text-pink-100 duration-200 link-underline"
          >
            <Link href={link}>{page}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-zinc-50 md:hidden"
      >
        {/* {nav ? <FaTimes size={30} /> : <FaBars size={30} />} */}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-red-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
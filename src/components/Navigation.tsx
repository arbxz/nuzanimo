"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "adoption.", url: "/adoptions" },
    { text: "sterilize ou zanimo.", url: "/neuter" },
    { text: "events.", url: "/events" },
    {
      text: "articles.",
      subItems: [
        { text: "blog.", url: "/blogs" },
        { text: "vets.", url: "/vets" },
        { text: "taxi-zanimo.", url: "/taxis" },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full text-pure-white shadow-sm glass border-none">
        <nav className="w-full flex items-center justify-between px-4 py-2 mx-auto">
          <Link href="/">
            <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          </Link>
          <button
            className="text-white lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          <ul
            className={`text-4xl lg:text-base text-center absolute lg:relative lg:top-0 top-12 left-0 w-full lg:w-auto lg:h-auto h-svh py-8 px-4 lg:p-0 bg-pastel-dark lg:bg-opacity-0 lg:flex ${
              isMenuOpen ? "block" : "hidden"
            } items-center gap-2`}>
            {menuItems.map((item, index) => (
              <li key={index} className="relative group w-full lg:w-auto">
                <Link
                  className="block px-4 py-2 font-semibold"
                  href={item.url || ""}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}>
                  {item.text}
                </Link>
                {item.subItems && (
                  <ul className="relative lg:absolute top-full right-0 lg:max-h-0 overflow-hidden h-fit lg:w-max group-hover:max-h-96 bg-pastel-dark text-white rounded transition-all ease-in-out duration-300">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="block w-full lg:w-auto">
                        <Link
                          className="block px-4 py-2 font-semibold hover:bg-primary transition-colors duration-200"
                          href={subItem.url}
                          onClick={() => {
                            setIsMenuOpen(false);
                          }}>
                          {subItem.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="hidden">
              <Link
                className="group font-semibold text-sm flex gap-4 px-4 py-2 border-2 border-white rounded-full bg-pastel-dark hover:bg-primary transition-colors duration-300 text-white"
                href="/">
                donate.
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;

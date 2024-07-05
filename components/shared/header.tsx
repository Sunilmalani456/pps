"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../toggle-mode";

const Header = () => {
  const [link, setLink] = useState("/");
  const pathName = usePathname();
  return (
    <header className="w-full flex justify-around items-center bg-neutral-100 py-3">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="logo"
          width={30}
          height={30}
          className="object-cover"
        />
        <span className="text-lg dark:text-black font-bold">Nexcent</span>
      </div>

      <nav className="h-full hidden md:flex">
        <ul className="flex gap-7 font-bold text-sm relative">
          {[
            {
              title: "Home",
              path: "/",
            },
            {
              title: "Services",
              path: "/services",
            },
            {
              title: "Feature",
              path: "/feature",
            },
            {
              title: "Contact",
              path: "/contact",
            },
            {
              title: "Testimonial",
              path: "/testimonial",
            },
            {
              title: "FAQ",
              path: "/faq",
            },
          ].map((item) => (
            <li
              className={`flex items-center relative transition ${
                link === item.path ? "text-primary-500" : "text-neutral-500"
              }`}
              key={item.title}
            >
              <Link className="" onClick={() => setLink(item.path)} href={"/"}>
                {item.title}
              </Link>

              {link === item.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-primary-500 rounded-tr-lg rounded-tl-lg h-1 w-full absolute -bottom-1"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-2">
        <ModeToggle />
        <Button
          className="outline-none bg-transparent border-transparent text-primary-500 hover:text-primary-500 hover:border hover:border-primary-500/85 dark:bg-transparent dark:border-transparent dark:text-primary-500 dark:hover:text-white dark:hover:border dark:hover:bg-primary-500/90  dark:hover:border-primary-500/85 dark:outline-none"
          size={"sm"}
          variant={"outline"}
        >
          LogIn
        </Button>
        <Button
          className="bg-primary-500 text-white hover:bg-primary-500 dark:border-primary-500/85 dark:border dark:text-primary-500"
          size={"sm"}
        >
          Sign-Up
        </Button>
      </div>
    </header>
  );
};

export default Header;

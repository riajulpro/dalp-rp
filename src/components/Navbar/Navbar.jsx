"use client";

import Link from "next/link";
import "./Navbar.css";
import { MenuIcon } from "@/utils/icons/EssentialIcons";
import { useState } from "react";
import { GradientCircle } from "@/utils/icons/Gradient";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navToggler = () => {
    setNav(!nav);
  };

  const links = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Testimonials",
      pathName: "/testimonials",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];

  return (
    <div className="sticky">
      <div className="nav-container">
        <div className="gradient-circle">
          <GradientCircle />
        </div>
        <div className="navbar">
          <div className="logo">Digital Agency</div>
          <div className="menu-icon">
            <button className="nav-button" onClick={navToggler}>
              <MenuIcon />
            </button>
          </div>
          <div className="nav-links">
            {links.map((link, index) => (
              <Link key={index} href={link.pathName}>
                {link.route}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import "./Navbar.css";
import { MenuIcon } from "@/utils/icons/EssentialIcons";
import { useState } from "react";
import { GradientCircle, GradientCircleMobile } from "@/utils/icons/Gradient";

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
    <div>
      <div className="gradient-circle">
        <GradientCircle />
      </div>
      <div className="gradient-circle-mobile">
        <GradientCircleMobile />
      </div>
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Digital Agency</div>
          <div className="menu-icon">
            <button className="nav-button" onClick={navToggler}>
              <MenuIcon />
            </button>
          </div>
          <div className={`nav-links ${nav && "get-position"}`}>
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

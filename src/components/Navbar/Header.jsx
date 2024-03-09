"use client";

import Link from "next/link";
import "./Header.css";
import { MenuIcon } from "@/utils/icons/EssentialIcons";
import { useEffect, useState } from "react";
import { GradientCircle, GradientCircleMobile } from "@/utils/icons/Gradient";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [addNavClass, setAddNavClass] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 75) {
        setAddNavClass(true);
      } else {
        setAddNavClass(false);
      }
    };

    changeColor();

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

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
    <header className="lg-width">
      <div className="gradient-circle">
        <GradientCircle />
      </div>
      <div className="gradient-circle-mobile">
        <GradientCircleMobile />
      </div>
      <div className={`${addNavClass ? "new-nav" : "nav-container"}`}>
        <div className="content-box">
          <div className="navbar content-box">
            <div className="logo">Digital Agency</div>
            <div className="menu-icon">
              <button className="nav-button" onClick={navToggler}>
                <MenuIcon />
              </button>
            </div>
            <div className={`nav-links ${nav && "get-position"}`}>
              {links.map((link, index) => (
                <Link className="link" key={index} href={link.pathName}>
                  {link.route}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

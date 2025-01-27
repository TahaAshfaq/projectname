"use client";
import styles from "../Styles/navbar.css";
import { useState, useEffect } from "react";
import Logo from "../media/Logo.svg";
import menu from "../media/menu.svg";
import close from "../media/close.svg";
import mobilelogo from "../media/mobilelogo.svg";

import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [textcontent, settextcontent] = useState(menu);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [screenWidth, setScreenWidth] = useState(1400);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      settextcontent(menu);
    } else {
      settextcontent(close);
    }
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navcomponent">
        <nav className="navbar">
          <div className="navupper">
            <div className="navelements">
              <div className="logo">
                <Image src={Logo} alt="Logo" width={45} height={45} />
              </div>
              <ul className="navLinks">
                <li>
                  <a href="#" onClick={(e) => handleScroll(e, "home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleScroll(e, "about")}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleScroll(e, "services")}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleScroll(e, "projects")}>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <button className="navbtn" onClick={(e) => handleScroll(e, "contact")}>Contact me</button>
          </div>
        </nav>

        <nav className="navbarmobile">
          <div className="navupper">
            <div className="navelements">
              <div className="logo">
                <Image src={mobilelogo} alt="Logo" width={150} height={60} />
              </div>
            </div>
            <button className="mobilenav" onClick={toggleMobileMenu}>
              <Image src={textcontent} alt="Logo" width={45} height={15} />
            </button>
          </div>
        </nav>

        <div className="mobile">
          <div className={`mobileMenu ${isMobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#" onClick={(e) => {
                  toggleMobileMenu();
                  handleScroll(e, "home");
                }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => {
                  toggleMobileMenu();
                  handleScroll(e, "about");
                }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => {
                  toggleMobileMenu();
                  handleScroll(e, "services");
                }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => {
                  toggleMobileMenu();
                  handleScroll(e, "projects");
                }}>
                  Projects
                </a>
              </li>
            </ul>
            <button className="navmobilebtn" onClick={(e) => handleScroll(e, "contact")}>Contact Me</button>
          </div>
        </div>
      </div>
    </>
  );
}

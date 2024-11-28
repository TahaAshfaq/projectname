"use client"; // Add this directive at the top
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

      console.log("Scroll Y:", currentScrollY); // Debug log for scroll position

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
  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      settextcontent(menu);
    } else {
      settextcontent(close);
    }
  };
  return (
    <>
      <div className="navcomponent">
        <nav className={screenWidth > 771 ? "navbar" : "navbarmobile"}>
          <div className="navupper">
            <div className="navelements">
              <div className="logo">
                {screenWidth > 771 ? (
                  <Image src={Logo} alt="Logo" width={45} height={45} />
                ) : (
                  <Image src={mobilelogo} alt="Logo" width={150} height={60} />
                )}
              </div>
              <ul className="navLinks">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>
            <button className="navbtn">Contact me</button>
            {/* Hamburger Menu */}
            <button className="mobilenav" onClick={toggleMobileMenu}>
              <Image src={textcontent} alt="Logo" width={45} height={15} />
            </button>
          </div>
        </nav>

        {/* {isMobileMenuOpen && ( */}
        <div className="mobile">
          <div className={`mobileMenu ${isMobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#" onClick={toggleMobileMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMobileMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMobileMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMobileMenu}>
                  Projects
                </a>
              </li>
            </ul>
            <button className="navmobilebtn">Contact Me</button>
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
}

// "use client"; // Add this directive at the top
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons from react-icons
// import styles from "../Styles/navbar.css";
// import Image from "next/image";
// import Logo from "../media/Logo.svg";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Toggle mobile menu visibility
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navelements">
//           {/* Logo */}
//           <div className="logo">
//             <Image src={Logo} alt="Logo" width={45} height={45} />
//           </div>

//           {/* Desktop Links */}
//           <ul className={`navLinks ${isMobileMenuOpen ? "mobile-active" : ""}`}>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Projects</a></li>
//             <button className="navmobilebtn">Contact Me</button>

//           </ul>

//         </div>
//           {/* Mobile Menu Icon */}
//           <button className="hamburger" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//           {/* Desktop Contact Button */}
//           <button className="navbtn">Contact Me</button>

//         {/* Mobile Menu (conditionally rendered) */}
//         {isMobileMenuOpen && (
//           <div className="mobileMenu">
//             <ul>
//               <li><a href="#" onClick={toggleMobileMenu}>Home</a></li>
//               <li><a href="#" onClick={toggleMobileMenu}>About</a></li>
//               <li><a href="#" onClick={toggleMobileMenu}>Services</a></li>
//               <li><a href="#" onClick={toggleMobileMenu}>Projects</a></li>
//             </ul>
//             <button className="navmobilebtn">Contact Me</button>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

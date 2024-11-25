// "use client"; // Add this directive at the top
// import styles from "../Styles/navbar.css";

// import Logo from "../media/Logo.svg";
// import Image from "next/image";


// export default function Navbar() {
//   return (
//     <>
//       <nav className="navbar">

//       <div className="navelements">
//         <div className="logo">
//         <Image src={Logo} alt="Logo" width={45} height={45} />
//         </div>
//       <ul className="navLinks">
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Services</a></li>
//         <li><a href="#">Projects</a></li>
//       </ul>
//       </div>
//       <button className="navbtn">Contact me</button>
//       {/* Hamburger Menu */}
//       <button className="mobilenav">mobile navbar</button>
//       {/* <div className={"hamburger"}>
//         <span>Home</span>
//         <span>About</span>
//         <span>Services</span>
//         <span>Projects</span>
//         <span>Contact me</span>

//       </div> */}
//     </nav>
//     </>
//   );
// }


"use client"; // Add this directive at the top
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons from react-icons
import styles from "../Styles/navbar.css";
import Image from "next/image";
import Logo from "../media/Logo.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navelements">
          {/* Logo */}
          <div className="logo">
            <Image src={Logo} alt="Logo" width={45} height={45} />
          </div>

          {/* Desktop Links */}
          <ul className={`navLinks ${isMobileMenuOpen ? "mobile-active" : ""}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
          
        </div>
          {/* Mobile Menu Icon */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          {/* Desktop Contact Button */}
          <button className="navbtn">Contact Me</button>

        {/* Mobile Menu (conditionally rendered) */}
        {isMobileMenuOpen && (
          <div className="mobileMenu">
            <ul>
              <li><a href="#" onClick={toggleMobileMenu}>Home</a></li>
              <li><a href="#" onClick={toggleMobileMenu}>About</a></li>
              <li><a href="#" onClick={toggleMobileMenu}>Services</a></li>
              <li><a href="#" onClick={toggleMobileMenu}>Projects</a></li>
              <li><a href="#" onClick={toggleMobileMenu}>Contact Me</a></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

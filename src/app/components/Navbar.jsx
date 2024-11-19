"use client"; // Add this directive at the top
import styles from "../Styles/navbar.css";

import Logo from "../media/Logo.svg";
import Image from "next/image";


export default function Navbar() {
  return (
    <>
      <nav className="navbar">

      <div className="navelements">
        <div className="logo">
        <Image src={Logo} alt="Logo" width={45} height={45} />
        </div>
      <ul className="navLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      </div>
      <button className="navbtn">Contact me</button>
      {/* Hamburger Menu */}
      <button className="mobilenav">kjdf</button>
      {/* <div className={"hamburger"}>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
        <span>Contact me</span>

      </div> */}
    </nav>
    </>
  );
}

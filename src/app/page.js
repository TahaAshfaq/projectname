"use client"; // Add this directive at the top

import { Poppins } from "next/font/google"; // Import the Poppins font
import Navbar from "./components/Navbar.jsx";
import Homesection from "./components/Homesection.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Services from "./components/Services.jsx";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const poppins = Poppins({
  subsets: ["latin"], // This includes the Latin subset for general use
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All available weights of Poppins
});

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={poppins.className}>
      {" "}
      {/* Apply the Poppins font to the entire page */}
      <Navbar />
      <Homesection />
      <Spline scene="https://prod.spline.design/QkCQ7ys0q8ajvnPD/scene.splinecode" />
      <Aboutme />
      <Services />
    </div>
  );
}

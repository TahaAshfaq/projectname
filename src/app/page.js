"use client"; // Add this directive at the top

import { Poppins } from "next/font/google"; // Import the Poppins font
import Navbar from "./components/Navbar.jsx";
import Homesection from "./components/Homesection.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Services from "./components/Services.jsx";
import Loadingscreen from "./components/Loadingscreen.jsx";
import Model3d from "./components/Model3d.jsx";
import Projects from "./components/Projects.jsx";
import RiveAnimation from "./components/RiveAnimation.jsx";
import StickyNotification from "./components/StickyNotification.jsx";

import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"], // This includes the Latin subset for general use
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All available weights of Poppins
});

// export default function Home() {
//   return (
//     <div className={poppins.className}>
//       {" "}
//       <Navbar />
//       <Homesection />
//       <Model3d />
//       <Aboutme />
//       <Services />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }


const MainContent = () => {
  return (
    <div className={poppins.className}>
      {" "}
      <StickyNotification />
      <Navbar />
      <Homesection />
      <Model3d />
      <Aboutme />
      {/* <RiveAnimation /> */}
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Loadingscreen />
      {showContent && <MainContent />}
    </div>
  );
};

export default App;

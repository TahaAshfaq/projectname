"use client"; // Add this directive at the top
import styles from "../Styles/homesection.css";
import seeprojects from "../media/seeprojects.svg";
import homet2 from "../media/homet2.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap"; // Import gsap
import Spline from "@splinetool/react-spline";

export default function Homesection() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const startAnimations = () => {
      gsap.fromTo(
        ".homet1",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".homet2",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".homet3",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".homet3mobile",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    };
  
    if (document.readyState === "complete") {
      // If the document is already loaded
      startAnimations();
    } else {
      // Wait for the window load event
      window.addEventListener("load", startAnimations);
    }
  
    // Clean up event listener
    return () => {
      window.removeEventListener("load", startAnimations);
    };
  }, []);
  

  return (
    <>
      <div className="outerhero" id="home">
        {/* <div id="canvas">
            <Spline scene="https://prod.spline.design/nwKgz1tj1yCWcLKz/scene.splinecode" />
        </div> */}
        <div className="herosection">
          <div className="main">
            <p className="homet1">Innovation | Execution | Excellence</p>
            <p className="homet2">
              A cross disciplinary
              <br />
              UX designer
            </p>
            <Image
              className="home2svg"
              src={homet2}
              alt="dsfklsjdfkj"
              width={500}
              height={80}
            />
            <p className="homet3">
              Hey! I am Taha, a multidisciplinary UI/UX designer who crafts
              intuitive
              <br />
              and visually captivating experiences, blending creativity with
              functionality to
              <br />
              bring ideas to life.
            </p>
            <p className="homet3mobile">
              Hey! I am Taha, a multidisciplinary UI/UX designer who crafts
              intuitive and visually captivating experiences, blending
              creativity with functionality to bring ideas to life.
            </p>
          </div>
          <div className="homebtn">
            <button
              className="homebtnbtn"
              onClick={(e) => handleScroll(e, "projects")}
            >
              <Image src={seeprojects} alt="Logo" width={30} height={30} />
              See my work
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

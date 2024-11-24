"use client"; // Add this directive at the top
import styles from "../Styles/aboutme.css";
import style from "../Styles/services.css";
import ServiceCard from "./ServiceCard.jsx";
import myservices from "../media/myservices.js";

import Image from "next/image";

export default function Services() {
  document.querySelectorAll(".viewproject").forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      button.style.setProperty("--mouse-x", `${x}%`);
      button.style.setProperty("--mouse-y", `${y}%`);
    });

    button.addEventListener("mouseleave", () => {
      button.style.setProperty("--mouse-x", `50%`); /* Reset to center */
      button.style.setProperty("--mouse-y", `50%`);
    });
  });

  // Correcting the map function
  const myservicescard = myservices.map((singlecard) => {
    return (
      <ServiceCard
        key={singlecard.id} // Add a unique key for each item
        path={singlecard.imagePath}
        head={singlecard.heading}
        content={singlecard.description}
      />
    );
  });

  return (
    <div className="aboutme">
      <p className="head">My Services</p>
      <p className="servicescontent">
        My services blend creativity and strategy to craft intuitive user
        experiences
      </p>
      <div className="myservices">
        {myservicescard} {/* Render the mapped ServiceCard components */}
      </div>
    </div>
  );
}

"use client"; // Add this directive at the top
import styles from "../Styles/aboutme.css";
import style from "../Styles/services.css";
import ServiceCard from "./ServiceCard.jsx";
import myservices from "../media/myservices.js";

import Image from "next/image";

export default function Services() {

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
    <div className="aboutmeouter" id="services">

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
    </div>
  );
}

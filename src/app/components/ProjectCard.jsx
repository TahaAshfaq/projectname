"use client"; // For Next.js client components
import React, { useEffect } from "react";
import style from "../Styles/services.css";

export default function ProjectCard(props) {
  useEffect(() => {
    const buttons = document.querySelectorAll(".viewproject");

    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      e.target.style.setProperty("--mouse-x", `${x}%`);
      e.target.style.setProperty("--mouse-y", `${y}%`);
    };

    const handleMouseLeave = (e) => {
      e.target.style.setProperty("--mouse-x", `50%`);
      e.target.style.setProperty("--mouse-y", `50%`);
    };

    buttons.forEach((button) => {
      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className="projectcard"
      style={{
        backgroundImage: `url(${props.pimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="projectcardt1">{props.pt1}</p>
      <p className="projectcardt2">
        <span className="colort" style={{ color: props.pcolor }}>
          {props.pt2pre}
        </span>
        <br />
        {props.pt2}
        <br />
        {props.pt3}
      </p>
      <button className="viewproject">View</button>
    </div>
  );
}

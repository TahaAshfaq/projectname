"use client"; // Add this directive at the top
import styles from "../Styles/aboutme.css";
import style from "../Styles/services.css";
import ProjectCard from "./ProjectCard";
import myprojects from "../media/myprojects.js";

import Image from "next/image";

export default function Projects() {
    const myprojectcards = myprojects.map((singleproject) => {
      return (
        <ProjectCard
          key={singleproject.id} // Add a unique key for each item
          pimg={singleproject.projectImagePath}
          pt1={singleproject.projectheading1}
          pt2pre={singleproject.projectheading2pre}
          pt2={singleproject.projectheading2}
          address={singleproject.address}
        />
      );
    });

  return (
    <div className="aboutmeouter" id="projects">

    <div className="aboutme">
      <p className="head">Latest Projects</p>
      <p className="servicescontent">
        Explore My Most Recent Projects. A Showcase of Innovation, Creativity, and Problem-Solving.
      </p>
      <div className="myprojects">
      {myprojectcards}
      </div>
    </div>
    </div>
  );
}

// "use client"; // For Next.js client components
// import React, { useEffect } from "react";
// import style from "../Styles/services.css";

// export default function ProjectCard(props) {
//   // Define the openLink function
//   const openLink = (url) => {
//     if (url) {
//       window.open(url, "_blank"); // Open the link in a new tab
//     } else {
//       console.error("URL is undefined");
//     }
//   };
//   useEffect(() => {
//     const buttons = document.querySelectorAll(".viewproject");

//     const handleMouseMove = (e) => {
//       const rect = e.target.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;

//       e.target.style.setProperty("--mouse-x", `${x}%`);
//       e.target.style.setProperty("--mouse-y", `${y}%`);
//     };

//     const handleMouseLeave = (e) => {
//       e.target.style.setProperty("--mouse-x", `50%`);
//       e.target.style.setProperty("--mouse-y", `50%`);
//     };

//     buttons.forEach((button) => {
//       button.addEventListener("mousemove", handleMouseMove);
//       button.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       buttons.forEach((button) => {
//         button.removeEventListener("mousemove", handleMouseMove);
//         button.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div
//       className="projectcard"
//       style={{
//         backgroundImage: `url(${props.pimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
      
//       onClick={() => openLink(props.address)}
//     >
//       <p className="projectcardt1">{props.pt1}</p>
//       <p className="projectcardt2">
//         <span className="colort" style={{ color: props.pcolor }}>
//           {props.pt2pre}
//         </span>
//         <br />
//         {props.pt2}
//         <br />
//         {props.pt3}
//       </p>
//       <button className="viewproject" onClick={() => openLink(props.address)}>
//         View
//       </button>
//     </div>
//   );
// }




"use client";

import { useEffect, useRef, useState } from 'react';

export default function ProjectCard(props) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("URL is undefined");
    }
  };

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
      e.target.style.setProperty("--mouse-x", "50%");
      e.target.style.setProperty("--mouse-y", "50%");
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
  }, []);

  return (
    <div
      ref={cardRef}
      className={`projectcard ${isVisible ? 'show' : ''}`}
      style={{
                backgroundImage: `url(${props.pimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
      onClick={() => openLink(props.address)}
    >
      <p className={`projectcardt1 ${isVisible ? 'show' : ''}`}>{props.pt1}</p>
      <p className={`projectcardt2 ${isVisible ? 'show' : ''}`}>
        <span className="colort" style={{ color: props.pcolor }}>
          {props.pt2pre}
        </span>
        <br />
        {props.pt2}
        <br />
        {props.pt3}
      </p>
      <button 
        className={`viewproject ${isVisible ? 'show' : ''}`} 
        onClick={(e) => {
          e.stopPropagation();
          openLink(props.address);
        }}
      >
        View
      </button>
    </div>
  );
}
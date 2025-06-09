"use client";

import { useEffect, useRef, useState } from "react";

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
        rootMargin: "50px",
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
      className={`projectcard ${isVisible ? "show" : ""}`}
      style={{
        backgroundImage: `url(${props.pimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => openLink(props.address)}
    >
      <div className="pt1div">
        <p className={`projectcardt1 ${isVisible ? "show" : ""}`}>
          {props.pt1}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <p className={`projectcardt2 ${isVisible ? "show" : ""}`}>
          {props.pt2pre}
        </p>
        <p className="projectcardtext">
          {props.pt2}
          {/* <br />
          {props.pt3} */}
        </p>
      </div>
      {/* <button 
        className={`viewproject ${isVisible ? 'show' : ''}`} 
        onClick={(e) => {
          e.stopPropagation();
          openLink(props.address);
        }}
      >
        View
      </button> */}
    </div>
  );
}

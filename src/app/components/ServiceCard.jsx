"use client"; // Add this directive at the top
import style from "../Styles/services.css";
import cardpic from "../media/cardpic.svg";
import { useEffect, useRef, useState } from 'react';

import Image from "next/image";

// export default function Services(props) {
//   return (
//     <div className="servicecard">
//       <Image
//         className="servicepic"
//         src={props.path}
//         alt="servicCards"
//         width={70}
//         height={70}
//       />
//       <p className="cardhead">{props.head}</p>
//       <p className="cardcontent">
//       {props.content}
//       </p>
//     </div>
//   );
// }




export default function ServiceCard(props) {
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

  return (
    <div 
      ref={cardRef}
      className={`servicecard ${isVisible ? 'show' : ''}`}
    >
      <Image
        className="servicepic"
        src={props.path}
        alt="servicCards"
        width={70}
        height={70}
      />
      <p className="cardhead">
        {props.head}
      </p>
      <p className="cardcontent">
        {props.content}
      </p>
    </div>
  );
}
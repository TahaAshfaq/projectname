
"use client"; // Add this directive at the top
import styles from "../Styles/aboutme.css";
import aboutcircle from "../media/aboutcircle.svg";
import Image from "next/image";
import gsap from "gsap"; // Import gsap
import { useEffect, useRef, useState } from "react";

// export default function Aboutme() {

//   return (
//     <div className="aboutmeouter" id="about">
//       <div className="aboutme">
//         <p className="head">
//           Why <span id="me">Me</span>
//         </p>
//         <Image
//           className="aboutcircle"
//           src={aboutcircle}
//           alt="aboutcircle"
//           width={185}
//           height={185}
//         />
//         <p className="aboutcontent">
//           As an enthusiastic UX product designer, I am dedicated to
//           creating engaging and intuitive digital experiences that bridge the
//           gap between functionality and aesthetics. My journey in the tech world
//           is fueled by a passion for innovative design and a commitment to
//           crafting user-centric solutions that drive success. With a strong
//           foundation in UX/UI principles and hands-on experience in dynamic web
//           technologies, I excel in translating complex ideas into elegant and
//           accessible interfaces.
//         </p>
//       </div>
//     </div>
//   );
// }




export default function Aboutme() {
  const contentRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const rect = contentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = contentRef.current.offsetHeight;
      
       // Modified formula for faster progress calculation
      // Now the effect will complete within the middle 50% of the viewport
      let progress = (windowHeight - rect.top) / (windowHeight * 0.5);
      // Add offset to start the effect earlier
      progress = progress - 0.5;
      // Clamp values but with a steeper curve
      progress = Math.min(Math.max(progress, 0), 1);
      // Apply exponential curve for more dramatic effect
      progress = Math.pow(progress, 1.5);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "As an enthusiastic UX product designer, I am dedicated to creating engaging and intuitive digital experiences that bridge the gap between functionality and aesthetics. My journey in the tech world is fueled by a passion for innovative design and a commitment to crafting user-centric solutions that drive success. With a strong foundation in UX/UI principles and hands-on experience in dynamic web technologies, I excel in translating complex ideas into elegant and accessible interfaces.";

  const words = text.split(' ');

  return (
    <div className="aboutmeouter" id="about">
      <div className="aboutme">
        <p className="head">
           Why <span id="me">Me</span>
         </p>
         <Image
          className="aboutcircle"
          src={aboutcircle}
          alt="aboutcircle"
          width={185}
          height={185}
        />
        <div className="aboutcontent" ref={contentRef}>
          {words.map((word, index) => {
            const shouldHighlight = scrollProgress > (index / words.length);
            return (
              <span
                key={index}
                style={{
                  transition: 'color 0.3s ease',
                  color: shouldHighlight ? '#33336B' : '#ccc',
                  display: 'inline'
                }}
              >
                {word}{' '}
              </span>
            );
          })}
        </div>
      </div>

     
    </div>
  );
}

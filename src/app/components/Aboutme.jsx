"use client"; // Add this directive at the top
import styles from "../Styles/aboutme.css";
import aboutcircle from "../media/aboutcircle.svg";
import Image from "next/image";

export default function Aboutme() {
  return (
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
      <p className="aboutcontent">
        As an enthusiastic UX/UI designer and developer, I am dedicated to
        creating engaging and intuitive digital experiences that bridge the gap
        between functionality and aesthetics. My journey in the tech world is
        fueled by a passion for innovative design and a commitment to crafting
        user-centric solutions that drive success.With a strong foundation in
        UX/UI principles and hands-on experience in dynamic web technologies, I
        excel in translating complex ideas into elegant and accessible
        interfaces.hahaha
      </p>
    </div>
  );
}

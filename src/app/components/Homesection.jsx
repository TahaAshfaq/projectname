"use client"; // Add this directive at the top
import styles from "../Styles/homesection.css";
import seeprojects from "../media/seeprojects.svg";
import homet2 from "../media/homet2.svg";
import { useEffect,useState } from "react";
import Image from "next/image";

export default function Homesection() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
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
          intuitive and visually captivating experiences, blending creativity
          with functionality to bring ideas to life.
        </p>
      </div>
      <div className="homebtn">
        <button className="homebtnbtn">
          <Image src={seeprojects} alt="Logo" width={30} height={30} />
          See my work
        </button>
      </div>
    </div>
  );
}

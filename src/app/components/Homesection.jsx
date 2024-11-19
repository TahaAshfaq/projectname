"use client"; // Add this directive at the top
import styles from "../Styles/homesection.css";
import seeprojects from "../media/seeprojects.svg";
import homet2 from "../media/homet2.svg";

import Image from "next/image";

export default function Homesection() {
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
          Hey! I'm Taha, a multidisciplinary UI/UX designer crafting captivating
          <br />
          experiences by blending creativity with functionality.
        </p>
        <p className="homet3mobile">
          Hey! I'm Taha, a multidisciplinary UI/UX designer crafting captivating
          experiences by blending creativity with functionality.
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

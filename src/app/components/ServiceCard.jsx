"use client"; // Add this directive at the top
import style from "../Styles/services.css";
import cardpic from "../media/cardpic.svg";

import Image from "next/image";

export default function Services(props) {
  return (
    <div className="servicecard">
      <Image
        className="servicepic"
        src={props.path}
        alt="servicCards"
        width={130}
        height={130}
      />
      <p className="cardhead">{props.head}</p>
      <p className="cardcontent">
      {props.content}
      </p>
    </div>
  );
}

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
        width={70}
        height={70}
      />
      <p className="cardhead">{props.head}</p>
      <p className="cardcontent">
      {props.content}
      </p>
    </div>
  );
}

"use client"; // Add this directive at the top
import styles from "../Styles/footer.css";
import homet2 from "../media/homet2.svg";

import Image from "next/image";

export default function Footer() {
  return (
    // <div className="foot">
    // <p className="footerhead">There Is <span style={{
    //     color: "#8484FF",
    // }}>Greatness</span>
    // In Simplicity</p>
    // </div>
    <div className="foot">
        <p className="footerhead">There Is <span style={{
        color: "#8484FF",
    }}>Greatness</span>
    <br />
    In Simplicity</p>
    <p className="foothead2">Let’s get in contact & work together!!!</p>
    <div className="footcontent">
        <Image></Image>
        <div className="socials"></div>
        <div className="contacts"></div>
    </div>
    </div>
    
  );
}

"use client";

import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import mobilelogo from "../media/mobilelogo.svg";
import Image from "next/image";
import styles from "../Styles/loadingscreen.css";

export default function Loadingscreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  
  return (
    <div className="screen">
      <Image src={mobilelogo} alt="Logo" width={150} height={60} />
      <div className="mid">
        
        {/* Lottie Animation Below the Text */}
        <DotLottieReact
          src="https://lottie.host/82539034-d018-4763-9003-8ae86b81b0a1/sEGFRDnia8.lottie"
          loop
          autoplay
          style={{ height: "330px", width: "330px" }}
        />
        <p id="loadingp">
          Taha Ashfaq Product UX designer
        </p>
      </div>
    </div>
  );
}

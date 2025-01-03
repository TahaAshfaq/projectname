"use client"; // Add this directive at the top

import styles from "../Styles/model3d.css";
import Spline from "@splinetool/react-spline";

export default function Model3d() {
  return (
    <>
      <div className="model3d">
        <Spline scene="https://prod.spline.design/QkCQ7ys0q8ajvnPD/scene.splinecode" />
      </div>
      {/* <div className="model3dmobile">
        <Spline scene="https://prod.spline.design/VFM264cbv5M-dq0g/scene.splinecode" />
      </div> */}
    </>
  );
}

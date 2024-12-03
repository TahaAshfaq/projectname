import dynamic from "next/dynamic";
import styles from "../Styles/model3d.css";

// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
// });
import Spline from "@splinetool/react-spline";

export default function Model3d() {
  return (
    <>
      <p className="text3d">
        <span id="ifocus">I focus</span> on each component of UI
        <br />
        to make the <span id="ifocus">successful product</span>
      </p>
      <div className="model3d">
        <Spline scene="https://prod.spline.design/QkCQ7ys0q8ajvnPD/scene.splinecode" />
      </div>
      <div className="model3dmobile">
        <Spline scene="https://prod.spline.design/Akz-S4Ac8DAc7a21/scene.splinecode" />
      </div>
    </>
  );
}

"use client";
import { useRive } from "@rive-app/react-canvas";
import style from "../Styles/rive.css";

export default function RiveAnimation() {
  const { rive, RiveComponent } = useRive({
    src: "/rive.riv",
    autoplay: true,
  });

  return (
    <div className="rive">
      <RiveComponent className="rive-animation" />
    </div>
  );
}

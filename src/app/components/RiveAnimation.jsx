"use client";
import { useRive } from "@rive-app/react-canvas";
import style from "../Styles/rive.css";

export default function RiveAnimation() {
  const { rive: rive, RiveComponent: RiveComponent  } = useRive({
    src: "/rivemobile.riv",
    autoplay: true,
  });
  const { rive: rive2, RiveComponent: RiveComponent2 } = useRive({
    src: "/rive.riv",
    autoplay: true,
  });

  return (
    <>
    <div className="rive2">
      <RiveComponent2 className="rive-animation2" />
    </div>
    <div className="rive">
      <RiveComponent className="rive-animation" />
    </div>
  </>
  );
}

// "use client";
// import { useRive } from "@rive-app/react-canvas";
// import style from "../Styles/rive.css";

// export default function RiveAnimation() {
//   const { rive: rive, RiveComponent: Rive1Component } = useRive({
//     src: "/rive.riv", // First animation
//     autoplay: true,
//   });

//   const { rive: rivemobile, RiveComponent: Rive2Component } = useRive({
//     src: "/rivemobile.riv", // Second animation
//     autoplay: true,
//   });

//   return (
//     <>
//       {/* First Animation */}
//       <div className="rive">
//         <Rive1Component className="rive-animation" />
//       </div>

//       {/* Second Animation */}
//       <div className="rivemobile">
//         <Rive2Component className="rive-animation-mobile" />
//       </div>
//     </>
//   );
// }

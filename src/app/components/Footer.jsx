// "use client"; // Add this directive at the top
// import styles from "../Styles/footer.css";
// import pic1 from "../media/mylogo.svg";
// import pic2 from "../media/Dribble.svg";
// import pic3 from "../media/Email.svg";
// import pic4 from "../media/Insta.svg";
// import pic5 from "../media/Github.svg";
// import pic6 from "../media/Linkedin.svg";
// import pic7 from "../media/location.svg";
// import pic8 from "../media/phone.svg";

// import Image from "next/image";
// // const Spline = dynamic(() => import("@splinetool/react-spline"), {
// //   ssr: false,
// // });

// // import Spline from "@splinetool/react-spline";
// // import dynamic from "next/dynamic";

// export default function Footer() {
//   return (
//     <div className="foot" id="contact">
//       <div className="footerouter">
//       <div className="footwidth">
//       <p className="footerhead">
//         There Is{" "}
//         <span
//           style={{
//             color: "#8484FF",
//           }}
//         >
//           Greatness
//         </span>
//         <br />
//         In Simplicity
//       </p>
//       <p className="foothead2">Let’s get in contact & work together!!!</p>
//       <div className="footcontent">
//         <Image className="footimg" src={pic1} alt="dsfklsjdfkj" width={300} height={300} />
//         {/* <Spline
//           scene="https://prod.spline.design/8TQtv-6usnYGWwFW/scene.splinecode"
//           style={{ width: "300px", height: "300px" }}
//         /> */}
//         <div className="footcontentcontent">
//           <div className="socials">
//             <div className="singlesocial">
//               <Image src={pic2} alt="dsfklsjdfkj" width={20} height={20} />
//               <p className="footerp" >DRIBBBLE</p>
//             </div>
//             <div className="singlesocial">
//               <Image src={pic6} alt="dsfklsjdfkj" width={20} height={20} />{" "}
//               <p className="footerp">LINKEDIN</p>
//             </div>
//             <div className="singlesocial">
//               <Image src={pic5} alt="dsfklsjdfkj" width={20} height={20} />
//               <p className="footerp">GITHUB</p>
//             </div>
//             <div className="singlesocial">
//               <Image src={pic4} alt="dsfklsjdfkj" width={20} height={20} />
//               <p className="footerp">INSTAGRAM</p>
//             </div>
//           </div>
//           <div className="contacts">
//             <div className="singlecontact">
//               <div className="contactupper">
//                 {" "}
//                 <Image src={pic8} alt="dsfklsjdfkj" width={20} height={20} />
//                 <p className="contactpupper">Phone</p>
//               </div>
//               <p className="contactpdown">0309 0109962</p>
//             </div>
//             <div className="singlecontact">
//               <div className="contactupper">
//                 {" "}
//                 <Image src={pic7} alt="dsfklsjdfkj" width={20} height={20} />
//                 <p className="contactpupper">Location</p>
//               </div>
//               <p className="contactpdown">Margalla Town, Islamabad</p>
//             </div>
//             <div className="singlecontact">
//               <div className="contactupper">
//                 {" "}
//                 <Image src={pic3} alt="dsfklsjdfkj" width={20} height={20} />
//                 <p className="contactpupper">Email</p>
//               </div>
//               <p className="contactpdown">tahaashfaqmalik@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }
"use client"; // Add this directive at the top
import styles from "../Styles/footer.css";
import pic1 from "../media/mylogo.svg";
import pic2 from "../media/Dribble.svg";
import pic3 from "../media/Email.svg";
import pic4 from "../media/Insta.svg";
import pic5 from "../media/Github.svg";
import pic6 from "../media/Linkedin.svg";
import pic7 from "../media/location.svg";
import pic8 from "../media/phone.svg";

import Image from "next/image";

export default function Footer() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="foot" id="contact">
      <div className="footerouter">
        <div className="footwidth">
          <p className="footerhead">
            There Is{" "}
            <span
              style={{
                color: "#8484FF",
              }}
            >
              Greatness
            </span>
            <br />
            In Simplicity
          </p>
          <p className="foothead2">Let’s get in contact & work together!!!</p>
          <div className="footcontent">
            <Image
              className="footimg"
              src={pic1}
              alt="Logo"
              width={300}
              height={300}
            />
            <div className="footcontentcontent">
              <div className="socials">
                <div
                  className="singlesocial"
                  onClick={() =>
                    openLink("https://dribbble.com/TAHA9753")
                  }
                >
                  <Image src={pic2} alt="Dribbble" width={20} height={20} />
                  <p className="footerp">DRIBBBLE</p>
                </div>
                <div
                  className="singlesocial"
                  onClick={() =>
                    openLink("https://www.linkedin.com/in/taha-ashfaq-637874273/")
                  }
                >
                  <Image src={pic6} alt="LinkedIn" width={20} height={20} />
                  <p className="footerp">LINKEDIN</p>
                </div>
                <div
                  className="singlesocial"
                  onClick={() =>
                    openLink("https://github.com/TahaAshfaq")
                  }
                >
                  <Image src={pic5} alt="GitHub" width={20} height={20} />
                  <p className="footerp">GITHUB</p>
                </div>
                <div
                  className="singlesocial"
                  onClick={() =>
                    openLink("https://www.instagram.com/taha__9753/")
                  }
                >
                  <Image src={pic4} alt="Instagram" width={20} height={20} />
                  <p className="footerp">INSTAGRAM</p>
                </div>
              </div>
              <div className="contacts">
                <div className="singlecontact"
                onClick={() =>
                  openLink("tel:03090109962")
                }>
                
                  <div className="contactupper">
                    <Image src={pic8} alt="Phone" width={20} height={20} />
                    <p className="contactpupper">Phone</p>
                  </div>
                  <p className="contactpdown">0309 0109962</p>
                </div>
                <div className="singlecontact"
                onClick={() =>
                  openLink(
                    "https://www.google.com/maps/place/Margalla+Town,+Islamabad"
                  )
                }>
                
                  <div className="contactupper">
                    <Image src={pic7} alt="Location" width={20} height={20} />
                    <p className="contactpupper">Location</p>
                  </div>
                  <p className="contactpdown">Margalla Town, Islamabad</p>
                </div>
                <div className="singlecontact"
                onClick={() =>
                  openLink("mailto:tahaashfaqmalik@gmail.com")
                }>
                  
                  <div className="contactupper">
                    <Image src={pic3} alt="Email" width={20} height={20} />
                    <p className="contactpupper">Email</p>
                  </div>
                  <p
                    className="contactpdown"
                  >
                    tahaashfaqmalik@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

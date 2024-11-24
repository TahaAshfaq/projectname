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
  return (
    <div className="foot">
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
        <Image src={pic1} alt="dsfklsjdfkj" width={200} height={200} />
        <div className="socials">
          <div className="singlesocial">
            <Image src={pic2} alt="dsfklsjdfkj" width={20} height={20} />
            <p className="footerp">DRIBBBLE</p>
          </div>
          <div className="singlesocial">
            <Image src={pic6} alt="dsfklsjdfkj" width={20} height={20} />{" "}
            <p className="footerp">LINKEDIN</p>
          </div>
          <div className="singlesocial">
            <Image src={pic5} alt="dsfklsjdfkj" width={20} height={20} />
            <p className="footerp">GITHUB</p>
          </div>
          <div className="singlesocial">
            <Image src={pic4} alt="dsfklsjdfkj" width={20} height={20} />
            <p className="footerp">INSTAGRAM</p>
          </div>
        </div>
        <div className="contacts">
          <div className="singlecontact">
            <div className="contactupper">
              {" "}
              <Image src={pic8} alt="dsfklsjdfkj" width={20} height={20} />
              <p className="contactpupper">Phone</p>
            </div>
            <p className="contactpdown">0309 0109962</p>
          </div>
          <div className="singlecontact">
            <div className="contactupper">
              {" "}
              <Image src={pic7} alt="dsfklsjdfkj" width={20} height={20} />
              <p className="contactpupper">Location</p>
            </div>
            <p className="contactpdown">Margalla Town, Islamabad</p>
          </div>
          <div className="singlecontact">
            <div className="contactupper">
              {" "}
              <Image src={pic3} alt="dsfklsjdfkj" width={20} height={20} />
              <p className="contactpupper">Email</p>
            </div>
            <p className="contactpdown">tahaashfaqmalik@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

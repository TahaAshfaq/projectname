"use client"; // Add this directive at the top
import style from "../Styles/services.css";

export default function ProjectCard(props) {
  return (
        <div
          className="projectcard"
          style={{
            backgroundImage: `url(${props.pimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="projectcardt1"
          >{props.pt1}</p>
          <p className="projectcardt2">
            <span className="colort" style={{ color: props.pcolor }}>
            {props.pt2pre}
            </span>{" "}<br />
            {props.pt2}<br />
            {props.pt3}
          </p>
          <button className="viewproject">view</button>
        </div>
  );
}

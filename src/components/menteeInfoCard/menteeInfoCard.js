import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./menteeInfoCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function MenteeInfoCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in menteeInfo section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="menteeInfo-card">
          {school.logo && (
            <div className="menteeInfo-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="menteeInfo-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="menteeInfo-card-right">
            <h5 className="menteeInfo-text-school">{school.schoolName}</h5>

            <div className="menteeInfo-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode menteeInfo-text-subHeader"
                    : "menteeInfo-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } menteeInfo-text-duration`}
              >
                {school.duration}
              </p>
              <p className="menteeInfo-text-desc">{school.desc}</p>
              <div className="menteeInfo-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="menteeInfo-card-border"></div>
      </Slide>
    </div>
  );
}

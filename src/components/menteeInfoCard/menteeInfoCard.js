import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./menteeInfoCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function MenteeInfoCard({school}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  if (!school.logo) {
    console.error(
      `Image of ${school.schoolName} is missing in menteeInfo section`
    );
  }

  return (
    <div>
      <Fade left duration={1000}>
        {/* Hover 이벤트에 따라 버튼 표시 */}
        <div className="menteeInfo-card">
          {school.logo && (
            <div className="menteeInfo-card-left">
              <img
                crossOrigin="anonymous"
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

          {/* Hover 시 표시되는 작업물 보기 섹션 */}
          <div className="view-work-section">
            <a
              href={`/work/${school.schoolName.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {school.schoolName}의 작업물 보러가기
            </a>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="menteeInfo-card-border"></div>
      </Slide>
    </div>
  );
}

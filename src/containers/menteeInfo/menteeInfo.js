import React from "react";
import "./menteeInfo.scss";
import MenteeInfoCard from "../../components/menteeInfoCard/menteeInfoCard";
import { menteeInfo } from "../../portfolio";

export default function MenteeInfo() {
  if (menteeInfo.display) {
    return (
      <div className="menteeInfo-section" id="menteeInfo">
        <h1 className="menteeInfo-heading">introduce</h1>
        <div className="menteeInfo-card-container">
          {menteeInfo.schools.map((school, index) => (
            <MenteeInfoCard key={index} school={school} />
          ))}
        </div>
      </div>
    );  
  }
  return null;
}

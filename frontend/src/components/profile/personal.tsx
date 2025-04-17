import React from "react";
import "./profile.scss";
import { render } from "sass";
import { log } from "console";

type InfoElement = {
  description: string;
  value: string;
};
const Personal = () => {
  const personalInfo: InfoElement[] = [
    { description: "Name", value: "Hakash" },
    { description: "DOB", value: "30-03-2004" },
    { description: "Age", value: "20" },
    { description: "Gender", value: "Male" },
    { description: "Nationality", value: "Indian" },
    { description: "Mother Tongue", value: "Tamil" },
    { description: "Religion", value: "Hindu" },
    { description: "Community", value: "MBC" },
  ];
  const academicInfo: InfoElement[] = [
    { description: "Reg. No", value: "42130642" },
    {
      description: "School",
      value: "Electronics and Communication Engineering",
    },
    { description: "Batch", value: "2026" },
    { description: "Semester", value: "6" },
    // { description: "Year", value: "3" },
    { description: "Section", value: "B5" },
    { description: "First Graduate", value: "No" },
  ];
  const contactInfo: InfoElement[] = [
    { description: "E-mail", value: "xxxx.xxxxx00@gmail.com" },
    { description: "Phone", value: "+91 70109 48664" },
  ];
  const physicalInfo: InfoElement[] = [
    { description: "Height", value: "000" },
    { description: "Weight", value: "00" },
  ];
  const parentOneInfo: InfoElement[] = [
    { description: "Name", value: "xxxxx" },
    { description: "DOB", value: "30-03-2004" },
    { description: "Occupation", value: "xxxxx" },
    { description: "Annual Incom", value: "xxxxx" },
    { description: "Nationality", value: "xxxxxxx" },
    { description: "Qualification", value: "xxxxx" },
    { description: "E-mail", value: "xxxxx.xxxxx090@gmail" },
    { description: "Phone", value: "0000000000" },
  ];
  const parentTwoInfo: InfoElement[] = [
    { description: "Name", value: "xxxxx" },
    // { description: "DOB", value: "30-03-2004" },
    { description: "Occupation", value: "xxxxx" },
    { description: "Annual Incom", value: "xxxxx" },
    // { description: "Nationality", value: "xxxxxxx" },
    // { description: "Qualification", value: "xxxxx" },
    { description: "E-mail", value: "xxxxx.xxxxx090@gmail" },
    { description: "Phone", value: "0000000000" },
  ];

  const renderInfoElements = (
    info: InfoElement[],
    title: string,
    color: string
  ) => {
    return (
      <>
        <div className="fcsb f">
          <div className="info-title fw">
            {title}
            <div
              className="seperater"
              style={{ backgroundColor: `${color}` }}
            ></div>
          </div>

          {info.map((e: InfoElement, index: number) => {
            return (
              <div
                key={`${e.description}-${index}`}
                className="info-element df"
                style={index!=info.length-1 ? {borderBottom :"solid 1px grey"}:{}}
              >
                <div className="info-description">{e.description}</div>:
                <div className="info-value">{e.value}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="personal-container">
      <div className="personal-wrapper">
        <div className="personal-self-container">
          <div className="personal-info f br card">
            {renderInfoElements(personalInfo, "Personal", "red")}
          </div>
          <div className="accademic-info f br card">
            {renderInfoElements(academicInfo, "Academic", "lightGreen")}
          </div>
          <div className="contact-info f br card">
            {renderInfoElements(contactInfo, "Contact", "magenta")}
          </div>
          <div className="phisical-info f br card">
            {renderInfoElements(physicalInfo, "Physical", "aqua")}
          </div>
        </div>
        {/* <div className="personal-parents-container">
          <div className="parentOne-container f br card">
            {renderInfoElements(parentOneInfo, "Father", "blue")}
          </div>
          <div className="parentTwo-container f br card">
            {renderInfoElements(parentTwoInfo, "Mother", "blue")}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Personal;

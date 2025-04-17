"use client";
import {CircularProgressBar} from "../progressBar";
import "./profile.scss";

import React from "react";
import { useState, useEffect } from "react";

type InfoElement = {
  description: string;
  value: string;
};

export default function Attendance() {
  // summary data
  const attendanceInfo: InfoElement[] = [
    { description: "Accademic Start", value: "00-00-0000" },
    { description: "Accademic End", value: "30-03-2004" },
    { description: "Present", value: "20" },
    { description: "Absent", value: "00" },
    { description: "Upcoming", value: "00" },
    { description: "Holiday", value: "00" },
  ];
  const attendanceNavbar: string[] = ["Hours", "Days"];
  const [activeNavbar, setActiveNavbar] = useState("Hours");
  // progressBar
  const [attendance, setAttendance] = useState(75);
  const [mandatoryLevel, setMandatoryLevel] = useState(50);

  //   render summary data
  const renderInfoElements = (
    info: InfoElement[],
    title: string,
    color: string
  ) => {
    return (
      <>
        <div className="fcsb f">
          {/* <div className="info-title fw">
            {title}
            <div
              className="seperater"
              style={{ backgroundColor: `${color}` }}
            ></div>
          </div> */}

          {info.map((e: InfoElement, index: number) => {
            return (
              <div
                key={`${e.description}-${index}`}
                className="info-element df"
                style={
                  index != info.length - 1
                    ? { borderBottom: "solid 1px grey" }
                    : {}
                }
              >
                <div className="info-description">{e.description}</div>:
                <div
                  className="info-value"
                  style={
                    e.description == "Present"
                      ? { color: "#00ff00" }
                      : e.description == "Absent"
                      ? { color: "#ff0000" }
                      : {}
                  }
                >
                  {e.value}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  //   render attendance navbar
  const renderAttendanceNavbarElements = (e: string[]) => {
    return (
      <>
        {e.map((element: string, index: number) => {
          return (
            <div
              key={`${element}-${index}`}
              className={`attendance-navbar-element fr br ${
                element == activeNavbar ? "attendance-active-navbar" : ""
              } `}
              onClick={() => setActiveNavbar(element)}
            >
              {element}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="attendance-container">
        <div className="attendance-wrapper">
          <div className="summary-container df br">
            <div className="summary br card">
              {renderInfoElements(attendanceInfo, "", "")}
            </div>
            <div className="progress br fc card">
              <div className="progressBar-container">
                <CircularProgressBar
                  attendance={attendance}
                  mandatoryLevel={mandatoryLevel}
                />
              </div>
              <div className="c" style={{ gap: "1rem" }}>
                <p className="df"> Mandatory Level</p>:
                <p className="vf"> {mandatoryLevel}%</p>
              </div>
            </div>
          </div>
          <div className="detail-container">
            <div className="attendance-detail-container card br fc">
              <div
                className="attendance-navbar card br"
                style={{
                  gridTemplateColumns: `repeat(${attendanceNavbar.length},1fr)`,
                }}
              >
                {renderAttendanceNavbarElements(attendanceNavbar)}
              </div>
              <div className="attendance-detail card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import "./profile.scss";

import { JSX, useState } from "react";

type NavbarElementType = {
  icon: JSX.Element;
  name: string;
};
type InternshipsElementType = {
  title: string;
  period: string;
  semester: string;
  companyName: string;
  guideName: string;
  amountSpent: string;
  attachment: string;
};

export default function Records() {
  const recordsNavbar: NavbarElementType[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Graduation-Cap--Streamline-Core-Remix"
          height="14"
          width="14"
        >
          <desc>Graduation Cap Streamline Icon: https://streamlinehq.com</desc>
          <g id="Free Remix/Work Education/graduation-cap--graduation-cap-education">
            <path
              id="Union"
              fill="#000000"
              fillRule="evenodd"
              d="M7.24848 1.04553c-0.15853 -0.068683 -0.33842 -0.068683 -0.49696 0L0.375547 3.80808c-0.228584 0.09904 -0.376523562 0.32437 -0.376523562 0.57349 0 0.24911 0.147939562 0.47444 0.376523562 0.57348l0.705753 0.30579v4.47218C0.453974 9.98184 0.010376 10.5941 0.010376 11.3101c0 0.9366 0.75929 1.6959 1.695924 1.6959 0.93663 0 1.69592 -0.7593 1.69592 -1.6959 0 -0.716 -0.4436 -1.32826 -1.07092 -1.57708V5.80243l0.80669 0.34952 0.00546 2.73371c0.00022 0.10964 0.02928 0.2173 0.08427 0.31216l0.54073 -0.31341c-0.54073 0.31341 -0.54053 0.31376 -0.54032 0.31412l0.00042 0.00073 0.00092 0.00158 0.00209 0.00353 0.00517 0.0086c0.00389 0.0064 0.00868 0.01413 0.01439 0.02309 0.01143 0.01793 0.02658 0.04082 0.04568 0.06795 0.03817 0.05423 0.09226 0.12561 0.16406 0.20818 0.14361 0.16515 0.35871 0.37579 0.65937 0.58321 0.60783 0.4193 1.53912 0.8071 2.87941 0.8071 1.34026 0 2.27266 -0.3878 2.88154 -0.8066 0.30122 -0.20727 0.51692 -0.41769 0.66102 -0.58263 0.0721 -0.08247 0.1264 -0.15375 0.1647 -0.20789 0.0192 -0.02708 0.0344 -0.04993 0.0458 -0.06781 0.0058 -0.00894 0.0106 -0.01665 0.0145 -0.02303l0.0052 -0.00857 0.0021 -0.00352 0.0009 -0.00157 0.0004 -0.00073c0.0002 -0.00036 0.0004 -0.0007 -0.5394 -0.31574l0.5398 0.31504c0.0558 -0.09565 0.0853 -0.20441 0.0852 -0.31516l-0.0005 -2.73187 2.7636 -1.19737c0.2285 -0.09904 0.3765 -0.32437 0.3765 -0.57348 0 -0.24912 -0.148 -0.47445 -0.3765 -0.57349L7.24848 1.04553Zm2.36254 5.64844 0.00037 1.98471 -0.01055 0.0122c-0.0841 0.09626 -0.22313 0.23411 -0.42814 0.37515 -0.40358 0.27765 -1.08958 0.58645 -2.17306 0.58645 -1.08346 0 -1.76776 -0.30878 -2.16959 -0.58599 -0.20417 -0.14085 -0.34241 -0.27848 -0.42594 -0.37453l-0.01107 -0.01286 -0.00396 -1.98509L6.75152 7.7176c0.15854 0.06869 0.33843 0.06869 0.49696 0l2.36254 -1.02363ZM4.30511 8.56404l-0.00015 -0.0002 -0.00048 -0.00079 0.00063 0.00099Z"
              clipRule="evenodd"
              strokeWidth="1"
            ></path>
          </g>
        </svg>
      ),
      name: "Internships",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Star-Badge--Streamline-Core-Remix"
          height="14"
          width="14"
        >
          <desc>Star Badge Streamline Icon: https://streamlinehq.com</desc>
          <g id="Free Remix/Interface Essential/star-badge--ribbon-reward-like-social-rating-media">
            <path
              id="Union"
              fill="#000000"
              fillRule="evenodd"
              d="M7 1.25c-2.34721 0 -4.25 1.90279 -4.25 4.25S4.65279 9.75 7 9.75s4.25 -1.90279 4.25 -4.25S9.34721 1.25 7 1.25ZM1.5 5.5C1.5 2.46243 3.96243 0 7 0c3.0376 0 5.5 2.46243 5.5 5.5 0 0.92437 -0.228 1.79548 -0.6309 2.56014l2.0596 3.43276c0.0978 0.163 0.0948 0.3673 -0.0079 0.5273 -0.1026 0.16 -0.2871 0.2479 -0.476 0.2269l-1.9035 -0.2115 -0.8441 1.6882c-0.0825 0.1649 -0.249 0.2711 -0.4333 0.2762 -0.1844 0.0051 -0.35653 -0.0917 -0.44802 -0.2518l-1.64215 -2.8737C7.79554 10.9567 7.40283 11 7 11c-0.40283 0 -0.79554 -0.0433 -1.17373 -0.1255l-1.64215 2.8737c-0.09149 0.1601 -0.26367 0.2569 -0.44799 0.2518 -0.18433 -0.0051 -0.35088 -0.1113 -0.43334 -0.2762l-0.84409 -1.6882 -1.903484 0.2115c-0.188906 0.021 -0.373377 -0.0669 -0.4760269 -0.2269 -0.1026497 -0.16 -0.1057249 -0.3643 -0.0079355 -0.5273L2.13092 8.06014C1.72804 7.29548 1.5 6.42437 1.5 5.5Zm5.48632 -3.08292c0.08959 -0.00172 0.17787 0.02165 0.25486 0.06748 0.077 0.04583 0.13963 0.11229 0.18083 0.19186l0.00188 0.00364 -0.00003 0.00002 0.67889 1.36567 1.50622 0.2287c0.08926 0.01221 0.17331 0.04929 0.24252 0.10702 0.07002 0.05841 0.12196 0.13555 0.14971 0.2224 0.0278 0.08685 0.0303 0.17981 0.0072 0.26802 -0.02294 0.08769 -0.07025 0.16708 -0.13642 0.22899L8.8164 6.10405c0.00582 0.0161 0.00998 0.03278 0.0124 0.04978l0.21339 1.50166c0.01661 0.08801 0.00829 0.17897 -0.02411 0.2626 -0.03358 0.08664 -0.09157 0.16168 -0.16694 0.21602 -0.07538 0.05434 -0.1649 0.08564 -0.25771 0.09012 -0.09077 0.00437 -0.18087 -0.0171 -0.25987 -0.06186l-1.33492 -0.70672 -0.00197 -0.00041L6.9936 7.455c-0.00171 0 -0.00341 0.00022 -0.00505 0.00065l-1.33491 0.70672c-0.07899 0.04476 -0.1691 0.06623 -0.25988 0.06186 -0.09281 -0.00448 -0.18233 -0.03578 -0.2577 -0.09012 -0.07538 -0.05434 -0.13337 -0.12938 -0.16694 -0.21602 -0.03287 -0.08481 -0.04096 -0.17717 -0.02339 -0.26633l0.25335 -1.50427c0.00079 -0.00474 0.00173 -0.00945 0.0028 -0.01412L4.1137 5.0915l-0.00509 -0.00488 0.00007 -0.00007c-0.06193 -0.06273 -0.1054 -0.14131 -0.12564 -0.2271 -0.02024 -0.08581 -0.01647 -0.17552 0.01089 -0.25932 0.02737 -0.0838 0.07727 -0.15845 0.14424 -0.21577 0.06698 -0.05732 0.14844 -0.0951 0.23546 -0.1092l0.00371 -0.00061 0.00001 0.00003 1.50712 -0.22094 0.67786 -1.3636c0.03817 -0.07982 0.09766 -0.14756 0.17192 -0.19573 0.07517 -0.04875 0.16249 -0.07551 0.25207 -0.07723Z"
              clipRule="evenodd"
              strokeWidth="1"
            ></path>
          </g>
        </svg>
      ),
      name: "Achievements",
    },
  ];

  const [activeNavbar, setActiveNavbar] = useState("Internships");

  const renderRecordsNavbar = (list: NavbarElementType[]) => {
    return (
      <>
        <div className="elements-container fcfs f">
          <div className=" title dfont1 fw frfs">MILESTONES</div>
          {list.map((element: NavbarElementType, index: number) => {
            return (
              <div
                key={`${element}-${index}`}
                onClick={() => setActiveNavbar(element.name)}
                className={`element-container fr br ${
                  activeNavbar == element.name ? "active-element card" : ""
                } `}
              >
                <div className="icon fr">{element.icon}</div>
                <div className="name frfs">{element.name}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const internshipTableElements: InternshipsElementType[] = [
    {
      title: "1",
      period: "2",
      semester: "3",
      companyName: "4",
      guideName: "5",
      amountSpent: "6",
      attachment: "7",
    },
    {
      title: "1",
      period: "2",
      semester: "3",
      companyName: "4",
      guideName: "5",
      amountSpent: "6",
      attachment: "7",
    },
    {
      title: "1",
      period: "2",
      semester: "3",
      companyName: "4",
      guideName: "5",
      amountSpent: "6",
      attachment: "7",
    },
  ];

  const renderInternshipTable = (list: InternshipsElementType[]) => {
    return (
      <>
        <div
          className="table-header br dfont1"
          style={{ gridTemplateColumns: `repeat(7,1fr)` }}
        >
          <div className="header-element f fr">TITLE</div>
          <div className="header-element f fr">PERIOD</div>
          <div className="header-element f fr">SEMESTER</div>
          <div className="header-element f fr">COMPANY NAME</div>
          <div className="header-element f fr">GUIDE NAME</div>
          <div className="header-element f fr">AMOUNT SPENT</div>
          <div className="header-element f fr">ATTACHMENT</div>
        </div>
        <div className="table-content">
          {list.map((element: InternshipsElementType, index: number) => {
            return (
              <div
                key={`${element.title}-${index}`}
                className="table-element-container"
              >
                <div
                  className="elements"
                  style={{ gridTemplateColumns: `repeat(7 ,1fr)` }}
                >
                  <div className="element f fr of">{element.title}</div>
                  <div className="element f fr of">{element.period}</div>
                  <div className="element f fr of">{element.semester}</div>
                  <div className="element f fr of">{element.companyName}</div>
                  <div className="element f fr of">{element.guideName}</div>
                  <div className="element f fr of">{element.amountSpent}</div>
                  <div className="element f fr of">{element.attachment}</div>
                </div>
                 {index != list.length -1 ? <div className="seperator"></div> : null}
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="records-container">
        <div className="records-wrapper fr">
          <div className="records-navbar br card">
            {renderRecordsNavbar(recordsNavbar)}
          </div>
          <div className="records-table-container card">
            {renderInternshipTable(internshipTableElements)}
          </div>
        </div>
      </div>
    </>
  );
}

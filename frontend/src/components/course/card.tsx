import "./course.scss";
import "../../style/variables.scss";
import { JSX } from "react";

const CourseCardMini = () => {
  return (
    <>
      <div className="mini-card-container card">
        <div className="card-wrapper">
          <div className="thumbnail"></div>
          <div className="category fontSL">learning path</div>
          <div className="title fontMD">
            Title: This is where the title goes in
          </div>
          <div className="date-container frsb fontXSL">
            <div className="date-start">00-00-0000</div>
            <div className="date-end">00-00-0000</div>
          </div>
          <div className="progress-container"></div>
        </div>
      </div>
    </>
  );
};
const CourseCardLarge = () => {
  return (
    <>
      <div className="large-card-container card">
        <div className="card-wrapper">
          <div className="thumbnail"></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "70%",
              height: "100%",
              paddingInline: "10px",
            }}
          >
            <div className="category fontSL">vzbzhrb</div>
            <div className="title fontBD">
              Title: This is where the title goes in
            </div>
            <div className="date-container frsb fontXSL">
              <div className="date-start">00-00-0000</div>
              <div className="date-end">00-00-0000</div>
            </div>
            <div className="progress-container f">
              <div className="progressBar"></div>
              <div className="enter-button"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CourseStatusCard = ({ border, bg, count, type, icon }: { border: string; bg: string; count : number; type:string, icon : React.JSX.Element}) => {
  return (
    <>
      <div
        className="statusCard-container"
        style={{ border: `solid 3px ${border}` }}
      >
        <div
          className="statusCard-wrapper"
          style={{ backgroundColor: `${bg}` }}
        >
          <div className="top">
            <div className="icon">{icon}</div>
            <div className="content">
              <div className="count">{count}</div>
              <div className="title">{type}</div>
            </div>
          </div>
          <div
            className="seperator"
            style={{ backgroundColor: `${border}` }}
          ></div>
          <div className="bottom fr">
            <div className="seeMore frfs fontS" style={{ color: `${border}` }}>
              see more
            </div>
            <div className="icon fr">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.84399 12.1821H19.844"
                  stroke={`${border}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.844 5.18213L19.844 12.1821L12.844 19.1821"
                  stroke={`${border}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export const StatusCard = CourseStatusCard;

export const MiniCard = CourseCardMini;
export const LargeCard = CourseCardLarge;


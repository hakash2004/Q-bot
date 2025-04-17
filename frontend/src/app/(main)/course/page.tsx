import { LargeCard, MiniCard, StatusCard} from "../../../components/course/card";
import "./layout.scss";
import "../../../style/variables.scss"

export default function Course() {
  return (
    <>
      <div className="course-container">
        <div className="course-wrapper">
          <div className="active-course-container">
            <div className="active-course-title fontL frfs">bbkbkbhjk</div>
            <div className="active-course-content">
              <LargeCard />
              <LargeCard />
            </div>
          </div>
          <div className="all-course-container">
            <div className="all-course-title fontL frfs">fcghjkhvvjv</div>
            <div className="all-course-content">
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </div>
          </div>
          <div className="recommended-course-container">          </div>

          {/* <div className="course-header"></div>
                    <div className="main-course-container">
                        <MiniCard />
                    </div>
                    <div className="side-course-container">
                        <LargeCard />
                    </div> */}
        </div>
      </div>
    </>
  );
}

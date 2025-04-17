import { CircularProgressBar, LineProgressBar } from "@/components/progressBar";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";
import "./dashboard.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Active() {
  const activeCourseList = [
    { name: "Embedded System", progress: "50" },
    { name: "System progaming", progress: "74" },
    { name: "HDL", progress: "63" },
    { name: "Antenna", progress: "42" },
    { name: "DLC", progress: "81" },
  ];
  const CompletedCourseList = [
    { name: "AC", progress: "100" },
    { name: "M-IV", progress: "100" },
    { name: "ononono", progress: "100" },
    { name: "ononono", progress: "100" },
    { name: "ononono", progress: "100" },
  ];

  const [activeList, setActiveList] = useState("ACTIVE");
  const [ActiveListExpand, setActiveListExpand] = useState(false);
  const [chartExpanded, setChartExpanded] = useState(true);

  const renderActiveList = (list: any) => {
    return (
      <div className="actile-list-elements-container">
        {list.map((e: any, index: number) => (
          <div
            className="active-list-element-container"
            key={`${e.name}-${index}`}
          >
            <div className="icon-container">
              <div className="icon">{e.name[0]}</div>
            </div>
            <div className="name">{e.name}</div>
            <div className="progress">
              <LineProgressBar
                attendance={e.progress}
                mandatoryLevel={0}
                width={200}
                height={7}
                fontSize="0"
              />
            </div>
            <div className="continue-button-container">
              <div className="continue-button">
                <div className="play-icon">
                  <Play />
                </div>
                <div className="tag">continue</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="active-container">
      <div className="active-wrapper">
        <div
          className="active-head"
          onClick={() => {
            setActiveListExpand(!ActiveListExpand);
            setChartExpanded(!chartExpanded);
          }}
        >
          <div className="title">COURSES</div>
          <div className="buttons-container">
            {ActiveListExpand && (
              <>
                <div className="buttons" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="button"
                    style={
                      activeList === "ACTIVE"
                        ? {
                            color: "rgb(68, 143, 255)",
                            backgroundColor: "rgba(0, 102, 255, 0.17)",
                          }
                        : {}
                    }
                    onClick={() => setActiveList("ACTIVE")}
                  >
                    ACTIVE
                  </button>

                  <button
                    className="button"
                    style={
                      activeList === "COMPLETE"
                        ? {
                            color: "rgb(68, 143, 255)",
                            backgroundColor: "rgba(0, 102, 255, 0.17)",
                          }
                        : {}
                    }
                    onClick={() => setActiveList("COMPLETE")}
                  >
                    COMPLETE
                  </button>
                </div>
              </>
            )}

            {/* ^ */}
            <button
              className="dropDown"
              style={{ transition: "transform 0.3s ease" }}
            >
              <ChevronDown
                style={{
                  transform: ActiveListExpand
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
          </div>
        </div>

        {ActiveListExpand && (
          <>
            <div className="list-discriptions">
              <div className="icon">#</div>
              <div className="name">course name</div>
              <div className="progress">progress</div>
              <div className="button">status</div>
            </div>
            <div className="active-body">
              {activeList === "ACTIVE"
                ? renderActiveList(activeCourseList)
                : renderActiveList(CompletedCourseList)}
            </div>
          </>
        )}

        <div
          className="chart-head"
          onClick={() => {
            setChartExpanded(!chartExpanded);
            setActiveListExpand(!ActiveListExpand);
          }}
        >
          <div className="title">CHART</div>
          {/* ^ */}
          <button
            className="dropDown"
            style={{ transition: "transform 0.3s ease" }}
          >
            <ChevronDown
              style={{
                transform: chartExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>

        {chartExpanded && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

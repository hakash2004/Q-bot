import { CircleCheckBig } from "lucide-react";
// import { StatusCard } from "../../../components/course/card";
import "./page.scss";
export default function Dashboard() {
return(
    <>
        <div className="dashboard-container">
            <div className="dashboard-wrapper">
                <div className="course-status-container">
                    {/* <StatusCard border={"#17c9006a"} bg={"#1eff002f"} count={courseStatus[0].count} type={courseStatus[0].type} icon={courseStatus[0].icon}/>
                    <StatusCard border={"#53ceffac"} bg={"#53bdff4d"} count={courseStatus[1].count} type={courseStatus[1].type} icon={courseStatus[1].icon}/>
                    <StatusCard border={"#9e28ff69"} bg={"#8c00ff31"} count={courseStatus[2].count} type={courseStatus[2].type} icon={courseStatus[2].icon}/>
                    <StatusCard border={"#ff77006c"} bg={"#ff770031"} count={courseStatus[3].count} type={courseStatus[3].type} icon={courseStatus[3].icon}/> */}
                </div>
            </div>
        </div>
        
    </>
)
}

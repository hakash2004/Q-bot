'use client'
import { CircleCheckBig ,ClipboardCheck, BookCheck, FileCheck} from "lucide-react"
import { StatusCard } from "./card"
import "./dashboard.scss"
import Active from "./active"
import { CalendarDaysExample } from "./calender"

export default function AiDashboard(){
    const courseStatus = [
        {count : 69,type:"Course",icon : <BookCheck  size={"40px"} color="#53BF7B" />},
        {count : 6,type:"Assignment",icon:<FileCheck size={"40px"}color="#84BCFC " />},
        {count : 96,type:"Test",icon:<ClipboardCheck size={"40px"} color="#E07AFF" />},
      ]
    return(
        <>
            <div className="dashboard-container">
                <div className="dashboard-wrapper">
                    <div className="course-status">
                        <div className="head">
                            STATUS
                        </div>
                        <div className="content">
                            <StatusCard border={"black"} bg={"rgba(0, 0, 0, 0.05)"} count={courseStatus[0].count} type={courseStatus[0].type} icon={courseStatus[0].icon} />
                            <StatusCard border={"black"} bg={"rgba(0, 0, 0, 0.05)"} count={courseStatus[1].count} type={courseStatus[1].type} icon={courseStatus[1].icon}/>
                            <StatusCard border={"black"} bg={"rgba(0, 0, 0, 0.05)"} count={courseStatus[2].count} type={courseStatus[2].type} icon={courseStatus[2].icon}/>
                        </div>
                    </div>
                    <div className="calender">
                        <CalendarDaysExample />
                    </div>
                    <div className="active">
                        <Active />
                    </div>
                    <div className="submission-tracker">
                    </div>
                </div>
            </div>
            
        </>
    )
}
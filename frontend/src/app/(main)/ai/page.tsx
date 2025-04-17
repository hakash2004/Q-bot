'use client'
import AiSidebar from "@/components/ai/sidebar"
import "./page.scss"
import { useState } from "react"
import AiChat from "@/components/ai/chat";
import AiDashboard from "@/components/ai/dashboard/main";
import AiUpSkill from "@/components/ai/upskill";

export default function ai(){

    // const [activeItem, setActiveItem] = useState("CHAT");
    const [activeItem, setActiveItem] = useState("DASHBOARD");
    
    const renderActiveItem = (activeItem : string) => {
        switch(activeItem){
            case "CHAT" : return <AiChat />;
            case "DASHBOARD" : return <AiDashboard />;
            case "UPSKILL" : return <AiUpSkill />;
         }
    }
    return(
        <>
            <div className="ai-container">
                <div className="ai-wrapper">
                    <div className="ai-sidebar"> <AiSidebar activeItem={activeItem} setActiveItem={setActiveItem}  /> </div>
                    <div className="main-container">
                        <div className="main-wrapper" >
                            {renderActiveItem(activeItem)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
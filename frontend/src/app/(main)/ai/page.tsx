'use client'
import AiSidebar from "@/components/ai/sidebar"
import "./page.scss"
import { useState } from "react"
import AiChat from "@/components/ai/chat";

export default function AiBubble(){

    const [activeItem, setActiveItem] = useState("CHAT");
    
    const renderActiveItem = (activeItem : string) => {
        switch(activeItem){
            case "CHAT" : return <AiChat />;
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
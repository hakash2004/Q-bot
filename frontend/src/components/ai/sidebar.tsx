import { useRef, useState, useEffect } from "react";
import { LayoutDashboard, Bot , Clipboard, CircleArrowUp} from 'lucide-react';
import "./ai.scss";

export default function AiSidebar({ activeItem, setActiveItem }: any) {
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const [highlightStyle, setHighlightStyle] = useState({ top: 0 });

  useEffect(() => {
    const activeButton = document.querySelector(".ai-sidebarItem.active");
    if (activeButton && highlightRef.current) {
      const topPosition = (activeButton as HTMLElement).offsetTop;
      setHighlightStyle({ top: topPosition });
    }
  }, [activeItem]);

  const SIDEBARITEMS = {
    CHAT: "CHAT",
    DASHBOARD: "DASHBOARD",
    UPSKILL: "UPSKILL",
    TEST: "TEST",
    ASSIGNMENT: "ASSIGNMENT",
  };

  // const sidebarItems = Object.values(SIDEBARITEMS);
  const sidebarItems = [
    {
      name: "CHAT",
      icon: <Bot />,
    },
    {
      name: "DASHBOARD",
      icon: <LayoutDashboard />
    },
    {
      name: "UPSKILL",
      icon: <CircleArrowUp />,
    },
    {
      name: "TEST",
      icon: <Clipboard />,
    },
    {
      name: "ASSIGNMENT",
      icon: "A",
    },
  ];

  const renderSidebar = () => {
    return (
      <>
        <div ref={highlightRef} className="highlight" style={highlightStyle}></div>
        {sidebarItems.map((e: any, index: number) => {
          return (
              <button
                key={`${e.name}-${index}`}
                className={`ai-sidebarItem ${
                  activeItem === e.name ? "active" : ""
                }`}
                onClick={() => setActiveItem(e.name)}
              >
                {e.icon}
              </button>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="ai-sidebar-container">
        <div className="ai-sidebar-wrapper">{renderSidebar()}</div>
      </div>
    </>
  );
}

import { useRef, useState, useEffect } from "react";
import { LayoutDashboard, Bot , Clipboard, CircleArrowUp} from 'lucide-react';
import "./ai.scss";
import { useRouter } from "next/navigation";

export default function AiSidebar({ activeItem, setActiveItem }: any) {
  // const highlightRef = useRef<HTMLDivElement | null>(null);
  // const [highlightStyle, setHighlightStyle] = useState({ top: 15 });

  useEffect(() => {
    const activeButton = document.querySelector(".ai-sidebarItem.active");
    // if (activeButton && highlightRef.current) {
    //   const topPosition = (activeButton as HTMLElement).offsetTop;
    //   setHighlightStyle({ top: topPosition });
    // }
  }, [activeItem]);


  const sidebarItems = [
    {
      name: "CHAT",
      icon: <Bot />,
    },
    {
      name: "Q-BOT",
      icon: "[ ]",
    }
  ];
  const router = useRouter();
  const handleSidebarItemClick = (itemName: string) => {
    if (itemName === "Q-BOT") {
      router.push('/qbot');
    }
    setActiveItem(itemName);
  };

  const renderSidebar = () => {
    return (
      <>
        {/* <div ref={highlightRef} className="highlight" style={highlightStyle}></div> */}
        {sidebarItems.map((e: any, index: number) => {
          return (
              <button
                key={`${e.name}-${index}`}
                className={`ai-sidebarItem ${
                  activeItem === e.name ? "active" : ""
                }`}
                onClick={() => handleSidebarItemClick(e.name)} 
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

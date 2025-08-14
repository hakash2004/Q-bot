"use client";

import {
  Bot,
  CircleArrowUp,
  LayoutDashboard,
  Clipboard,
  User,
  Book,
  StickyNote,
  MessageSquare,
  BookOpen,
} from "lucide-react";

import { useRouter } from "next/navigation";
import "./main.scss";
import { useState } from "react";

export default function Qbot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  // SIDEBAR
  const [activeItem, setActiveItem] = useState("DASHBOARD");
  // top
  const sidebarItemsBottom = [
    {
      name: "CHAT",
      icon: <MessageSquare />,
      route: "/qbot/chat",
    },
  ];
  // mid
  const sidebarItemsMiddle = [
    {
      name: "DASHBOARD",
      icon: <LayoutDashboard />,
      route: "/qbot/dashboard"
    },
    {
      name: "COURSES",
      icon: <BookOpen />,
      route: "/qbot/courses"
    },
    {
      name: "UPSKILL",
      icon: <CircleArrowUp />,
      route: "/qbot/upskill"
    },
    // {
    //   name: "ASSIGNMENT",
    //   icon: <StickyNote />,
    // },
    // {
    //   name: "TEST",
    //   icon: <Clipboard />,
    // },
  ];
  // bottom
  const sidebarItemsTop = [
    {
      name: "PROFILE",
      icon: <User />,
      route: "/qbot/profile"
    },
  ];
  // render functions
  const renderSidebarItems = (list: any) => {
    return (
      <>
        {list.map((e: any, index: number) => {
          return (
            <button
              key={`${e.name}-${index}`}
              className={`ai-sidebarItem ${
                activeItem === e.name ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem(e.name);
                router.push(e.route);
              }}
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
      <div className="qbot-container">
        <div className="qbot-wrapper">
          <div className="sidebar">
            <div className="top">{renderSidebarItems(sidebarItemsTop)}</div>
            <div className="sidebar-seperator"></div>
            <div className="middle">
              {renderSidebarItems(sidebarItemsMiddle)}
            </div>
            <div className="sidebar-seperator"></div>
            <div className="bottom">
              {renderSidebarItems(sidebarItemsBottom)}
            </div>
          </div>
          <div className="main-content">{children}</div>
        </div>
      </div>
    </>
  );
}

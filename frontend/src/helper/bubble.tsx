"use client";

import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import "./bubble.scss";

const FloatingBubble = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [snapPoints, setSnapPoints] = useState<{ x: number; y: number }[]>([]);
  const [hydrated, setHydrated] = useState(false); // <--- Important line

  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHydrated(true); // Tell React we're now running on the client

    const w = window.innerWidth;
    const h = window.innerHeight;
    const margin = 20;
    const centerX = w / 2 - 30;
    const centerY = h / 2 - 30;

    const points = [
      { x: margin, y: margin },
      { x: centerX, y: margin },
      { x: w - 80, y: margin },
      { x: margin, y: centerY },
      { x: w - 80, y: centerY },
      { x: margin, y: h - 80 },
      { x: centerX, y: h - 80 },
      { x: w - 80, y: h - 80 },
    ];

    setSnapPoints(points);
    setPosition({ x: w - 80, y: h - 80 });
  }, []);

  const getClosestSnap = (x: number, y: number) => {
    const distances = snapPoints.map((pos) => Math.hypot(x - pos.x, y - pos.y));
    const closestIndex = distances.indexOf(Math.min(...distances));
    return snapPoints[closestIndex];
  };

  const handleStop = (_: any, data: any) => {
    if (!expanded && snapPoints.length > 0) {
      const { x, y } = data;
      const nearest = getClosestSnap(x, y);
      setPosition(nearest);
    }
  };

  const handleDoubleClick = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (expanded) {
      setExpanded(false);
      setPosition({ x: w - 80, y: h - 80 });
    } else {
      setExpanded(true);
      setPosition({ x: 0, y: 0 });
    }
  };

  // Only render after hydration to avoid SSR mismatch
  if (!hydrated) return null;

  return (
    <Draggable
      nodeRef={bubbleRef as React.RefObject<HTMLElement>}
      disabled={expanded}
      position={position}
      onStop={handleStop}
    >
      <div
        ref={bubbleRef}
        className={`floating-bubble ${expanded ? "expanded" : ""}`}
        onDoubleClick={handleDoubleClick}
      >
        {expanded ? <div className="bubble-content">{children}</div> : "Q"}
      </div>
    </Draggable>
  );
};

export default FloatingBubble;

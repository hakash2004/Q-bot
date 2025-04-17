'use client';
import "./components.scss";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface CircularProgressProps {
  attendance: number;
  mandatoryLevel: number;
  size: number;
  fontSize : string;
  strokeWidth: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  attendance,
  mandatoryLevel,
  size,
  fontSize,
  strokeWidth,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Motion value for smooth animation of the stroke
  const animatedValue = useMotionValue(0);

  // Spring for smooth transition
  const animatedPercentage = useSpring(animatedValue, { damping: 20, stiffness: 100 });

  // Set progress offset based on animated percentage
  const progressOffset = useTransform(animatedPercentage, (latest) =>
    circumference - (latest / 100) * circumference
  );

  // Determine stroke color based on attendance vs mandatory level
  const progressColor = attendance < mandatoryLevel ? "#ff0000" : "#00ff00"; // Red if below, Green if above

  // Update animated value only once when the component loads
  useEffect(() => {
    animatedValue.set(0); // Start at 0 initially
    const timeout = setTimeout(() => {
      animatedValue.set(attendance); // Animate to the attendance level
    }, 200); // Small delay before animation starts

    return () => clearTimeout(timeout);
  }, [attendance, animatedValue]);

  return (
    <div className="circular-progress">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="progress-bg"
          stroke="#e0e0e0" // Light gray background
          fill="transparent"
        />
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="progress-bar"
          strokeDasharray={circumference}
          strokeLinecap="round"
          fill="transparent"
          stroke={progressColor} // Color depends on attendance vs mandatory level
          style={{
            strokeDashoffset: progressOffset, // Stroke animates with percentage
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth animation
        />
        {/* Attendance Percentage Text */}
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="progress-text"
          fill={progressColor} // Text color same as progress bar color
          fontSize={fontSize}
          fontWeight="bold"
        >
          {Math.round(attendance)}%
        </motion.text>
      </svg>
    </div>
  );
};

interface LineProgressProps {
  attendance: number;
  mandatoryLevel: number;
  width: number;
  height: number;
  fontSize: string;
}

const LineProgress: React.FC<LineProgressProps> = ({
  attendance,
  mandatoryLevel,
  width,
  height,
  fontSize,
}) => {
  const animatedValue = useMotionValue(0);
  const animatedPercentage = useSpring(animatedValue, { damping: 20, stiffness: 100 });

  const progressColor = attendance < mandatoryLevel ? "#ff0000" : "#00ff00"; // Red or Green

  const progressWidth = useTransform(animatedPercentage, (latest) =>
    `${(latest / 100) * width}px`
  );

  useEffect(() => {
    animatedValue.set(0); // Start at 0
    const timeout = setTimeout(() => {
      animatedValue.set(attendance); // Animate to attendance value
    }, 200);
    return () => clearTimeout(timeout);
  }, [attendance, animatedValue]);

  return (
    <div className="line-progress-container" style={{ width, height, backgroundColor: "#e0e0e0", borderRadius: 6, overflow: "hidden", position: "relative" }}>
      <motion.div
        className="line-progress-bar"
        style={{
          width: progressWidth,
          height,
          backgroundColor: progressColor,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="line-progress-text"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: progressColor,
          fontWeight: "bold",
          fontSize,
        }}
      >
        {Math.round(attendance)}%
      </motion.div>
    </div>
  );
};

export const LineProgressBar = LineProgress;
 export const CircularProgressBar = CircularProgress;
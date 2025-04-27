'use client'
import React, { useEffect, useState } from "react";
import "./upskill.scss";
import Ai from "@/app/api/ai/ai";
import CourseGenerator from "@/components/ai/course.tsx/courseGenerator";
export default function UpSkill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [cards, setCards] = useState<any[]>([]);

  const [filterText, setFilterText] = useState("");
  const [aiResponse, setAiResponse] = useState<any>();
  const [showCoursePage, setShowCoursePage] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>();

  const handleClick = () => {
    setShowCoursePage(true);
  };

  const handleAddCard = () => {
    if (inputText.trim()) {
      setCards([
        ...cards,
        {
          text: inputText,
          image: null,
          aiResponse: null,
        },
      ]);
      console.log("Input for AI:", inputText);

      setAiResponse(null);
      setIsModalOpen(false);
    }
  };

  const handleCardOnClick = (courseData: any) => {
    setSelectedCourse(courseData);
    setShowCoursePage(true);
  };

  const filteredCards = cards.filter((card) =>
    card.text.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    if (aiResponse) {
      console.log("AI Response Received:", aiResponse);

      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[updatedCards.length - 1] = {
          ...updatedCards[updatedCards.length - 1],
          aiResponse,
        };
        return updatedCards;
      });
    }
  }, [aiResponse]);

  return (
    <div className="upskill-container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Filter Cards"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <div className="cards-container">
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardOnClick(card.aiResponse)} 
          >
            <div className="card-image">
              {card.aiResponse ? (
                <div className="ai-response-container">
                  <div className="ai-response">
                    {JSON.stringify(card.aiResponse, null, 2)}
                  </div>
                </div>
              ) : (
                <div className="no-image">No Image</div>
              )}
            </div>
            <div className="card-text">
              {card.text}
            </div>
          </div>
        ))}
      </div>

      <div className="plus-icon" onClick={() => setIsModalOpen(true)}>
        <span>+</span>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text"
            />
            <button onClick={handleAddCard}>Add Card</button>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {inputText && !aiResponse && (
        <Ai
          input={`Generate a course structure for "{title: '${inputText}'}" strictly in the following format:
          {
            title: "Course Name",
            units: [
              {
                unitName: "Unit 1 Name",
                modules: [
                  {
                    moduleName: "Module Name",
                    sources: [
                      {
                        taskName: "Task Name",
                        source: ["Source 1", "Source 2"]
                      }
                    ],
                    assignments: [
                      {
                        taskName: "Assignment Task",
                        assignment: {
                          dueDate: "Due Date",
                          submitted: false
                        }
                      }
                    ],
                    tests: [
                      {
                        taskName: "Test Task",
                        test: {
                          score: 0,
                          maxScore: 100
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          } 
            IMPORTANT ->you are chatput or output should only have the object starts with { and ends }. no other word
          Ensure the course includes all relevant units, modules, tasks, assignments, and tests that are required for a comprehensive course.
          `}
          onResponse={(res) => {
            try {
                // Fix missing quotes around keys
                const fixed = res.replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":');
                
                const parsed = JSON.parse(fixed);
                setAiResponse(parsed);
              } catch (error) {
                console.error("Failed to parse AI response:", error);
              }
          }}
        />
      )}

      {/* Show CoursePage if showCoursePage is true */}

      
      {showCoursePage && selectedCourse && (
         <CourseGenerator course={selectedCourse} /> 
      )} 
    </div>
  );
}

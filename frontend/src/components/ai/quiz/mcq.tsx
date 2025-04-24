'use client'
import { useState } from "react";
import "./mcq.scss";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type QuizProps = {
  data: Question[];
};

export default function Quiz({ data }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === data[current].answer) {
      setScore(score + 1);
    }

    setSelected(null);

    if (current < data.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div className="quiz-score">
        Quiz Completed! Your score: {score} / {data.length}
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2 className="quiz-header">
        Question {current + 1} of {data.length}
      </h2>
      <p className="quiz-question">{data[current].question}</p>
      <div className="quiz-options">
        {data[current].options.map((option) => (
          <button
            key={option}
            className={`quiz-option ${selected === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="quiz-button"
        onClick={handleNext}
        disabled={!selected}
      >
        {current === data.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

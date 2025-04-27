"use client";
import { Book, LayoutGrid, File, Clipboard } from "lucide-react";
import "./course.scss";
import { useState } from "react";
import Ai from "@/app/api/ai/ai";
import ReactMarkdown from "react-markdown";
import { Mosaic } from "react-loading-indicators";
import remarkGfm from "remark-gfm";

export default function CoursePage() {
  const data = {
    activeCourses: [
      {
        courseName: "Introduction to Web Development",
        courseIcon: "🖥️",
        date: {
          start: "2025-02-01",
          end: "2025-04-30",
        },
        progress: "60%",
        status: "started",
        units: [
          {
            unitName: "Frontend Basics",
            modules: [
              {
                moduleName: "HTML & CSS",
                sources: [
                  {
                    taskName: "HTML Resources",
                    source: [
                      "Introduction to HTML",
                      "HTML Elements and Structure",
                    ],
                  },
                  {
                    taskName: "CSS Resources",
                    source: ["Styling with CSS", "Flexbox and Grid Layouts"],
                  },
                ],
                assignments: [
                  {
                    taskName: "Build a Personal Website",
                    assignment: {
                      dueDate: "2025-03-01",
                      submitted: true,
                    },
                  },
                ],
                tests: [
                  {
                    taskName: "HTML & CSS Quiz",
                    test: {
                      score: 85,
                      maxScore: 100,
                    },
                  },
                ],
              },
              {
                moduleName: "JavaScript Essentials",
                sources: [
                  {
                    taskName: "JS Basics",
                    source: [
                      "JavaScript Basics and Syntax",
                      "Working with Variables and Data Types",
                    ],
                  },
                  {
                    taskName: "JS Control",
                    source: [
                      "Control Structures and Loops",
                      "Functions and Events",
                    ],
                  },
                ],
                assignments: [
                  {
                    taskName: "DOM Manipulation Task",
                    assignment: {
                      dueDate: "2025-03-15",
                      submitted: false,
                    },
                  },
                ],
                tests: [
                  {
                    taskName: "JavaScript Basics Test",
                    test: {
                      score: 72,
                      maxScore: 100,
                    },
                  },
                ],
              },
              {
                moduleName: "Advanced CSS Tricks",
                sources: [
                  {
                    taskName: "Modern Layouts",
                    source: [
                      "CSS Grid Magic",
                      "Responsive Units",
                      "Clamp & Viewport",
                    ],
                  },
                  {
                    taskName: "Animation Time",
                    source: [
                      "Keyframes in Action",
                      "Transitions vs Animations",
                    ],
                  },
                ],
                assignments: [
                  {
                    taskName: "Animated Landing Page",
                    assignment: {
                      dueDate: "2025-03-18",
                      submitted: true,
                    },
                  },
                ],
                tests: [],
              },
            ],
          },
          {
            unitName: "Version Control",
            modules: [
              {
                moduleName: "Git & GitHub",
                sources: [
                  {
                    taskName: "Git Guide",
                    source: [
                      "Introduction to Git and Version Control",
                      "Creating and Cloning Repositories",
                    ],
                  },
                  {
                    taskName: "GitHub Usage",
                    source: [
                      "Committing and Branching",
                      "Collaboration with GitHub",
                    ],
                  },
                ],
                assignments: [
                  {
                    taskName: "Create and Push a Repository",
                    assignment: {
                      dueDate: "2025-04-01",
                      submitted: true,
                    },
                  },
                ],
                tests: [
                  {
                    taskName: "Git Knowledge Test",
                    test: {
                      score: 90,
                      maxScore: 100,
                    },
                  },
                ],
              },
              {
                moduleName: "Advanced Git",
                sources: [
                  {
                    taskName: "Git Internals",
                    source: [
                      "How Git Stores Data",
                      "Reflogs and Object Trees",
                      "Cherry-pick & Rebase",
                    ],
                  },
                ],
                assignments: [],
                tests: [
                  {
                    taskName: "Git Rebase Challenge",
                    test: {
                      score: 64,
                      maxScore: 100,
                    },
                  },
                ],
              },
            ],
          },
          {
            unitName: "Backend Basics",
            modules: [
              {
                moduleName: "Node.js & Express",
                sources: [
                  {
                    taskName: "Node Basics",
                    source: [
                      "Intro to Backend Development",
                      "Getting Started with Node.js",
                    ],
                  },
                  {
                    taskName: "Express API",
                    source: [
                      "Building APIs with Express",
                      "Routing and Middleware",
                    ],
                  },
                ],
                assignments: [
                  {
                    taskName: "Create a Simple API",
                    assignment: {
                      dueDate: "2025-04-10",
                      submitted: false,
                    },
                  },
                ],
                tests: [
                  {
                    taskName: "Backend Fundamentals Test",
                    test: {
                      score: 0,
                      maxScore: 100,
                    },
                  },
                ],
              },
              {
                moduleName: "Databases",
                sources: [
                  {
                    taskName: "Mongo Time",
                    source: [
                      "What is NoSQL?",
                      "Intro to MongoDB",
                      "Connecting Node to Mongo",
                    ],
                  },
                ],
                assignments: [
                  {
                    taskName: "Design Your DB Schema",
                    assignment: {
                      dueDate: "2025-04-12",
                      submitted: true,
                    },
                  },
                ],
                tests: [],
              },
              {
                moduleName: "Authentication Madness",
                sources: [
                  {
                    taskName: "Auth 101",
                    source: ["JWTs", "Session vs Token", "Secure Passwords"],
                  },
                ],
                assignments: [],
                tests: [
                  {
                    taskName: "Login Flow Debug",
                    test: {
                      score: 47,
                      maxScore: 100,
                    },
                  },
                ],
              },
            ],
          },
          {
            unitName: "Deployment & Hosting",
            modules: [
              {
                moduleName: "Deploying Web Applications",
                sources: [
                  {
                    taskName: "Deployment Basics",
                    source: [
                      "Introduction to Deployment",
                      "Hosting with GitHub Pages",
                    ],
                  },
                  {
                    taskName: "CI/CD & Platforms",
                    source: [
                      "Deploying with Vercel & Netlify",
                      "Basic CI/CD Concepts",
                    ],
                  },
                ],
                assignments: [
                  {
                    taskName: "Deploy Your Website",
                    assignment: {
                      dueDate: "2025-04-20",
                      submitted: false,
                    },
                  },
                ],
                tests: [
                  {
                    taskName: "Deployment Quiz",
                    test: {
                      score: 0,
                      maxScore: 100,
                    },
                  },
                ],
              },
              {
                moduleName: "Chaos Deployments",
                sources: [
                  {
                    taskName: "Oops Deploy",
                    source: ["Downtime Handling", "Logs & Monitoring"],
                  },
                ],
                assignments: [
                  {
                    taskName: "Roll Back Roll Call",
                    assignment: {
                      dueDate: "2025-04-22",
                      submitted: false,
                    },
                  },
                ],
                tests: [
                  {
                    taskName: "Outage Drill",
                    test: {
                      score: 92,
                      maxScore: 100,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    allCourses: [
      {
        courseName: "Introduction to Web Development",
        courseIcon: "🖥️",
        date: {
          start: "2025-02-01",
          end: "2025-04-30",
        },
        status: "started",
      },
      {
        courseName: "React for Beginners",
        courseIcon: "⚛️",
        date: {
          start: "2025-03-10",
          end: "2025-05-20",
        },
        status: "started",
      },
      {
        courseName: "Responsive Design & Accessibility",
        courseIcon: "📱",
        date: {
          start: "2025-03-20",
          end: "2025-05-25",
        },
        status: "started",
      },
      {
        courseName: "Backend Development with Node.js",
        courseIcon: "🛠️",
        date: {
          start: "2025-06-01",
          end: "2025-08-01",
        },
        status: "not started",
      },
      {
        courseName: "Final Portfolio Project",
        courseIcon: "🎓",
        date: {
          start: "2024-11-01",
          end: "2025-01-15",
        },
        status: "completed",
      },
    ],
  };

  // console.log(data);

  // variables
  const currentCourse = data.activeCourses[0];
  const [currentUnit, setCurrentUnit] = useState(currentCourse.units[0]);
  const [currentModule, setCurrentModule] = useState(currentUnit.modules[0]);
  const [currentTask, setCurrentTask] = useState(
    currentModule?.sources[0] ||
      currentModule?.assignments[0] ||
      currentModule?.tests[0]
  );
  const [currentTaskType, setCurrentTaskType] = useState("SOURCE");
  const [currentSourcePage, setCurrentSourcePage] = useState(0);

  const [unitExpand, setUnitExpand] = useState(currentUnit.unitName);

  const [sourceData, setSourceData] = useState('');


  // mcq variables
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  //render functions
  const renderTasks = (tasks: any, taskType: string) => {
    return (
      <>
        {tasks.map((e: any, index: number) => {
          return (
            <div
              className="task"
              key={`${e.taskName}-${index}`}
              onClick={() => handleTaskonClick(e, taskType)}
            >
              <div className="task-icon">
                {(() => {
                  switch (taskType) {
                    case "SOURCE":
                      return <Book color="#53BF7B" />;
                    case "ASSIGNMENT":
                      return <File color="#84BCFC" />;
                    case "TEST":
                      return <Clipboard color="#E07AFF" />;
                    default:
                      return <span>❔</span>;
                  }
                })()}
              </div>
              <div className="task-name">{e.taskName}</div>
            </div>
          );
        })}
      </>
    );
  };

  const renderModules = (modules: any) => {
    return (
      <>
        {modules.map((e: any, index: number) => {
          return (
            <div
              className="module"
              key={`${e.moduleName}-${index}`}
              onClick={() => handleModuleOnClick(e)}
            >
              {index !== 0 && <div className="module-seperator"></div>}
              {renderTasks(e.sources, "SOURCE")}
              {renderTasks(e.assignments, "ASSIGNMENT")}
              {renderTasks(e.tests, "TEST")}
            </div>
          );
        })}
      </>
    );
  };

  const renderSidebar = () => {
    return (
      <>
        <div className="elements">
          {currentCourse.units.map((e: any, index: number) => {
            return (
              <div className="element" key={`${e.unitName}-${index}`}>
                <div
                  className="head"
                  onClick={() => handleUnitOnClick(e.unitName, e)}
                >
                  <div className="name">{e.unitName}</div>
                  <div className="icon">
                    <LayoutGrid color="#d4d4d4" />
                  </div>
                </div>
                {unitExpand == e.unitName && (
                  <div className="body">
                    <div className="modules">{renderModules(e.modules)}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  // unit selection
  const handleUnitOnClick = (unitName: string, unit: any) => {
    unitName != unitExpand
      ? setUnitExpand(unitName)
      : setUnitExpand(currentUnit.unitName);
    setCurrentUnit(unit);
    setCurrentModule(unit.modules[0]);
    setCurrentTask(
      unit.modules[0]?.sources[0] ||
        unit.modules[0]?.assignments[0] ||
        unit.modules[0]?.tests[0]
    );
    setCurrentSourcePage(0);
    setSourceData("");
  };

  // module selection
  const handleModuleOnClick = (module: any) => {
    setCurrentModule(module);
    // setCurrentTask(
    //   module?.sources[0] || module?.assignments[0] || module?.tests[0]
    // );
    // setCurrentSourcePage(0);
    setSourceData("");
  };

  // task selection
  const handleTaskonClick = (task: any, type: string) => {
    setCurrentTaskType(type);
    setCurrentTask(task);
    setCurrentSourcePage(0);
    setSourceData("");
  };
  // others
  const handleNextOnClick = () => {
    setSourceData("");
    if (
      currentTaskType === "SOURCE" &&
      Array.isArray(currentTask?.source) &&
      currentSourcePage !== (currentTask.source?.length ?? 0)
    ) {
      setCurrentSourcePage((prev) => prev + 1);
      return;
    }
  };

  // instructions

  const generateAIContent = (task: any, taskType: string) => {
    let instruction = "";

    if (taskType === "ASSIGNMENT") {
      instruction = `You are an AI that generates assignments based on the topic: ${task.taskName}. Provide a detailed assignment with clear instructions, guidelines, and resources if applicable.`;
    } else if (taskType === "TEST") {
      instruction = `You are an AI that generates a quiz for the topic: ${task.taskName}. Create a multiple-choice test with 20 questions and 4 options, indicating the correct answer.`;
    } else if (taskType === "SOURCE") {
      instruction =  `You are an AI that teaches the unit on this topic: ${task.source[currentSourcePage]}. 
      Provide detailed teaching material with clear explanations (at least 2000 words).add resource links at the end`
      
      // you are response should be strictly an object in this format: {title : ${task.source[currentSourcePage]},content: "..... all texts", resources:[...all links]}
    }


    return instruction;
  };

  // ai response
  const handleTaskContentGeneration = (task: any, taskType: string) => {
    const instruction = generateAIContent(task, taskType);
    let aioutput; 
    return (
      <Ai
      input={instruction}
      onResponse={(res) => {
          // console.log(aioutput);
          // console.log(res);
          setSourceData(res);
        }}
      />
    );
  };

  // mcq
  // const renderMCQ = () => {
  //   const currentQuestion = currentTask.test.questions[currentQuestionIndex];

  //   return (
  //     <div className="mcq">
  //       <div className="question">{currentQuestion.question}</div>
  //       <div className="options">
  //         {currentQuestion.options.map((option, index) => (
  //           <div
  //             key={index}
  //             className={`option ${selectedAnswer === option ? (isCorrect ? "correct" : "incorrect") : ""}`}
  //             onClick={() => handleAnswerSelection(option)}
  //           >
  //             {option}
  //           </div>
  //         ))}
  //       </div>

  //       {showFeedback && (
  //         <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
  //           {isCorrect ? "Correct!" : "Incorrect. The correct answer is: " + currentQuestion.correctAnswer}
  //         </div>
  //       )}

  //       <button className="next-button" onClick={handleNextQuestion}>
  //         {currentQuestionIndex < currentTask.test.questions.length - 1 ? "Next" : "Finish"}
  //       </button>
  //     </div>
  //   );
  // };
  // const handleAnswerSelection = (answer: string) => {
  //   setSelectedAnswer(answer);
  //   const isAnswerCorrect = answer === currentTask.test.questions[currentQuestionIndex].correctAnswer;
  //   setIsCorrect(isAnswerCorrect);
  //   setShowFeedback(true);
  // };

  // const handleNextQuestion = () => {
  //   if (currentQuestionIndex < currentTask.test.questions.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     setSelectedAnswer(null);
  //     setIsCorrect(null);
  //     setShowFeedback(false);
  //   } else {
  //     // If all questions are answered, show some message or move to next task
  //     alert("You have completed the quiz!");
  //   }
  // };

  return (
    <>
      {handleTaskContentGeneration(currentTask, currentTaskType)}
      <div className="course-container">
        <div className="course-wrapper">
          <div className="course-head">
            <div className="icon"></div>
            <div className="name">{currentCourse.courseName.toUpperCase()}</div>
          </div>

          <div className="course-body">
            <div className="course-sidebar">{renderSidebar()}</div>
            <div className="course-content">
              <div className="page-header">
                <div className="slug">
                  <div className="unit">{currentUnit.unitName}</div>
                  <div>{"->"}</div>
                  <div className="module">{currentModule.moduleName}</div>
                </div>
                <div className="page-topic">{currentTask.taskName}</div>
              </div>
              <div className="page-content">
                {sourceData === "" ? (
                  <div className="loading">
                    <Mosaic
                      color="#e9e9e9"
                      size="medium"
                      text=""
                      textColor=""
                    />
                  </div>
                ) : (
                  <div className="data">
                    <ReactMarkdown
                      children={sourceData}
                      remarkPlugins={[remarkGfm]}
                    />
                  </div>
                )}
              </div>
              <div className="page-footer">
                {currentTaskType == "SOURCE" && (
                  <div className="page-count">
                    <div className="of">{currentSourcePage + 1}</div>
                    <div className="bar">/</div>
                    <div className="total">
                      {currentTask.source?.length ?? 0}
                    </div>
                  </div>
                )}
                {currentSourcePage !== (currentTask.source?.length ?? 0) && (
                  <div
                    className="page-next"
                    onClick={() => handleNextOnClick()}
                  >
                    NEXT
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { Book, LayoutGrid, File, Clipboard, Youtube } from "lucide-react";
import "./course.scss";
import { useState } from "react";
import Ai from "@/app/api/ai/ai";
import ReactMarkdown from "react-markdown";
import { Mosaic } from "react-loading-indicators";
import remarkGfm from "remark-gfm";

type SourceTask = { taskName: string; source: string[] };
type AssignmentTask = {
  taskName: string;
  assignment: { dueDate: string; submitted: boolean };
};
type TestTask = { taskName: string; test: { score: number; maxScore: number } };

type Module = {
  moduleName: string;
  sources?: SourceTask[];
  assignments?: AssignmentTask[];
  tests?: TestTask[];
  
};

type Unit = {
  unitName: string;
  modules: Module[];
};

type Course = {
  courseName: string;
  courseIcon: string;
  date: { start: string; end: string };
  progress: string;
  status: string;
  units: Unit[];
};

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
  };

  
  const currentCourse = data.activeCourses[0];
  const [currentUnit, setCurrentUnit] = useState<Unit>(currentCourse.units[0]);
  const [currentModule, setCurrentModule] = useState<Module>(
    currentUnit.modules[0]
  );
  const [currentTask, setCurrentTask] = useState<
    SourceTask | AssignmentTask | TestTask | null
  >(
    // currentModule?.videos?.[0] ||
    currentModule?.sources?.[0] ||
      currentModule?.assignments?.[0] ||
      currentModule?.tests?.[0] ||
      null
  );
  const [currentTaskType, setCurrentTaskType] = useState<
    "SOURCE" | "ASSIGNMENT" | "TEST"
  >(
    // currentModule?.videos?.[0] ? 'VIDEO' :
    currentModule?.sources?.[0]
      ? "SOURCE"
      : currentModule?.assignments?.[0]
      ? "ASSIGNMENT"
      : "TEST"
  );
  const [currentSourcePage, setCurrentSourcePage] = useState(0);
  const [unitExpand, setUnitExpand] = useState(currentUnit.unitName);
  const [sourceData, setSourceData] = useState("");

  // Type guards
  const isSourceTask = (task: any): task is SourceTask =>
    task && "source" in task;
  // const isVideoTask = (task: any): task is VideoTask => task && 'video' in task;
  const isAssignmentTask = (task: any): task is AssignmentTask =>
    task && "assignment" in task;
  const isTestTask = (task: any): task is TestTask => task && "test" in task;

  const renderTasks = (
    tasks: any[] | undefined,
    taskType: "SOURCE" | "ASSIGNMENT" | "TEST"
  ) => {
    if (!tasks || tasks.length === 0) return null;

    return tasks.map((task, index) => (
      <div
        className="task"
        key={`${task.taskName}-${index}`}
        onClick={() => handleTaskonClick(task, taskType)}
      >
        <div className="task-icon">
          {taskType === "SOURCE" && <Book color="#53BF7B" />}
          {taskType === "ASSIGNMENT" && <File color="#84BCFC" />}
          {taskType === "TEST" && <Clipboard color="#E07AFF" />}
          {/* {taskType === 'VIDEO' && <Youtube color="#FF0000" />} */}
        </div>
        <div className="task-name">{task.taskName}</div>
      </div>
    ));
  };

  const renderModules = (modules: Module[]) => {
    return modules.map((module, index) => (
      <div
        className="module"
        key={`${module.moduleName}-${index}`}
        onClick={() => handleModuleOnClick(module)}
      >
        {index !== 0 && <div className="module-seperator"></div>}
        {renderTasks(module.sources, "SOURCE")}
        {renderTasks(module.assignments, "ASSIGNMENT")}
        {renderTasks(module.tests, "TEST")}
        {/* {renderTasks(module.videos, 'VIDEO')} */}
      </div>
    ));
  };

  const renderSidebar = () => {
    return (
      <div className="elements">
        {currentCourse.units.map((unit, index) => (
          <div className="element" key={`${unit.unitName}-${index}`}>
            <div
              className="head"
              onClick={() => handleUnitOnClick(unit.unitName, unit)}
            >
              <div className="name">{unit.unitName}</div>
              <div className="icon">
                <LayoutGrid color="#d4d4d4" />
              </div>
            </div>
            {unitExpand === unit.unitName && (
              <div className="body">
                <div className="modules">{renderModules(unit.modules)}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const handleUnitOnClick = (unitName: string, unit: Unit) => {
    unitName !== unitExpand
      ? setUnitExpand(unitName)
      : setUnitExpand(currentUnit.unitName);
    setCurrentUnit(unit);
    setCurrentModule(unit.modules[0]);

    const newTask =
      // unit.modules[0]?.videos?.[0] ||
      unit.modules[0]?.sources?.[0] ||
      unit.modules[0]?.assignments?.[0] ||
      unit.modules[0]?.tests?.[0] ||
      null;

    setCurrentTask(newTask);
    setCurrentTaskType(
      // unit.modules[0]?.videos?.[0] ? 'VIDEO' :
      unit.modules[0]?.sources?.[0]
        ? "SOURCE"
        : unit.modules[0]?.assignments?.[0]
        ? "ASSIGNMENT"
        : "TEST"
    );
    setCurrentSourcePage(0);
    setSourceData("");
  };

  const handleModuleOnClick = (module: Module) => {
    setCurrentModule(module);
    const newTask =
      // module?.videos?.[0] ||
      module?.sources?.[0] ||
      module?.assignments?.[0] ||
      module?.tests?.[0] ||
      null;

    setCurrentTask(newTask);
    setCurrentTaskType(
      // module?.videos?.[0] ? 'VIDEO' :
      module?.sources?.[0]
        ? "SOURCE"
        : module?.assignments?.[0]
        ? "ASSIGNMENT"
        : "TEST"
    );
    setCurrentSourcePage(0);
    setSourceData("");
  };

  const handleTaskonClick = (
    task: SourceTask | AssignmentTask | TestTask,
    type: "SOURCE" | "ASSIGNMENT" | "TEST"
  ) => {
    setCurrentTaskType(type);
    setCurrentTask(task);
    setCurrentSourcePage(0);
    setSourceData("");
  };

  const handleNextOnClick = () => {
    setSourceData("");
    if (
      currentTaskType === "SOURCE" &&
      isSourceTask(currentTask) &&
      currentSourcePage < currentTask.source.length - 1
    ) {
      setCurrentSourcePage((prev) => prev + 1);
    }
  };

  const generateAIContent = (task: any, taskType: string) => {
    // if (taskType === 'VIDEO') return null;

    let instruction = "";
    if (taskType === "ASSIGNMENT") {
      instruction = `Generate assignment for: ${task.taskName}`;
    } else if (taskType === "TEST") {
      instruction = `Generate test for: ${task.taskName}`;
    } else if (taskType === "SOURCE" && isSourceTask(task)) {
      instruction = `Teach about: ${task.source[currentSourcePage]}`;
    }
    return instruction;
  };

  const handleTaskContentGeneration = (task: any, taskType: string) => {
    // if (taskType === 'VIDEO') return null;

    const instruction = generateAIContent(task, taskType);
    return (
      <Ai
        input={instruction}
        onResponse={(res) => {
          setSourceData(res);
        }}
      />
    );
  };

  return (
    <>
      {currentTask && handleTaskContentGeneration(currentTask, currentTaskType)}

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
                <div className="page-topic">{currentTask?.taskName}</div>
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
                {currentTaskType === "SOURCE" && isSourceTask(currentTask) && (
                  <div className="page-count">
                    <div className="of">{currentSourcePage + 1}</div>
                    <div className="bar">/</div>
                    <div className="total">{currentTask.source.length}</div>
                  </div>
                )}
                {currentTaskType === "SOURCE" &&
                  isSourceTask(currentTask) &&
                  currentSourcePage < currentTask.source.length - 1 && (
                    <div className="page-next" onClick={handleNextOnClick}>
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

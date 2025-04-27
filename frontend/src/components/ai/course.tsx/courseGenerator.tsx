"use client";
import { Book, LayoutGrid, File, Clipboard } from "lucide-react";
import "./style.scss";
import { useState } from "react";
import Ai from "@/app/api/ai/ai";
import ReactMarkdown from "react-markdown";
import { Mosaic } from "react-loading-indicators";
import remarkGfm from "remark-gfm";

interface CourseProps {
  course: any;
}

const CourseGenerator: React.FC<CourseProps> = ({ course }) => {
  const [currentUnit, setCurrentUnit] = useState(() => course?.units?.[0] ?? {});
  const [currentModule, setCurrentModule] = useState(() => currentUnit?.modules?.[0] ?? {});
  const [currentTask, setCurrentTask] = useState(() =>
    currentModule?.sources?.[0] ||
    currentModule?.assignments?.[0] ||
    currentModule?.tests?.[0] ||
    {}
  );
  const [currentTaskType, setCurrentTaskType] = useState("SOURCE");
  const [currentSourcePage, setCurrentSourcePage] = useState(0);
  const [unitExpand, setUnitExpand] = useState(() => currentUnit?.unitName ?? "");
  const [sourceData, setSourceData] = useState('');

  const renderTasks = (tasks: any = [], taskType: string) => {
    return (
      <>
        {tasks.map((e: any, index: number) => (
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
        ))}
      </>
    );
  };

  const renderModules = (modules: any = []) => {
    return (
      <>
        {modules.map((e: any, index: number) => (
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
        ))}
      </>
    );
  };

  const renderSidebar = () => {
    return (
      <>
        <div className="elements">
          {course?.units?.map((e: any, index: number) => (
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
              {unitExpand === e.unitName && (
                <div className="body">
                  <div className="modules">{renderModules(e.modules)}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
  };

  const handleUnitOnClick = (unitName: string, unit: any) => {
    unitName !== unitExpand ? setUnitExpand(unitName) : setUnitExpand(currentUnit?.unitName ?? "");
    setCurrentUnit(unit);
    const firstModule = unit?.modules?.[0] ?? {};
    setCurrentModule(firstModule);
    const firstTask =
      firstModule?.sources?.[0] ||
      firstModule?.assignments?.[0] ||
      firstModule?.tests?.[0] ||
      {};
    setCurrentTask(firstTask);
    setCurrentSourcePage(0);
    setSourceData("");
  };

  const handleModuleOnClick = (module: any) => {
    setCurrentModule(module);
    const firstTask =
      module?.sources?.[0] ||
      module?.assignments?.[0] ||
      module?.tests?.[0] ||
      {};
    setCurrentTask(firstTask);
    setCurrentSourcePage(0);
    setSourceData("");
  };

  const handleTaskonClick = (task: any, type: string) => {
    setCurrentTaskType(type);
    setCurrentTask(task);
    setCurrentSourcePage(0);
    setSourceData("");
  };

  const handleNextOnClick = () => {
    setSourceData("");
    if (
      currentTaskType === "SOURCE" &&
      Array.isArray(currentTask?.source) &&
      currentSourcePage < (currentTask.source?.length ?? 0) - 1
    ) {
      setCurrentSourcePage((prev) => prev + 1);
      return;
    }
  };

  const generateAIContent = (task: any, taskType: string) => {
    let instruction = "";
    if (taskType === "ASSIGNMENT") {
      instruction = `You are an AI that generates assignments based on the topic: ${task?.taskName}. Provide a detailed assignment with clear instructions, guidelines, and resources if applicable.`;
    } else if (taskType === "TEST") {
      instruction = `You are an AI that generates a quiz for the topic: ${task?.taskName}. Create a multiple-choice test with 20 questions and 4 options, indicating the correct answer.`;
    } else if (taskType === "SOURCE") {
      instruction = `You are an AI that teaches the unit on this topic: ${task?.source?.[currentSourcePage]}. 
      Provide detailed teaching material with clear explanations (at least 2000 words). Add resource links at the end.`;
    }
    return instruction;
  };

  const handleTaskContentGeneration = (task: any, taskType: string) => {
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
      {handleTaskContentGeneration(currentTask, currentTaskType)}
      <div className="course-container">
        <div className="course-wrapper">
          <div className="course-head">
            <div className="icon"></div>
            <div className="name">{course?.courseName?.toUpperCase() ?? ""}</div>
          </div>

          <div className="course-body">
            <div className="course-sidebar">{renderSidebar()}</div>
            <div className="course-content">
              <div className="page-header">
                <div className="slug">
                  <div className="unit">{currentUnit?.unitName ?? ""}</div>
                  <div>{"->"}</div>
                  <div className="module">{currentModule?.moduleName ?? ""}</div>
                </div>
                <div className="page-topic">{currentTask?.taskName ?? ""}</div>
              </div>
              <div className="page-content">
                {sourceData === "" ? (
                  <div className="loading">
                    <Mosaic color="#e9e9e9" size="medium" text="" textColor="" />
                  </div>
                ) : (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {sourceData}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseGenerator;

'use client'
import { LineProgressBar } from "@/components/progressBar";
import "./courses.scss";
import { ArrowUpDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Courses() {
  // route
  const router = useRouter();
  // const handleCourseClick = (course: any) => {
  //   router.push({
  //     pathname: `/course/${encodeURIComponent(course.courseName)}`,
  //     query: { data: JSON.stringify(course) },
  //   });
  // };
    const handleCourseClick = () => {
    router.push("/qbot/courses/course");
  };

  // data
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
                  "Introduction to HTML",
                  "HTML Elements and Structure",
                  "Styling with CSS",
                  "Flexbox and Grid Layouts",
                ],
                assignment: [
                  {
                    title: "Build a Personal Website",
                    dueDate: "2025-03-01",
                    submitted: true,
                  },
                ],
                test: [
                  {
                    title: "HTML & CSS Quiz",
                    score: 85,
                    maxScore: 100,
                  },
                ],
              },
              {
                moduleName: "JavaScript Essentials",
                sources: [
                  "JavaScript Basics and Syntax",
                  "Working with Variables and Data Types",
                  "Control Structures and Loops",
                  "Functions and Events",
                ],
                assignment: [
                  {
                    title: "DOM Manipulation Task",
                    dueDate: "2025-03-15",
                    submitted: false,
                  },
                ],
                test: [
                  {
                    title: "JavaScript Basics Test",
                    score: 72,
                    maxScore: 100,
                  },
                ],
              },
            ],
          },
          {
            unitName: "Version Control",
            modules: [
              {
                moduleName: "Git & GitHub",
                sources: [
                  "Introduction to Git and Version Control",
                  "Creating and Cloning Repositories",
                  "Committing and Branching",
                  "Collaboration with GitHub",
                ],
                assignment: [
                  {
                    title: "Create and Push a Repository",
                    dueDate: "2025-04-01",
                    submitted: true,
                  },
                ],
                test: [
                  {
                    title: "Git Knowledge Test",
                    score: 90,
                    maxScore: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        courseName: "React for Beginners",
        courseIcon: "⚛️",
        date: {
          start: "2025-03-10",
          end: "2025-05-20",
        },
        progress: "30%",
        status: "started",
        units: [
          {
            unitName: "React Basics",
            modules: [
              {
                moduleName: "JSX & Components",
                sources: [
                  "Understanding JSX",
                  "Creating Components",
                  "Component Props",
                  "Component Lifecycle",
                ],
                assignment: [
                  {
                    title: "Build a Simple React App",
                    dueDate: "2025-04-01",
                    submitted: true,
                  },
                ],
                test: [
                  {
                    title: "React Basics Quiz",
                    score: 80,
                    maxScore: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        courseName: "Responsive Design & Accessibility",
        courseIcon: "📱",
        date: {
          start: "2025-03-20",
          end: "2025-05-25",
        },
        progress: "20%",
        status: "started",
        units: [
          {
            unitName: "Responsive Techniques",
            modules: [
              {
                moduleName: "Media Queries & Flexbox",
                sources: [
                  "Using Media Queries",
                  "Responsive Flexbox Layouts",
                  "Mobile-First Design",
                  "Fluid Typography & Images",
                ],
                assignment: [
                  {
                    title: "Create a Responsive Landing Page",
                    dueDate: "2025-04-10",
                    submitted: false,
                  },
                ],
                test: [],
              },
            ],
          },
        ],
      },
      {
        courseName: "React for Beginners",
        courseIcon: "⚛️",
        date: {
          start: "2025-03-10",
          end: "2025-05-20",
        },
        progress: "30%",
        status: "started",
        units: [
          {
            unitName: "React Basics",
            modules: [
              {
                moduleName: "JSX & Components",
                sources: [
                  "Understanding JSX",
                  "Creating Components",
                  "Component Props",
                  "Component Lifecycle",
                ],
                assignment: [
                  {
                    title: "Build a Simple React App",
                    dueDate: "2025-04-01",
                    submitted: true,
                  },
                ],
                test: [
                  {
                    title: "React Basics Quiz",
                    score: 80,
                    maxScore: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        courseName: "React for Beginners",
        courseIcon: "⚛️",
        date: {
          start: "2025-03-10",
          end: "2025-05-20",
        },
        progress: "30%",
        status: "started",
        units: [
          {
            unitName: "React Basics",
            modules: [
              {
                moduleName: "JSX & Components",
                sources: [
                  "Understanding JSX",
                  "Creating Components",
                  "Component Props",
                  "Component Lifecycle",
                ],
                assignment: [
                  {
                    title: "Build a Simple React App",
                    dueDate: "2025-04-01",
                    submitted: true,
                  },
                ],
                test: [
                  {
                    title: "React Basics Quiz",
                    score: 80,
                    maxScore: 100,
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
        courseName: "Introduction to Web Development",
        courseIcon: "🖥️",
        date: {
          start: "2025-02-01",
          end: "2025-04-30",
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
      {
        courseName: "Final Portfolio Project",
        courseIcon: "🎓",
        date: {
          start: "2024-11-01",
          end: "2025-01-15",
        },
        status: "completed",
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
      {
        courseName: "Final Portfolio Project",
        courseIcon: "🎓",
        date: {
          start: "2024-11-01",
          end: "2025-01-15",
        },
        status: "completed",
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
      {
        courseName: "Final Portfolio Project",
        courseIcon: "🎓",
        date: {
          start: "2024-11-01",
          end: "2025-01-15",
        },
        status: "completed",
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

  const renderActiveCourses = () => {
    return (
      <>
        {data.activeCourses.map((course, index) => (
          <div
            className="course"
            key={index}
            onClick={() => handleCourseClick()}
          >
            <div className="course-header">
              <div className="icon">{/* {course.courseIcon} */}</div>
            </div>
            <div className="course-body">
              <div className="name">{course.courseName}</div>
              <div className="progress">
                {
                  <LineProgressBar
                    attendance={parseInt(course.progress)}
                    mandatoryLevel={0}
                    width={300}
                    height={7}
                    fontSize="0"
                  />
                }
              </div>

              {/* <div className="course-dates">
                {course.date.start} to {course.date.end}
              </div> */}
            </div>
          </div>
        ))}
      </>
    );
  };

  const renderAllCourses = () => {
    return (
      <>
        {data.allCourses.map((course, index) => (
          <div
            className="course"
            key={index}
            // onClick={() => handleCourseClick(course)}
          >
            <div className="course-header">
              <div className="icon">{/* {course.courseIcon} */}</div>
            </div>
            <div className="course-body">
              <div className="name">{course.courseName}</div>
              {/* <span className="status">{course.status}</span> */}
              {/* <div className="course-dates">
                {course.date.start} to {course.date.end}
              </div> */}
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="courses-container">
        <div className="courses-wrapper">
          <div className="active">
            <div className="head">ACTIVE</div>
            <div className="body">{renderActiveCourses()}</div>
          </div>
          <div className="all">
            <div className="head">
              <div className="searchBar">
                <div className="icon">
                  <Search color="white" />
                </div>
                <div className="bar"></div>
              </div>
              <div className="sort">
                <ArrowUpDown color="#c7c7c7" />
              </div>
            </div>
            <div className="body">{renderAllCourses()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

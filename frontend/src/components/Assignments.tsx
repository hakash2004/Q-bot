'use client';

import { FiSearch, FiFilter } from 'react-icons/fi';

const assignments = [
  {
    title: 'Conducting User Research',
    course: 'User Research and Personas',
    dueDate: 'July 1, 2024',
    status: 'Done',
    submitted: true
  },
  {
    title: 'Competitive Analysis Report',
    course: 'Competitive Analysis in UX',
    dueDate: 'July 25, 2024',
    status: 'Progress',
    submitted: false
  },
  {
    title: 'Creating Wireframes',
    course: 'Wireframing and Prototyping',
    dueDate: 'August 1, 2024',
    status: 'Progress',
    submitted: false
  },
  {
    title: 'Usability Testing and Findings',
    course: 'Usability Testing and Implementation',
    dueDate: 'August 22, 2024',
    status: 'Pending',
    submitted: false
  },
  {
    title: 'Developing Visual Design',
    course: 'Visual Design and Branding',
    dueDate: 'August 29, 2024',
    status: 'Pending',
    submitted: false
  }
];

const Assignments = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Assignments</h1>
          <p className="text-gray-500">View and manage your course assignments</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span>Filter by</span>
            <button className="text-[var(--primary-color)]">dates</button>
            <span>|</span>
            <button className="text-[var(--primary-color)]">Status</button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search assignments..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Assignment Title</th>
              <th className="text-left p-4">Course/lessons</th>
              <th className="text-left p-4">Due Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Submit</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="p-4">{assignment.title}</td>
                <td className="p-4 text-gray-500">{assignment.course}</td>
                <td className="p-4">{assignment.dueDate}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    assignment.status === 'Done' ? 'bg-green-100 text-green-600' :
                    assignment.status === 'Progress' ? 'bg-blue-100 text-blue-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {assignment.status}
                  </span>
                </td>
                <td className="p-4">
                  {assignment.submitted ? (
                    <span className="text-gray-500">Submitted</span>
                  ) : (
                    <button className="text-[var(--primary-color)]">Upload</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
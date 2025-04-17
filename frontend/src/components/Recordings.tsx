'use client';

import { FiSearch, FiFilter, FiPlay, FiDownload } from 'react-icons/fi';

const recordings = [
  {
    title: 'Color Styles - 02',
    thumbnail: '🎨',
    description: "Let's learn about colors, color contrast and color digits.",
    duration: '2:30hrs',
    lessons: '04 Lessons'
  },
  {
    title: 'Design Thinking',
    thumbnail: '🎯',
    description: 'Project to unlearn and learn the fundamentals of design',
    duration: '2:45hrs',
    lessons: '05 Lessons'
  },
  {
    title: 'Visual Designs Briefs',
    thumbnail: '✨',
    description: 'Making visually looking good UI screens from problem statement briefs',
    duration: '3:15hrs',
    lessons: '06 Lessons'
  },
  {
    title: 'Curiosity for Terminology',
    thumbnail: '🔍',
    description: 'Understanding various visual design terms',
    duration: '4:00hrs',
    lessons: '02 Lessons'
  },
  {
    title: 'Color Styles - 01',
    thumbnail: '🎨',
    description: "Let's learn about colors, color contrast and color digits.",
    duration: '2:30hrs',
    lessons: '03 Lessons'
  }
];

const Recordings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Class Recordings</h1>
          <p className="text-gray-500">Access and review past class sessions</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span>Filter by</span>
            <button className="text-[var(--primary-color)]">dates</button>
            <span>|</span>
            <button className="text-[var(--primary-color)]">course</button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search recordings..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {recordings.map((recording, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                {recording.thumbnail}
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">{recording.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{recording.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{recording.duration}</span>
                  <span>{recording.lessons}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg">
                <FiPlay />
                Watch Now
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
                <FiDownload />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recordings;
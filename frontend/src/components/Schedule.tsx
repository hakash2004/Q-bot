'use client';

import { useState } from 'react';
import { FiCalendar, FiClock, FiFilter, FiPlus } from 'react-icons/fi';

const Calendar = () => {
  const [currentMonth] = useState('September 2023');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const events = [
    { date: 2, title: 'Design Review', time: '10:00 - 11:00', type: 'review' },
    { date: 9, title: 'Design Review', time: '10:00 - 11:00', type: 'review' },
    { date: 9, title: 'Discussion', time: '10:00 - 11:00', type: 'discussion' },
    { date: 14, title: 'Market Research', time: '14:00 - 15:00', type: 'research' },
    { date: 14, title: 'Discussion', time: '15:00 - 16:00', type: 'discussion' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Calendar</h1>
          <div className="flex gap-4">
            <button className="text-[var(--primary-color)] font-medium">Monthly</button>
            <button className="text-gray-500">Weekly</button>
            <button className="text-gray-500">Daily</button>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <FiFilter />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg">
            <FiPlus />
            Add Event
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{currentMonth}</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded hover:bg-gray-100">&lt;</button>
            <button className="px-3 py-1 bg-[var(--primary-color)] text-white rounded">Today</button>
            <button className="p-2 rounded hover:bg-gray-100">&gt;</button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {days.map(day => (
            <div key={day} className="text-center font-medium text-gray-500">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="aspect-square p-2 border rounded-lg">
              <div className="font-medium mb-2">{i + 1}</div>
              {events
                .filter(event => event.date === i + 1)
                .map((event, index) => (
                  <div
                    key={index}
                    className={`text-xs p-1 rounded mb-1 ${
                      event.type === 'review' ? 'bg-red-100 text-red-600' :
                      event.type === 'discussion' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
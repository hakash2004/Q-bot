'use client';

import dynamic from 'next/dynamic';
// import { FiEdit } from 'react-icons/fi';

const Chart = dynamic(() => import('./Chart'), {
  ssr: false
});

const data = [
  { name: 'Jan', hours: 30 },
  { name: 'Feb', hours: 20 },
  { name: 'Mar', hours: 45 },
  { name: 'Apr', hours: 35 },
  { name: 'May', hours: 15 },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#fff1ed] rounded-lg">
              {/* <FiEdit className="text-[var(--primary-color)]" /> */}
            </div>
            <div>
              <h3 className="font-medium">Product Design Course</h3>
              <p className="text-sm text-gray-500">14:00 class</p>
            </div>
          </div>
        </div>
        
        <div className="card col-span-2">
          <h3 className="font-medium mb-4">Your Resources</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                  PDF
                </div>
                <div>
                  <p className="font-medium">Auto-layout.pdf</p>
                  <p className="text-sm text-gray-500">6.5 MB</p>
                </div>
              </div>
              <button className="text-[var(--primary-color)]">Download</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-medium mb-4">Hours Spent</h3>
          <Chart data={data} />
        </div>

        <div className="card">
          <h3 className="font-medium mb-4">To do List</h3>
          <div className="space-y-4">
            {[
              'Human Interaction Designs',
              'Design System Basics',
              'Introduction to UI',
              'Basics of Figma'
            ].map((task, index) => (
              <div key={index} className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-[var(--primary-color)]" 
                />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
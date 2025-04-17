'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ChartProps {
  data: Array<{
    name: string;
    hours: number;
  }>;
}

const Chart = ({ data }: ChartProps) => {
  return (
    <AreaChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area 
        type="monotone" 
        dataKey="hours" 
        stroke="var(--primary-color)" 
        fill="var(--primary-color)" 
        fillOpacity={0.1}
      />
    </AreaChart>
  );
};

export default Chart;
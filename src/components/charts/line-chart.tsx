"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 820 },
  { name: 'Feb', value: 680 },
  { name: 'Mar', value: 320 },
  { name: 'Apr', value: 280 },
  { name: 'May', value: 590 },
  { name: 'Jun', value: 720 },
  { name: 'Jul', value: 850 },
  { name: 'Aug', value: 490 },
  { name: 'Sep', value: 380 },
  { name: 'Oct', value: 650 },
  { name: 'Nov', value: 910 },
  { name: 'Dec', value: 1020 },
]

export const LineChartComponent = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}



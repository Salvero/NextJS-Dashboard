"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Q1', revenue: 12000, profit: 7500 },
  { name: 'Q2', revenue: 18500, profit: 11200 },
  { name: 'Q3', revenue: 14800, profit: 9100 },
  { name: 'Q4', revenue: 21200, profit: 13800 },
]

export const BarChartComponent = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
          <Bar dataKey="profit" fill="#f59e0b" name="Profit" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}



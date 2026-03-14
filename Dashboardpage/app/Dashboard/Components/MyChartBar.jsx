"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const chartData = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 65 },
  { month: "Apr", value: 40 },
  { month: "May", value: 90 },
  { month: "Jun", value: 33 },
  { month: "Jul", value: 66 },
  { month: "Aug", value: 43 },
];

const instructors = [
  { course: "Vaccine Development", rating: 1, enrolled: 40 },
  { course: "Clinical Trials", rating: 1, enrolled: 35 },
  { course: "Vaccine Development", rating: 1, enrolled: 30 },
  { course: "IT Infrastructure", rating: 1, enrolled: 20 },
  { course: "Cold Chain", rating: 1, enrolled: 22 },
  { course: "Clinical Trials", rating: 1, enrolled: 27 },
];

export default function DashboardCharts() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Bar Chart */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-5 min-h-75">
        <h3 className="text-lg font-semibold mb-3">Chart</h3>
        <div className="w-full h-75 sm:h-87.5 md:h-100 lg:h-112.5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 40, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis
                label={{
                  value: "Y-Axis Label",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: 12 },
                }}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="My Bar Chart" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Popular Instructor Table */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-5 overflow-auto min-h-75">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Popular Instructor</h3>
          <a
            href="#"
            className="text-blue-500 text-sm font-semibold relative group cursor-pointer"
          >
            View All
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2">Course Name</th>
              <th className="pb-2">Rating</th>
              <th className="pb-2">Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((inst, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 last:border-none hover:bg-gray-50"
              >
                <td className="py-2">{inst.course}</td>
                <td className="py-2">{Array(inst.rating).fill("⭐")}</td>
                <td className="py-2">{inst.enrolled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DataPoint {
  day: string;
  value: number;
}

// Sample data for different time periods
const weekData: DataPoint[] = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 30 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 50 },
  { day: "Fri", value: 35 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 38 },
];

const monthData: DataPoint[] = [
  { day: "Week 1", value: 280 },
  { day: "Week 2", value: 250 },
  { day: "Week 3", value: 310 },
  { day: "Week 4", value: 290 },
];

const yearData: DataPoint[] = [
  { day: "Jan", value: 1200 },
  { day: "Feb", value: 940 },
  { day: "Mar", value: 1100 },
  { day: "Apr", value: 1300 },
  { day: "May", value: 900 },
  { day: "Jun", value: 1200 },
  { day: "Jul", value: 1500 },
  { day: "Aug", value: 1300 },
  { day: "Sep", value: 1100 },
  { day: "Oct", value: 1000 },
  { day: "Nov", value: 1100 },
  { day: "Dec", value: 1284 },
];

type TimeRange = "week" | "month" | "year";

export function ConsumptionChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("week");

  const data = {
    week: weekData,
    month: monthData,
    year: yearData,
  }[timeRange];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-lg font-medium">Consumption</h3>
        <div className="flex gap-2">
          {(["week", "month", "year"] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-2 py-1 text-sm rounded-md transition-colors ${
                timeRange === range
                  ? "bg-emerald-400/20 text-emerald-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}L`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "none",
                borderRadius: "8px",
                color: "white",
              }}
              formatter={(value: number) => [`${value}L`, "Consumption"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

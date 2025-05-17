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
  time: string;
  value: number;
}

// Sample data for different time periods
const hourData: DataPoint[] = [
  { time: "00:00", value: 40 },
  { time: "04:00", value: 35 },
  { time: "08:00", value: 55 },
  { time: "12:00", value: 65 },
  { time: "16:00", value: 58 },
  { time: "20:00", value: 45 },
];

const dayData: DataPoint[] = [
  { time: "Mon", value: 320 },
  { time: "Tue", value: 350 },
  { time: "Wed", value: 380 },
  { time: "Thu", value: 340 },
  { time: "Fri", value: 360 },
  { time: "Sat", value: 400 },
  { time: "Sun", value: 330 },
];

const weekData: DataPoint[] = [
  { time: "Week 1", value: 1850 },
  { time: "Week 2", value: 1920 },
  { time: "Week 3", value: 1780 },
  { time: "Week 4", value: 1890 },
];

type TimeRange = "hour" | "day" | "week";

export function ConsumptionChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("hour");

  const data = {
    hour: hourData,
    day: dayData,
    week: weekData,
  }[timeRange];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-lg font-medium">Consumption</h3>
        <div className="flex gap-2">
          {(["hour", "day", "week"] as const).map((range) => (
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
              dataKey="time"
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

import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2020", $: 500 },
  { name: "2021", $: 1500 },
  { name: "2022", $: 2000 },
  { name: "2023", $: 3000 },
];

export default function MyBarChart() {
  return (
    <div>
      <p className="flex justify-center font-medium text-white">
        Yearly Spending
      </p>
      <div className="mt-5 max-w-full" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" stroke="white" /> {/* Updated this line */}
            <YAxis stroke="white" /> {/* Updated this line */}
            <Tooltip />
            <Bar
              dataKey="$"
              fill="#FFD550"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

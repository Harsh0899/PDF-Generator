import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { CustomAxisTick } from "./CustomAxisTick";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function SimpleLineChart() {
    console.log(data);
    return (
        <LineChart
            width={300}
            height={200}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            isAnimationActive={false}
        >
            <CartesianGrid />
            <XAxis dataKey="name" tick={<CustomAxisTick />} tickMargin={10} />
            <YAxis fontSize={12}/>
            <Line type="monotone" dataKey="pv" stroke="#f00" />
            <Line type="monotone" dataKey="uv" stroke="#00f" />
        </LineChart>
    )
}

export default SimpleLineChart;
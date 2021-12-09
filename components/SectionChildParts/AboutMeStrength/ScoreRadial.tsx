import React from "react";
import { Radar, RadarChart, PolarAngleAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import { dataStrengthScore } from "../../../datas/dataStrengthScore";

const ScoreRadial = () => {
    const pieRatioData = [
        {
            name: "STRATEGIC",
            value: 8,
            pieBgColor: "rgba(0,148,93,0.5)",
        },
        {
            name: "EXECUTING",
            value: 9,
            pieBgColor: "rgba(123,36,129,0.5)",
        },
        {
            name: "INFLUENCING",
            value: 8,
            pieBgColor: "rgba(233,114,0,0.5)",
        },
        {
            name: "RELATIONSHIP",
            value: 9,
            pieBgColor: "rgba(0,112,205,0.5)",
        },
    ];

    return (
        <div className="w-full -mb-10" style={{ height: "350px" }}>
            <div className="relative w-full h-full -my-5">
                <ResponsiveContainer width="100%" height="100%" className="absolute z-50">
                    <RadarChart cx="50%" cy="50%" outerRadius="58%" data={dataStrengthScore}>
                        {/* <PolarGrid /> */}
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 8 }} />
                        {/* <PolarRadiusAxis /> */}
                        <Radar
                            name="Higher Scores(MAX 34)"
                            dataKey="score"
                            stroke="#555555"
                            strokeWidth="1"
                            fill="#ffffff"
                            fillOpacity={0.8}
                        />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%" className="absolute z-40">
                    <PieChart>
                        <Pie
                            cx="50%"
                            cy="50%"
                            outerRadius="58%"
                            data={pieRatioData}
                            dataKey="value"
                            nameKey="name"
                            fill="#8884d8"
                            labelLine={false}
                            startAngle={-355}
                        >
                            {pieRatioData.map((item, idx) => (
                                <Cell key={idx} fill={item.pieBgColor} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-0 left-0 grid w-full h-full grid-cols-2 py-10 text-xs font-bold">
                    <div className="mr-8 text-right text-purple-500">EXECUTING</div>
                    <div className="ml-8 text-left text-green-500">STRATEGIC</div>
                    <div className="flex items-end justify-end mr-8 text-right text-yellow-500">INFLUENCING</div>
                    <div className="flex items-end justify-start ml-8 text-left text-blue-500">RELATIONSHIP</div>
                </div>
            </div>
        </div>
    );
};

export default ScoreRadial;

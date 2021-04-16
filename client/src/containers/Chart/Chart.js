import React from "react";
import { Chart } from "react-charts";

import sampleData from "./sampleData.json";

export default function ChartExample(props) {
    const data = [
        {
            label: 'Non-Commercial Space Launches',
            data: sampleData.NonCommercialSpaceLaunches.map(({ year, launches}) => ({
                x: year, 
                y: launches,
            })),
        },
    ]
    return "Hello";
}
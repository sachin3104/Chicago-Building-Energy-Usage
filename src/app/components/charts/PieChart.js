// src/app/components/charts/PieChart.js
"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Pie chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ kwhTotal, thermsTotal }) => {
  // Prepare data for the pie chart
  const chartData = {
    labels: ["Total kWh (Electricity)", "Total Therms (Gas)"],
    datasets: [
      {
        label: "Energy Usage Breakdown",
        data: [kwhTotal, thermsTotal],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Color for kWh
          "rgba(255, 99, 132, 0.6)", // Color for Therms
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // Border for kWh
          "rgba(255, 99, 132, 1)", // Border for Therms
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;

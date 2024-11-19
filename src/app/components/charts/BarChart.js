// src/app/components/charts/BarChart.js
"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Bar chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ kwhQuartiles, thermQuartiles }) => {
  // Data for the bar chart
  const chartData = {
    labels: ["1st Quartile", "2nd Quartile (Median)", "3rd Quartile"],
    datasets: [
      {
        label: "kWh Usage Quartiles",
        data: kwhQuartiles,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Therm Usage Quartiles",
        data: thermQuartiles,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
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
      title: {
        display: true,
        text: "Energy Usage Quartiles (kWh and Therms)",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(
              2
            )}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Usage",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        margin: "0 auto",
      }}
    >
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;

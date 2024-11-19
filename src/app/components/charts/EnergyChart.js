// src/app/components/charts/EnergyChart.js
"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EnergyChart = ({ data, title, unit }) => {
  // Chart Data Configuration
  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: `${title} (${unit})`,
        data: data,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
        tension: 0.3, // Curved line
      },
    ],
  };

  // Chart Options Configuration
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(
              2
            )} ${unit}`;
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: `Usage (${unit})`,
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Months of 2010",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default EnergyChart;

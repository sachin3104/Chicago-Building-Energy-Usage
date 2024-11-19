// src/app/buildings/[id]/components/Summary.js
"use client";

import React from "react";

const Summary = ({ selectedBuilding }) => {
  if (!selectedBuilding) return null;

  // Extract data for the summary
  const maxTherm = Math.max(
    selectedBuilding["THERM JANUARY 2010"] || 0,
    selectedBuilding["THERM FEBRUARY 2010"] || 0,
    selectedBuilding["THERM MARCH 2010"] || 0,
    selectedBuilding["THERM APRIL 2010"] || 0,
    selectedBuilding["THERM MAY 2010"] || 0,
    selectedBuilding["THERM JUNE 2010"] || 0,
    selectedBuilding["THERM JULY 2010"] || 0,
    selectedBuilding["THERM AUGUST 2010"] || 0,
    selectedBuilding["THERM SEPTEMBER 2010"] || 0,
    selectedBuilding["THERM OCTOBER 2010"] || 0,
    selectedBuilding["THERM NOVEMBER 2010"] || 0,
    selectedBuilding["THERM DECEMBER 2010"] || 0
  );

  const maxKwh = Math.max(
    selectedBuilding["KWH JANUARY 2010"] || 0,
    selectedBuilding["KWH FEBRUARY 2010"] || 0,
    selectedBuilding["KWH MARCH 2010"] || 0,
    selectedBuilding["KWH APRIL 2010"] || 0,
    selectedBuilding["KWH MAY 2010"] || 0,
    selectedBuilding["KWH JUNE 2010"] || 0,
    selectedBuilding["KWH JULY 2010"] || 0,
    selectedBuilding["KWH AUGUST 2010"] || 0,
    selectedBuilding["KWH SEPTEMBER 2010"] || 0,
    selectedBuilding["KWH OCTOBER 2010"] || 0,
    selectedBuilding["KWH NOVEMBER 2010"] || 0,
    selectedBuilding["KWH DECEMBER 2010"] || 0
  );

  return (
    <div className="bg-[#1B1B1B] shadow-md border border-[#333333] p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Summary of Energy Usage
      </h2>
      <p className="text-[#E0E0E0]">
        <strong>Highest Therm Usage (Month):</strong> {maxTherm} Therms
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Highest kWh Usage (Month):</strong> {maxKwh} kWh
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Average Building Age:</strong>{" "}
        {selectedBuilding["AVERAGE BUILDING AGE"]} years
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Occupied Units Percentage:</strong>{" "}
        {(
          parseFloat(selectedBuilding["OCCUPIED UNITS PERCENTAGE"]) * 100
        ).toFixed(2)}
        %
      </p>
    </div>
  );
};

export default Summary;

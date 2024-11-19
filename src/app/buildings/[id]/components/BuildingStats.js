// src/app/buildings/[id]/components/BuildingStats.js
"use client";

import React from "react";

const BuildingStats = ({ selectedBuilding }) => {
  if (!selectedBuilding) {
    return null; // If no building data is available, do not render anything
  }

  return (
    <div className="bg-[#1B1B1B] shadow-md border border-[#333333] p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {selectedBuilding["COMMUNITY AREA NAME"]}
      </h2>
      <p className="text-[#E0E0E0]">
        <strong>Census Block:</strong> {selectedBuilding["CENSUS BLOCK"]}
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Building Type:</strong> {selectedBuilding["BUILDING TYPE"]}
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Building Subtype:</strong>{" "}
        {selectedBuilding["BUILDING_SUBTYPE"]}
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Average Building Age:</strong>{" "}
        {selectedBuilding["AVERAGE BUILDING AGE"]} years
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Average House Size:</strong>{" "}
        {selectedBuilding["AVERAGE HOUSESIZE"]} units
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Total Units:</strong> {selectedBuilding["TOTAL UNITS"]}
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Occupied Units:</strong> {selectedBuilding["OCCUPIED UNITS"]}
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Occupied Units Percentage:</strong>{" "}
        {(
          parseFloat(selectedBuilding["OCCUPIED UNITS PERCENTAGE"]) * 100
        ).toFixed(2)}
        %
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Renter-Occupied Housing Percentage:</strong>{" "}
        {(
          parseFloat(selectedBuilding["RENTER-OCCUPIED HOUSING PERCENTAGE"]) *
          100
        ).toFixed(2)}
        %
      </p>
      <p className="text-[#E0E0E0]">
        <strong>Total Population:</strong>{" "}
        {selectedBuilding["TOTAL POPULATION"]}
      </p>
    </div>
  );
};

export default BuildingStats;

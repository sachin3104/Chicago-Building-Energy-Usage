// src/app/context/BuildingContext.js
"use client";

import { createContext, useContext, useState } from "react";

// Create the Building Context
const BuildingContext = createContext();

// Provider component that wraps the entire app
export const BuildingProvider = ({ children }) => {
  // State to store all buildings
  const [buildings, setBuildings] = useState([]);
  // State to store the selected building
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <BuildingContext.Provider
      value={{
        buildings,
        setBuildings,
        selectedBuilding,
        setSelectedBuilding,
      }}
    >
      {children}
    </BuildingContext.Provider>
  );
};

// Custom hook to use the Building Context
export const useBuildingContext = () => useContext(BuildingContext);

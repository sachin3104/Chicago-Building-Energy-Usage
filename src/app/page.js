"use client";

import { useState, useEffect, useRef } from "react";
import { useBuildingContext } from "./context/BuildingContext";
import { useRouter } from "next/navigation";

import SearchBar from "./components/SearchBar";
import BuildingTypeFilter from "./components/BuildingTypeFilter";
import BuildingList from "./components/BuildingList";
import BuildingSubtypeFilter from "./components/BuildingSubtypeFilter";

export default function HomePage() {
  // Building Context to store the building data globally
  const { buildings, setBuildings, setSelectedBuilding } = useBuildingContext();

  // Intersection Observer reference
  const observerRef = useRef(null);

  const router = useRouter();

  // Local State to store the building data
  const [filteredBuildings, setFilteredBuildings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [buildingType, setBuildingType] = useState("All");
  const [buildingSubtype, setBuildingSubtype] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Function to load buildings from the API
  const loadBuildings = async (pageNumber = 1, limit = 50) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/buildings?page=${pageNumber}&limit=${limit}`
      );
      const data = await response.json();

      // Append the new data to the existing buildings in context
      setBuildings((prevBuildings) => {
        const updatedBuildings = [...prevBuildings, ...data.data];
        return updatedBuildings;
      });

      setTotalPages(data.totalPages);

      // Determine if more pages are available
      if (pageNumber >= data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to load buildings:", error);
    }
    setIsLoading(false);
  };

  // Load initial page when the component mounts
  useEffect(() => {
    loadBuildings(page);
  }, [page]);

  // Apply the search and filters whenever search term, building type, or building subtype changes
  useEffect(() => {
    let filtered = buildings;

    if (searchTerm) {
      filtered = filtered.filter(
        (building) =>
          building["COMMUNITY AREA NAME"]
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          building["CENSUS BLOCK"]
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    if (buildingType !== "All") {
      filtered = filtered.filter(
        (building) => building["BUILDING TYPE"] === buildingType
      );
    }

    if (buildingSubtype !== "All") {
      filtered = filtered.filter(
        (building) => building["BUILDING_SUBTYPE"] === buildingSubtype
      );
    }

    setFilteredBuildings(filtered);
  }, [searchTerm, buildingType, buildingSubtype, buildings]);

  // Intersection Observer setup for Infinite Scrolling
  const lastBuildingElementRef = (node) => {
    if (isLoading) return;

    // Disconnect existing observer if present
    if (observerRef.current) observerRef.current.disconnect();

    // Create a new Intersection Observer
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        // Load the next page when the observer detects intersection
        setPage((prevPage) => prevPage + 1);
      }
    });

    // Attach observer to the node (last element)
    if (node) observerRef.current.observe(node);
  };

  // Function to handle the search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle the building type change
  const handleBuildingTypeChange = (event) => {
    setBuildingType(event.target.value);
  };

  // Function to handle the building subtype change
  const handleBuildingSubtypeChange = (event) => {
    setBuildingSubtype(event.target.value);
  };

  // Function to handle row click
  const handleRowClick = (index) => {
    setSelectedBuilding(buildings[index]); // Set the selected building in context
    router.push(`/buildings/${index}`); // Navigate to the building detail page
  };

  return (
    <div className="container mx-auto p-8 bg-[#1E1E1E] border border-[#333333]">
      <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide">
        Chicago Energy Usage
      </h1>

      {/* Search and Filters in a Row */}
      <div className="flex flex-wrap justify-center md:justify-between items-center mb-8 space-x-0 md:space-x-6">
        {/* Search Bar - Should Dominate */}
        <div className="flex-[2] md:flex-grow md:max-w-full mb-6 md:mb-0">
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>

        {/* Building Type Filter */}
        <div className="flex-[1] md:flex-grow mb-6 md:mb-0 max-w-xs md:max-w-none">
          <BuildingTypeFilter
            buildingType={buildingType}
            handleBuildingTypeChange={handleBuildingTypeChange}
          />
        </div>

        {/* Building Subtype Filter */}
        <div className="flex-[1] md:flex-grow max-w-xs md:max-w-none">
          <BuildingSubtypeFilter
            buildingSubtype={buildingSubtype}
            handleBuildingSubtypeChange={handleBuildingSubtypeChange}
          />
        </div>
      </div>

      {/* Building List/Table */}
      {filteredBuildings.length > 0 ? (
        <div className="mb-8 overflow-x-auto border scrollbar-none border-[#333333] shadow-md max-h-96">
          <BuildingList
            buildings={filteredBuildings}
            lastBuildingElementRef={lastBuildingElementRef}
            onRowClick={handleRowClick}
          />
        </div>
      ) : (
        <p className="text-center text-[#999999] italic">
          No data available. Please wait...
        </p>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-[#66FCF1]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
              ></path>
            </svg>
            <p className="text-[#E0E0E0] font-medium">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}

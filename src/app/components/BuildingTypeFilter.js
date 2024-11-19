"use client";

export default function BuildingTypeFilter({
  buildingType,
  handleBuildingTypeChange,
}) {
  return (
    <div className="flex flex-col items-start w-full space-y-2">
      <label
        htmlFor="building-type"
        className="text-lg font-semibold text-[#E0E0E0]"
      >
        Filter by Building Type
      </label>
      <select
        id="building-type"
        value={buildingType}
        onChange={handleBuildingTypeChange}
        className="border border-[#444444] p-3 w-full bg-[#1B1B1B] text-[#E0E0E0] shadow-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] transition duration-300 ease-in-out"
      >
        <option value="All">All Building Types</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Industrial">Industrial</option>
      </select>
    </div>
  );
}

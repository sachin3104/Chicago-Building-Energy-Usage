"use client";

export default function BuildingSubtypeFilter({
  buildingSubtype,
  handleBuildingSubtypeChange,
}) {
  return (
    <div className="flex flex-col items-start w-full space-y-2">
      <label
        htmlFor="building-subtype"
        className="text-lg font-semibold text-[#E0E0E0]"
      >
        Filter by Building Subtype
      </label>
      <select
        id="building-subtype"
        value={buildingSubtype}
        onChange={handleBuildingSubtypeChange}
        className="border border-[#444444] p-3 w-full bg-[#1B1B1B] text-[#E0E0E0] shadow-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] transition duration-300 ease-in-out"
      >
        <option value="All">All Building Subtypes</option>
        <option value="Multi &lt; 7">Multi &lt; 7</option>
        <option value="Single Family">Single Family</option>
        <option value="Commercial">Commercial</option>
        <option value="Multi 7+">Multi 7+</option>
        <option value="Municipal">Municipal</option>
      </select>
    </div>
  );
}

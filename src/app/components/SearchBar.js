"use client";

export default function SearchBar({ searchTerm, handleSearchChange }) {
  return (
    <div className="flex flex-col items-start w-full space-y-2">
      <label htmlFor="search" className="text-lg font-semibold text-[#E0E0E0]">
        Search Buildings
      </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Community Area Name or Census Block"
        className="border border-[#444444] p-4 w-full max-w-lg bg-[#1B1B1B] text-[#E0E0E0] shadow-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] transition duration-300 ease-in-out"
      />
    </div>
  );
}

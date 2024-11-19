"use client";

import { useRouter } from "next/navigation";

export default function BuildingRow({ building, index, refProp, style }) {
  const router = useRouter();

  // Function to handle click and navigate to the building details page
  const handleRowClick = () => {
    // Use index as the unique identifier to navigate
    router.push(`/buildings/${index}`);
  };

  return (
    <div
      ref={refProp}
      style={style}
      onClick={handleRowClick}
      className="hover:bg-gray-100 transition duration-200 p-2 border-b border-gray-200 text-sm text-gray-700 cursor-pointer"
    >
      <div className="flex">
        <div className="w-1/5">{building["COMMUNITY AREA NAME"]}</div>
        <div className="w-1/5">{building["CENSUS BLOCK"]}</div>
        <div className="w-1/5">{building["BUILDING TYPE"]}</div>
        <div className="w-1/5">{building["BUILDING_SUBTYPE"]}</div>
        <div className="w-1/5">{building["Building Type"]}</div>
      </div>
    </div>
  );
}

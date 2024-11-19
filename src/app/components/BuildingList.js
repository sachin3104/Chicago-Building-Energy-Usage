"use client";

import { useRouter } from "next/navigation";

export default function BuildingList({
  buildings,
  lastBuildingElementRef,
  onRowClick,
}) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto border border-[#3A3A3A] max-h-96 scrollbar-thin scrollbar-thumb-[#444444] scrollbar-track-[#1B1B1B]">
      <table className="min-w-full border-collapse border border-[#444444]">
        <thead className="bg-[#1F2937] text-[#E0E0E0] sticky top-0">
          <tr>
            <th className="px-6 py-3 border-b border-[#444444] text-left text-sm font-semibold">
              Community Area Name
            </th>
            <th className="px-6 py-3 border-b border-[#444444] text-left text-sm font-semibold">
              Census Block
            </th>
            <th className="px-6 py-3 border-b border-[#444444] text-left text-sm font-semibold">
              Building Type
            </th>
            <th className="px-6 py-3 border-b border-[#444444] text-left text-sm font-semibold">
              Building Sub Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#1B1B1B]">
          {buildings.map((building, index) => (
            <tr
              key={index}
              ref={
                index === buildings.length - 1 ? lastBuildingElementRef : null
              }
              onClick={() => {
                onRowClick(index);
                router.push(`/buildings/${index}`);
              }}
              className="hover:bg-[#333333] transition duration-200 ease-in-out cursor-pointer"
            >
              <td className="px-6 py-4 border-b border-[#444444] text-sm text-[#E0E0E0]">
                {building["COMMUNITY AREA NAME"]}
              </td>
              <td className="px-6 py-4 border-b border-[#444444] text-sm text-[#E0E0E0]">
                {building["CENSUS BLOCK"]}
              </td>
              <td className="px-6 py-4 border-b border-[#444444] text-sm text-[#E0E0E0]">
                {building["BUILDING TYPE"]}
              </td>
              <td className="px-6 py-4 border-b border-[#444444] text-sm text-[#E0E0E0]">
                {building["BUILDING_SUBTYPE"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

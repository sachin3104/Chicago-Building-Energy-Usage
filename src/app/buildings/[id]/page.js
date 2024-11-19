"use client";

import { useBuildingContext } from "../../context/BuildingContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EnergyChart from "@/app/components/charts/EnergyChart";
import BuildingStats from "./components/BuildingStats";
import PieChart from "@/app/components/charts/PieChart";
import BarChart from "@/app/components/charts/BarChart";
import Tabs from "@/app/components/Tabs";
import Summary from "./components/Summary";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function BuildingDetailPage() {
  // Access building data from global context
  const { selectedBuilding } = useBuildingContext();
  const router = useRouter();

  // Local state to manage the toggle between Therms and kWh
  const [showTherms, setShowTherms] = useState(true);

  // Redirect to the homepage if there's no selected building
  useEffect(() => {
    if (!selectedBuilding) {
      router.push("/");
    }
  }, [selectedBuilding, router]);

  // Log the data available for the selected building (for debugging purposes)
  useEffect(() => {
    if (selectedBuilding) {
      console.log("Selected Building Data:", selectedBuilding);
    }
  }, [selectedBuilding]);

  // Breadcrumb Links
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Buildings", href: "/buildings" },
  ];

  // If no building is selected, show a loading message (until redirected)
  if (!selectedBuilding) {
    return <p>Loading...</p>;
  }

  // Extract monthly Therms data from the selected building
  const thermData = [
    selectedBuilding["THERM JANUARY 2010"],
    selectedBuilding["THERM FEBRUARY 2010"],
    selectedBuilding["THERM MARCH 2010"],
    selectedBuilding["THERM APRIL 2010"],
    selectedBuilding["THERM MAY 2010"],
    selectedBuilding["THERM JUNE 2010"],
    selectedBuilding["THERM JULY 2010"],
    selectedBuilding["THERM AUGUST 2010"],
    selectedBuilding["THERM SEPTEMBER 2010"],
    selectedBuilding["THERM OCTOBER 2010"],
    selectedBuilding["THERM NOVEMBER 2010"],
    selectedBuilding["THERM DECEMBER 2010"],
  ].map((value) => (value ? parseFloat(value) : 0)); // Convert values to numbers, replace missing with 0

  // Extract monthly kWh data from the selected building
  const kwhData = [
    selectedBuilding["KWH JANUARY 2010"],
    selectedBuilding["KWH FEBRUARY 2010"],
    selectedBuilding["KWH MARCH 2010"],
    selectedBuilding["KWH APRIL 2010"],
    selectedBuilding["KWH MAY 2010"],
    selectedBuilding["KWH JUNE 2010"],
    selectedBuilding["KWH JULY 2010"],
    selectedBuilding["KWH AUGUST 2010"],
    selectedBuilding["KWH SEPTEMBER 2010"],
    selectedBuilding["KWH OCTOBER 2010"],
    selectedBuilding["KWH NOVEMBER 2010"],
    selectedBuilding["KWH DECEMBER 2010"],
  ].map((value) => (value ? parseFloat(value) : 0)); // Convert values to numbers, replace missing with 0

  // Extract total kWh and Therms data for the pie chart
  const totalKwh = selectedBuilding["TOTAL KWH"]
    ? parseFloat(selectedBuilding["TOTAL KWH"])
    : 0;
  const totalTherms = selectedBuilding["TOTAL THERMS"]
    ? parseFloat(selectedBuilding["TOTAL THERMS"])
    : 0;

  // Extract quartile data for Therms and kWh
  const kwhQuartiles = [
    selectedBuilding["KWH 1ST QUARTILE 2010"]
      ? parseFloat(selectedBuilding["KWH 1ST QUARTILE 2010"])
      : 0,
    selectedBuilding["KWH 2ND QUARTILE 2010"]
      ? parseFloat(selectedBuilding["KWH 2ND QUARTILE 2010"])
      : 0,
    selectedBuilding["KWH 3RD QUARTILE 2010"]
      ? parseFloat(selectedBuilding["KWH 3RD QUARTILE 2010"])
      : 0,
  ];

  const thermQuartiles = [
    selectedBuilding["THERM 1ST QUARTILE 2010"]
      ? parseFloat(selectedBuilding["THERM 1ST QUARTILE 2010"])
      : 0,
    selectedBuilding["THERM 2ND QUARTILE 2010"]
      ? parseFloat(selectedBuilding["THERM 2ND QUARTILE 2010"])
      : 0,
    selectedBuilding["THERM 3RD QUARTILE 2010"]
      ? parseFloat(selectedBuilding["THERM 3RD QUARTILE 2010"])
      : 0,
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb links={breadcrumbLinks} />
      <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-4 md:mb-6">
        Building Dashboard
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
        {/* Summary of Energy Usage */}
        <div className="flex-1 mb-6 md:mb-0">
          <Summary selectedBuilding={selectedBuilding} />
        </div>

        {/* Building Information */}
        <div className="flex-1">
          <BuildingStats selectedBuilding={selectedBuilding} />
        </div>
      </div>

      {/* Tabs for Visualizations */}
      <Tabs tabs={["Monthly Usage", "Total Breakdown", "Quartile Analysis"]}>
        {/* Monthly Usage Tab */}
        <div className="bg-[#1B1B1B] shadow-md border border-[#333333] p-4 md:p-6 mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold text-[#E0E0E0]">
              Monthly Energy Usage (2010)
            </h2>
            <button
              className="mt-2 md:mt-0 px-4 py-2 bg-white text-[#1B1B1B] rounded transition duration-300 ease-in-out hover:bg-[#45B2A6]"
              onClick={() => setShowTherms((prev) => !prev)}
            >
              {showTherms ? "Switch to kWh" : "Switch to Therms"}
            </button>
          </div>
          <div className="w-full overflow-x-auto">
            <EnergyChart
              data={showTherms ? thermData : kwhData}
              title={
                showTherms
                  ? "Monthly Therm Usage for 2010"
                  : "Monthly kWh Usage for 2010"
              }
              unit={showTherms ? "Therms" : "kWh"}
            />
          </div>
        </div>

        {/* Total Breakdown Tab */}
        <div className="bg-[#1B1B1B] shadow-md border border-[#333333] p-4 md:p-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-[#E0E0E0]">
            Energy Breakdown (Total)
          </h2>
          <div className="w-full overflow-x-auto">
            <PieChart kwhTotal={totalKwh} thermsTotal={totalTherms} />
          </div>
        </div>

        {/* Quartile Analysis Tab */}
        <div className="bg-[#1B1B1B] shadow-md border border-[#333333] p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-[#E0E0E0]">
            Energy Usage Quartiles (2010)
          </h2>
          <div className="w-full overflow-x-auto">
            <BarChart
              kwhQuartiles={kwhQuartiles}
              thermQuartiles={thermQuartiles}
            />
          </div>
        </div>
      </Tabs>
    </div>
  );
}

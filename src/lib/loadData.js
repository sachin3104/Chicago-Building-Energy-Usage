import fs from "fs";
import path from "path";

// Variable to store the JSON data in memory
let buildingsData = [];

// Function to load JSON data into memory
export function loadBuildingsData() {
  const jsonFilePath = path.join(
    process.cwd(),
    "src",
    "data",
    "chicago_energy.json"
  );

  try {
    // Read the JSON file synchronously and parse it
    const fileContents = fs.readFileSync(jsonFilePath, "utf8");
    buildingsData = JSON.parse(fileContents);
    console.log("Buildings data loaded into memory successfully");
  } catch (error) {
    console.error("Error loading buildings data:", error);
  }
}

// Function to get the data from memory
export function getBuildingsData() {
  return buildingsData;
}

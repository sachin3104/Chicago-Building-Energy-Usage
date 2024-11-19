import { NextResponse } from "next/server";
import { loadBuildingsData, getBuildingsData } from "../../../lib/loadData";

// Load the data into memory when the module is first imported
loadBuildingsData();

export async function GET(request) {
  // Extract query parameters from the request URL
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1; // Default to page 1
  const limit = parseInt(searchParams.get("limit")) || 50; // Default limit to 50 rows

  try {
    // Get data from memory
    const buildings = getBuildingsData();

    // Calculate start and end index for slicing the data
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    // Slice the data to return only the requested chunk
    const chunkedBuildings = buildings.slice(startIndex, endIndex);

    // Create the response object with pagination information
    const responseData = {
      data: chunkedBuildings,
      total: buildings.length,
      currentPage: page,
      totalPages: Math.ceil(buildings.length / limit),
    };

    // Return the chunked data as JSON
    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json(
      { message: "Error reading data", error },
      { status: 500 }
    );
  }
}

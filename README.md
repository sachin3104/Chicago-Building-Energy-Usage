# Chicago Building Energy Usage

This project is a web application built using **Next.js** that provides a searchable and interactive **dashboard** for visualizing the 2010 energy usage data of Chicago buildings. Users can search, filter, and view details about buildings, including electricity (kWh) and gas (therms) usage over time.

## Features

- **Search and Filter** buildings by Community Area Name, Census Block, Building Type, and Building Subtype.
- **Infinite Scrolling** for smooth data browsing without performance lag.
- **Individual Building Dashboard** to view detailed energy usage information graphically.
- **Energy Visualization** using interactive charts for monthly kWh and Therms usage.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: React Context API
- **Data Visualization**: Chart.js
- **Backend**: Next.js API Routes (serving paginated JSON data)

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sachin3104/Chicago-Building-Energy-Usage.git
   cd Chicago-Building-Energy-Usage
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
4. **Access the Application**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`public/chicago_energy.json`**: Dataset for building energy usage.
- **`src/app/`**: Contains pages, API routes, and context for state management.
- **`src/app/components/`**: Contains reusable UI components such as SearchBar, Filters, and EnergyChart.
- **`src/app/buildings/[id]/page.js`**: Dashboard page for individual building details.

## Future Improvements

- **Move Data to a Database**: Optimize data retrieval by moving from JSON to a database like MongoDB.

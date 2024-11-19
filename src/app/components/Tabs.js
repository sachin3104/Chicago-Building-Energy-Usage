// src/app/components/Tabs.js
"use client";

import React, { useState } from "react";

const Tabs = ({ tabs, children }) => {
  // State to keep track of the currently selected tab
  const [activeTab, setActiveTab] = useState(0);

  // Handle keyboard events for tabs
  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight") {
      setActiveTab((index + 1) % tabs.length);
    } else if (e.key === "ArrowLeft") {
      setActiveTab((index - 1 + tabs.length) % tabs.length);
    } else if (e.key === "Enter" || e.key === " ") {
      setActiveTab(index);
    }
  };

  return (
    <div>
      <div
        className="flex border-b border-[#444444] mb-6"
        role="tablist"
        aria-label="Energy Usage Tabs"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
            aria-selected={activeTab === index}
            tabIndex={activeTab === index ? 0 : -1}
            className={`py-2 px-4 border-b-2 focus:outline-none transition-colors duration-300 ${
              activeTab === index
                ? "border-white text-white font-bold"
                : "border-transparent text-[#999999] hover:text-[#66FCF1]"
            }`}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="bg-[#1B1B1B] p-6 border border-[#333333] shadow-md"
      >
        {children[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;

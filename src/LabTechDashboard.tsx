import React, { useState, useEffect, useCallback } from "react";
import DataGrid2 from "./DataGrid2";

const LabTechDashboard: React.FC = () => {
  // const [TestResults, setTestResults] = useState<TestResult[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data"); // Replace '/api/data' with your backend API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      //    setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <p>Welcome, Doctor!</p>
    </div>
  );
};

export default LabTechDashboard;

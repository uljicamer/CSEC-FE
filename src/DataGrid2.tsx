import React, { useState, useEffect } from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const DataGrid2: React.FC = () => {
  const [tests, setTests] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from your backend when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make an API request to fetch test data from your backend
      const response = await fetch('/api/tests'); // Adjust the URL as per your backend API
      if (!response.ok) {
        throw new Error('Failed to fetch test data');
      }
      const testData = await response.json();
      setTests(testData);
    } catch (error) {
      console.error('Error fetching test data:', error);
    }
  };

  const columns = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Test Name' },
    { name: 'result', title: 'Result' },
    // Add more columns as needed
  ];

  return (
    <div>
      <h2>Lab Technician Dashboard</h2>
      <Grid
        rows={tests}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </div>
  );
};

export default DataGrid2;
import React, { useState, useEffect } from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const DataGrid: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data'); // Replace '/api/data' with your backend API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const columns = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Product Name' },
    { name: 'price', title: 'Price' },
  ];

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <Grid
        rows={data}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </div>
  );
};

export default DataGrid;
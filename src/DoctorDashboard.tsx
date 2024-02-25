import React from 'react';
import DataGrid from './DataGrid';

const DoctorDashboard: React.FC = () => {
  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <p>Welcome, Doctor!</p>
      <DataGrid />
    </div>
  );
};

export default DoctorDashboard;
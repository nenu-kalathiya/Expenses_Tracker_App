// src/Pages/Reports.jsx
import React from 'react';
import MonthlyReport from '../components/MonthlyReport';

const Reports = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Reports</h1>
            <MonthlyReport />
        </div>
    );
};

export default Reports;

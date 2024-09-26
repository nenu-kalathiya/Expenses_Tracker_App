import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { ExpenseContext } from '../context/ExpenseContext';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const MonthlyReport = () => {
    const { expenses } = useContext(ExpenseContext);

    // Helper function to calculate monthly expenses
    const calculateMonthlyExpenses = () => {
        const monthlyData = {};
        const categoryData = {};

        expenses.forEach(expense => {
            const date = new Date(expense.date);
            const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
            const amount = expense.amount;

            // Monthly Data
            if (!monthlyData[monthYear]) {
                monthlyData[monthYear] = 0;
            }
            monthlyData[monthYear] += amount;

            // Category Data
            if (!categoryData[expense.category]) {
                categoryData[expense.category] = 0;
            }
            categoryData[expense.category] += amount;
        });

        return { monthlyData, categoryData };
    };

    const { monthlyData, categoryData } = calculateMonthlyExpenses();

    const monthlyChartData = {
        labels: Object.keys(monthlyData),
        datasets: [
            {
                label: 'Monthly Expenses',
                data: Object.values(monthlyData),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const categoryChartData = {
        labels: Object.keys(categoryData),
        datasets: [
            {
                label: 'Category-wise Expenses',
                data: Object.values(categoryData),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Monthly Expense Report</h2>
            {Object.keys(monthlyData).length > 0 ? (
                <>
                    <Bar data={monthlyChartData} />
                    <h2 className="text-lg font-bold mt-6 mb-4">Category-wise Expenses</h2>
                    <Bar data={categoryChartData} />
                </>
            ) : (
                <p className="text-gray-500">No expenses added yet for this month.</p>
            )}
        </div>
    );
};

export default MonthlyReport;

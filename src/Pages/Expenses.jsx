// Expenses.js
import React from 'react';
import ExpenseList from '../components/ExpenseList';

const Expenses = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Your Expenses</h1>
            <ExpenseList />
        </div>
    );
};

export default Expenses;

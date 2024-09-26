import React, { createContext, useState, useEffect } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const [userProfile, setUserProfile] = useState({
        name: 'Nenu Kalathiya', // Default name
        email: 'nenu@example.com', // Default email
        phoneNumber: '123-456-7890', // Default phone number
        photo: 'assets/images/photo.jpeg', // Default profile photo path
    });

    const addExpense = (expense) => {
        const updatedExpenses = [...expenses, expense];
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const editExpense = (index, updatedExpense) => {
        const updatedExpenses = expenses.map((expense, i) =>
            i === index ? updatedExpense : expense
        );
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const deleteExpense = (index) => {
        const updatedExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, editExpense, deleteExpense, userProfile }}>
            {children}
        </ExpenseContext.Provider>
    );
};

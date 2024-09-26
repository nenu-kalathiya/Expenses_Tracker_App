import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { useNavigate } from 'react-router-dom';

const ExpenseList = () => {
    const { expenses, deleteExpense } = useContext(ExpenseContext);
    const navigate = useNavigate();

    const handleEdit = (index) => {
        navigate(`/edit-expense/${index}`);
    };

    return (
        <div className="overflow-x-auto">
            {expenses.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-gray-200 text-gray-600">
                        <tr>
                            <th className="py-2 px-4 border-b-2 text-left font-semibold">Description</th>
                            <th className="py-2 px-4 border-b-2 text-left font-semibold">Amount</th>
                            <th className="py-2 px-4 border-b-2 text-left font-semibold">Date</th>
                            <th className="py-2 px-4 border-b-2 text-left font-semibold">Category</th>
                            <th className="py-2 px-4 border-b-2 text-left font-semibold">Payment Method</th>
                            <th className="py-2 px-4 border-b-2 text-left font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{expense.description}</td>
                                <td className="py-2 px-4 border-b">${expense.amount.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b">{expense.date}</td>
                                <td className="py-2 px-4 border-b">{expense.category}</td>
                                <td className="py-2 px-4 border-b">{expense.paymentMethod}</td>
                                <td className="py-2 px-4 border-b">
                                    <button onClick={() => handleEdit(index)} className="text-blue-500 hover:underline">Edit</button>
                                    <button onClick={() => deleteExpense(index)} className="text-red-500 hover:underline ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500">No expenses added yet.</p>
            )}
        </div>
    );
};

export default ExpenseList;

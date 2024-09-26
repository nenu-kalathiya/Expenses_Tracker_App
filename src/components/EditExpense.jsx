import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ExpenseContext } from '../context/ExpenseContext';

const EditExpense = () => {
    const { index } = useParams();
    const { expenses, editExpense } = useContext(ExpenseContext);
    const navigate = useNavigate();
    
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');

    useEffect(() => {
        const expense = expenses[index];
        if (expense) {
            setDescription(expense.description);
            setAmount(expense.amount);
            setDate(expense.date);
            setCategory(expense.category);
            setPaymentMethod(expense.paymentMethod);
        } else {
            navigate('/expenses'); // Redirect if no expense found
        }
    }, [index, expenses, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !date || !category) {
            alert('Please fill out all fields.');
            return;
        }

        // Update expense
        editExpense(index, { description, amount: parseFloat(amount), date, category, paymentMethod });
        
        // Redirect to Expenses page
        navigate('/expenses');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
                <label className="font-semibold">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                />
            </div>
            
            <div className="flex flex-col">
                <label className="font-semibold">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                >
                    <option value="" disabled>Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Bills">Bills</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Payment Method</label>
                <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="border rounded-lg p-2"
                >
                    <option value="cash">Cash</option>
                    <option value="credit">Credit</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-custom-blue text-white rounded-lg p-2 hover:bg-blue-600">
                Update Expense
            </button>
        </form>
    );
};

export default EditExpense;

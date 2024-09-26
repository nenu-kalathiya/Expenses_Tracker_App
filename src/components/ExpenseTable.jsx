import React from 'react';

const ExpenseTable = ({ expenses }) => {
  // Sorting, filtering, and pagination logic will go here

  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
          <th>Category</th>
          <th>Payment Method</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.amount}</td>
            <td>{expense.description}</td>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>{expense.paymentMethod}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;

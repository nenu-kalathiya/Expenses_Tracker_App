import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Navbar from './components/Navbar';
import ExpenseForm from './components/ExpenseForm';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import ExpenseList from './components/ExpenseList';
import Expenses from './Pages/Expenses';
import EditExpense from './components/EditExpense'; // Import the EditExpense component

const App = () => {
  return (
    <ExpenseProvider>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>
          <Routes>
            <Route path="/" element={<ExpenseForm />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/edit-expense/:index" element={<EditExpense />} /> {/* Add this route */}
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </ExpenseProvider>
  );
};

export default App;

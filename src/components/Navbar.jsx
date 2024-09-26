import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white ">Home</Link>
          <Link to="/expenses" className="text-white ">Expenses</Link>
          <Link to="/reports" className="text-white ">Reports</Link>
          <Link to="/settings" className="text-white ">Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

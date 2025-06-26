import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow">
      <h1 className="text-xl font-bold mb-4">PAYMINT</h1>
      <nav className="space-y-2">
        <Link to="/dashboard" className="block p-2 rounded hover:bg-blue-100">Dashboard</Link>
        <Link to="/budgets" className="block p-2 rounded hover:bg-blue-100">Budgets</Link>
        <Link to="/transactions" className="block p-2 rounded hover:bg-blue-100">Transactions</Link>
        <Link to="/accounts" className="block p-2 rounded hover:bg-blue-100">Accounts</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import TransactionForm from './component/TransactionForm';
import TransactionList from './component/TransactionList';
import BudgetCard from './component/BudgetCard';


const Dashboard = () => (
  <div className="p-4 space-y-4">
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <TransactionForm />
    <TransactionList />
  </div>
);

const Budgets = () => (
  <div className="p-4 grid grid-cols-1 gap-4">
    </div>
);

const App = () => {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/budgets" element={<BudgetCard />} />
            <Route path="/transactions" element={<TransactionList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

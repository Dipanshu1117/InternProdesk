import React from 'react';
import budgetSlice from '../redux/slices/budgetsSlice'

const BudgetCard = ({ name, budget, used }) => {
  const left = budget - used;

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm">Budget: ₹{budget}</p>
      <p className="text-sm">Used: ₹{used}</p>
      <div className="w-full bg-gray-200 h-2 my-2 rounded">
        <div className="bg-blue-500 h-2 rounded" style={{ width: `${(used / budget) * 100}%` }} />
      </div>
      <p className="text-green-600 font-semibold">Balance Left: ₹{left}</p>
    </div>
  );
};

export default BudgetCard;

import React from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/slices/transactionsSlice';

const TransactionForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const transaction = {
      id: Date.now(),
      type: data.get("type"),
      amount: +data.get("amount"),
      category: data.get("category"),
      time: new Date().toISOString(),
    };
    dispatch(addTransaction(transaction));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow">

      <input name="amount" type="number" placeholder="Amount" className="input input-bordered w-full" required />
      <select name="category" className="select select-bordered w-full" required>
        <option value="Groceries">Groceries</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
      </select>
      <select name="type" className="select select-bordered w-full" required>
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>

      <button type="submit" className="btn btn-primary w-full">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
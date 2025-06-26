import React from 'react';
import { useSelector } from 'react-redux';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <div className="overflow-y-auto max-h-96">
      {transactions.map(txn => (
        <div key={txn.id} className="border p-2 mb-2 rounded bg-white shadow">
          <p>{txn.category} - ₹{txn.amount}</p>
          <p>{txn.type.toUpperCase()} on {new Date(txn.time).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
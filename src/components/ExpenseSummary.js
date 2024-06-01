import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const categories = [...new Set(expenses.map(expense => expense.category))];
  const totalByCategory = categories.map(category => {
    const total = expenses
      .filter(expense => expense.category === category)
      .reduce((acc, expense) => acc + expense.amount, 0);
    return { category, total };
  });

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Expense Summary</h2>
      <p className="mb-2">Total Amount Spent: ${totalAmount.toFixed(2)}</p>
      {totalByCategory.map((item) => (
        <p key={item.category}>
          {item.category}: ${item.total.toFixed(2)}
        </p>
      ))}
    </div>
  );
};

export default ExpenseSummary;

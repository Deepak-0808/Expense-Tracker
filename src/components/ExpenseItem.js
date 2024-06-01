import React from 'react';

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded shadow-md mb-2">
      <div>
        <h3 className="text-lg font-bold">{expense.title}</h3>
        <p>${expense.amount}</p>
        <p>{expense.date}</p>
        <p>{expense.category}</p>
      </div>
      <div>
        <button onClick={() => onEdit(expense)} className="text-blue-500 mr-2">Edit</button>
        <button onClick={() => onDelete(expense.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;

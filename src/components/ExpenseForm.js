import React, { useState } from 'react';

function ExpenseForm() {
  const [expense, setExpense] = useState({ category: '', amount: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense);
    // Code to handle expense submission
  };

  return (
    <div>
      <h2>Expense Form</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setExpense({ ...expense, category: e.target.value })}>
          <option value="">Select Category</option>
          <option value="Rent">Rent</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Savings">Savings</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;

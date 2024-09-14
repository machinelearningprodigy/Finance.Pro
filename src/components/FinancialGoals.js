import React, { useState } from 'react';

function FinancialGoals() {
  const [goal, setGoal] = useState('Buy a House');
  const [amount, setAmount] = useState(50000);

  return (
    <div>
      <h2>Financial Goals</h2>
      <form>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Goal Name"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Goal Amount"
        />
        <p>Your goal is: {goal} with an amount of: ${amount}</p>
      </form>
    </div>
  );
}

export default FinancialGoals;

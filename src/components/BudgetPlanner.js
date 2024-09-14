import React, { useState } from 'react';

function BudgetPlanner() {
  const [budget, setBudget] = useState(1000);

  return (
    <div>
      <h2>Budget Planner</h2>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <p>Your budget is: ${budget}</p>
    </div>
  );
}

export default BudgetPlanner;

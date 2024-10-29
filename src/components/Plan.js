import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaEdit, FaSave, FaUndo, FaSort, FaSearch, FaChartPie, FaFileDownload } from 'react-icons/fa';
import styles from './Plan.module.css';  // Import CSS module



const Plan = () => {
  const [plans, setPlans] = useState([]);
  const [planName, setPlanName] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [goal, setGoal] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [progress, setProgress] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [currencyRate, setCurrencyRate] = useState(1);
  const [budgetLimit, setBudgetLimit] = useState(1000);
  const [warningMessage, setWarningMessage] = useState('');
  const [backupData, setBackupData] = useState(null);

  // Load plans from local storage
  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem('plans')) || [];
    setPlans(savedPlans);
    calculateTotal(savedPlans);
  }, []);

  // Update filtered plans when plans or search term changes
  useEffect(() => {
    const filtered = plans.filter((plan) =>
      plan.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlans(filtered);
  }, [plans, searchTerm]);

  // Update total amount when plans change
  useEffect(() => {
    calculateTotal(plans);
  }, [plans]);

  // Track progress for goals
  useEffect(() => {
    const progressData = plans.map((plan) => ({
      name: plan.name,
      progress: Math.min((plan.amount / budgetLimit) * 100, 100), // Percentage progress
    }));
    setProgress(progressData);
  }, [plans, budgetLimit]);

  // Set a budget warning if the total amount exceeds the limit
  useEffect(() => {
    if (totalAmount > budgetLimit) {
      setWarningMessage('Warning: Your planned expenses exceed your budget limit!');
    } else {
      setWarningMessage('');
    }
  }, [totalAmount, budgetLimit]);

  // Add new plan
  const addPlan = () => {
    if (!planName || !amount || !startDate || !endDate || !goal) {
      alert('All fields are required');
      return;
    }

    const newPlan = {
      name: planName,
      amount: parseFloat(amount),
      startDate,
      endDate,
      goal,
    };

    const updatedPlans = [...plans, newPlan];
    setPlans(updatedPlans);
    localStorage.setItem('plans', JSON.stringify(updatedPlans));

    setPlanName('');
    setAmount('');
    setStartDate('');
    setEndDate('');
    setGoal('');
  };

  // Edit an existing plan
  const editPlan = (index) => {
    const plan = plans[index];
    setPlanName(plan.name);
    setAmount(plan.amount);
    setStartDate(plan.startDate);
    setEndDate(plan.endDate);
    setGoal(plan.goal);
    setEditIndex(index);
  };

  // Save edited plan
  const savePlan = () => {
    if (editIndex === null) return;

    const updatedPlans = [...plans];
    updatedPlans[editIndex] = {
      name: planName,
      amount: parseFloat(amount),
      startDate,
      endDate,
      goal,
    };

    setPlans(updatedPlans);
    localStorage.setItem('plans', JSON.stringify(updatedPlans));

    setPlanName('');
    setAmount('');
    setStartDate('');
    setEndDate('');
    setGoal('');
    setEditIndex(null);
  };

  // Delete a plan
  const deletePlan = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
    localStorage.setItem('plans', JSON.stringify(updatedPlans));
  };

  // Calculate total amount
  const calculateTotal = (planList) => {
    const total = planList.reduce((sum, plan) => sum + plan.amount, 0);
    setTotalAmount(total);
  };

  // Undo changes
  const undoChanges = () => {
    const savedPlans = JSON.parse(localStorage.getItem('plans')) || [];
    setPlans(savedPlans);
    setPlanName('');
    setAmount('');
    setStartDate('');
    setEndDate('');
    setGoal('');
    setEditIndex(null);
  };

  // Sort plans by date
  const sortPlans = () => {
    const sortedPlans = [...filteredPlans].sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredPlans(sortedPlans);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Change currency
  const changeCurrency = (newCurrency, rate) => {
    setCurrency(newCurrency);
    setCurrencyRate(rate);
  };

  // Backup and download data
  const backupDataFunction = () => {
    const dataStr = JSON.stringify(plans);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    setBackupData(dataUri);
  };

  // Render progress for each plan
  const renderProgress = () => {
    return progress.map((plan, index) => (
      <div key={index}>
        <p>{plan.name}: {plan.progress}% of your budget</p>
      </div>
    ));
  };

  return (
    <div className={styles.planContainer}> {/* Scoped styling */}
      {/* Add/Edit Plan */}
      <div className={styles.planForm}>
        <input
          type="text"
          placeholder="Plan Name"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Goal (e.g., Savings, Vacation)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        {editIndex === null ? (
          <button onClick={addPlan}>
            <FaPlus /> Add Plan
          </button>
        ) : (
          <button onClick={savePlan}>
            <FaSave /> Save Plan
          </button>
        )}
      </div>

      {/* Search */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search Plans"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={sortPlans}>
          <FaSort /> Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      {/* Plan List */}
      <div className={styles.planList}>
        {filteredPlans.length === 0 ? (
          <p>No plans found</p>
        ) : (
          <ul>
            {filteredPlans.map((plan, index) => (
              <li key={index} className={styles.planItem}>
                <span>{plan.name}</span>
                <span>${(plan.amount * currencyRate).toFixed(2)} {currency}</span>
                <span>{new Date(plan.startDate).toLocaleDateString()}</span>
                <span>{new Date(plan.endDate).toLocaleDateString()}</span>
                <span>Goal: {plan.goal}</span>
                <button onClick={() => editPlan(index)}>
                  <FaEdit /> Edit
                </button>
                <button onClick={() => deletePlan(index)}>
                  <FaTrash /> Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Budget Progress */}
      <div className={styles.budgetProgress}>
        <h3>Budget Progress</h3>
        {renderProgress()}
      </div>

{/* Currency Selector */}
<div className={styles.currencySelector}>
        <button onClick={() => changeCurrency('USD', 1)}>USD</button>
        <button onClick={() => changeCurrency('EUR', 0.85)}>EUR</button>
        <button onClick={() => changeCurrency('GBP', 0.75)}>GBP</button>
      </div>

      {/* Backup Data */}
      <div className={styles.backupData}>
        <button onClick={backupDataFunction}>
          <FaFileDownload /> Backup Data
        </button>
        {backupData && (
          <a href={backupData} download="plans_backup.json">
            Download Backup
          </a>
        )}
      </div>

      {/* Undo */}
      <div className={styles.undoButton}>
        <button onClick={undoChanges}>
          <FaUndo /> Undo Changes
        </button>
      </div>

      {/* Total Amount */}
      <div className={styles.totalAmount}>
        <h3>Total Planned Amount: ${(totalAmount * currencyRate).toFixed(2)} {currency}</h3>
        {warningMessage && <p className={styles.warning}>{warningMessage}</p>}
      </div>
    </div>
  );
};

export default Plan;


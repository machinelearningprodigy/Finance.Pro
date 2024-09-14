import './WebProfile.css';
import React, { useState } from 'react';
import { FiSearch, FiBell, FiUpload, FiUser, FiSettings } from 'react-icons/fi';
import { FaApple, FaSpotify, FaCreditCard, FaMoneyCheckAlt } from 'react-icons/fa';
import { BiTransfer, BiBarChart } from 'react-icons/bi';
import { BsCart, BsPiggyBank } from 'react-icons/bs';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { TbPigMoney, TbRefresh, TbTargetArrow } from 'react-icons/tb';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Slider, TextField, Button, CircularProgress } from '@mui/material';

const WebProfile = () => {
  const [activeTab, setActiveTab] = useState('wallet');
  const [spendingLimit, setSpendingLimit] = useState(8545);
  const [savingsGoal, setSavingsGoal] = useState(5000);
  const [savingsProgress, setSavingsProgress] = useState(3500);
  const [income, setIncome] = useState(5000);
  const [expense, setExpense] = useState(3500);

  const chartData = [
    { name: 'Nov', value: 4000 },
    { name: 'Dec', value: 3500 },
    { name: 'Jan', value: 5000 },
    { name: 'Feb', value: 4500 },
    { name: 'Mar', value: 6000 },
    { name: 'Apr', value: 5500 },
  ];

  const transactions = [
    { icon: <FaApple />, name: 'Apple Store', category: 'Entertainment', amount: -15.99 },
    { icon: <FaSpotify />, name: 'Spotify', category: 'Music', amount: -212.99 },
    { icon: <BiTransfer />, name: 'Money Transfer', category: 'Transaction', amount: 3000 },
    { icon: <BsCart />, name: 'Grocery', category: 'Shopping', amount: -18 },
  ];

  const cards = [
    { number: '4562 1122 4595 7852', name: 'Brooklyn Simmons', expiry: '24/2028', cvv: '6986', type: 'Mastercard' },
    { number: '5678 9012 3456 7890', name: 'Brooklyn Simmons', expiry: '12/2026', cvv: '123', type: 'Visa' },
  ];

  const handleSpendingLimitChange = (event, newValue) => {
    setSpendingLimit(newValue);
  };

  const handleSavingsGoalChange = (event, newValue) => {
    setSavingsGoal(newValue);
  };

  const handleImageUpload = (event) => {
    console.log('Image uploaded:', event.target.files[0]);
  };

  return (
    <div className="web-profile-container">
      <header>
        <div className="user-info">
          <div className="avatar-container">
            <FiUser className="default-avatar" />
            <button className="upload-btn" onClick={() => document.getElementById('avatar-upload').click()}>
              <FiUpload />
            </button>
            <input id="avatar-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
          </div>
          <h2>Welcome back, Rahul Mishra</h2>
        </div>
        <div className="header-icons">
          <FiSearch />
          <FiBell />
          <FiSettings />
        </div>
      </header>

      <nav className="tab-navigation">
        <button className={activeTab === 'wallet' ? 'active' : ''} onClick={() => setActiveTab('wallet')}>Wallet</button>
        <button className={activeTab === 'cards' ? 'active' : ''} onClick={() => setActiveTab('cards')}>My Cards</button>
        <button className={activeTab === 'budget' ? 'active' : ''} onClick={() => setActiveTab('budget')}>Budget</button>
        <button className={activeTab === 'savings' ? 'active' : ''} onClick={() => setActiveTab('savings')}>Savings</button>
      </nav>

      <main className="content">
        <section className={`wallet-section ${activeTab === 'wallet' ? 'active' : ''}`}>
          <div className="balance-chart">
            <div className="balance">
              <h3>Current Balance</h3>
              <h2>$18,545.00</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="actions">
            <button><RiArrowUpSLine /> Send</button>
            <button><RiArrowDownSLine /> Receive</button>
            <button><TbPigMoney /> Loan</button>
            <button><TbRefresh /> Topup</button>
            <button><BsPiggyBank /> Savings</button>
          </div>

          <div className="transactions">
            <div className="transactions-header">
              <h3>Recent Transactions</h3>
              <a href="#" className="see-all">See All</a>
            </div>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index}>
                  {transaction.icon}
                  <div>
                    <strong>{transaction.name}</strong>
                    <span>{transaction.category}</span>
                  </div>
                  <span className={`amount ${transaction.amount > 0 ? 'positive' : ''}`}>
                    {transaction.amount > 0 ? '+' : '-'} ${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`cards-section ${activeTab === 'cards' ? 'active' : ''}`}>
          <div className="cards-container">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-type">{card.type}</div>
                <div className="card-number">{card.number}</div>
                <div className="card-name">{card.name}</div>
                <div className="card-details">
                  <span>Expiry Date</span>
                  <span>CVV</span>
                  <strong>{card.expiry}</strong>
                  <strong>{card.cvv}</strong>
                </div>
                <FaCreditCard className="card-logo" />
              </div>
            ))}
          </div>

          <div className="spending-limit">
            <h3>Monthly spending limit</h3>
            <Slider
              value={spendingLimit}
              onChange={handleSpendingLimitChange}
              aria-labelledby="spending-limit-slider"
              valueLabelDisplay="auto"
              step={100}
              marks
              min={0}
              max={10000}
            />
            <div className="limit-labels">
              <span>$0</span>
              <span>${spendingLimit.toFixed(2)}</span>
              <span>$10,000</span>
            </div>
          </div>

          <div className="transactions">
            <div className="transactions-header">
              <h3>Recent Transactions</h3>
              <a href="#" className="see-all">See All</a>
            </div>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index}>
                  {transaction.icon}
                  <div>
                    <strong>{transaction.name}</strong>
                    <span>{transaction.category}</span>
                  </div>
                  <span className={`amount ${transaction.amount > 0 ? 'positive' : ''}`}>
                    {transaction.amount > 0 ? '+' : '-'} ${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`budget-section ${activeTab === 'budget' ? 'active' : ''}`}>
          <div className="budget-overview">
            <h3>Budget Overview</h3>
            <TextField
              label="Monthly Income"
              variant="outlined"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              type="number"
              fullWidth
            />
            <TextField
              label="Monthly Expense"
              variant="outlined"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              type="number"
              fullWidth
            />
            <div className="budget-summary">
              <h3>Net Savings</h3>
              <h2>${(income - expense).toFixed(2)}</h2>
            </div>
          </div>

          <div className="savings-goal">
            <h3>Savings Goal</h3>
            <Slider
              value={savingsGoal}
              onChange={handleSavingsGoalChange}
              aria-labelledby="savings-goal-slider"
              valueLabelDisplay="auto"
              step={500}
              min={0}
              max={20000}
            />
            <div className="goal-labels">
              <span>$0</span>
              <span>${savingsGoal.toFixed(2)}</span>
              <span>$20,000</span>
            </div>
          </div>
        </section>

        <section className={`savings-section ${activeTab === 'savings' ? 'active' : ''}`}>
          <div className="savings-overview">
            <h3>Savings Overview</h3>
            <h2>${savingsProgress.toFixed(2)} / ${savingsGoal.toFixed(2)}</h2>
            <CircularProgress
              variant="determinate"
              value={(savingsProgress / savingsGoal) * 100}
            />
          </div>

          <div className="add-savings">
            <TextField
              label="Add to Savings"
              variant="outlined"
              type="number"
              fullWidth
              onChange={(e) => setSavingsProgress(parseFloat(savingsProgress) + parseFloat(e.target.value))}
            />
            <Button variant="contained" color="primary">Add</Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebProfile;

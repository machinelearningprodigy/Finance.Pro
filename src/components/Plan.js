// // ava24

// import React, { useState, useEffect } from 'react';
// import {
//     LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
//     XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';

// import './Plan.css'

// const Plan = () => {
//     const [selectedPlan, setSelectedPlan] = useState('budget');
//     const [plans, setPlans] = useState({
//         budget: { amount: 1000, category: 'monthly' },
//         savings: { amount: 500, goal: 10000 },
//         debt: { amount: 300, totalDebt: 5000 },
//         investment: { amount: 200, risk: 'moderate' }
//     });
//     const [notifications, setNotifications] = useState([]);
//     const [comparison, setComparison] = useState({ plan1: 'budget', plan2: 'savings' });

//     useEffect(() => {
//         // Simulating fetching data from an API
//         const fetchData = async () => {
//             // In a real application, you would fetch data from your backend here
//             const mockData = {
//                 budget: { amount: 1200, category: 'monthly' },
//                 savings: { amount: 600, goal: 12000 },
//                 debt: { amount: 400, totalDebt: 6000 },
//                 investment: { amount: 250, risk: 'moderate' }
//             };
//             setPlans(mockData);
//         };

//         fetchData();
//     }, []);

//     const handlePlanChange = (e) => {
//         setSelectedPlan(e.target.value);
//     };

//     const handleAmountChange = (e) => {
//         const newAmount = parseFloat(e.target.value);
//         setPlans(prevPlans => ({
//             ...prevPlans,
//             [selectedPlan]: { ...prevPlans[selectedPlan], amount: newAmount }
//         }));
//     };

//     const handleNotification = (message) => {
//         setNotifications(prevNotifications => [...prevNotifications, message]);
//     };

//     const handleComparisonChange = (plan, value) => {
//         setComparison(prevComparison => ({ ...prevComparison, [plan]: value }));
//     };

//     const generateRecommendation = () => {
//         const recommendations = {
//             budget: "Consider allocating 50% to needs, 30% to wants, and 20% to savings and debt repayment.",
//             savings: "Try to save at least 20% of your income. Increase your savings rate gradually.",
//             debt: "Focus on high-interest debt first. Consider the snowball or avalanche method for debt repayment.",
//             investment: "Diversify your portfolio and consider low-cost index funds for long-term growth."
//         };
//         return recommendations[selectedPlan];
//     };

//     const calculateProgress = () => {
//         const { amount, goal, totalDebt } = plans[selectedPlan];
//         switch (selectedPlan) {
//             case 'savings':
//                 return (amount / goal) * 100;
//             case 'debt':
//                 return ((totalDebt - amount) / totalDebt) * 100;
//             default:
//                 return 0;
//         }
//     };

//     const projectFuture = () => {
//         const { amount } = plans[selectedPlan];
//         const months = 12;
//         const interestRate = 0.05; // 5% annual return

//         switch (selectedPlan) {
//             case 'savings':
//             case 'investment':
//                 return amount * Math.pow(1 + interestRate / 12, months);
//             case 'debt':
//                 return Math.max(0, plans[selectedPlan].totalDebt - amount * months);
//             default:
//                 return amount * months;
//         }
//     };

//     const renderChart = () => {
//         const data = [
//             { name: 'Jan', value: 4000 },
//             { name: 'Feb', value: 3000 },
//             { name: 'Mar', value: 5000 },
//             { name: 'Apr', value: 4500 },
//             { name: 'May', value: 6000 },
//             { name: 'Jun', value: 5500 },
//         ];

//         switch (selectedPlan) {
//             case 'budget':
//                 return (
//                     <ResponsiveContainer width="100%" height={300}>
//                         <PieChart>
//                             <Pie dataKey="value" data={data} fill="#8884d8" label />
//                             <Tooltip />
//                         </PieChart>
//                     </ResponsiveContainer>
//                 );
//             case 'savings':
//                 return (
//                     <ResponsiveContainer width="100%" height={300}>
//                         <LineChart data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Line type="monotone" dataKey="value" stroke="#8884d8" />
//                         </LineChart>
//                     </ResponsiveContainer>
//                 );
//             case 'debt':
//                 return (
//                     <ResponsiveContainer width="100%" height={300}>
//                         <BarChart data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Bar dataKey="value" fill="#82ca9d" />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 );
//             case 'investment':
//                 return (
//                     <ResponsiveContainer width="100%" height={300}>
//                         <AreaChart data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 );
//             default:
//                 return null;
//         }
//     };

//     const renderPlanDetails = () => {
//         const { amount, category, goal, totalDebt, risk } = plans[selectedPlan];

//         return (
//             <div>
//                 <h3>{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan Details</h3>
//                 <div>
//                     <label htmlFor="amount">Amount:</label>
//                     <input
//                         id="amount"
//                         type="number"
//                         value={amount}
//                         onChange={handleAmountChange}
//                     />
//                 </div>
//                 {category && (
//                     <div>
//                         <label htmlFor="category">Category:</label>
//                         <select
//                             id="category"
//                             value={category}
//                             onChange={(e) => setPlans(prevPlans => ({ ...prevPlans, [selectedPlan]: { ...prevPlans[selectedPlan], category: e.target.value } }))}
//                         >
//                             <option value="daily">Daily</option>
//                             <option value="weekly">Weekly</option>
//                             <option value="monthly">Monthly</option>
//                             <option value="yearly">Yearly</option>
//                         </select>
//                     </div>
//                 )}
//                 {goal && (
//                     <div>
//                         <label htmlFor="goal">Goal:</label>
//                         <input
//                             id="goal"
//                             type="number"
//                             value={goal}
//                             onChange={(e) => setPlans(prevPlans => ({ ...prevPlans, [selectedPlan]: { ...prevPlans[selectedPlan], goal: parseFloat(e.target.value) } }))}
//                         />
//                     </div>
//                 )}
//                 {totalDebt && (
//                     <div>
//                         <label htmlFor="totalDebt">Total Debt:</label>
//                         <input
//                             id="totalDebt"
//                             type="number"
//                             value={totalDebt}
//                             onChange={(e) => setPlans(prevPlans => ({ ...prevPlans, [selectedPlan]: { ...prevPlans[selectedPlan], totalDebt: parseFloat(e.target.value) } }))}
//                         />
//                     </div>
//                 )}
//                 {risk && (
//                     <div>
//                         <label htmlFor="risk">Risk Level:</label>
//                         <select
//                             id="risk"
//                             value={risk}
//                             onChange={(e) => setPlans(prevPlans => ({ ...prevPlans, [selectedPlan]: { ...prevPlans[selectedPlan], risk: e.target.value } }))}
//                         >
//                             <option value="low">Low</option>
//                             <option value="moderate">Moderate</option>
//                             <option value="high">High</option>
//                         </select>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     const renderProgress = () => {
//         const progress = calculateProgress();
//         return (
//             <div>
//                 <h3>Progress Tracking</h3>
//                 <div>
//                     <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
//                         <div style={{ width: `${progress}%`, height: '20px', backgroundColor: '#4caf50', borderRadius: '5px' }}></div>
//                     </div>
//                     <span>{progress.toFixed(1)}%</span>
//                 </div>
//             </div>
//         );
//     };

//     const renderReminders = () => {
//         return (
//             <div>
//                 <h3>Reminders & Alerts</h3>
//                 <div>
//                     {notifications.map((notification, index) => (
//                         <div key={index}>{notification}</div>
//                     ))}
//                     <button onClick={() => handleNotification("Don't forget to review your budget this week!")}>
//                         Add Reminder
//                     </button>
//                 </div>
//             </div>
//         );
//     };

//     const renderComparison = () => {
//         const { plan1, plan2 } = comparison;
//         return (
//             <div>
//                 <h3>Plan Comparison</h3>
//                 <div>
//                     <div>
//                         <select value={plan1} onChange={(e) => handleComparisonChange('plan1', e.target.value)}>
//                             {Object.keys(plans).map(plan => (
//                                 <option key={plan} value={plan}>{plan.charAt(0).toUpperCase() + plan.slice(1)}</option>
//                             ))}
//                         </select>
//                         <p>Amount: ${plans[plan1].amount}</p>
//                     </div>
//                     <div>
//                         <select value={plan2} onChange={(e) => handleComparisonChange('plan2', e.target.value)}>
//                             {Object.keys(plans).map(plan => (
//                                 <option key={plan} value={plan}>{plan.charAt(0).toUpperCase() + plan.slice(1)}</option>
//                             ))}
//                         </select>
//                         <p>Amount: ${plans[plan2].amount}</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const renderAnalytics = () => {
//         return (
//             <div>
//                 <h3>Plan Analytics</h3>
//                 <div>
//                     <p>Current {selectedPlan} amount: ${plans[selectedPlan].amount}</p>
//                     <p>Projected value in 1 year: ${projectFuture().toFixed(2)}</p>
//                     {renderChart()}
//                 </div>
//             </div>
//         );
//     };

//     const renderSharing = () => {
//         return (
//             <div>
//                 <h3>Plan Sharing</h3>
//                 <div>
//                     <input type="email" placeholder="Enter email to share with" />
//                     <div>
//                         <input type="checkbox" id="share-read-only" />
//                         <label htmlFor="share-read-only">Share as read-only</label>
//                     </div>
//                     <button>Share Plan</button>
//                 </div>
//             </div>
//         );
//     };

//     const renderRecommendations = () => {
//         return (
//             <div>
//                 <h3>AI Recommendations</h3>
//                 <p>{generateRecommendation()}</p>
//             </div>
//         );
//     };

//     const renderCustomization = () => {
//         return (
//             <div>
//                 <h3>Plan Customization</h3>
//                 <div>
//                     <div>
//                         <label htmlFor="custom-goal">Custom Goal:</label>
//                         <input id="custom-goal" placeholder="Enter your custom goal" />
//                     </div>
//                     <div>
//                         <label htmlFor="auto-adjust">Auto-adjust based on income:</label>
//                         <input type="checkbox" id="auto-adjust" />
//                     </div>
//                     <div>
//                         <label htmlFor="risk-tolerance">Risk Tolerance:</label>
//                         <input type="range" id="risk-tolerance" min="0" max="100" step="1" defaultValue="50" />
//                     </div>
//                     <div>
//                         <label htmlFor="investment-strategy">Investment Strategy:</label>
//                         <select id="investment-strategy">
//                             <option value="conservative">Conservative</option>
//                             <option value="balanced">Balanced</option>
//                             <option value="aggressive">Aggressive</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const renderFutureProjections = () => {
//         const projectionData = [
//             { year: 2024, optimistic: 12000, realistic: 10000, pessimistic: 8000 },
//             { year: 2025, optimistic: 15000, realistic: 12000, pessimistic: 9000 },
//             { year: 2026, optimistic: 18000, realistic: 14000, pessimistic: 10000 },
//             { year: 2027, optimistic: 22000, realistic: 16000, pessimistic: 11000 },
//             { year: 2028, optimistic: 26000, realistic: 18000, pessimistic: 12000 },
//         ];

//         return (
//             <div>
//                 <h3>Future Projections</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={projectionData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="year" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="optimistic" stroke="#8884d8" />
//                         <Line type="monotone" dataKey="realistic" stroke="#82ca9d" />
//                         <Line type="monotone" dataKey="pessimistic" stroke="#ffc658" />
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>
//         );
//     };

//     return (
//         <div>
//             <h1>Financial Planning Dashboard</h1>

//             <div>
//                 <h2>Plan Selection</h2>
//                 <select value={selectedPlan} onChange={handlePlanChange}>
//                     <option value="budget">Budget Plan</option>
//                     <option value="savings">Savings Plan</option>
//                     <option value="debt">Debt Repayment Plan</option>
//                     <option value="investment">Investment Plan</option>
//                 </select>
//             </div>

//             <div>
//                 {renderPlanDetails()}
//                 {renderProgress()}
//                 {renderReminders()}
//             </div>

//             <div>
//                 {renderComparison()}
//                 {renderAnalytics()}
//                 {renderSharing()}
//             </div>

//             <div>
//                 {renderRecommendations()}
//                 {renderCustomization()}
//                 {renderFutureProjections()}
//             </div>

//             <div>
//                 <h2>Plan Templates</h2>
//                 <div>
//                     {['50/30/20 Budget', 'Debt Avalanche', 'High-Yield Savings', 'Retirement']}
//                 </div>
//             </div>
//             <div>
//                 <h2>Plan Templates</h2>
//                 <div>
//                     {['50/30/20 Budget', 'Debt Avalanche', 'High-Yield Savings', 'Retirement Nest Egg'].map((template) => (
//                         <button key={template} onClick={() => console.log(`Applying ${template} template...`)}>
//                             {template}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             <div>
//                 <button onClick={() => console.log('Saving plan...')}>
//                     Save Plan
//                 </button>
//                 <button onClick={() => console.log('Exporting plan...')}>
//                     Export Plan
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Additional utility functions

// const calculateMonthlyPayment = (principal, annualRate, years) => {
//     const monthlyRate = annualRate / 12 / 100;
//     const numberOfPayments = years * 12;
//     return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
// };

// const calculateCompoundInterest = (principal, annualRate, years, compoundingFrequency) => {
//     const rate = annualRate / 100;
//     return principal * Math.pow(1 + rate / compoundingFrequency, compoundingFrequency * years);
// };

// const calculateRetirementSavings = (currentAge, retirementAge, currentSavings, monthlyContribution, annualReturnRate) => {
//     const years = retirementAge - currentAge;
//     const monthlyRate = annualReturnRate / 12 / 100;
//     const months = years * 12;

//     const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months);
//     const futureValueOfMonthlyContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

//     return futureValueOfCurrentSavings + futureValueOfMonthlyContributions;
// };

// const calculateDebtPayoffTime = (balance, annualInterestRate, monthlyPayment) => {
//     const monthlyRate = annualInterestRate / 12 / 100;
//     return Math.log(1 - (balance / monthlyPayment) * monthlyRate) / Math.log(1 + monthlyRate) / -12;
// };

// const optimizeBudget = (income, expenses) => {
//     const totalExpenses = Object.values(expenses).reduce((sum, expense) => sum + expense, 0);
//     const surplus = income - totalExpenses;

//     const optimizedBudget = { ...expenses };

//     if (surplus > 0) {
//         optimizedBudget.savings = (optimizedBudget.savings || 0) + surplus * 0.5;
//         optimizedBudget.discretionary = (optimizedBudget.discretionary || 0) + surplus * 0.3;
//         optimizedBudget.emergency = (optimizedBudget.emergency || 0) + surplus * 0.2;
//     } else if (surplus < 0) {
//         const cutPercentage = Math.min(Math.abs(surplus) / totalExpenses, 0.2);
//         for (let category in optimizedBudget) {
//             optimizedBudget[category] *= (1 - cutPercentage);
//         }
//     }

//     return optimizedBudget;
// };

// const analyzeCreditScore = (score) => {
//     if (score >= 800) return { rating: "Excellent", advice: "Maintain your excellent credit habits." };
//     if (score >= 740) return { rating: "Very Good", advice: "You're close to excellent credit. Keep it up!" };
//     if (score >= 670) return { rating: "Good", advice: "Consider paying down credit card balances to improve your score." };
//     if (score >= 580) return { rating: "Fair", advice: "Focus on making all payments on time and reducing credit utilization." };
//     return { rating: "Poor", advice: "Prioritize paying off any delinquent accounts and reducing overall debt." };
// };

// const calculateNetWorth = (assets, liabilities) => {
//     const totalAssets = Object.values(assets).reduce((sum, value) => sum + value, 0);
//     const totalLiabilities = Object.values(liabilities).reduce((sum, value) => sum + value, 0);
//     return totalAssets - totalLiabilities;
// };

// const analyzeInvestmentRisk = (portfolio) => {
//     let riskScore = 0;
//     let totalValue = 0;

//     for (let asset in portfolio) {
//         const { value, risk } = portfolio[asset];
//         totalValue += value;
//         switch (risk) {
//             case 'low': riskScore += value * 1; break;
//             case 'medium': riskScore += value * 2; break;
//             case 'high': riskScore += value * 3; break;
//         }
//     }

//     const averageRiskScore = riskScore / totalValue;

//     if (averageRiskScore < 1.5) return "Low Risk";
//     if (averageRiskScore < 2.5) return "Medium Risk";
//     return "High Risk";
// };

// const generateFinancialReport = (userData) => {
//     const { income, expenses, assets, liabilities, investments, creditScore } = userData;

//     const netWorth = calculateNetWorth(assets, liabilities);
//     const monthlyBudget = optimizeBudget(income, expenses);
//     const investmentRisk = analyzeInvestmentRisk(investments);
//     const creditAnalysis = analyzeCreditScore(creditScore);

//     return {
//         summary: `Your current net worth is $${netWorth}. Your investment portfolio is considered ${investmentRisk}.`,
//         budgetRecommendation: `Based on your income and expenses, we recommend the following monthly budget: ${JSON.stringify(monthlyBudget)}`,
//         creditAdvice: `Your credit score of ${creditScore} is considered ${creditAnalysis.rating}. ${creditAnalysis.advice}`,
//         nextSteps: "Consider reviewing your investment allocation and exploring opportunities to increase your savings rate."
//     };
// };

// export default Plan;
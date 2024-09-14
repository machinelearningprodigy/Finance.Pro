// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
// import { Card, CardHeader, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select } from '@/components/ui/select';
// import { Avatar } from '@/components/ui/avatar';
// import { Bell, ChevronDown, CreditCard, Search, Send, FileText, MoreHorizontal } from 'lucide-react';

// const Profile2 = () => {
//     const [totalBalance, setTotalBalance] = useState(152590.65);
//     const [earning, setEarning] = useState(26295.33);
//     const [spending, setSpending] = useState(5268.85);
//     const [dailyLimit, setDailyLimit] = useState(3975.50);
//     const [walletBalance, setWalletBalance] = useState(24098.00);
//     const [operations, setOperations] = useState([
//         { date: 'Friday, 20/2022', time: '4:54 PM', type: 'Products', amount: -152.98, balance: 152590.65 },
//         { date: 'Friday, 20/2022', time: '1:15 PM', type: 'Playstation 5', amount: -399.99, balance: 152299.64 },
//         { date: 'Friday, 20/2022', time: '11:42 AM', type: 'Soul Kitchen', amount: -25.25, balance: 153015.89 },
//         { date: 'Friday, 20/2022', time: '09:00 AM', type: 'Binance', amount: 3885.00, balance: 149130.64 },
//         { date: 'Friday, 20/2022', time: '08:55 AM', type: 'Hyperion, Dan Simmons Tr...', amount: -98.89, balance: 149031.75 },
//     ]);
//     const [spentThisDay, setSpentThisDay] = useState([
//         { day: 'Wed', amount: 150 },
//         { day: 'Thu', amount: 200 },
//         { day: 'Fri', amount: 250 },
//         { day: 'Sat', amount: 180 },
//         { day: 'Sun', amount: 220 },
//         { day: 'Mon', amount: 190 },
//         { day: 'Tue', amount: 210 },
//     ]);

//     const [quickTransferAmount, setQuickTransferAmount] = useState(4299.00);

//     useEffect(() => {
//         // Simulating data fetching or updates
//         const interval = setInterval(() => {
//             setTotalBalance(prevBalance => prevBalance + Math.random() * 100 - 50);
//             setEarning(prevEarning => prevEarning + Math.random() * 50 - 25);
//             setSpending(prevSpending => prevSpending + Math.random() * 20 - 10);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, []);

//     const handleQuickTransfer = () => {
//         if (quickTransferAmount > 0 && quickTransferAmount <= totalBalance) {
//             setTotalBalance(prevBalance => prevBalance - quickTransferAmount);
//             setSpending(prevSpending => prevSpending + quickTransferAmount);
//             alert(`Transferred $${quickTransferAmount.toFixed(2)} successfully!`);
//         } else {
//             alert('Invalid transfer amount or insufficient balance.');
//         }
//     };

//     const handleNewOperation = (type, amount) => {
//         const newOperation = {
//             date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }),
//             time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
//             type,
//             amount,
//             balance: totalBalance + amount,
//         };

//         setOperations(prevOperations => [newOperation, ...prevOperations]);
//         setTotalBalance(prevBalance => prevBalance + amount);

//         if (amount < 0) {
//             setSpending(prevSpending => prevSpending - amount);
//         } else {
//             setEarning(prevEarning => prevEarning + amount);
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-100">
//             <aside className="w-64 bg-white p-6">
//                 <div className="mb-8">
//                     <h1 className="text-2xl font-bold">QPay</h1>
//                 </div>
//                 <nav>
//                     <ul className="space-y-4">
//                         <li className="flex items-center text-blue-600 font-semibold">
//                             <span className="mr-2">🏠</span> Home
//                         </li>
//                         <li className="flex items-center">
//                             <span className="mr-2">📊</span> Transactions
//                         </li>
//                         <li className="flex items-center">
//                             <span className="mr-2">📈</span> Analytics
//                         </li>
//                         <li className="flex items-center">
//                             <span className="mr-2">💰</span> Assets
//                         </li>
//                         <li className="flex items-center">
//                             <span className="mr-2">💳</span> Credit
//                         </li>
//                         <li className="flex items-center">
//                             <span className="mr-2">📥</span> Deposit
//                         </li>
//                         <li className="flex items-center">
//                             <span className="mr-2">🛠️</span> Services
//                         </li>
//                     </ul>
//                 </nav>
//                 <div className="mt-auto">
//                     <Card className="bg-blue-600 text-white p-4">
//                         <CardHeader>
//                             <h3 className="text-lg font-semibold">Unlimited Cashback</h3>
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-sm">Instant 2% back on all your spend to your account</p>
//                             <Button className="mt-4 bg-white text-blue-600">Upgrade Now →</Button>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </aside>
//             <main className="flex-1 p-8">
//                 <header className="flex justify-between items-center mb-8">
//                     <div className="relative">
//                         <Input
//                             type="text"
//                             placeholder="Search by name service, card, credit..."
//                             className="pl-10 pr-4 py-2 w-96"
//                         />
//                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <Bell />
//                         <Avatar>
//                             <img src="/api/placeholder/32/32" alt="User avatar" className="rounded-full" />
//                         </Avatar>
//                         <span>Agatha Tailor</span>
//                         <ChevronDown />
//                     </div>
//                 </header>
//                 <div className="grid grid-cols-3 gap-6 mb-8">
//                     <Card>
//                         <CardHeader className="flex justify-between items-center">
//                             <h3 className="text-lg font-semibold">Total Balance</h3>
//                             <MoreHorizontal />
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-3xl font-bold">${totalBalance.toFixed(2)}</p>
//                             <p className="text-green-500">↑ 15.24%</p>
//                             <p className="text-sm text-gray-500">From previous month</p>
//                         </CardContent>
//                     </Card>
//                     <Card>
//                         <CardHeader className="flex justify-between items-center">
//                             <h3 className="text-lg font-semibold">Earning</h3>
//                             <MoreHorizontal />
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-3xl font-bold">${earning.toFixed(2)}</p>
//                             <p className="text-green-500">↑ 4.25%</p>
//                             <p className="text-sm text-gray-500">From previous month</p>
//                         </CardContent>
//                     </Card>
//                     <Card>
//                         <CardHeader className="flex justify-between items-center">
//                             <h3 className="text-lg font-semibold">Spending</h3>
//                             <MoreHorizontal />
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-3xl font-bold">${spending.toFixed(2)}</p>
//                             <p className="text-red-500">↑ 15.24%</p>
//                             <p className="text-sm text-gray-500">From previous month</p>
//                         </CardContent>
//                     </Card>
//                 </div>
//                 <div className="grid grid-cols-3 gap-6 mb-8">
//                     <div className="col-span-2">
//                         <Card>
//                             <CardHeader className="flex justify-between items-center">
//                                 <h3 className="text-lg font-semibold">Daily Limit</h3>
//                                 <MoreHorizontal />
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="relative pt-1">
//                                     <div className="flex mb-2 items-center justify-between">
//                                         <div>
//                                             <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
//                                                 Task in progress
//                                             </span>
//                                         </div>
//                                         <div className="text-right">
//                                             <span className="text-xs font-semibold inline-block text-blue-600">
//                                                 {(dailyLimit / 10000 * 100).toFixed(2)}%
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
//                                         <div style={{ width: `${dailyLimit / 10000 * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
//                                     </div>
//                                 </div>
//                                 <p className="text-right text-sm text-gray-500">${dailyLimit.toFixed(2)} out of $10,000.00</p>
//                             </CardContent>
//                         </Card>
//                     </div>
//                     <Card>
//                         <CardHeader>
//                             <h3 className="text-lg font-semibold">Wallet</h3>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="bg-blue-600 text-white p-4 rounded-lg mb-4">
//                                 <p className="text-sm mb-2">QPay</p>
//                                 <p className="text-xl font-bold mb-2">4149 5818 4125 9012</p>
//                                 <p className="text-2xl font-bold">${walletBalance.toFixed(2)}</p>
//                                 <p className="text-right mt-4">VISA</p>
//                             </div>
//                             <div className="grid grid-cols-4 gap-2">
//                                 <Button variant="outline" className="flex flex-col items-center">
//                                     <Send className="mb-1" />
//                                     <span className="text-xs">Send</span>
//                                 </Button>
//                                 <Button variant="outline" className="flex flex-col items-center">
//                                     <CreditCard className="mb-1" />
//                                     <span className="text-xs">Receive</span>
//                                 </Button>
//                                 <Button variant="outline" className="flex flex-col items-center">
//                                     <FileText className="mb-1" />
//                                     <span className="text-xs">Invoicing</span>
//                                 </Button>
//                                 <Button variant="outline" className="flex flex-col items-center">
//                                     <MoreHorizontal className="mb-1" />
//                                     <span className="text-xs">More</span>
//                                 </Button>
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </div>
//                 <div className="grid grid-cols-3 gap-6">
//                     <div className="col-span-2">
//                         <Card>
//                             <CardHeader className="flex justify-between items-center">
//                                 <h3 className="text-lg font-semibold">Operations</h3>
//                                 <Button variant="link">View All</Button>
//                             </CardHeader>
//                             <CardContent>
//                                 <table className="w-full">
//                                     <thead>
//                                         <tr className="text-left text-gray-500">
//                                             <th className="pb-2">Date</th>
//                                             <th className="pb-2">Operation</th>
//                                             <th className="pb-2">Amount</th>
//                                             <th className="pb-2">Balance</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {operations.map((op, index) => (
//                                             <tr key={index} className="border-t">
//                                                 <td className="py-2">
//                                                     <p className="font-semibold">{op.date}</p>
//                                                     <p className="text-sm text-gray-500">{op.time}</p>
//                                                 </td>
//                                                 <td className="py-2">{op.type}</td>
//                                                 <td className={`py-2 ${op.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
//                                                     {op.amount < 0 ? '-' : '+'}${Math.abs(op.amount).toFixed(2)}
//                                                 </td>
//                                                 <td className="py-2">${op.balance.toFixed(2)}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </CardContent>
//                         </Card>
//                     </div>
//                     <div>
//                         <Card className="mb-6">
//                             <CardHeader className="flex justify-between items-center">
//                                 <h3 className="text-lg font-semibold">Spent This Day</h3>
//                                 <Select>
//                                     <option>Week</option>
//                                     <option>Month</option>
//                                     <option>Year</option>
//                                 </Select>
//                             </CardHeader>
//                             <CardContent>
//                                 <ResponsiveContainer width="100%" height={200}>
//                                     <LineChart data={spentThisDay}>
//                                         <XAxis dataKey="day" />
//                                         <YAxis />
//                                         <Line type="monotone" dataKey="amount" stroke="#3b82f6" />
//                                     </LineChart>
//                                 </ResponsiveContainer>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <h3 className="text-lg font-semibold">Quick Transfer</h3>
//                             </CardHeader>
//                             <CardContent>
//                                 <Select className="w-full mb-4">
//                                     <option>VISA 4149 1234 5678 9012</option>
//                                 </Select>
//                                 <div className="flex mb-4">
//                                     <Input
//                                         type="number"
//                                         value={quickTransferAmount}
//                                         onChange={(e) => setQuickTransferAmount(parseFloat(e.target.value))}
//                                         className="flex-grow mr-2"
//                                     />
//                                     <Select className="w-24">
//                                         <option>USD</option>
//                                         <option>EUR</option>
//                                         <option>GBP</option>
//                                     </Select>
//                                 </div>
//                                 <Button onClick={handleQuickTransfer} className="w-full bg-blue-600 text-white">
//                                     Transfer Now
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// // Utility functions for data manipulation and formatting
// const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
// };

// const getRandomAmount = (min, max) => {
//     return Math.random() * (max - min) + min;
// };

// const getDateString = () => {
//     return new Date().toLocaleDateString('en-US', {
//         weekday: 'long',
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit'
//     });
// };

// const getTimeString = () => {
//     return new Date().toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit'
//     });
// };

// // Custom hooks for data fetching and state management
// const useTransactionData = () => {
//     const [transactions, setTransactions] = useState([]);

//     useEffect(() => {
//         // Simulating API call to fetch transaction data
//         const fetchTransactions = async () => {
//             // In a real application, this would be an API call
//             const mockTransactions = [
//                 { id: 1, date: getDateString(), time: getTimeString(), type: 'Deposit', amount: 1000, balance: 5000 },
//                 { id: 2, date: getDateString(), time: getTimeString(), type: 'Withdrawal', amount: -500, balance: 4500 },
//                 // ... more mock transactions
//             ];

//             setTransactions(mockTransactions);
//         };

//         fetchTransactions();
//     }, []);

//     return transactions;
// };

// const useBalanceData = () => {
//     const [balance, setBalance] = useState({
//         total: 152590.65,
//         earning: 26295.33,
//         spending: 5268.85
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setBalance(prevBalance => ({
//                 total: prevBalance.total + getRandomAmount(-100, 100),
//                 earning: prevBalance.earning + getRandomAmount(0, 50),
//                 spending: prevBalance.spending + getRandomAmount(0, 25)
//             }));
//         }, 5000);

//         return () => clearInterval(interval);
//     }, []);

//     return balance;
// };

// // Additional components for modularity
// const BalanceCard = ({ title, amount, percentage, isPositive }) => (
//     <Card>
//         <CardHeader className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold">{title}</h3>
//             <MoreHorizontal />
//         </CardHeader>
//         <CardContent>
//             <p className="text-3xl font-bold">{formatCurrency(amount)}</p>
//             <p className={isPositive ? 'text-green-500' : 'text-red-500'}>
//                 {isPositive ? '↑' : '↓'} {percentage}%
//             </p>
//             <p className="text-sm text-gray-500">From previous month</p>
//         </CardContent>
//     </Card>
// );

// const TransactionTable = ({ transactions }) => (
//     <table className="w-full">
//         <thead>
//             <tr className="text-left text-gray-500">
//                 <th className="pb-2">Date</th>
//                 <th className="pb-2">Operation</th>
//                 <th className="pb-2">Amount</th>
//                 <th className="pb-2">Balance</th>
//             </tr>
//         </thead>
//         <tbody>
//             {transactions.map((transaction) => (
//                 <tr key={transaction.id} className="border-t">
//                     <td className="py-2">
//                         <p className="font-semibold">{transaction.date}</p>
//                         <p className="text-sm text-gray-500">{transaction.time}</p>
//                     </td>
//                     <td className="py-2">{transaction.type}</td>
//                     <td className={`py-2 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
//                         {formatCurrency(transaction.amount)}
//                     </td>
//                     <td className="py-2">{formatCurrency(transaction.balance)}</td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// );

// const SpendingChart = ({ data }) => (
//     <ResponsiveContainer width="100%" height={200}>
//         <LineChart data={data}>
//             <XAxis dataKey="day" />
//             <YAxis />
//             <Line type="monotone" dataKey="amount" stroke="#3b82f6" />
//         </LineChart>
//     </ResponsiveContainer>
// );

// // Main component composition
// const Profile2 = () => {
//     const transactions = useTransactionData();
//     const balance = useBalanceData();
//     const [quickTransferAmount, setQuickTransferAmount] = useState(4299.00);
//     const [dailyLimit, setDailyLimit] = useState(3975.50);

//     const handleQuickTransfer = () => {
//         if (quickTransferAmount > 0 && quickTransferAmount <= balance.total) {
//             // Perform transfer logic here
//             alert(`Transferred ${formatCurrency(quickTransferAmount)} successfully!`);
//         } else {
//             alert('Invalid transfer amount or insufficient balance.');
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <aside className="w-64 bg-white p-6">
//                 {/* ... Sidebar content ... */}
//             </aside>

//             {/* Main content */}
//             <main className="flex-1 p-8">
//                 {/* Header */}
//                 <header className="flex justify-between items-center mb-8">
//                     {/* ... Header content ... */}
//                 </header>

//                 {/* Balance cards */}
//                 <div className="grid grid-cols-3 gap-6 mb-8">
//                     <BalanceCard title="Total Balance" amount={balance.total} percentage={15.24} isPositive={true} />
//                     <BalanceCard title="Earning" amount={balance.earning} percentage={4.25} isPositive={true} />
//                     <BalanceCard title="Spending" amount={balance.spending} percentage={15.24} isPositive={false} />
//                 </div>

//                 {/* Daily limit and wallet */}
//                 <div className="grid grid-cols-3 gap-6 mb-8">
//                     {/* ... Daily limit card ... */}
//                     {/* ... Wallet card ... */}
//                 </div>

//                 {/* Transactions and quick transfer */}
//                 <div className="grid grid-cols-3 gap-6">
//                     <div className="col-span-2">
//                         <Card>
//                             <CardHeader className="flex justify-between items-center">
//                                 <h3 className="text-lg font-semibold">Operations</h3>
//                                 <Button variant="link">View All</Button>
//                             </CardHeader>
//                             <CardContent>
//                                 <TransactionTable transactions={transactions} />
//                             </CardContent>
//                         </Card>
//                     </div>
//                     <div>
//                         <Card className="mb-6">
//                             <CardHeader className="flex justify-between items-center">
//                                 <h3 className="text-lg font-semibold">Spent This Day</h3>
//                                 <Select>
//                                     <option>Week</option>
//                                     <option>Month</option>
//                                     <option>Year</option>
//                                 </Select>
//                             </CardHeader>
//                             <CardContent>
//                                 <SpendingChart data={[
//                                     { day: 'Mon', amount: 100 },
//                                     { day: 'Tue', amount: 150 },
//                                     { day: 'Wed', amount: 200 },
//                                     { day: 'Thu', amount: 180 },
//                                     { day: 'Fri', amount: 250 },
//                                     { day: 'Sat', amount: 300 },
//                                     { day: 'Sun', amount: 280 },
//                                 ]} />
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <h3 className="text-lg font-semibold">Quick Transfer</h3>
//                             </CardHeader>
//                             <CardContent>
//                                 <Select className="w-full mb-4">
//                                     <option>VISA 4149 1234 5678 9012</option>
//                                 </Select>
//                                 <div className="flex mb-4">
//                                     <Input
//                                         type="number"
//                                         value={quickTransferAmount}
//                                         onChange={(e) => setQuickTransferAmount(parseFloat(e.target.value))}
//                                         className="flex-grow mr-2"
//                                     />
//                                     <Select className="w-24">
//                                         <option>USD</option>
//                                         <option>EUR</option>
//                                         <option>GBP</option>
//                                     </Select>
//                                 </div>
//                                 <Button onClick={handleQuickTransfer} className="w-full bg-blue-600 text-white">
//                                     Transfer Now
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Profile2;
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  FaChartBar, FaChartLine, FaChartPie, FaChartArea,
  FaDollarSign, FaPercent, FaFileExport, FaFilter,
  FaCalendarAlt, FaSearch, FaSortAmountDown, FaSortAmountUp
} from 'react-icons/fa';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import './Report.css'

const generateMockData = (startDate, endDate) => {
  const data = [];
  let currentDate = new Date(startDate);
  const categories = ['Groceries', 'Utilities', 'Entertainment', 'Transportation', 'Healthcare'];
  while (currentDate <= new Date(endDate)) {
    const dailyExpenses = categories.reduce((acc, category) => {
      acc[category] = Math.random() * 100 + 20;
      return acc;
    }, {});
    data.push({
      date: currentDate.toISOString().split('T')[0],
      income: Math.random() * 5000 + 3000,
      expenses: Object.values(dailyExpenses).reduce((a, b) => a + b, 0),
      savings: Math.random() * 1000 + 500,
      investments: Math.random() * 2000 + 1000,
      category: categories[Math.floor(Math.random() * categories.length)],
      ...dailyExpenses
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

const aggregateData = (data, period) => {
  const aggregated = {};
  data.forEach(item => {
    let key;
    switch(period) {
      case 'yearly':
        key = item.date.slice(0, 4);
        break;
      case 'quarterly':
        const quarter = Math.floor((new Date(item.date).getMonth() / 3)) + 1;
        key = `${item.date.slice(0, 4)}-Q${quarter}`;
        break;
      case 'monthly':
        key = item.date.slice(0, 7);
        break;
      default:
        key = item.date;
    }
    if (!aggregated[key]) {
      aggregated[key] = { ...item, count: 1 };
    } else {
      Object.keys(item).forEach(field => {
        if (typeof item[field] === 'number') {
          aggregated[key][field] = (aggregated[key][field] || 0) + item[field];
        }
      });
      aggregated[key].count += 1;
    }
  });
  return Object.entries(aggregated).map(([key, value]) => ({
    period: key,
    ...Object.keys(value).reduce((acc, field) => {
      if (typeof value[field] === 'number' && field !== 'count') {
        acc[field] = value[field] / value.count;
      }
      return acc;
    }, {})
  }));
};

const calculateSummary = (data) => {
  const summary = data.reduce((acc, item) => {
    Object.keys(item).forEach(field => {
      if (typeof item[field] === 'number' && field !== 'count') {
        acc[field] = (acc[field] || 0) + item[field];
      }
    });
    return acc;
  }, {});
  summary.totalBalance = summary.income - summary.expenses;
  summary.savingsRate = (summary.savings / summary.income) * 100;
  return summary;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const Report = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [period, setPeriod] = useState('monthly');
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');
  const [chartType, setChartType] = useState('bar');
  const [summary, setSummary] = useState({});
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchedData = generateMockData(new Date(startDate), new Date(endDate));
    setData(fetchedData);
  }, [startDate, endDate]);

  useEffect(() => {
    let filtered = aggregateData(data, period);
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        Object.values(item).some(val => 
          val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item =>
        selectedCategories.every(category => item[category] !== undefined)
      );
    }

    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(filtered);
    setSummary(calculateSummary(filtered));
  }, [data, period, sortField, sortDirection, searchTerm, selectedCategories]);

  const exportToCSV = () => {
    const csvData = [
      ['Date', 'Income', 'Expenses', 'Category'],
      ...filteredData.map((item) => [item.period, item.income, item.expenses, item.category])
    ];
    const csvContent = csvData.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    saveAs(blob, 'financial_report.csv');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Financial Report', 20, 20);
    doc.autoTable({
      head: [['Date', 'Income', 'Expenses', 'Category']],
      body: filteredData.map((item) => [item.period, item.income, item.expenses, item.category])
    });
    doc.save('financial_report.pdf');
  };

  const renderChart = () => {
    let ChartComponent;
    switch(chartType) {
      case 'bar':
        ChartComponent = BarChart;
        break;
      case 'line':
        ChartComponent = LineChart;
        break;
      case 'pie':
        ChartComponent = PieChart;
        break;
      case 'area':
        ChartComponent = AreaChart;
        break;
      default:
        ChartComponent = BarChart;
    }

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ChartComponent data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Legend />
          {chartType === 'pie' ? (
            <Pie dataKey="income" nameKey="period" data={filteredData} fill="#8884d8">
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          ) : (
            <>
              <Bar dataKey="income" fill="#8884d8" />
              <Bar dataKey="expenses" fill="#82ca9d" />
              <Bar dataKey="savings" fill="#ffc658" />
              {chartType === 'line' && <Line type="monotone" dataKey="investments" stroke="#ff7300" />}
              {chartType === 'area' && <Area type="monotone" dataKey="investments" stroke="#ff7300" fill="#ff7300" />}
            </>
          )}
        </ChartComponent>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="finance-report">
      <h1>Personal Finance Management Report</h1>
      
      <div className="controls">
        <div className="date-range">
          <FaCalendarAlt />
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>

        <div className="period-select">
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="yearly">Yearly</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="chart-types">
          <button onClick={() => setChartType('bar')}><FaChartBar /></button>
          <button onClick={() => setChartType('line')}><FaChartLine /></button>
          <button onClick={() => setChartType('pie')}><FaChartPie /></button>
          <button onClick={() => setChartType('area')}><FaChartArea /></button>
        </div>

        <div className="export-buttons">
          <button onClick={exportToCSV}><FaFileExport /> CSV</button>
          <button onClick={exportToPDF}><FaFileExport /> PDF</button>
        </div>
      </div>

      <div className="filters">
        <div className="search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <FaFilter />
          <select 
            multiple 
            value={selectedCategories} 
            onChange={(e) => setSelectedCategories(Array.from(e.target.selectedOptions, option => option.value))}
          >
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>

        <div className="sort">
          <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value="date">Date</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
            <option value="savings">Savings</option>
            <option value="investments">Investments</option>
          </select>
          <button onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}>
            {sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />}
          </button>
        </div>
      </div>

      <div className="summary-cards">
        <div className="card">
          <h2>Total Income</h2>
          <div className="card-content">
            <FaDollarSign />
            {summary.income?.toFixed(2)}
          </div>
        </div>
        <div className="card">
          <h2>Total Expenses</h2>
          <div className="card-content">
            <FaDollarSign />
            {summary.expenses?.toFixed(2)}
          </div>
        </div>
        <div className="card">
          <h2>Total Savings</h2>
          <div className="card-content">
            <FaDollarSign />
            {summary.savings?.toFixed(2)}
          </div>
        </div>
        <div className="card">
          <h2>Savings Rate</h2>
          <div className="card-content">
            <FaPercent />
            {summary.savingsRate?.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="chart-container">
        <h2>Financial Overview</h2>
        {renderChart()}
      </div>

      <div className="table-container">
        <h2>Detailed Report</h2>
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Income</th>
              <th>Expenses</th>
              <th>Savings</th>
              <th>Investments</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.period}</td>
                <td>${item.income.toFixed(2)}</td>
                <td>${item.expenses.toFixed(2)}</td>
                <td>${item.savings.toFixed(2)}</td>
                <td>${item.investments.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
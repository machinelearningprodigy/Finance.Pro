import './Dashboard.css'
import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, RadialBarChart, RadialBar,
  ComposedChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import {
  FaChartLine, FaUsers, FaProjectDiagram, FaDollarSign, FaTasks, FaBug, FaCode,
  FaDatabase, FaServer, FaCloudUploadAlt, FaMobile, FaRocket, FaTrophy, 
  FaCheckCircle, FaClock, FaFlagCheckered
} from 'react-icons/fa';

// Dummy data generators
const generateMonthlyData = (months, minValue, maxValue) => {
  return months.map(month => ({
    month,
    value: Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
  }));
};

const generateDailyData = (days, minValue, maxValue) => {
  return Array.from({ length: days }, (_, i) => ({
    day: `Day ${i + 1}`,
    value: Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
  }));
};

const generateCategoryData = (categories, minValue, maxValue) => {
  return categories.map(category => ({
    category,
    value: Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
  }));
};

// Sample data
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const salesData = generateMonthlyData(months, 1000, 5000);
const revenueData = generateMonthlyData(months, 5000, 20000);
const userActivityData = generateDailyData(30, 100, 1000);
const projectProgressData = generateDailyData(30, 0, 100);

const taskCompletionData = [
  { name: 'Completed', value: 65 },
  { name: 'In Progress', value: 25 },
  { name: 'Not Started', value: 10 },
];

const teamPerformanceData = [
  { name: 'Development', value: 85 },
  { name: 'Design', value: 75 },
  { name: 'Marketing', value: 70 },
  { name: 'Sales', value: 80 },
  { name: 'Support', value: 72 },
];

const bugStatusData = [
  { name: 'Critical', value: 5 },
  { name: 'High', value: 15 },
  { name: 'Medium', value: 30 },
  { name: 'Low', value: 50 },
];

const codeQualityData = generateCategoryData(['Maintainability', 'Reliability', 'Security', 'Efficiency'], 60, 95);

const serverMetricsData = generateDailyData(30, 20, 100);

const deploymentData = [
  { name: 'Successful', value: 85 },
  { name: 'Failed', value: 10 },
  { name: 'Pending', value: 5 },
];

const deviceUsageData = [
  { name: 'Mobile', value: 45 },
  { name: 'Desktop', value: 35 },
  { name: 'Tablet', value: 20 },
];

// Color schemes
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

// Dashboard component
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderOverviewTab = () => (
    <>
      <div className="dashboard-row">
        <div className="dashboard-col">
          <h3><FaChartLine /> Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-col">
          <h3><FaDollarSign /> Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-col">
          <h3><FaUsers /> User Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" name="Active Users" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-col">
          <h3><FaProjectDiagram /> Project Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectProgressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Progress %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );

  const renderProjectTab = () => (
    <>
      <div className="dashboard-row">
        <div className="dashboard-col">
          <h3><FaTasks /> Task Completion Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={taskCompletionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {taskCompletionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-col">
          <h3><FaUsers /> Team Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="80%"
              barSize={10}
              data={teamPerformanceData}
            >
              <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="value"
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-col">
          <h3><FaBug /> Bug Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bugStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {bugStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-col">
          <h3><FaCode /> Code Quality Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={codeQualityData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis />
              <Radar name="Code Quality" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );

  const renderInfrastructureTab = () => (
    <>
      <div className="dashboard-row">
        <div className="dashboard-col">
          <h3><FaServer /> Server Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={serverMetricsData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" name="Server Load" />
              <Bar dataKey="value" barSize={20} fill="#413ea0" name="Peak Usage" />
              <Line type="monotone" dataKey="value" stroke="#ff7300" name="Avg. Response Time" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-col">
          <h3><FaCloudUploadAlt /> Deployment Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deploymentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {deploymentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-col">
          <h3><FaDatabase /> Database Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={generateDailyData(30, 10, 100)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" name="Query Response Time" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-col">
          <h3><FaMobile /> Device Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceUsageData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {deviceUsageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );

  return (
    <div className="dashboard">
      <h1>Analytics Dashboard</h1>
      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'project' ? 'active' : ''} 
          onClick={() => setActiveTab('project')}
        >
          Project Metrics
        </button>
        <button 
          className={activeTab === 'infrastructure' ? 'active' : ''} 
          onClick={() => setActiveTab('infrastructure')}
        >
          Infrastructure
        </button>
      </div>
      
      {activeTab === 'overview' && renderOverviewTab()}
      {activeTab === 'project' && renderProjectTab()}
      {activeTab === 'infrastructure' && renderInfrastructureTab()}

      <div className="dashboard-footer">
        <div className="metric-card">
          <FaRocket />
          <h4>Projects Launched</h4>
          <p>23</p>
        </div>
        <div className="metric-card">
          <FaTrophy />
          <h4>Team Achievements</h4>
          <p>7</p>
        </div>
        <div className="metric-card">
          <FaCheckCircle />
          <h4>Tasks Completed</h4>
          <p>1,234</p>
        </div>
        <div className="metric-card">
          <FaClock />
          <h4>Avg. Response Time</h4>
          <p>2.5h</p>
        </div>
        <div className="metric-card">
          <FaFlagCheckered />
          <h4>Milestones Reached</h4>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
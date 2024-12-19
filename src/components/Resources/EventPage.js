import React, { useState, useEffect } from 'react';
import { 
  FaMoneyBillWave, 
  FaChartLine, 
  FaCalendarAlt, 
  FaPiggyBank,
  FaWallet,
  FaExchangeAlt,
  FaHistory,
  FaBell,
  FaFilter,
  FaSearch,
  FaSortAmountDown,
  FaPlus
} from 'react-icons/fa';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import './EventPage.css';

const EventPage = () => {
  // State management
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    amount: '',
    category: 'expense',
    date: format(new Date(), 'yyyy-MM-dd'),
    description: '',
    tags: []
  });
  const [notifications, setNotifications] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [activeTab, setActiveTab] = useState('transactions');

  // Sample categories with icons
  const categories = [
    { id: 'income', label: 'Income', icon: <FaMoneyBillWave /> },
    { id: 'expense', label: 'Expenses', icon: <FaWallet /> },
    { id: 'savings', label: 'Savings', icon: <FaPiggyBank /> },
    { id: 'investment', label: 'Investments', icon: <FaChartLine /> }
  ];

  // Mock data generator
  useEffect(() => {
    const generateMockEvents = () => {
      const mockEvents = [];
      const categories = ['income', 'expense', 'savings', 'investment'];
      const descriptions = [
        'Monthly salary',
        'Grocery shopping',
        'Investment returns',
        'Emergency fund',
        'Utility bills',
        'Stock purchase',
        'Rental income',
        'Insurance payment'
      ];

      for (let i = 0; i < 20; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const amount = Math.floor(Math.random() * 10000) + 100;
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));

        mockEvents.push({
          id: i + 1,
          title: `Financial Event ${i + 1}`,
          amount: category === 'expense' ? -amount : amount,
          category,
          date: format(date, 'yyyy-MM-dd'),
          description: descriptions[Math.floor(Math.random() * descriptions.length)],
          tags: ['important', 'recurring'].filter(() => Math.random() > 0.5)
        });
      }
      return mockEvents;
    };

    const mockEvents = generateMockEvents();
    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
    generateChartData(mockEvents);
  }, []);

  // Generate chart data from events
  const generateChartData = (eventList) => {
    const grouped = eventList.reduce((acc, event) => {
      const date = event.date.substring(0, 7); // Get YYYY-MM
      if (!acc[date]) {
        acc[date] = { date, income: 0, expense: 0, savings: 0, investment: 0 };
      }
      acc[date][event.category] += Math.abs(event.amount);
      return acc;
    }, {});

    setChartData(Object.values(grouped).sort((a, b) => a.date.localeCompare(b.date)));
  };

  // Filter and search logic
  useEffect(() => {
    let filtered = [...events];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
      );
    }

    filtered.sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      return sortOrder === 'desc' ? dateComparison : -dateComparison;
    });

    setFilteredEvents(filtered);
  }, [events, selectedCategory, searchQuery, sortOrder]);

  // Handle new event submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const eventToAdd = {
      ...newEvent,
      id: events.length + 1,
      amount: newEvent.category === 'expense' ? -Math.abs(Number(newEvent.amount)) : Math.abs(Number(newEvent.amount))
    };

    setEvents(prev => [...prev, eventToAdd]);
    setNotifications(prev => [...prev, {
      id: Date.now(),
      message: `New ${eventToAdd.category} event added: ${eventToAdd.title}`,
      type: 'success'
    }]);
    setIsAddModalOpen(false);
    setNewEvent({
      title: '',
      amount: '',
      category: 'expense',
      date: format(new Date(), 'yyyy-MM-dd'),
      description: '',
      tags: []
    });
  };

  // Notification management
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="event-page">
      {/* Header Section */}
      <header className="event-header">
        <h1>
          <FaMoneyBillWave className="header-icon" />
          Financial Events Manager
        </h1>
        <div className="header-actions">
          <button 
            className="add-event-btn"
            onClick={() => setIsAddModalOpen(true)}
          >
            <FaPlus /> Add New Event
          </button>
          <FaBell 
            className="notification-icon"
            onClick={() => setNotifications([])}
          />
          {notifications.length > 0 && (
            <span className="notification-badge">{notifications.length}</span>
          )}
        </div>
      </header>

      {/* Notifications */}
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            onClick={() => removeNotification(notification.id)}
          >
            {notification.message}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Content */}
      <main className="event-content">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('transactions')}
          >
            <FaHistory /> Transactions
          </button>
          <button
            className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <FaChartLine /> Analytics
          </button>
        </div>

        {/* Filters and Search */}
        <div className="filters-section">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-filters">
            <button
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
          <button
            className="sort-btn"
            onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
          >
            <FaSortAmountDown /> {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'transactions' ? (
          <motion.div
            className="events-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredEvents.map(event => (
              <motion.div
                key={event.id}
                className={`event-card ${event.category}`}
                variants={itemVariants}
              >
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <span className={`amount ${event.amount < 0 ? 'negative' : 'positive'}`}>
                    ${Math.abs(event.amount).toLocaleString()}
                  </span>
                </div>
                <div className="event-details">
                  <p>{event.description}</p>
                  <div className="event-metadata">
                    <span className="date">
                      <FaCalendarAlt /> {event.date}
                    </span>
                    <span className="category">
                      {categories.find(cat => cat.id === event.category)?.icon}
                      {event.category}
                    </span>
                  </div>
                  {event.tags.length > 0 && (
                    <div className="tags">
                      {event.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="analytics-section">
            <div className="chart-container">
              <h3>Financial Overview</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="income" fill="#4CAF50" name="Income" />
                  <Bar dataKey="expense" fill="#F44336" name="Expense" />
                  <Bar dataKey="savings" fill="#2196F3" name="Savings" />
                  <Bar dataKey="investment" fill="#9C27B0" name="Investment" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </main>

      {/* Add Event Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h2>Add New Financial Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  value={newEvent.amount}
                  onChange={(e) => setNewEvent({...newEvent, amount: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Add Event</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EventPage;
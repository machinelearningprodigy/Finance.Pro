import React, { useState } from 'react';
import { 
  FaUsers, 
  FaComments, 
  FaChartLine, 
  FaBookmark, 
  FaBell, 
  FaSearch,
  FaFilter,
  FaStar,
  FaHeart,
  FaShare
} from 'react-icons/fa';
import { 
  MdAttachMoney, 
  MdSavings, 
  MdTrendingUp, 
  MdLeaderboard
} from 'react-icons/md';
import './Community.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchQuery, setSearchQuery] = useState('');
  
  const discussionTopics = [
    {
      id: 1,
      title: "Investment Strategies for 2025",
      author: "InvestorPro",
      likes: 234,
      comments: 45,
      tags: ["investing", "strategy", "stocks"]
    },
    {
      id: 2,
      title: "Budgeting Tips for Young Professionals",
      author: "FinanceGuru",
      likes: 189,
      comments: 32,
      tags: ["budgeting", "career", "savings"]
    },
    {
      id: 3,
      title: "Cryptocurrency Investment Guide",
      author: "CryptoExpert",
      likes: 567,
      comments: 89,
      tags: ["crypto", "investing", "digital"]
    }
  ];

  const financeTips = [
    {
      id: 1,
      tip: "Save 20% of your monthly income",
      category: "Savings",
      upvotes: 156
    },
    {
      id: 2,
      tip: "Invest in index funds for long-term growth",
      category: "Investment",
      upvotes: 243
    }
  ];

  const renderDiscussions = () => (
    <div className="discussions-container">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text"
          placeholder="Search discussions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaFilter className="filter-icon" />
      </div>
      
      <div className="topics-list">
        {discussionTopics.map(topic => (
          <div key={topic.id} className="topic-card">
            <h3>{topic.title}</h3>
            <p>Posted by {topic.author}</p>
            <div className="tags">
              {topic.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="topic-stats">
              <span><FaHeart /> {topic.likes}</span>
              <span><FaComments /> {topic.comments}</span>
              <FaShare className="share-icon" />
              <FaBookmark className="bookmark-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFinanceTips = () => (
    <div className="finance-tips-container">
      {financeTips.map(tip => (
        <div key={tip.id} className="tip-card">
          <div className="tip-content">
            <MdAttachMoney className="tip-icon" />
            <div>
              <p className="tip-text">{tip.tip}</p>
              <span className="tip-category">{tip.category}</span>
            </div>
          </div>
          <div className="tip-stats">
            <button className="upvote-btn">
              <FaStar />
              {tip.upvotes}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLeaderboard = () => (
    <div className="leaderboard-container">
      <h2><MdLeaderboard /> Top Contributors</h2>
      <div className="leaderboard-list">
        {[
          { name: "FinanceGuru", points: 1520, badge: "Expert" },
          { name: "InvestorPro", points: 1350, badge: "Veteran" },
          { name: "MoneyMaster", points: 980, badge: "Rising Star" }
        ].map((user, index) => (
          <div key={index} className="leaderboard-item">
            <span className="rank">#{index + 1}</span>
            <span className="user-name">{user.name}</span>
            <span className="points">{user.points} pts</span>
            <span className="badge">{user.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="community-container">
      <div className="community-header">
        <h1><FaUsers /> Finance Community</h1>
        <div className="notification-bell">
          <FaBell />
          <span className="notification-badge">3</span>
        </div>
      </div>

      <div className="community-stats">
        <div className="stat-card">
          <MdTrendingUp />
          <h3>Active Users</h3>
          <p>1,234</p>
        </div>
        <div className="stat-card">
          <FaComments />
          <h3>Discussions</h3>
          <p>456</p>
        </div>
        <div className="stat-card">
          <MdSavings />
          <h3>Tips Shared</h3>
          <p>789</p>
        </div>
      </div>

      <div className="community-tabs">
        <button 
          className={activeTab === 'discussions' ? 'active' : ''}
          onClick={() => setActiveTab('discussions')}
        >
          <FaComments /> Discussions
        </button>
        <button 
          className={activeTab === 'tips' ? 'active' : ''}
          onClick={() => setActiveTab('tips')}
        >
          <MdAttachMoney /> Finance Tips
        </button>
        <button 
          className={activeTab === 'leaderboard' ? 'active' : ''}
          onClick={() => setActiveTab('leaderboard')}
        >
          <MdLeaderboard /> Leaderboard
        </button>
      </div>

      <div className="community-content">
        {activeTab === 'discussions' && renderDiscussions()}
        {activeTab === 'tips' && renderFinanceTips()}
        {activeTab === 'leaderboard' && renderLeaderboard()}
      </div>
    </div>
  );
};

export default Community;
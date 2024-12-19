import React, { useState, useEffect } from 'react';
import { 
  FaUsers, 
  FaThumbsUp, 
  FaComment, 
  FaShare, 
  FaMedal,
  FaChartLine,
  FaPiggyBank,
  FaLightbulb,
  FaSearch,
  FaFilter,
  FaStar,
  FaTrophy,
  FaHeart
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './CommunityPage.css';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'discussion',
    tags: []
  });

  // Mock categories for financial discussions
  const categories = [
    { id: 'tips', label: 'Saving Tips', icon: <FaPiggyBank /> },
    { id: 'investing', label: 'Investment Ideas', icon: <FaChartLine /> },
    { id: 'discussion', label: 'Discussions', icon: <FaComment /> },
    { id: 'goals', label: 'Financial Goals', icon: <FaTrophy /> },
    { id: 'success', label: 'Success Stories', icon: <FaStar /> }
  ];

  // Generate mock community posts
  useEffect(() => {
    const generateMockPosts = () => {
      const mockPosts = [
        {
          id: 1,
          title: "How I Saved $10k in 6 Months",
          content: "Here's my journey to saving $10k. I started by creating a strict budget...",
          category: "success",
          author: {
            name: "Sarah Johnson",
            avatar: "/api/placeholder/40/40",
            level: "Financial Guru",
            badges: ["Top Saver", "Mentor"]
          },
          likes: 245,
          comments: 56,
          shares: 23,
          tags: ["Saving", "Budgeting", "Success"],
          timestamp: "2 hours ago",
          isVerified: true
        },
        {
          id: 2,
          title: "Best ETFs for Beginners in 2024",
          content: "I've researched various ETFs suitable for beginners. Here are my top picks...",
          category: "investing",
          author: {
            name: "Mike Chen",
            avatar: "/api/placeholder/40/40",
            level: "Investment Expert",
            badges: ["Certified Advisor"]
          },
          likes: 189,
          comments: 43,
          shares: 15,
          tags: ["Investing", "ETFs", "Beginners"],
          timestamp: "5 hours ago",
          isVerified: true
        }
        // Add more mock posts here
      ];

      setPosts(mockPosts);
    };

    generateMockPosts();
  }, []);

  // Filter posts based on category and search
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle new post submission
  const handleSubmitPost = (e) => {
    e.preventDefault();
    const newPostData = {
      id: posts.length + 1,
      ...newPost,
      author: {
        name: "Current User",
        avatar: "/api/placeholder/40/40",
        level: "Member",
        badges: []
      },
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "Just now",
      isVerified: false
    };
    setPosts([newPostData, ...posts]);
    setShowNewPostModal(false);
    setNewPost({ title: '', content: '', category: 'discussion', tags: [] });
  };

  return (
    <div className="community-page">
      {/* Header Section */}
      <header className="community-header">
        <div className="header-content">
          <h1><FaUsers /> Financial Community Hub</h1>
          <button 
            className="new-post-btn"
            onClick={() => setShowNewPostModal(true)}
          >
            Share Your Insights
          </button>
        </div>
        <div className="community-stats">
          <div className="stat-item">
            <FaUsers />
            <span>15.4K Members</span>
          </div>
          <div className="stat-item">
            <FaComment />
            <span>2.3K Discussions</span>
          </div>
          <div className="stat-item">
            <FaLightbulb />
            <span>856 Tips Shared</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="community-content">
        {/* Search and Filters */}
        <div className="filters-section">
          <div className="search-bar">
            <FaSearch />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="categories">
            <button
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="posts-grid">
          <AnimatePresence>
            {filteredPosts.map(post => (
              <motion.div
                key={post.id}
                className="post-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="post-header">
                  <div className="author-info">
                    <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                    <div className="author-details">
                      <h3>{post.author.name}</h3>
                      <span className="author-level">{post.author.level}</span>
                    </div>
                  </div>
                  <span className="post-timestamp">{post.timestamp}</span>
                </div>
                
                <div className="post-content">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="post-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="post-footer">
                  <div className="post-actions">
                    <button className="action-btn">
                      <FaThumbsUp /> {post.likes}
                    </button>
                    <button className="action-btn">
                      <FaComment /> {post.comments}
                    </button>
                    <button className="action-btn">
                      <FaShare /> {post.shares}
                    </button>
                  </div>
                  {post.author.badges.length > 0 && (
                    <div className="author-badges">
                      {post.author.badges.map(badge => (
                        <span key={badge} className="badge">
                          <FaMedal /> {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="modal-overlay">
          <motion.div 
            className="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2>Share Your Financial Insight</h2>
            <form onSubmit={handleSubmitPost}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  placeholder="Give your post a title..."
                  required
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  placeholder="Share your thoughts, tips, or questions..."
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Share Post</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowNewPostModal(false)}
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

export default CommunityPage;
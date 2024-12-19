import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  ThumbsUp, 
  MessageCircle, 
  BookmarkPlus, 
  Search,
  ChevronRight,
  TrendingUp,
  User,
  Share2,
  Filter
} from 'lucide-react';
import './BlogPage.css';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Smart Investing in 2024",
      excerpt: "Learn the fundamental principles of smart investing and how to build a robust investment portfolio that aligns with your financial goals. We'll explore diverse investment options, risk management strategies, and long-term planning techniques.",
      author: "Sarah Johnson",
      authorRole: "Financial Advisor",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      date: "Dec 18, 2024",
      readTime: "8 min read",
      category: "Investing",
      likes: 245,
      comments: 56,
      shares: 89,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Emergency Fund Planning",
      excerpt: "Discover why having an emergency fund is crucial and learn how to build one that provides adequate protection for life's unexpected challenges. This comprehensive guide covers everything from calculating your target amount to choosing the right savings vehicle.",
      author: "Michael Chen",
      authorRole: "Personal Finance Expert",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      date: "Dec 17, 2024",
      readTime: "6 min read",
      category: "Savings",
      likes: 189,
      comments: 42,
      shares: 65,
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800"
    },
    {
      id: 3,
      title: "Mastering Debt Management: A Step-by-Step Approach",
      excerpt: "Take control of your financial future with our comprehensive guide to managing and eliminating debt effectively. Learn proven strategies for debt consolidation, negotiation, and systematic repayment planning.",
      author: "Emily Rogers",
      authorRole: "Debt Management Specialist",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      date: "Dec 16, 2024",
      readTime: "10 min read",
      category: "Debt Management",
      likes: 312,
      comments: 78,
      shares: 123,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
    },
    {
      id: 4,
      title: "Retirement Planning in Your 30s: Early Steps for Long-term Success",
      excerpt: "Start your retirement planning journey early with this comprehensive guide tailored for professionals in their 30s. Learn about investment strategies, tax advantages, and compound growth opportunities.",
      author: "David Thompson",
      authorRole: "Retirement Planning Advisor",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      date: "Dec 15, 2024",
      readTime: "12 min read",
      category: "Retirement",
      likes: 276,
      comments: 91,
      shares: 154,
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800"
    },
    {
      id: 5,
      title: "Understanding Tax-Efficient Investment Strategies",
      excerpt: "Maximize your investment returns by minimizing your tax burden. This guide explores various tax-efficient investment vehicles, strategies, and important considerations for different types of accounts.",
      author: "Jessica Martinez",
      authorRole: "Tax Specialist",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      date: "Dec 14, 2024",
      readTime: "9 min read",
      category: "Tax Planning",
      likes: 198,
      comments: 45,
      shares: 87,
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800"
    }
  ];

  const categories = [
    "All Posts",
    "Investing",
    "Savings",
    "Debt Management",
    "Retirement",
    "Tax Planning",
    "Budgeting",
    "Real Estate"
  ];

  const popularTags = [
    "PersonalFinance",
    "Investing",
    "MoneyTips",
    "FinancialFreedom",
    "WealthBuilding",
    "BudgetingTips",
    "RetirementPlanning",
    "TaxStrategy",
    "DebtFree"
  ];

  const trendingTopics = [
    {
      title: "Cryptocurrency Investment Guide",
      views: "15K views",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400"
    },
    {
      title: "Real Estate Market Analysis 2024",
      views: "12K views",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
    },
    {
      title: "Stock Market Trends",
      views: "10K views",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400"
    },
    {
      title: "Personal Finance Apps Review",
      views: "8K views",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400"
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    setTimeout(() => {
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 300);
  }, [searchTerm, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLikeClick = (postId) => {
    setFilteredPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const handleBookmarkClick = (postId) => {
    // Add bookmark functionality
    console.log('Bookmarked post:', postId);
  };

  const handleShareClick = (postId) => {
    // Add share functionality
    console.log('Shared post:', postId);
  };

  return (
    <div className="blog-page">
      {/* Header */}
      <header className="blog-header">
        <div className="header-content">
          <h1>Financial Wisdom Blog</h1>
          <p>Expert insights for your financial journey</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="blog-main">
        <div className="blog-container">
          {/* Main Blog Content */}
          <div className="blog-content">
            {/* Search and Filter Bar */}
            <div className="search-filter-bar">
              <div className="search-box">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-button">
                <Filter size={20} />
                <span>Filter</span>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="blog-posts">
              {isLoading ? (
                <div className="loading-skeleton">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="skeleton-item">
                      <div className="skeleton-image"></div>
                      <div className="skeleton-content">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                filteredPosts.map(post => (
                  <article key={post.id} className="blog-post">
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <span className="post-category">{post.category}</span>
                    </div>
                    
                    <div className="post-content">
                      <div className="post-meta">
                        <div className="post-date">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="post-read-time">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="post-title">{post.title}</h2>
                      <p className="post-excerpt">{post.excerpt}</p>

                      <div className="post-author">
                        <img src={post.authorImage} alt={post.author} className="author-image" />
                        <div className="author-info">
                          <span className="author-name">{post.author}</span>
                          <span className="author-role">{post.authorRole}</span>
                        </div>
                      </div>

                      <div className="post-interactions">
                        <button 
                          className="interaction-button"
                          onClick={() => handleLikeClick(post.id)}
                        >
                          <ThumbsUp size={18} />
                          <span>{post.likes}</span>
                        </button>
                        <button className="interaction-button">
                          <MessageCircle size={18} />
                          <span>{post.comments}</span>
                        </button>
                        <button 
                          className="interaction-button"
                          onClick={() => handleShareClick(post.id)}
                        >
                          <Share2 size={18} />
                          <span>{post.shares}</span>
                        </button>
                        <button 
                          className="bookmark-button"
                          onClick={() => handleBookmarkClick(post.id)}
                        >
                          <BookmarkPlus size={20} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Categories */}
            <div className="sidebar-section categories-section">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="categories-list">
                {categories.map((category, index) => (
                  <li 
                    key={index}
                    className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <ChevronRight size={16} />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Topics */}
            <div className="sidebar-section trending-section">
              <h3 className="sidebar-title">Trending Topics</h3>
              <ul className="trending-list">
                {trendingTopics.map((topic, index) => (
                  <li key={index} className="trending-item">
                    <img src={topic.image} alt={topic.title} className="trending-image" />
                    <div className="trending-info">
                      <span className="trending-title">{topic.title}</span>
                      <span className="trending-views">{topic.views}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="sidebar-section tags-section">
              <h3 className="sidebar-title">Popular Tags</h3>
              <div className="tags-container">
                {popularTags.map((tag, index) => (
                  <button key={index} className="tag-button">
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
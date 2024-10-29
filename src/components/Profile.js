import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Rahul Mishra',
    title: 'Senior Software Engineer',
    location: 'Mumbai, India',
    email: 'rahul.mishra@example.com',
    phone: '+91 98765 43210',
    about: 'Passionate software engineer with 5+ years of experience in building scalable web applications. Eager to learn new technologies and solve complex problems.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS'],
    experience: [
      {
        id: 1,
        company: 'Tech Innovators Inc.',
        role: 'Senior Software Engineer',
        duration: 'Jan 2020 - Present',
        description: 'Leading a team of 5 developers, architecting and implementing scalable microservices.'
      },
      {
        id: 2,
        company: 'WebSolutions Co.',
        role: 'Software Engineer',
        duration: 'Jun 2017 - Dec 2019',
        description: 'Developed and maintained multiple client-facing web applications using React and Node.js.'
      }
    ],
    education: [
      {
        id: 1,
        institution: 'Indian Institute of Technology, Bombay',
        degree: 'B.Tech in Computer Science',
        duration: '2013 - 2017'
      }
    ],
    projects: [
      {
        id: 1,
        name: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform using MERN stack, featuring real-time inventory management and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux']
      },
      {
        id: 2,
        name: 'Task Management App',
        description: 'Developed a collaborative task management application with real-time updates using WebSockets.',
        technologies: ['Vue.js', 'Flask', 'PostgreSQL', 'Socket.io']
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [activeSection, setActiveSection] = useState('about');

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser(user);
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
  };

  const handleInputChange = (e, section, index) => {
    const { name, value } = e.target;
    if (section) {
      setEditedUser(prev => ({
        ...prev,
        [section]: prev[section].map((item, i) => 
          i === index ? { ...item, [name]: value } : item
        )
      }));
    } else {
      setEditedUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddItem = (section) => {
    setEditedUser(prev => ({
      ...prev,
      [section]: [...prev[section], getEmptyItem(section)]
    }));
  };

  const handleRemoveItem = (section, index) => {
    setEditedUser(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const getEmptyItem = (section) => {
    switch (section) {
      case 'experience':
        return { id: Date.now(), company: '', role: '', duration: '', description: '' };
      case 'education':
        return { id: Date.now(), institution: '', degree: '', duration: '' };
      case 'projects':
        return { id: Date.now(), name: '', description: '', technologies: [] };
      default:
        return {};
    }
  };

  const renderEditableList = (section, fields) => (
    <ul className={`${section}-list`}>
      {editedUser[section].map((item, index) => (
        <li key={item.id} className={`${section}-item`}>
          {fields.map(field => (
            <input
              key={field}
              type="text"
              name={field}
              value={item[field]}
              onChange={(e) => handleInputChange(e, section, index)}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          ))}
          <button onClick={() => handleRemoveItem(section, index)}>Remove</button>
        </li>
      ))}
      <button onClick={() => handleAddItem(section)}>Add {section.slice(0, -1)}</button>
    </ul>
  );

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="profile-picture-container">
          <img src="/api/placeholder/150/150" alt="Profile" className="profile-picture" />
          {isEditing && <button className="upload-button">📷</button>}
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
                className="name-input"
              />
              <input
                type="text"
                name="title"
                value={editedUser.title}
                onChange={handleInputChange}
                className="title-input"
              />
              <input
                type="text"
                name="location"
                value={editedUser.location}
                onChange={handleInputChange}
                className="location-input"
              />
            </>
          ) : (
            <>
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-title">{user.title}</p>
              <p className="profile-location">{user.location}</p>
            </>
          )}
        </div>
      </header>

      <nav className="profile-nav">
        <ul>
          <li><button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
          <li><button onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button></li>
          <li><button onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button></li>
          <li><button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button></li>
          <li><button onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
        </ul>
      </nav>

      <main className="profile-main">
        {activeSection === 'about' && (
          <section className="about-section">
            <h2>About Me</h2>
            {isEditing ? (
              <textarea
                name="about"
                value={editedUser.about}
                onChange={handleInputChange}
                className="about-input"
              />
            ) : (
              <p>{user.about}</p>
            )}
          </section>
        )}

        {activeSection === 'experience' && (
          <section className="experience-section">
            <h2>Experience</h2>
            {isEditing ? (
              renderEditableList('experience', ['company', 'role', 'duration', 'description'])
            ) : (
              <ul className="experience-list">
                {user.experience.map(exp => (
                  <li key={exp.id} className="experience-item">
                    <h3>{exp.role} at {exp.company}</h3>
                    <p className="duration">{exp.duration}</p>
                    <p>{exp.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {activeSection === 'education' && (
          <section className="education-section">
            <h2>Education</h2>
            {isEditing ? (
              renderEditableList('education', ['institution', 'degree', 'duration'])
            ) : (
              <ul className="education-list">
                {user.education.map(edu => (
                  <li key={edu.id} className="education-item">
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}</p>
                    <p className="duration">{edu.duration}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="skills-section">
            <h2>Skills</h2>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  name="skills"
                  value={editedUser.skills.join(', ')}
                  onChange={(e) => setEditedUser(prev => ({ ...prev, skills: e.target.value.split(', ') }))}
                  className="skills-input"
                />
              </div>
            ) : (
              <ul className="skills-list">
                {user.skills.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            )}
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects-section">
            <h2>Projects</h2>
            {isEditing ? (
              renderEditableList('projects', ['name', 'description', 'technologies'])
            ) : (
              <ul className="projects-list">
                {user.projects.map(project => (
                  <li key={project.id} className="project-item">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p className="technologies">Technologies: {project.technologies.join(', ')}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>

      <footer className="profile-footer">
        <div className="contact-info">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
        <div className="action-buttons">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-button">Save Changes</button>
              <button onClick={handleCancel} className="cancel-button">Cancel</button>
            </>
          ) : (
            <button onClick={handleEdit} className="edit-button">Edit Profile</button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Profile;
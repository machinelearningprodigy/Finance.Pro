// import React, { useState } from 'react';
// import { 
//   FaGoogle, 
//   FaEnvelope, 
//   FaLock, 
//   FaUser, 
//   FaEye, 
//   FaEyeSlash,
//   FaExclamationCircle
// } from 'react-icons/fa';
// import './Signup.css';

// const Signup = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const validateForm = () => {
//     const newErrors = {};
//     if (!isLogin && !formData.name) {
//       newErrors.name = 'Name is required';
//     }
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       // Handle successful submission
//       console.log('Form submitted:', formData);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleAuth = () => {
//     // Implement Google authentication logic here
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        
//         <button 
//           className={`google-btn ${isLoading ? 'loading' : ''}`} 
//           onClick={handleGoogleAuth}
//           disabled={isLoading}
//         >
//           <FaGoogle /> Continue with Google
//         </button>
        
//         <div className="divider">
//           <span>or</span>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <FaUser className="input-icon" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 disabled={isLoading}
//               />
//               {errors.name && (
//                 <div className="error-message">
//                   <FaExclamationCircle /> {errors.name}
//                 </div>
//               )}
//             </div>
//           )}
          
//           <div className={`form-group ${errors.email ? 'error' : ''}`}>
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               disabled={isLoading}
//             />
//             {errors.email && (
//               <div className="error-message">
//                 <FaExclamationCircle /> {errors.email}
//               </div>
//             )}
//           </div>
          
//           <div className={`form-group ${errors.password ? 'error' : ''}`}>
//             <FaLock className="input-icon" />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               disabled={isLoading}
//             />
//             <button
//               type="button"
//               className="toggle-password"
//               onClick={() => setShowPassword(!showPassword)}
//               disabled={isLoading}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>
//             {errors.password && (
//               <div className="error-message">
//                 <FaExclamationCircle /> {errors.password}
//               </div>
//             )}
//           </div>
          
//           <button 
//             type="submit" 
//             className={`submit-btn ${isLoading ? 'loading' : ''}`}
//             disabled={isLoading}
//           >
//             {isLogin ? 'Sign In' : 'Sign Up'}
//           </button>
//         </form>
        
//         <p className="switch-mode">
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}
//           <button onClick={() => setIsLogin(!isLogin)} disabled={isLoading}>
//             {isLogin ? 'Sign Up' : 'Sign In'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



// Go to this Claude Chat : https://claude.ai/chat/574a942c-851e-4217-9090-7165b81af09a
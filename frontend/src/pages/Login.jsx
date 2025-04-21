// Auth.js
import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login= () => {


    const{token,setToken,backendUrl}=useContext(AppContext)

    const navigate =useNavigate()



  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
  
    try {
      if (isSignUp) {
        // Sign up validation
        if (!name || !email || !password) {
          toast.error("All fields are required");
          return;
        }
  
        if (!email.includes("@")) {
          toast.error("Enter a valid email address");
          return;
        }
  
        if (password.length < 8) {
          toast.error("Password must be at least 8 characters");
          return;
        }
  
        // Register user
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
  
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Registered successfully");
          
        } else {
          toast.error(data.message);
        }
      } else {
        // LOGIN
        if (!email || !password) {
          toast.error("Email and password are required");
          return;
        }
  
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
  
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Logged in successfully");
          navigate("/")

        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Auth Error:", error);
      toast.error(error.response?.data?.message || error.message || "Something went wrong");
    }
  };
  



  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', email: '', password: '' }); // Reset form data
  };





  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button-login" >{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p onClick={toggleForm} className="toggle-link">
        {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </p>
    </div>
  );
};

export default Login;

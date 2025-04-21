import React from 'react';
import "./Header.css";
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        <h1>Book your path to wellness </h1>
        <p>Schedule your appointment and get the care you need, With the doctors you TRUST</p>
          
          <button onClick={() => { navigate('/login'); scrollTo(0, 0); }}className="header-button" >Book Appointment</button>
      </div>
      <div className="header-image">
        <img src={assets.banner} alt="Doctor" />
      </div>
    </header>
  );
}

export default Header;

import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const ThemeText = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="btn theme-toggle-btn" 
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
    >
      {theme === 'dark' ? (
        
        <FaSun size={24} style={{ color: '#333' }} /> 
      ) : (
   
        <FaMoon size={24} style={{ color: '#fff' }} /> 
      )}
    </button>
  );
};

export default ThemeText;

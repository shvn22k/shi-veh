import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle floating" 
      onClick={toggleTheme}
      style={{ position: 'fixed', zIndex: 1001 }}
    >
      {theme === 'light-theme' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggle 
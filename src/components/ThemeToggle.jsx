import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light-theme' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light-theme' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggle

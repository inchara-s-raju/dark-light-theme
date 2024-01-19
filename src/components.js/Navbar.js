import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme-context';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='heading'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <div className='mode-switch'>
        <label>
          <input
            type='checkbox'
            onChange={toggleTheme}
            checked={theme === 'dark'}
          ></input>
          <span className='slider round'></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;

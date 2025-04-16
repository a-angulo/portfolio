import React from 'react';
import { NavLink } from 'react-router-dom';

const baseClasses = "px-3 py-1 text-white hover:text-purple-500 transition";
const activeClasses = "border-b-2 border-yellow-400";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* // desktop navigation */}
      <nav className="hidden md:flex gap-4 mt-2 sm:mt-0">
        <NavLink to="/" end className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>About Me</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>Portfolio</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>Contact</NavLink>
        <NavLink to="/resume" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>Resume</NavLink>
      </nav>
      {/* // mobile navigation with hamburger menu*/}

      <nav className="md:hidden flex items-center justify-between mt-2 sm:mt-0">
        <div className={`${isOpen ? "block": "hidden"} bg-purple-400 absolute top-16 left-0 w-screen flex flex-col items-center gap-4 pb-4`}>
          <NavLink to="/" end className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>About Me</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>Contact</NavLink>
          <NavLink to="/resume" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ''}`}>Resume</NavLink>
        </div>
        <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </>)
};

export default Navigation;
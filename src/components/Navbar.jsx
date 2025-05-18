import { useState } from 'react';
import CartIcon from '../assets/icons/cart.svg';
import HamburgerIcon from '../assets/icons/HamburgerIcon';
import LogoIcon from '../assets/icons/logo.svg';
import TextDekoor from '../assets/icons/dekoor.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-8xl h-[64px] md:h-[140px] mx-auto px-4 py-3 flex items-center justify-between px-8">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <img src={LogoIcon} className="h-[32px] md:h-[48px]" alt="Logo Dekoor" />
            <img src={TextDekoor} className="h-[15px] w-[66px] md:h-[22px] md:w-[99px]" alt="Text Dekoor" />
        </div>

        {/* Center: Menu (hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 font-medium text-base text-black items-center">
          <li><a href="#" className="hover:text-[#553B33]">About Us</a></li>
          <li className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="hover:text-[#553B33] focus:outline-none"
            >
              Furniture
            </button>
            {/* Dropdown menu */}
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow rounded w-40">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tables</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Chairs</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sofas</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="hover:text-[#553B33]">Partnerships</a></li>
          <li><a href="#" className="hover:text-[#553B33]">Contact</a></li>
        </ul>

        {/* Right: Buttons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-[#E5F0B6] text-[#2F241F] rounded-lg h-[48px] w-[107px] hover:bg-[#949e67] text-sm">
            Sign Up
          </button>
          <button className="text-white bg-[#553B33] rounded-lg h-[48px] w-[48px]  px-3 py-1.5 hover:bg-[#211613]">
            <img src={CartIcon} alt="Cart" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile: Hamburger toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[140px] left-0 w-full z-50 bg-white px-4 pb-4 space-y-3 font-medium text-base text-black flex flex-col items-center shadow-md transition-all duration-300 ease-in-out
">
          <a href="#" className="block">About Us</a>
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left focus:outline-none"
            >
              Furniture
            </button>
            {dropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <li><a href="#">Tables</a></li>
                <li><a href="#">Chairs</a></li>
                <li><a href="#">Sofas</a></li>
              </ul>
            )}
          </div>
          <a href="#" className="block">Partnerships</a>
          <a href="#" className="block">Contact</a>
          <button className="w-full px-4 py-2 bg-[#E5F0B6] hover:bg-[#949e67] text-[#2F241F] rounded mt-2">
            Sign Up
          </button>
          <button className="text-black bg-[#553B33] w-full py-2 mt-2 flex items-center justify-center">
            <img src={CartIcon} alt="Cart" className="w-6 h-6" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={'./images/logo.png'} alt="logo" height="32px" width="32px"/>
            <Link to="/" className="text-xl sm:text-2xl font-bold text-teal-600">
              Healthy Minds
            </Link>
            <img src={'./images/logo.png'} alt="logo" height="32px" width="32px"/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            {/*<Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors">*/}
            {/*  Services*/}
            {/*</Link>*/}
            {/*<Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">*/}
            {/*  About*/}
            {/*</Link>*/}
            <Link to="https://intakeq.com/booking/ejjbvl" className="text-gray-700 hover:text-teal-600 transition-colors">
              Schedule
            </Link>
            {/*<Link to="/clientportal" className="text-gray-700 hover:text-teal-600 transition-colors">*/}
            {/*  ClientPortal*/}
            {/*</Link>*/}
            {/*<Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">*/}
            {/*  Contact*/}
            {/*</Link>*/}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {/*<Link*/}
            {/*  to="/about"*/}
            {/*  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"*/}
            {/*  onClick={() => setIsOpen(false)}*/}
            {/*>*/}
            {/*  About*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  to="/services"*/}
            {/*  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"*/}
            {/*  onClick={() => setIsOpen(false)}*/}
            {/*>*/}
            {/*  Services*/}
            {/*</Link>*/}
            <Link
              to="/schedule"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            {/*<Link*/}
            {/*  to="/contact"*/}
            {/*  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"*/}
            {/*  onClick={() => setIsOpen(false)}*/}
            {/*>*/}
            {/*  Contact*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*    to="/clientportal"*/}
            {/*    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"*/}
            {/*    onClick={() => setIsOpen(false)}*/}
            {/*>*/}
            {/*  ClientPortal*/}
            {/*</Link>*/}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
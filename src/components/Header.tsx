import React, { useState } from 'react';
import { Menu, X, BookOpen, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900">LogNfinite</h1>
              <p className="text-xs text-gray-600 -mt-1">Learning Solutions</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91 93917 73770</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <div className="border-t pt-3 mt-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mx-3 mt-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
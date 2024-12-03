import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold">Your Turf Company</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-green-300 transition-colors">Home</a>
            <a href="#" className="hover:text-green-300 transition-colors">Services</a>
            <a href="#" className="hover:text-green-300 transition-colors">Gallery</a>
            <a href="#" className="hover:text-green-300 transition-colors">About</a>
            <a href="#" className="hover:text-green-300 transition-colors">Contact</a>
            <a href="tel:555-123-4567" className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-4567
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-green-300 transition-colors">Home</a>
              <a href="#" className="hover:text-green-300 transition-colors">Services</a>
              <a href="#" className="hover:text-green-300 transition-colors">Gallery</a>
              <a href="#" className="hover:text-green-300 transition-colors">About</a>
              <a href="#" className="hover:text-green-300 transition-colors">Contact</a>
              <a href="tel:555-123-4567" className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
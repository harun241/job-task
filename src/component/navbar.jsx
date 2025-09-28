import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden space-x-8 md:flex">
          <li>
            <Link 
              to="/" 
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

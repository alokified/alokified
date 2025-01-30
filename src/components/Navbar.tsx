import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Alok Shah
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-purple-400 bg-gray-800'
                          : 'text-gray-300 hover:text-purple-400'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-purple-400 bg-gray-700'
                      : 'text-gray-300 hover:text-purple-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
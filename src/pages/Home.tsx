import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-gray-100 pt-16">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-500">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                  alt="Alok Shah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
                >
                  Alok Shah
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-300 mb-6"
                >
                  Software Developer & Open Source Enthusiast
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 justify-center md:justify-start"
                >
                  <a href="mailto:contact@alokshah.dev" className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/alokified" className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800/50 py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">20+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
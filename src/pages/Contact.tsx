import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Get in Touch
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-purple-400">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span>contact@alokshah.dev</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
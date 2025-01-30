import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function About() {
  const experiences = [
    {
      year: "2020 - Present",
      role: "Senior Software Engineer",
      company: "Tech Innovators Inc",
      description: "Leading development of enterprise applications using React and Node.js"
    },
    {
      year: "2018 - 2020",
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      description: "Developed and maintained multiple web applications using modern technologies"
    },
    {
      year: "2016 - 2018",
      role: "Frontend Developer",
      company: "Creative Web Agency",
      description: "Created responsive and interactive web interfaces for clients"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none mb-16"
          >
            <p className="text-lg text-gray-300">
              I'm a passionate software developer with over 5 years of experience in creating
              web applications. My journey in technology started with a curiosity about how
              things work on the internet, which led me to pursue a career in web development.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              I specialize in building scalable applications using modern technologies and
              best practices. My approach to development focuses on creating clean,
              maintainable code that delivers excellent user experiences.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-8 text-purple-400"
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-purple-400"
              >
                <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-0"></div>
                <div className="text-sm text-purple-400">{exp.year}</div>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <div className="text-gray-400">{exp.company}</div>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
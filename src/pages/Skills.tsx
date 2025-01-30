import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Skills() {
  const skills = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 90 }
    ],
    "Backend": [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 70 }
    ],
    "Tools & Others": [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Testing", level: 85 }
    ]
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
            Skills & Expertise
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-purple-400 mb-6">{category}</h2>
                <div className="space-y-4">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          className="bg-purple-400 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
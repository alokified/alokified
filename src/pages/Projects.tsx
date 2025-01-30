import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "A full-featured e-commerce solution with React and Node.js",
      tech: "React, Node.js",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      name: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      tech: "Vue.js, Firebase",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      name: "Portfolio Generator",
      description: "Dynamic portfolio generator for developers",
      tech: "Next.js, TailwindCSS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather monitoring with detailed forecasts",
      tech: "React, OpenWeather API",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      name: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics",
      tech: "Angular, D3.js",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      name: "Chat Application",
      description: "Real-time chat application with video calls",
      tech: "React, WebRTC",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Code2 className="w-5 h-5 text-purple-400 mr-2" />
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-4 h-20">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400">{project.tech}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
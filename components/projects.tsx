"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1, // Unique project ID
    title: "Camera-Based Attendance System in Android ",
    description: "An AI-powered attendance system using face recognition for educational institutes.",
    image: "/projects-images/face-recognition/face-recog.jpg?height=300&width=500",
    tags: ["Python", "Scikit-learn", "OpenCV", "Flask", "Android App Development"],
    github: "https://github.com/Iftiazur/MajorProject", 
    demo: null, 
    longDescription: "Developed a multi-face recognition attendance system using SVC and OpenCV. The system includes a dataset creation GUI, an Android app for attendance tracking, and a Flask API for backend processing. Automates attendance marking and exports data to Excel."
  },
  {
    id: 2, // Unique project ID
    title: "Face Recognition & Emotion Tracking System",
    description: "A face authentication and emotion detection system with real-time tracking and visualization.",
    image: "/projects-images/emotion/techbooster.jpg?height=300&width=500",
    tags: ["Python", "OpenCV", "TensorFlow", "FER-13", "GUI Development"],
    github: "https://github.com/Iftiazur/Login-emotion",
    demo: null, 
    longDescription: "Developed a sophisticated face recognition system with real-time authentication and emotion detection. Used LBPH classifiers for face recognition and FER-13 dataset for emotion analysis. Includes a GUI-based dashboard for tracking user emotions over time."
  },
  {
    "id": 3, 
    "title": "YOLOv8 Real-Time Object Detection",
    "description": "A real-time object detection system using YOLOv8 and OpenCV with webcam support.",
    "image": "/projects-images/object-detection/object-detection.png?height=300&width=500",
    "tags": ["Python", "OpenCV", "YOLOv8", "Computer Vision", "Real-time Processing"],
    "github": "https://github.com/Iftiazur/Object-Detection",
    "demo": null,
    "longDescription": "Implemented a real-time object detection system using the YOLOv8 model. The project captures live webcam feed, processes frames with YOLOv8, and displays bounding boxes around detected objects. Optimized for performance, supporting real-time inference and easy model customization."
}
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl shadow-lg p-4 transition-all duration-300 flex flex-col items-center text-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                onClick={() => setSelectedProject(project)}
                className="bg-gradient-to-r from-pink-600 to-pink-500 text-white font-medium rounded-lg hover:from-pink-700 hover:to-pink-600 transition-all duration-300"
              >
                View Details
              </Button>
              {/* Conditionally render demo button */}
              {/* {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all duration-300"
                >
                  Live Demo
                </a>
              )} */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-4xl h-4/5 overflow-y-auto"
          >
            {/* Close Button at Top Left */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all duration-300"
            >
              <X size={20} />
            </button>

            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 mb-4">{selectedProject.longDescription}</p>
            <div className="flex gap-4 mb-4">
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <FaGithub size={16} />
                GitHub Repository
              </a>
              {/* Conditionally render demo button */}
              {selectedProject.demo && (
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white rounded-lg transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

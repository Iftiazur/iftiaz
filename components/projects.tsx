"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Camera-Based Attendance System in Android",
    description: "An AI-powered attendance system using face recognition for educational institutes.",
    image: "/projects-images/face-recognition/face-recog.jpg?height=300&width=500",
    tags: ["Python", "Scikit-learn", "OpenCV", "Flask", "Android App Development"],
    github: "https://github.com/Iftiazur/MajorProject",
    demo: null,
    longDescription: "Developed a multi-face recognition attendance system using SVC and OpenCV...",
  },
  {
    id: 2,
    title: "Face Recognition & Emotion Tracking System",
    description: "A face authentication and emotion detection system with real-time tracking and visualization.",
    image: "/projects-images/emotion/techbooster.jpg?height=300&width=500",
    tags: ["Python", "OpenCV", "TensorFlow", "FER-13", "GUI Development"],
    github: "https://github.com/Iftiazur/Login-emotion",
    demo: null,
    longDescription: "Developed a sophisticated face recognition system with real-time authentication...",
  },
  {
    id: 3,
    title: "YOLOv8 Real-Time Object Detection",
    description: "A real-time object detection system using YOLOv8 and OpenCV with webcam support.",
    image: "/projects-images/object-detection/object-detection.png?height=300&width=500",
    tags: ["Python", "OpenCV", "YOLOv8", "Computer Vision", "Real-time Processing"],
    github: "https://github.com/Iftiazur/Object-Detection",
    demo: null,
    longDescription: "Implemented a real-time object detection system using the YOLOv8 model...",
  },
  {
    id: 4,
    title: "Car Game",
    description: "A simple obstacle avoiding car game",
    image: "/projects-images/car-game/car-game.png?height=300&width=500",
    tags: ["TypeScript", "Next.JS", "framer-motion"],
    github: "https://github.com/Iftiazur/car-game",
    demo: "https://car-game-nu.vercel.app/",
    longDescription: "A simple, fun-to-play 2D car game where you avoid obstacles to reach the goal...",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[number]>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextProject,
    onSwipedRight: prevProject,
    trackMouse: true,
  });

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

      {/* Project Carousel */}
      <div {...handlers} ref={ref} className="relative w-full flex justify-center items-center">
        {/* Previous Button */}
        <button onClick={prevProject} disabled={currentIndex === 0} className="absolute left-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 disabled:opacity-30">
          <ChevronLeft size={24} className="text-white" />
        </button>

        <motion.div
          key={projects[currentIndex].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl shadow-lg p-6 text-center w-full max-w-lg"
        >
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">{projects[currentIndex].title}</h3>
          <p className="text-gray-300 mb-4">{projects[currentIndex].description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {projects[currentIndex].tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                {tag}
              </span>
            ))}
          </div>
          <Button onClick={() => setSelectedProject(projects[currentIndex])} className="bg-pink-500 text-white rounded-lg">
            View Details
          </Button>
        </motion.div>

        {/* Next Button */}
        <button onClick={nextProject} disabled={currentIndex === projects.length - 1} className="absolute right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 disabled:opacity-30">
          <ChevronRight size={24} className="text-white" />
        </button>
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
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full">
              <X size={20} />
            </button>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover rounded-lg mb-4" />
            <p className="text-gray-300 mb-4">{selectedProject.longDescription}</p>
            <div className="flex gap-4 mb-4">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg">
                <FaGithub size={16} />
                GitHub Repository
              </a>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg">
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

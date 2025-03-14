"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Image Slideshow Logic
  const images = [
    "/aboutme-slideshow/image0.jpg",
    "/aboutme-slideshow/image1.jpg",
    "/aboutme-slideshow/image2.jpeg",
    "/aboutme-slideshow/image3.jpeg",
    "/aboutme-slideshow/image4.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="container mx-auto px-4 py-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
          About Me
        </span>
      </motion.h2>

      {/* About Me Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed flex flex-col items-center"
        >
          <p className="text-center md:text-left">
            I'm Iftiazur Rahman, a Python and Machine Learning Developer with
            expertise in computer vision, data analysis, and full-stack
            development. I hold a B.Tech in ECE from CIT Kokrajhar and have
            built AI-driven projects like a Camera-Based Attendance System and
            emotion-based authentication.
          </p>
          <p className="text-center md:text-left">
            With internship experience at NIELIT and Tech Booster, I specialize
            in Python, Machine Learning, Computer Vision, Data Analysis &
            Visualization, creating intelligent, scalable applications. Always
            eager to innovate, I strive to blend AI with real-world solutions.
          </p>

          {/* Download CV/Resume Button */}
          <motion.a
            href="/resume/resume.pdf" // Place your resume in the public folder as "resume.pdf"
            download="Iftiazur_Rahman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 mt-4 text-lg font-medium text-white transition bg-pink-500  rounded-full shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV / Resume
          </motion.a>
        </motion.div>

        {/* Right: Slideshow */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg border border-pink-500/30"
        >
          <img
            src={images[currentImage]}
            alt="About Me Slideshow"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
}

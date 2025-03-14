"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certifications() {
  const certifications = [
    { title: "30 Days of Google Cloud", image: "/certifications/30days_gcloud_certificate_page-0001.jpg" },
    { title: "Deloitte Technology Job Simulation", image: "/certifications/deloitte technology job simulation_page-0001.jpg" },
    { title: "AI Dashboards using Microsoft Power BI", image: "/certifications/Iftiazur Rahman_AI Dashboards using Microsoft Power BI (1)_page-0001.jpg" },
    { title: "PWC Data Analysis Work Simulation", image: "/certifications/pwc data analytics_page-0001.jpg" },
    { title: "Python Certification ", image: "/certifications/Iftiazur Rahman PYT_page-0001.jpg" },
    { title: "TCS YEP", image: "/certifications/tcs yep_page-0001.jpg" },
    { title: "SQL", image: "/certifications/sql in three hours_page-0001.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const totalSlides = certifications.length;
  const transitionTime = 500;
  const autoSlideInterval = 3000;
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Certifications
        </span>
      </motion.h2>

      {/* Certification Slider */}
      <div className="relative flex items-center justify-center mt-6">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-pink-500 transition-all z-10"
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>

        {/* Certification Display */}
        <div className="relative w-full max-w-lg flex justify-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-[300px] flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-pink-500/30"
          >
            <img src={certifications[index].image} alt={certifications[index].title} className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white text-center">{certifications[index].title}</h3>
            </div>
          </motion.div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-pink-500 transition-all z-10"
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

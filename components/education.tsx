"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, GraduationCap } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "B.Tech in ECE",
    institution: "Central Institute of Technology Kokrajhar, Assam, India",
    period: "October 2020 - June 2024",
    description: "Studied core engineering principles with a focus on electronics, communication systems, and computer science applications. Gained experience in data analysis, machine learning, and software development."
  },
  {
    id: 2,
    degree: "Higher Secondary (10+2) in Science",
    institution: "BN College, Dhubri, Assam, India",
    period: "2017 - 2019",
    description: "Focused on physics, chemistry, and mathematics as core subjects, laying the foundation for engineering and technology studies."
  },
  {
    id: 3,
    degree: "Secondary Education (10th Standard)",
    institution: "St. Stephen’s School, Gauripur, Assam, India",
    period: "Completed in 2017",
    description: "Built a strong foundation in mathematics and science with an emphasis on problem-solving and analytical skills."
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const timelineOffset = -154; // Adjust this value to move the timeline up or down
  
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Education</span>
      </motion.h2>
      
      <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
        {education.map((edu, index) => (
          <div key={edu.id} className="relative flex flex-col items-center">
            {/* Dot above the card */}
            <div className="w-4 h-4 bg-pink-500 rounded-full absolute top-[-32px] left-1/2 transform -translate-x-1/2" />
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 w-80 h-64 shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-pink-500/20">
                  <GraduationCap size={24} className="text-pink-500" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <h4 className="text-md text-gray-300 mb-2">{edu.institution}</h4>
              <div className="flex justify-center items-center text-gray-400">
                <Calendar size={16} className="mr-2 text-pink-400" />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          </div>
        ))}
        
        {/* Timeline Bar with adjustable offset */}
        <div className={`absolute left-0 right-0 h-1 bg-pink-500/40 w-full hidden md:block`} style={{ top: `calc(50% + ${timelineOffset}px)` }} />
      </div>
    </div>
  );
}

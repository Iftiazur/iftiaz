"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase } from 'lucide-react';
const experiences = [
  {
    id: 1,
    title: "LLM Application Developer",
    company: "RedyHire",
    location: "Bengaluru, Karnataka, India",
    period: "Present",
    description: "Developing an automated YAML generation system leveraging GPT-4 through Azure OpenAI for Assesment parsing. Applied advanced prompt engineering, implemented token management and chunk-wise data processing techniques. Improved system accuracy and reliability for structured data extraction"
  },
  {
    id: 2,
    title: "Junior IT Instructor Intern",
    company: "NIELIT Kokrajhar",
    location: "KV Panbari, India",
    period: "Nov 2024",
    description: "Taught Python programming and AI/ML concepts as part of NIELIT’s AI/ML and Python Workshop. Utilized tools like Google’s Teachable Machine and AI for Ocean (Code.org) to enhance understanding. Achieved excellent student performance in evaluations at NIELIT Kokrajhar."
  },
  {
    id: 3,
    title: "Python Developer Intern",
    company: "Tech Booster",
    location: "Guwahati, India",
    period: "June 2023 - July 2023",
    description: "Developed a face recognition-based authentication and time tracking application with an emotion detection feature. Implemented a real-time face detection and recognition system using LBPH classifiers. Created an XML-based dataset storage mechanism for face comparisons. Integrated a dashboard for time and emotion tracking, leveraging the FER-13 dataset."
  }
  
];


export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Experience</span>
      </motion.h2>
      
      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-blue-500 rounded-full"></div>
        
        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 relative`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-black border-2 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.7)] z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-10 md:pl-0`}>
                <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-pink-500 mb-3">{exp.company}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-4 text-gray-300">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <MapPin size={16} className="mr-2 text-pink-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-pink-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 whitespace-pre-line">{exp.description}</p>
                </div>
              </div>
              
              {/* Empty div for layout on mobile */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

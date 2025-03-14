"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, LineChart, Brain, Eye, Cpu, GitBranch, Terminal, ScrollText, CodeSquare, Blocks, BarChartBig, FlaskConical, Cloud, Layers, Table, LayoutDashboard } from "lucide-react";

const skills = [
  { name: "Python", icon: <Code className="h-8 w-8" />, level: 90 },
  { name: "NextJS", icon: <CodeSquare className="h-8 w-8" />, level: 80 },
  { name: "HTML & CSS", icon: <ScrollText className="h-8 w-8" />, level: 85 },
  { name: "JavaScript/TypeScript", icon: <CodeSquare className="h-8 w-8" />, level: 80 },
  { name: "Deep Learning", icon: <Cpu className="h-8 w-8" />, level: 80 },
  { name: "Computer Vision", icon: <Eye className="h-8 w-8" />, level: 80 },
  { name: "Data Analysis & Visualization", icon: <LineChart className="h-8 w-8" />, level: 85 },
  { name: "Power BI and Tableau", icon: <BarChartBig className="h-8 w-8" />, level: 80 },
  { name: "SQL", icon: <Database className="h-8 w-8" />, level: 75 },
  { name: "Cloud", icon: <Cloud className="h-8 w-8" />, level: 75 },
  { name: "Git & CLI", icon: <GitBranch className="h-8 w-8" />, level: 90 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Skills
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/40 border border-pink-500/20 group hover:bg-black/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-pink-500 mb-3 group-hover:text-pink-400 transition-colors">
              {skill.icon}
            </div>
            <h3 className="text-gray-200 font-medium text-center">{skill.name}</h3>
            <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="h-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

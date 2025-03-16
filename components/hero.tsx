"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center px-4 ">
      {/* Profile Picture */}
      <motion.img
        src="/profile-pic.png"
        alt="Profile Picture"
        className="w-[200px] h-[200px] rounded-full border-4 border-pink-500 shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Animated Name */}
      <div className="text-3xl md:text-6xl lg:text-5xl font-bold font-mono mb-4">
        <TypeAnimation
          sequence={[
            "Iftiazur Rahman", 2000, 
            "イフティアズール ラフマン", 2000,  
            "Iftiazur Rahman", 2000, 
            "Ифтиазур Рахман", 2000,
            "Iftiazur Rahman", 2000, 
            "إفتيازور رحمان", 2000,  
            "Iftiazur Rahman", 2000,  
            "伊夫提亚祖尔·拉赫曼", 2000,
            "Iftiazur Rahman", 2000,  
            "이프티아주르 라흐만", 2000,
            "Iftiazur Rahman", 2000,  
            "Ιφτιαζούρ Ραχμάν", 2000, 
            "Iftiazur Rahman", 2000,  
            "इफ्तियाज़ुर रहमान", 2000,
            "Iftiazur Rahman", 2000, 
            "ইফতিয়াজুৰ ৰহমান",2000,
            "Iftiazur Rahman", 2000,
            "ইফতিয়াজুর রহমান", 2000,  
            "Iftiazur Rahman", 2000, 
            "இப்தியாஸுர் ரகுமான்", 2000,
            "Iftiazur Rahman", 2000, 
            "ఇఫ్తియాజుర్ రహ్మాన్", 2000, 
            "Iftiazur Rahman", 2000,  
            "ಇಫ್ತಿಯಾಜುರ್ ರಹ್ಮಾನ್", 2000,  
            "Iftiazur Rahman", 2000, 
            "ഇഫ്തിയാസൂർ റഹ്‌മാൻ", 2000,
            "Iftiazur Rahman", 2000,  
            "ਇਫ਼ਤਿਆਜ਼ੁਰ ਰਹਮਾਨ", 2000, 
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-transparent bg-clip-text bg-pink-500"
        />
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-gray-300 max-w-4xl whitespace-nowrap overflow-hidden"
      >
        <span className="inline-block px-6 py-2 bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-lg">
          <span className="text-pink-500">Python</span> |{" "}
          <span className="text-blue-400">Machine Learning</span> |{" "}
          <span className="text-pink-500">Computer Vision</span> |{" "}
          <span className="text-blue-400">Data Analytics & Visualization</span>
        </span>
      </motion.div>

      {/* About Me Button */}
      <div className="relative z-10 mt-6">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToAbout}
          className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold rounded-full 
            hover:from-pink-700 hover:to-pink-600 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.5)] 
            hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] cursor-pointer"
        >
          About Ifti
        </motion.button>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ChevronDown size={30} className="text-pink-500/70" />
      </motion.div>
    </div>
  );
}

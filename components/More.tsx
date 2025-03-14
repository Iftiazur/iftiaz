import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function More() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          More About Me
        </span>
      </motion.h2>
      
      <div ref={ref} className="flex flex-col gap-12 items-center">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 shadow-[0_0_15px_rgba(236,72,153,0.2)] w-full md:w-3/4"
        >
          <h3 className="text-2xl font-bold text-white mb-6">What I Love to Do</h3>
          <p className="text-gray-300">
            In my free time, I enjoy dancing, reading novels, solving brain teasers and watching the who-dun-it genre of movies
          </p>
        </motion.div>
        
        {/* YouTube Embed Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] w-full md:w-3/4"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Performing on Stage</h3>
          <p className="text-gray-300 mb-4">
            Being on stage has been a big part of my life for as long as I can remember. Whether it's dancing, anchoring, or managing events, I've had the chance to explore it all. Here's a glimpse of one of my performances—I'm the one in the green kurta at the center.          </p>
          <div className="flex justify-center">
          <iframe
  className="rounded-xl border border-blue-500/30"
  width="560" 
  height="315"
  src="https://www.youtube.com/embed/TzZZweR5WCc"
  title="One of my stage performances"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

            </div>

        </motion.div>
      </div>
    </div>
  );
}

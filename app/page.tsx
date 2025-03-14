"use client";
import '@/app/globals.css'
import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Skills from '@/components/skills';
import Certifications from '@/components/certifications';
import More from '@/components/More';
export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  // For parallax effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -200]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('/oni-mask.jpg')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-0"></div>
      
      <Navbar />
      
      <div className="relative z-10">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="skills" className='min-h-screen py-20'>
          <Skills />
        </section>
    
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>

    
        
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>

        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="education" className="min-h-screen py-20">
          <Education />
        </section>

        <section id="more" className="min-h-screen py-20">
          <More />
        </section>

        
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </main>
  );
}

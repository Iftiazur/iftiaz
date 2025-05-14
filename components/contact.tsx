"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Linkedin, Github, Mail, CheckCircle, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (err) {
      setIsSubmitting(false);
      setError("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Contact Me</span>
      </motion.h2>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <CheckCircle size={60} className="text-green-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300 text-center">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-pink-600">
                <Input id="name" name="name" value={formState.name} onChange={handleChange} required placeholder="Your name" className="text-pink-600" />
                <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required placeholder="your.email@example.com" />
                <Textarea id="message" name="message" value={formState.message} onChange={handleChange} required placeholder="Your message here..." rows={5} />
                {error && <p className="text-red-500">{error}</p>}
                <Button type="submit" disabled={isSubmitting} className="w-full bg-pink-500 hover:bg-pink-600">
                  {isSubmitting ? "Sending..." : <><Send size={16} className="mr-2" /> Send Message</>}
                </Button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-6">
              <a href="tel:+919876543210" className="flex items-center group">
                <Phone size={24} className="text-pink-500 mr-4" />
                <span className="text-gray-300">+91-9101176748</span>
              </a>
              <a href="mailto:iftiazur@gmail.com" className="flex items-center group">
                <Mail size={24} className="text-pink-500 mr-4" />
                <span className="text-gray-300">iftiazur@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/iftiazur" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Linkedin size={24} className="text-pink-500 mr-4" />
                <span className="text-gray-300">linkedin.com/in/iftiazur</span>
              </a>
              <a href="https://github.com/Iftiazur" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Github size={24} className="text-pink-500 mr-4" />
                <span className="text-gray-300">github.com/Iftiazur</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-10 order-2 lg:order-1"
          >
            <div className="space-y-2">
              <p className="text-xl font-medium text-muted-foreground">Hi I am</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Prabanandan Anandhamurugan
              </h1>
              <h2 className="text-6xl md:text-8xl font-black text-orange-600 tracking-tight leading-tight">
                JAVA <br /> Specialist
              </h2>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all w-10 h-10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all w-10 h-10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all w-10 h-10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-10 py-6 text-lg font-bold shadow-lg shadow-orange-600/20">
                Hire Me
              </Button>
              <Button variant="outline" className="rounded-lg px-10 py-6 text-lg font-bold border-2 border-muted-foreground/20 hover:bg-accent bg-transparent">
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Large Circular Background */}
              <div className="absolute inset-0 bg-accent/20 rounded-full scale-95" />
              
              {/* Image Container */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full border-8 border-accent/30">
                <img 
                  src={`${import.meta.env.BASE_URL}my-photo.jpg`} 
                  alt="Prabanandan Anandhamurugan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 z-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

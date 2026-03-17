"use client";

import React from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        <div className="flex flex-col gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 w-full"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold border-none">
                ✨ Available for Java Backend Roles
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
                PRABANANDAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  ANANDHAMURUGAN
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-muted-foreground">
                Software Developer — <span className="text-foreground">JAVA Specialist</span>
              </p>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Java Software Developer with 2+ years of professional industry experience in backend development, 
              specializing in <span className="text-foreground font-semibold">Spring Boot</span>, and <span className="text-foreground font-semibold">Microservices</span>. 
              I build secure, scalable enterprise applications with a strong foundation in modern software architecture.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Mail, text: "9807praba@gmail.com" },
                { icon: Phone, text: "+94 766 577 855" },
                { icon: MapPin, text: "Nawalapitiya, Sri Lanka" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-accent/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-border/50">
                  <item.icon className="w-4 h-4 text-indigo-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl px-10 py-7 text-lg font-bold shadow-xl shadow-indigo-200 dark:shadow-none transition-all hover:scale-105">
                Contact Me
              </Button>
              <Button variant="outline" className="rounded-2xl px-8 py-7 text-lg font-bold border-2 gap-2 hover:bg-accent transition-all">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="ghost" size="icon" className="rounded-xl w-12 h-12 hover:bg-indigo-50 hover:text-indigo-600">
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl w-12 h-12 hover:bg-indigo-50 hover:text-indigo-600">
                  <Github className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
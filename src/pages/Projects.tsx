"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Layers } from 'lucide-react';
import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EilyAI Enterprise Solution",
    category: "Enterprise Software",
    description: "A comprehensive enterprise solution system built with microservices architecture. Focused on high performance and scalability for business operations.",
    tags: ["Java", "Spring Boot", "Microservices", "Kafka", "MySQL"],
    features: ["Microservices Architecture", "Real-time messaging with Kafka", "Secure API Gateway"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "TalentBase",
    category: "HR Tech",
    description: "A modern recruitment platform designed to streamline the hiring process for organizations and candidates.",
    tags: ["Java", "Spring Boot", "MongoDB", "JWT", "REST API"],
    features: ["Candidate tracking system", "Automated workflow", "Secure authentication"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Quantrax",
    category: "FinTech",
    description: "Financial software domain application focusing on workflow automation and feature enhancements for financial institutions.",
    tags: ["Java", "Spring Boot", "Docker", "MySQL", "Monolithic"],
    features: ["Workflow automation", "Financial reporting", "Containerized deployment"],
    image: "https://images.unsplash.com/photo-1611974717484-3874407defd1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Alpha Printers POS System",
    category: "Business Management",
    description: "Complete POS and management system for a printing business, handling sales, inventory, and customer management.",
    tags: ["Java 17", "Spring Boot", "Angular", "PostgreSQL", "Swagger"],
    features: ["Role-Based Access Control", "Inventory management", "Sales analytics"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navbar />
        <main className="pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16 space-y-4"
            >
              <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                Featured <span className="text-orange-600">Projects</span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                A collection of enterprise-grade applications and systems I've developed, 
                focusing on backend robustness and scalable architecture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Section key={index}>
                  <Card className="overflow-hidden border-border/50 group hover:shadow-2xl transition-all duration-500 rounded-3xl bg-card/50 backdrop-blur-sm">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-orange-600 text-white border-none px-3 py-1 rounded-full">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="space-y-3">
                      <CardTitle className="text-2xl font-bold group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-sm font-bold flex items-center gap-2 text-foreground">
                          <Layers className="w-4 h-4 text-orange-500" />
                          Key Features
                        </p>
                        <ul className="grid grid-cols-1 gap-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="bg-accent/50 border-border/50 rounded-lg px-2.5 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-6 pt-4 border-t border-border/50">
                        <button className="flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors group/btn">
                          <Github className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                          View Code
                        </button>
                        <button className="flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors group/btn">
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                          Live Demo
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </Section>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Projects;
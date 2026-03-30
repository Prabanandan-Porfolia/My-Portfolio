"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

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
                A collection of enterprise-grade applications and systems I've developed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map((project) => (
                <Section key={project.id}>
                  <Link to={`/projects/${project.id}`}>
                    <Card className="overflow-hidden border-border/50 group hover:shadow-2xl transition-all duration-500 rounded-3xl bg-card/50 backdrop-blur-sm h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={project.heroImage} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 pb-2">
                        <div className="space-y-2 flex-1">
                          <CardTitle className="text-2xl font-bold group-hover:text-orange-600 transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed line-clamp-2">
                            {project.shortDescription}
                          </CardDescription>
                        </div>
                        {/* <div className="w-12 h-12 rounded-xl bg-accent/50 p-2 border border-border/50 shrink-0 mt-1">
                          <img src={project.logo} alt="" className="w-full h-full object-contain" />
                        </div> */}
                      </CardHeader>

                      <CardContent className="space-y-6 mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag, i) => (
                            <Badge key={i} variant="secondary" className="bg-accent/50 text-muted-foreground border-none rounded-lg px-2.5 py-1 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                          View Project Details
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
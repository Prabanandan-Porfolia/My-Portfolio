"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { ThemeProvider } from 'next-themes';

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-background selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Section>
            <Skills />
          </Section>
          <Section>
            <Experience />
          </Section>
          <Section>
            <Education />
          </Section>
          <Section>
            <Contact />
          </Section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
"use client";

import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { 
  Layout, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  UserCircle2,
  Image as ImageIcon
} from 'lucide-react';

import { projectsData } from '../data/projects';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectHero from '../components/project/ProjectHero';
import ProjectSection from '../components/project/ProjectSection';
import ProjectGallery from '../components/project/ProjectGallery';
import ProjectNavigation from '../components/project/ProjectNavigation';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const projectIndex = projectsData.findIndex(p => p.id === projectId);
  const project = projectsData[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : undefined;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : undefined;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <ProjectHeader 
          title={project.title} 
          githubUrl={project.githubUrl} 
          liveUrl={project.liveUrl} 
        />
        
        <main className="pb-16">
          <ProjectHero 
            title={project.title}
            logo={project.logo}
            description={project.shortDescription}
            tags={project.tags}
            image={project.heroImage}
          />

          <div className="max-w-5xl mx-auto px-4 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectSection title="Overview" icon={Layout} className="md:col-span-2">
                <p>{project.fullDescription}</p>
              </ProjectSection>
              
              {/* Architecture moved into the grid */}
              <ProjectSection title="Architecture & Technical Details" icon={Cpu}>
                <p className="text-sm leading-relaxed">{project.architecture}</p>
              </ProjectSection>
            </div>

            {/* Highlights moved below the grid and styled for full width */}
            <ProjectSection title="Highlights" icon={CheckCircle2}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((item, i) => (
                  <li key={i} className="text-sm flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-accent/30 border border-border/50 space-y-3">
                  <div className="p-2 bg-orange-600/10 rounded-lg w-fit">
                    <feature.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <ProjectSection title="Screenshots & Demo" icon={ImageIcon}>
              <ProjectGallery images={project.images} />
            </ProjectSection>

            <ProjectSection title="Challenges & Solutions" icon={AlertCircle}>
              <div className="space-y-6">
                {project.challenges.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex gap-2 text-foreground font-bold">
                      <span className="text-orange-600">Problem:</span>
                      <p>{item.problem}</p>
                    </div>
                    <div className="flex gap-2 text-muted-foreground text-sm pl-4 border-l-2 border-orange-600/30">
                      <span className="text-orange-600/70 font-medium italic">Solution:</span>
                      <p>{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ProjectSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectSection title="My Contribution" icon={UserCircle2}>
                <p>{project.contribution}</p>
              </ProjectSection>
              
              <ProjectSection title="Future Improvements" icon={Lightbulb}>
                <ul className="space-y-2">
                  {project.futureImprovements.map((item, i) => (
                    <li key={i} className="text-sm flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            </div>

            <ProjectNavigation 
              prevProject={prevProject} 
              nextProject={nextProject} 
            />
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProjectDetail;
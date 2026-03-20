"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProjectNavigationProps {
  prevProject?: { id: string; title: string };
  nextProject?: { id: string; title: string };
}

const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-12 border-t border-border/50 mt-12">
      {prevProject ? (
        <Link to={`/projects/${prevProject.id}`} className="w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto gap-2 rounded-xl py-6 px-6 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Previous</p>
              <p className="font-bold">{prevProject.title}</p>
            </div>
          </Button>
        </Link>
      ) : <div />}

      {nextProject ? (
        <Link to={`/projects/${nextProject.id}`} className="w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto gap-2 rounded-xl py-6 px-6 group text-right">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Next</p>
              <p className="font-bold">{nextProject.title}</p>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      ) : <div />}
    </div>
  );
};

export default ProjectNavigation;
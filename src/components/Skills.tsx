"use client";

import React from 'react';
import { Code, Database, Layout, Settings, Server } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Java (17, 21, 25)", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "JWT", "Maven"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "H2"]
  },
  {
    title: "Messaging & Cache",
    icon: Settings,
    skills: ["Apache Kafka"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Angular", "HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    title: "DevOps & Tools",
    icon: Code,
    skills: ["Docker", "Git", "GitHub Actions", "Postman", "IntelliJ", "Jira", "Sonar Lint", "Swagger"]
  }
];

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-background border-y border-border/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="space-y-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <group.icon className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 border-none">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
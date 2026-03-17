"use client";

import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Engineer (Java)",
    company: "UN4CUS (Pvt) Ltd",
    location: "Sri Lanka",
    period: "January 2025 – Present",
    description: [
      "Developed and maintained Java SpringBoot microservices, ensuring high performance and security.",
      "Built secure RESTful APIs using Spring Security and JWT-based authentication.",
      "Integrated Apache Kafka for reliable asynchronous communication between services.",
      "Implemented database interactions with MySQL and MongoDB using Spring Data JPA.",
      "Applied CI/CD pipelines using GitHub Actions for automated workflows."
    ],
    projects: ["EilyAI Enterprise Solution System", "TalentBase (recruitment platform)"]
  },
  {
    title: "Software Engineer (Java) - Intern",
    company: "UN4CUS (Pvt) Ltd",
    location: "Sri Lanka",
    period: "June 2024 – December 2024",
    description: [
      "Developed a monolithic Java Spring Boot web application with a dynamic frontend.",
      "Contributing to workflow automation in the financial software domain.",
      "Containerized applications using Docker for consistent deployment.",
      "Assisted in production issue analysis by monitoring logs and resolving defects."
    ],
    projects: ["Quantrax"]
  },
  {
    title: "Printing Shop Management POS System (Freelance)",
    company: "Alpha Printers",
    location: "Gampola",
    period: "January 2023 – June 2024",
    description: [
      "Designed and developed a complete POS and management system using Java 17, Spring Boot, and Angular.",
      "Implemented Role-Based Access Control (RBAC) using Spring Security and JWT.",
      "Integrated API documentation using Swagger and performed testing with Postman.",
      "Conducted production deployment and provided post-production support."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-indigo-600">{exp.title}</CardTitle>
                    <p className="font-semibold text-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                {exp.projects && (
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-foreground mb-2">Key Projects:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, i) => (
                        <span key={i} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md border border-indigo-100">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { 
  Server, 
  Shield, 
  Zap, 
  Users, 
  Database, 
  Cpu,
  Workflow,
  BarChart3
} from 'lucide-react';

export interface ProjectFeature {
  title: string;
  description: string;
  icon: any;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
  isFullPage?: boolean;
}

export interface ProjectData {
  id: string;
  title: string;
  logo: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  heroImage: string;
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  architecture: string;
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  contribution: string;
  futureImprovements: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "eilyai-enterprise",
    title: "EilyAI Enterprise Solution",
    logo: "/eily/logo.png",
    category: "Enterprise Software",
    shortDescription: "A comprehensive enterprise solution system built with microservices architecture.",
    fullDescription: "EilyAI is a high-performance enterprise platform designed to handle complex business operations through a distributed microservices architecture. It focuses on real-time data processing and seamless service communication.",
    tags: ["Java", "Spring Boot", "Microservices", "Kafka", "MySQL", "Docker"],
    heroImage: "/eily/hero.png",
    images: [
      { url: "/eily/dashboard.png", caption: "Main Dashboard", isFullPage: true },
      { url: "/eily/analytics.png", caption: "Analytics View" },
      { url: "/eily/monitoring.png", caption: "System Monitoring" }
    ],
    highlights: [
      "Distributed microservices architecture for high availability",
      "Real-time event streaming using Apache Kafka",
      "Centralized configuration and service discovery"
    ],
    architecture: "The system follows a hexagonal architecture pattern within each microservice. Communication is handled via a combination of REST for synchronous calls and Kafka for asynchronous event-driven workflows.",
    features: [
      { title: "Microservices", description: "Decoupled services for independent scaling.", icon: Cpu },
      { title: "Event Streaming", description: "Real-time data processing with Kafka.", icon: Zap },
      { title: "Secure Gateway", description: "Centralized security and routing.", icon: Shield }
    ],
    challenges: [
      { 
        problem: "Managing data consistency across multiple distributed services.", 
        solution: "Implemented the Saga pattern for distributed transactions and eventual consistency." 
      }
    ],
    contribution: "I led the backend development of the core services, focusing on the Kafka integration and the implementation of the security layer.",
    futureImprovements: [
      "Implementation of GraphQL for more flexible data querying",
      "Enhanced monitoring with Prometheus and Grafana"
    ]
  },
  {
    id: "talentbase",
    title: "TalentBase",
    logo: `${import.meta.env.BASE_URL}/talent/image.png`,
    category: "HR Tech",
    shortDescription: "A modern recruitment platform designed to streamline the hiring process.",
    fullDescription: "TalentBase is an end-to-end recruitment management system that helps organizations track candidates, manage interviews, and automate the hiring workflow.",
    tags: ["Java", "Spring Boot", "MongoDB", "JWT", "REST API", "Angular"],
    heroImage: `${import.meta.env.BASE_URL}/talent/image.png`,
    images: [
      { url: "/talentbase/pipeline.png", caption: "Candidate Pipeline", isFullPage: true },
      { url: "/talentbase/scheduler.png", caption: "Interview Scheduler" },
      { url: "/talentbase/collaboration.png", caption: "Team Collaboration" }
    ],
    highlights: [
      "Automated candidate screening and ranking",
      "Collaborative interview scheduling system",
      "Comprehensive analytics dashboard for HR teams"
    ],
    architecture: "Built as a modular monolithic application with a clear separation between the domain logic and the infrastructure layer.",
    features: [
      { title: "ATS", description: "Advanced Applicant Tracking System.", icon: Users },
      { title: "Workflow", description: "Customizable hiring pipelines.", icon: Workflow },
      { title: "Analytics", description: "Data-driven hiring insights.", icon: BarChart3 }
    ],
    challenges: [
      { 
        problem: "Handling large volumes of resume uploads and parsing.", 
        solution: "Integrated an asynchronous processing queue to handle file uploads." 
      }
    ],
    contribution: "I designed the database schema and implemented the core RESTful APIs.",
    futureImprovements: [
      "AI-powered resume matching",
      "Video interview integration"
    ]
  },
  {
    id: "quantrax",
    title: "Quantrax",
    logo: `${import.meta.env.BASE_URL}/quantrax/qlogo.avif`,
    category: "FinTech",
    shortDescription: "Financial software domain application focusing on workflow automation.",
    fullDescription: "Quantrax is a specialized financial tool designed for debt collection and recovery management, focusing on automating complex workflows.",
    tags: ["Java", "Spring Boot", "Docker", "MySQL", "Monolithic"],
    heroImage: `${import.meta.env.BASE_URL}/quantrax/hero-logo.avif`,
    images: [
      { url: `${import.meta.env.BASE_URL}/quantrax/hero.avif`, caption: "POS Interface", isFullPage: true },
      { url: `${import.meta.env.BASE_URL}/quantrax/Landing.avif`, caption: "Admin Panel", isFullPage: true },
      { url: `${import.meta.env.BASE_URL}/quantrax/resources.avif`, caption: "Resource Page", isFullPage: true }
    ],
    highlights: [
      "Automated debt recovery workflows",
      "Strict regulatory compliance tracking",
      "High-performance reporting engine"
    ],
    architecture: "A robust monolithic architecture designed for stability and ease of deployment.",
    features: [
      { title: "Automation", description: "Rule-based workflow triggers.", icon: Zap },
      { title: "Compliance", description: "Built-in audit trails and logs.", icon: Shield },
      { title: "Reporting", description: "Detailed financial statements.", icon: BarChart3 }
    ],
    challenges: [
      { 
        problem: "Legacy code integration and modernization.", 
        solution: "Refactored critical modules into modern Spring Boot components." 
      }
    ],
    contribution: "As an intern, I contributed to the development of new features in the workflow engine.",
    futureImprovements: [
      "Migration to a microservices-ready architecture",
      "Integration with external payment gateways"
    ]
  },
  {
    id: "alpha-printers-pos",
    title: "Alpha Printers POS System",
    logo: `${import.meta.env.BASE_URL}/alpha/logo.avif`,
    category: "Enterprise Business Solution",
    shortDescription: "A full-featured POS and business management system designed for high-volume printing operations.",
    fullDescription: "Designed and developed a comprehensive monolithic Point of Sale (POS) and business management system tailored for a high-demand printing environment. The system streamlines end-to-end operations including customer management, inventory tracking, vendor coordination, sales, and purchasing workflows. Built with a secure Spring Boot backend and Angular frontend, the application ensures high performance, scalability, and secure access control using JWT-based authentication.",
    tags: ["Java 17", "Spring Boot", "Angular", "MySQL", "Swagger"],
    heroImage: `${import.meta.env.BASE_URL}/alpha/logo.avif`,
    images: [
     { url: `${import.meta.env.BASE_URL}/alpha/login.avif`, caption: "Log-In", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/alpha/dashboard.avif`, caption: "User Interface", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/alpha/sales.avif`, caption: "Invoice Generation", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/alpha/reports.avif`, caption: "Reports Generation", isFullPage: false } 
    ],
    highlights: [
    "Real-time inventory tracking with automated low-stock alerts",
    "Comprehensive due payment tracking and pending invoice monitoring",
    "Customizable report generation based on user-defined fields",
    "Secure API access using JWT-based authentication and authorization",
    "Role-based access control supporting Admin and User levels"
  ],
    architecture: "Monolithic full-stack architecture using Spring Boot for backend services and Angular for frontend, secured with Spring Security and JWT authentication.",
    features: [
      { title: "Inventory Management", description: "Real-time stock tracking with automated alerts for low inventory levels.", icon: Database },
      { title: "Point of Sale (POS)", description: "Efficient billing system with invoice generation and tax handling.", icon: Zap },
      { title: "Customer & Vendor Management", description: "Centralized management of customers and suppliers with transaction history.", icon: Users },
      { title: "Security & Access Control",description: "JWT-based authentication with role-based authorization ensuring secure system access.", icon: Shield }
    ],
    challenges: [
      { 
      problem: "Handling complex pricing logic based on print type, material, and volume.", 
      solution: "Implemented a dynamic pricing engine capable of calculating costs based on configurable parameters and business rules." 
    },
    { 
      problem: "Ensuring secure communication across all API endpoints.", 
      solution: "Integrated Spring Security with JWT tokens, enforcing authentication and authorization for every request." 
    }
    ],
    contribution: "Sole developer responsible for system design, architecture, backend and frontend development, database design, and deployment.",
    futureImprovements: [
      "Customer-facing online order and tracking portal",
      "Integration with third-party shipping and delivery services",
      "Advanced analytics dashboard with business insights",
      "Migration to microservices architecture for scalability"
    ]
  }
];
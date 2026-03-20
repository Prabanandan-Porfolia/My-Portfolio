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

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  heroImage: string;
  images: string[];
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
    category: "Enterprise Software",
    shortDescription: "A comprehensive enterprise solution system built with microservices architecture.",
    fullDescription: "EilyAI is a high-performance enterprise platform designed to handle complex business operations through a distributed microservices architecture. It focuses on real-time data processing and seamless service communication.",
    tags: ["Java", "Spring Boot", "Microservices", "Kafka", "MySQL", "Docker"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
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
    category: "HR Tech",
    shortDescription: "A modern recruitment platform designed to streamline the hiring process.",
    fullDescription: "TalentBase is an end-to-end recruitment management system that helps organizations track candidates, manage interviews, and automate the hiring workflow.",
    tags: ["Java", "Spring Boot", "MongoDB", "JWT", "REST API", "Angular"],
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
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
    category: "FinTech",
    shortDescription: "Financial software domain application focusing on workflow automation.",
    fullDescription: "Quantrax is a specialized financial tool designed for debt collection and recovery management, focusing on automating complex workflows.",
    tags: ["Java", "Spring Boot", "Docker", "MySQL", "Monolithic"],
    heroImage: "https://images.unsplash.com/photo-1611974717484-3874407defd1?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1611974717484-3874407defd1?auto=format&fit=crop&q=80&w=800"
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
    category: "Business Management",
    shortDescription: "Complete POS and management system for a printing business.",
    fullDescription: "A custom-built Point of Sale and inventory management system tailored for the specific needs of a high-volume printing shop.",
    tags: ["Java 17", "Spring Boot", "Angular", "PostgreSQL", "Swagger"],
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    ],
    highlights: [
      "Real-time inventory tracking for printing supplies",
      "Integrated customer relationship management (CRM)",
      "Automated invoice generation and tax calculation"
    ],
    architecture: "Full-stack application with a Spring Boot backend and an Angular frontend.",
    features: [
      { title: "Inventory", description: "Stock level alerts and tracking.", icon: Database },
      { title: "POS", description: "Fast and intuitive checkout process.", icon: Zap },
      { title: "CRM", description: "Customer history and loyalty tracking.", icon: Users }
    ],
    challenges: [
      { 
        problem: "Complex pricing logic based on print volume and material.", 
        solution: "Developed a flexible pricing engine that calculates costs dynamically." 
      }
    ],
    contribution: "I was the sole developer for this project, responsible for the entire lifecycle.",
    futureImprovements: [
      "Online order portal for customers",
      "Integration with shipping providers"
    ]
  }
];
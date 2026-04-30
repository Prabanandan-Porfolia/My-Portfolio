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
    logo: `${import.meta.env.BASE_URL}/eily/elog.jpg`,
    category: "Enterprise Software",
    shortDescription: "A comprehensive enterprise solution system built with microservices architecture.",
    fullDescription: "EilyAI is a cloud-based, multi-tenant enterprise platform built using a microservices architecture. Delivered as a SaaS solution, it allows businesses to access and subscribe to services via a web interface without local deployment. The platform supports real-time processing and event-driven communication, forming the foundation for a scalable ERP system with planned modules such as HRM, inventory management, accounting, and procurement",
    tags: ["Java 25","Spring Boot","Spring WebFlux","Microservices Architecture","Reactive Programming(Mono/Flux)","REST APIs",
            "Spring Security","JWT Authentication", "Role-Based Access Control (RBAC)","PostgreSQL", "Spring Data JPA","Multi-Tenancy",
            "Data Encryption","CI/CD Pipelines", "Validation & Exception Handling","Git"],
    heroImage: `${import.meta.env.BASE_URL}/eily/ehero.webp`,
    images: [
      { url: `${import.meta.env.BASE_URL}/eily/login.avif`, caption: "Home Page", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/eily/ehome.avif`, caption: "Home Page", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/eily/egrid.avif`, caption: "Grid-View", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/eily/elist.avif`, caption: "List-View", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/eily/user-creation.avif`, caption: "Creation Form", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/eily/esale.avif`, caption: "Sales-Board", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/eily/payment.avif`, caption: "Payment-Gateway", isFullPage: false },
    ],
    highlights: [
      "Distributed microservices architecture ensuring high availability and scalability",
      "Real-time event streaming and asynchronous communication using Apache Kafka",
      "Centralized configuration management and service discovery",
      "Cloud-based SaaS platform with multi-platform support (web, tablet, and mobile)",
      "Multi-tenant architecture enabling multiple branches to operate within a single unified system",
      "Cross-branch data synchronization for seamless company-wide operations",
      "Optimized for tablet and mobile usage, improving cashier efficiency and sales speed",
      "Fast and intuitive navigation designed to reduce transaction time and enhance user productivity"
    ],
    architecture: "The system uses a hexagonal architecture within each microservice, ensuring clear separation of concerns. Services communicate via REST for synchronous calls and Apache Kafka for event-driven workflows. Service discovery is handled באמצעות Consul, enabling dynamic service registration and scalable, resilient communication.",
    features: [
      { title: "Microservices", description: "Decoupled services for independent scaling.", icon: Cpu },
      { title: "Event Streaming", description: "Real-time data processing with Kafka.", icon: Zap },
      { title: "Secure Gateway", description: "Centralized API gateway with JWT authentication.", icon: Shield },
      { title: "Multi-Tenancy", description: "Support for multiple branches in a single system.", icon: Users },
      { title: "Cloud-Based SaaS", description: "Accessible from anywhere with multi-platform support.", icon: Server },
      { title: "Optimized UI/UX", description: "Designed for speed and efficiency in high-volume sales environments.", icon: Workflow },
      { title: "Comprehensive ERP Modules", description: "Planned modules include HRM, inventory management, accounting, and procurement.", icon: BarChart3 }
    ],
    challenges: [
  {
    problem: "Data inconsistencies occurred due to partial failures in distributed transactions across services.",
    solution: "Implemented the Saga pattern using Kafka to handle event-driven workflows, with retry mechanisms and compensation logic to maintain eventual consistency."
  },
  {
    problem: "Service-to-service communication failures (timeouts / service downtime) affected user-facing operations.",
    solution: "Applied resilience patterns such as retries and circuit breakers, and shifted critical flows to asynchronous Kafka processing."
  }
],
contribution: "Led backend development of core services, designed Kafka-based event flows, implemented Saga orchestration, and built secure APIs using Spring Security with JWT.",
futureImprovements: [
  "Introduce GraphQL to reduce over-fetching and improve client flexibility",
  "Enhance observability with distributed tracing (e.g., Zipkin/OpenTelemetry)",
  "Optimize Kafka topic partitioning and scaling for higher throughput",
  "Implement centralized configuration and service discovery (Consul) for better scalability"
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
      { url: `${import.meta.env.BASE_URL}/talent/Landing.svg`, caption: "Home Page", isFullPage: true },
      { url: `${import.meta.env.BASE_URL}/talent/Sign in.svg`, caption: "Sign In Page", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/user type.svg`, caption: "Portal Selection", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/Create user.svg`, caption: "Employer Profile Creation", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/Create user com.svg`, caption: "Employee Profile Creation", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/Dashboard.svg`, caption: "Employee Portal", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/Profile - personal info.svg`, caption: "Employer Portal", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/Profile - Jobs.svg`, caption: "Job Portal", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/Favorites.svg`, caption: "Employee Interests", isFullPage: false },
      { url: `${import.meta.env.BASE_URL}/talent/Architecture.svg`, caption: "Architecture View", isFullPage: false },

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
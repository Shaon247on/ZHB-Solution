// types/WorkPageTypes.ts
export interface WorkPageData {
  id: number;
  tag: string[];
  heroSection: HeroSection;
  projectSummary: ProjectSummary;
  deliverables: Deliverable[];
  goalsAndChallenges: GoalsAndChallenges;
  solutionArchitecture: SolutionArchitecture;
  featureHighlights: FeatureHighlight[];
  screenGallery: ScreenGalleryItem[];
  technologyStack: string[];
  securityCompliance: SecurityItem[];
  resultImpact: ResultImpactItem[];
  processTimeline: TimelineItem[];
  testimonial: Testimonial;
  callToAction: CallToAction;
}

export interface HeroSection {
  backgroundImage: string;
  title: string;
  description: string;
  stats: StatItem[];
  ctaText: string;
  heroImage: string;
  heroImageAlt: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectSummary {
  industry: string;
  platforms: string;
  duration: string;
  team: string;
  service: string;
  stack: string;
  ctaText: string;
}

export interface Deliverable {
  text: string;
}

export interface GoalsAndChallenges {
  businessGoals: GoalItem[];
  keyChallenges: ChallengeItem[];
}

export interface GoalItem {
  text: string;
}

export interface ChallengeItem {
  text: string;
}

export interface SolutionArchitecture {
  description: string;
  images: ArchitectureImage[];
}

export interface ArchitectureImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FeatureHighlight {
  title: string;
  description: string;
}

export interface ScreenGalleryItem {
  title: string;
  subtitle: string;
  placeholder?: boolean;
  src?: string;
  alt?: string;
}

export interface SecurityItem {
  text: string;
}

export interface ResultImpactItem {
  value: string;
  label: string;
  color: "green" | "blue" | "yellow" | "red";
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: {
    name: string;
    position: string;
    initials: string;
    avatarColor: string;
  };
}

export interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Sample Data
export const sampleWorkPageData: WorkPageData = {
  id: 1,
  tag: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
  heroSection: {
    backgroundImage: "/work/heroBg.jpg",
    title: "Admin Control Center Sites",
    description:
      "A robust admin control center built for managing users, branches, processes, and employee directories with role-based access, analytics, and secure workflows across web and mobile.",
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "350ms", label: "p95 Latency" },
      { value: "200k+", label: "User Managed" },
      { value: "ISO", label: "Security Ready" },
    ],
    ctaText: "Request Proposal",
    heroImage: "/work/heroImage.png",
    heroImageAlt: "Admin Control Center Dashboard",
  },
  projectSummary: {
    industry: "HR & Operations",
    platforms: "Web + Mobile",
    duration: "6 months",
    team: "PM, UX, 3 FE, 2 BE, QA, DevOps",
    service: "Design, Development, DevOps",
    stack: "React/Next, Laravel/.NET, PostgreSQL,\nRedis, Docker, Nginx, AWS",
    ctaText: "Start a Similar Project",
  },
  deliverables: [
    { text: "Responsive admin dashboard (web)" },
    { text: "Employee directory (iOS/Android hybrid)" },
    { text: "Role-based access control (RBAC)" },
    { text: "Audit logs & reporting" },
    { text: "CI/CD pipelines & infra as code" },
    { text: "Technical & user documentation" },
  ],
  goalsAndChallenges: {
    businessGoals: [
      { text: "Single control center for HR & operations" },
      { text: "Reduce manual tasks and errors" },
      { text: "Enable real-time reporting & analytics" },
      { text: "Support multi-branch, multi-role workflows" },
    ],
    keyChallenges: [
      { text: "Complex permission matrix & approvals" },
      { text: "High availability with low latency" },
      { text: "Data privacy & compliance (PII)" },
      { text: "Seamless web & mobile experience" },
    ],
  },
  solutionArchitecture: {
    description:
      "We implemented a modular service-oriented architecture with API gateway, stateless services, and centralized identity. Caching and background jobs handle throughput, while observability ensures fast incident response.",
    images: [
      {
        src: "/work/solution-1.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
      {
        src: "/work/solution-2.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
    ],
  },
  featureHighlights: [
    {
      title: "HRM Dashboard",
      description: "Attendance, leaves, payroll widgets with drill-downs.",
    },
    {
      title: "Employee Directory",
      description: "Search, profiles, org chart, quick actions.",
    },
    {
      title: "RBAC & SSO",
      description: "Role-based permissions, SSO (OAuth/SAML).",
    },
    {
      title: "Workflow & Approvals",
      description: "Multi-step approvals with audit trails.",
    },
    {
      title: "Reports & Analytics",
      description: "Exportable reports, dashboards, and KPIs.",
    },
    {
      title: "Notifications",
      description: "Email/SMS/push with preferences and templates.",
    },
  ],
  screenGallery: [
    {
      title: "Dashboard",
      subtitle: "Desktop View",
      placeholder: true,
    },
    {
      title: "Data List",
      subtitle: "Table View",
      placeholder: true,
    },
    {
      title: "Analytics Charts",
      subtitle: "Charts View",
      placeholder: true,
    },
    {
      title: "Mobile Directory",
      subtitle: "Mobile View",
      placeholder: true,
    },
    {
      title: "Employee Profile",
      subtitle: "Mobile Profile",
      placeholder: true,
    },
    {
      title: "Settings",
      subtitle: "Settings View",
      placeholder: true,
    },
  ],
  technologyStack: [
    "React",
    "Next.js",
    "Laravel 9",
    ".Net Core",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Nginx",
    "AWS",
  ],
  securityCompliance: [
    { text: "SSO (OAuth2/SAML), MFA, and granular RBAC" },
    { text: "Encrypted at rest (AES-256) and in transit (TLS 1.2+)" },
    { text: "Audit logs, data retention, and IP allow-listing" },
    { text: "OWASP ASVS alignment and periodic pen-testing" },
    { text: "GDPR-ready consent and data subject tools" },
  ],
  resultImpact: [
    {
      value: "-45%",
      label: "Ops time per request",
      color: "green",
    },
    {
      value: "+60%",
      label: "Faster approvals",
      color: "green",
    },
    {
      value: "0 Sev-1",
      label: "Incidents post-launch",
      color: "blue",
    },
    {
      value: "4.8 ★",
      label: "Internal User Rating",
      color: "yellow",
    },
  ],
  processTimeline: [
    {
      title: "Discovery & Planning (Week 1-2)",
      description: "Stakeholder interviews, requirements, success metrics.",
    },
    {
      title: "UX & Design (Week 3-6)",
      description: "User flows, wireframes, design system, prototypes.",
    },
    {
      title: "Development (Week 7-16)",
      description: "API, dashboard modules, mobile directory, RBAC, tests.",
    },
    {
      title: "Staging & UAT (Week 17-20)",
      description: "Performance tuning, security review, user acceptance.",
    },
    {
      title: "Launch & Handover (Week 21+)",
      description: "Go-live, documentation, training, and support.",
    },
  ],
  testimonial: {
    quote:
      "The new control center unified our HR and branch operations. Permissions are clear, reports are instant, and our teams love the mobile directory.",
    author: {
      name: "Jane Cooper",
      position: "Operations Director, Enterprise Client",
      initials: "JC",
      avatarColor: "yellow-400",
    },
  },
  callToAction: {
    title: "Plan your control center with us",
    description: "We design, build, and scale admin platforms for enterprises.",
    buttonText: "Request Case Study",
    buttonLink: "/contact",
  },
};

// Additional sample data for different projects
export const ecommerceProjectData: WorkPageData = {
  id: 2,
  tag: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
  heroSection: {
    backgroundImage: "/work/heroBg.jpg",
    title: "E-commerce Platform Revolution",
    description:
      "A scalable e-commerce platform built with modern microservices architecture, supporting millions of transactions with AI-powered recommendations and real-time inventory management.",
    stats: [
      { value: "99.95%", label: "Availability" },
      { value: "200ms", label: "Load Time" },
      { value: "1M+", label: "Daily Orders" },
      { value: "150+", label: "Countries" },
    ],
    ctaText: "View Live Demo",
    heroImage: "/work/eCommarce.png",
    heroImageAlt: "E-commerce Platform Interface",
  },
  projectSummary: {
    industry: "E-commerce & Retail",
    platforms: "Web + Mobile + API",
    duration: "8 months",
    team: "PM, UX, 5 FE, 4 BE, 2 QA, DevOps, ML Engineer",
    service: "Full-stack Development, ML Integration, DevOps",
    stack:
      "React/Next, Node.js, Python, MongoDB,\nElasticsearch, Redis, Docker, AWS",
    ctaText: "Start Your E-commerce Project",
  },
  deliverables: [
    { text: "Multi-vendor marketplace platform" },
    { text: "Mobile shopping apps (iOS/Android)" },
    { text: "AI-powered recommendation engine" },
    { text: "Real-time inventory management" },
    { text: "Payment gateway integration" },
    { text: "Analytics and reporting dashboard" },
  ],
  goalsAndChallenges: {
    businessGoals: [
      { text: "Create scalable multi-vendor marketplace" },
      { text: "Implement AI-driven product recommendations" },
      { text: "Ensure sub-second page load times" },
      { text: "Support global payment methods" },
    ],
    keyChallenges: [
      { text: "Handling millions of concurrent users" },
      { text: "Real-time inventory synchronization" },
      { text: "Complex vendor commission calculations" },
      { text: "Multi-currency and multi-language support" },
    ],
  },
  solutionArchitecture: {
    description:
      "Built on microservices architecture with event-driven communication, utilizing CDN for static assets, and implementing CQRS pattern for optimal read/write performance.",
    images: [
      {
        src: "/work/solution-1.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
      {
        src: "/work/solution-2.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
    ],
  },
  featureHighlights: [
    {
      title: "AI Recommendations",
      description: "Machine learning powered product suggestions.",
    },
    {
      title: "Real-time Inventory",
      description: "Live stock updates across all channels.",
    },
    {
      title: "Multi-vendor Support",
      description: "Complete vendor management system.",
    },
    {
      title: "Global Payments",
      description: "50+ payment methods worldwide.",
    },
    {
      title: "Advanced Analytics",
      description: "Real-time sales and performance metrics.",
    },
    {
      title: "Mobile First",
      description: "Native mobile apps with offline support.",
    },
  ],
  screenGallery: [
    {
      title: "Product Catalog",
      subtitle: "Desktop View",
      placeholder: true,
    },
    {
      title: "Shopping Cart",
      subtitle: "Checkout Process",
      placeholder: true,
    },
    {
      title: "Vendor Dashboard",
      subtitle: "Sales Analytics",
      placeholder: true,
    },
    {
      title: "Mobile Shopping",
      subtitle: "iOS App",
      placeholder: true,
    },
    {
      title: "Order Tracking",
      subtitle: "Mobile View",
      placeholder: true,
    },
    {
      title: "Admin Panel",
      subtitle: "Management View",
      placeholder: true,
    },
  ],
  technologyStack: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "Elasticsearch",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "TensorFlow",
  ],
  securityCompliance: [
    { text: "PCI DSS Level 1 compliance for payment processing" },
    { text: "End-to-end encryption for sensitive data" },
    { text: "GDPR compliance with data portability" },
    { text: "Regular security audits and penetration testing" },
    { text: "Multi-factor authentication for vendors" },
  ],
  resultImpact: [
    {
      value: "+300%",
      label: "Sales increase",
      color: "green",
    },
    {
      value: "150ms",
      label: "Page load time",
      color: "green",
    },
    {
      value: "99.9%",
      label: "Uptime achieved",
      color: "blue",
    },
    {
      value: "4.9 ★",
      label: "App store rating",
      color: "yellow",
    },
  ],
  processTimeline: [
    {
      title: "Research & Strategy (Week 1-2)",
      description:
        "Market analysis, competitor research, technical feasibility.",
    },
    {
      title: "Design & Prototyping (Week 3-6)",
      description:
        "User experience design, design system, interactive prototypes.",
    },
    {
      title: "Core Development (Week 7-20)",
      description: "Platform development, API creation, payment integration.",
    },
    {
      title: "AI Integration (Week 21-24)",
      description: "Machine learning models, recommendation engine, testing.",
    },
    {
      title: "Launch & Optimization (Week 25+)",
      description:
        "Production deployment, performance monitoring, optimization.",
    },
  ],
  testimonial: {
    quote:
      "The new platform exceeded our expectations. Sales tripled in the first quarter, and our vendors love the intuitive dashboard. The AI recommendations are incredibly accurate.",
    author: {
      name: "Michael Chen",
      position: "CEO, RetailTech Solutions",
      initials: "MC",
      avatarColor: "blue-400",
    },
  },
  callToAction: {
    title: "Ready to transform your e-commerce?",
    description: "We build scalable, high-performance e-commerce solutions.",
    buttonText: "Start Your Project",
    buttonLink: "/contact",
  },
};

export const socialMediaProjectData: WorkPageData = {
  id: 3,
  tag: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
  heroSection: {
    backgroundImage: "/work/heroBg.jpg",
    title: "Social Media Platform",
    description:
      "A social media platform that connects users globally with seamless messaging, media sharing, and live broadcasting.",
    stats: [
      { value: "95%", label: "User Engagement" },
      { value: "500ms", label: "Average Response Time" },
      { value: "50M+", label: "Active Users" },
      { value: "SOC 2", label: "Compliance Ready" },
    ],
    ctaText: "Join Now",
    heroImage: "/work/social.png",
    heroImageAlt: "Social Media Platform Interface",
  },
  projectSummary: {
    industry: "Social Media",
    platforms: "Web + Mobile",
    duration: "12 months",
    team: "PM, UX, 4 FE, 3 BE, QA, DevOps, Designer",
    service: "Full-stack Development, DevOps",
    stack: "React, Node.js, MongoDB, GraphQL, Docker, AWS",
    ctaText: "Start Building Your Platform",
  },
  deliverables: [
    { text: "User profiles and social feeds" },
    { text: "Real-time messaging and notifications" },
    { text: "Live video streaming functionality" },
    { text: "Content moderation and reporting tools" },
    { text: "Analytics dashboard" },
  ],
  goalsAndChallenges: {
    businessGoals: [
      { text: "Foster user engagement and community building" },
      { text: "Provide real-time communication and content sharing" },
      { text: "Scale to millions of users globally" },
    ],
    keyChallenges: [
      { text: "Real-time data processing" },
      { text: "Media content storage and streaming" },
      { text: "Ensuring security and data privacy" },
    ],
  },
  solutionArchitecture: {
    description:
      "A distributed architecture using microservices with a strong focus on scalability and real-time data processing.",
   images: [
      {
        src: "/work/solution-1.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
      {
        src: "/work/solution-2.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
    ],
  },
  featureHighlights: [
    {
      title: "User Feed",
      description: "Real-time updates and content sharing",
    },
    {
      title: "Messaging",
      description: "Instant communication with media support",
    },
    {
      title: "Live Broadcasting",
      description: "Share live video with followers",
    },
  ],
  screenGallery: [
    { title: "User Feed", subtitle: "Desktop View", placeholder: true },
    { title: "Messaging", subtitle: "Mobile View", placeholder: true },
  ],
  technologyStack: ["React", "Node.js", "MongoDB", "GraphQL", "Docker", "AWS"],
  securityCompliance: [
    { text: "SOC 2 compliant" },
    { text: "Data encryption and tokenization" },
  ],
  resultImpact: [
    { value: "50M+", label: "Active Users", color: "green" },
    { value: "95%", label: "User Engagement", color: "blue" },
  ],
  processTimeline: [
    {
      title: "Planning & Research (Week 1-4)",
      description: "Market analysis, requirements gathering, system design.",
    },
    {
      title: "UI/UX Design (Week 5-8)",
      description: "Prototyping, design iterations, user testing.",
    },
    {
      title: "Development (Week 9-16)",
      description: "Back-end, front-end, and messaging system implementation.",
    },
    {
      title: "Testing & Optimization (Week 17-20)",
      description: "Performance testing, bug fixing, feature optimization.",
    },
    {
      title: "Launch & Handover (Week 21+)",
      description: "Go-live, training, and post-launch support.",
    },
  ],
  testimonial: {
    quote:
      "The platform has allowed us to connect millions of users worldwide with ease and security.",
    author: {
      name: "Alice Johnson",
      position: "CEO, SocialTech",
      initials: "AJ",
      avatarColor: "blue-400",
    },
  },
  callToAction: {
    title: "Build Your Social Platform with Us",
    description: "Let's bring your social platform vision to life.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
};

export const financialDashboardProjectData: WorkPageData = {
  id: 4,
  tag: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
  heroSection: {
    backgroundImage: "/work/heroBg.jpg",
    title: "Financial Dashboard",
    description:
      "A financial analytics platform that provides real-time insights into cash flow, investments, and financial forecasts.",
    stats: [
      { value: "100%", label: "Data Accuracy" },
      { value: "15ms", label: "Query Response Time" },
      { value: "$500M+", label: "Assets Under Management" },
      { value: "ISO 27001", label: "Security Standard" },
    ],
    ctaText: "Get Started",
    heroImage: "/work/dashboard.png",
    heroImageAlt: "Financial Dashboard Interface",
  },
  projectSummary: {
    industry: "Finance",
    platforms: "Web",
    duration: "10 months",
    team: "PM, UX, 3 FE, 2 BE, QA, DevOps",
    service: "Data Analytics, Development, DevOps",
    stack: "React, Node.js, MongoDB, D3.js, AWS",
    ctaText: "Start Your Project",
  },
  deliverables: [
    { text: "Interactive data visualization dashboard" },
    { text: "Real-time cash flow and balance sheet updates" },
    { text: "Predictive financial models" },
    { text: "Automated report generation" },
  ],
  goalsAndChallenges: {
    businessGoals: [
      { text: "Provide actionable financial insights" },
      { text: "Enable dynamic forecasting and trend analysis" },
    ],
    keyChallenges: [
      { text: "Handling large-scale financial data" },
      { text: "Real-time data processing and accuracy" },
    ],
  },
  solutionArchitecture: {
    description:
      "An event-driven microservices architecture to handle large-scale financial data and provide real-time insights.",
    images: [
      {
        src: "/work/solution-1.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
      {
        src: "/work/solution-2.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
    ],
  },
  featureHighlights: [
    {
      title: "Data Analytics",
      description: "Real-time reporting and insights",
    },
    {
      title: "Financial Forecasting",
      description: "Predictive models for future trends",
    },
  ],
  screenGallery: [
    {
      title: "Dashboard Overview",
      subtitle: "Desktop View",
      placeholder: true,
    },
    {
      title: "Investment Portfolio",
      subtitle: "Mobile View",
      placeholder: true,
    },
  ],
  technologyStack: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
  securityCompliance: [
    { text: "ISO 27001 certified" },
    { text: "End-to-end encryption for sensitive financial data" },
  ],
  resultImpact: [
    { value: "$500M+", label: "Assets Managed", color: "green" },
    { value: "100%", label: "Data Accuracy", color: "blue" },
  ],
  processTimeline: [
    {
      title: "Research & Analysis (Week 1-3)",
      description: "Client interviews, system requirements, feasibility.",
    },
    {
      title: "UI/UX Design (Week 4-6)",
      description: "Wireframes, user flows, high-fidelity design.",
    },
    {
      title: "Development & Integration (Week 7-14)",
      description: "Dashboard development, data APIs, real-time integrations.",
    },
    {
      title: "Testing & Deployment (Week 15-17)",
      description: "Quality assurance, performance tuning, deployment.",
    },
    {
      title: "Support & Maintenance (Week 18+)",
      description: "Ongoing support and updates.",
    },
  ],
  testimonial: {
    quote:
      "The dashboard has empowered our team with real-time, accurate financial insights.",
    author: {
      name: "John Smith",
      position: "CFO, FinTech Co.",
      initials: "JS",
      avatarColor: "green-400",
    },
  },
  callToAction: {
    title: "Start Your Financial Analytics Journey",
    description: "Transform your financial data into insights.",
    buttonText: "Request Demo",
    buttonLink: "/contact",
  },
};

export const learningPlatformProjectData: WorkPageData = {
  id: 5,
  tag: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
  heroSection: {
    backgroundImage: "/work/heroBg.jpg",
    title: "Online Learning Platform",
    description:
      "An interactive platform for online education, supporting live sessions, course creation, and student-teacher communication.",
    stats: [
      { value: "500K+", label: "Courses Offered" },
      { value: "1M+", label: "Students Enrolled" },
      { value: "1000+", label: "Instructors" },
      { value: "GDPR", label: "Compliance Ready" },
    ],
    ctaText: "Start Learning Today",
    heroImage: "/work/learningHero.png",
    heroImageAlt: "Online Learning Platform Interface",
  },
  projectSummary: {
    industry: "Education",
    platforms: "Web + Mobile",
    duration: "9 months",
    team: "PM, UX, 4 FE, 3 BE, QA, DevOps, Designer",
    service: "Platform Development, Design, DevOps",
    stack: "React, Node.js, MongoDB, WebRTC, AWS",
    ctaText: "Launch Your Course",
  },
  deliverables: [
    { text: "Course creation tools" },
    { text: "Live streaming support" },
    { text: "Student and instructor dashboards" },
    { text: "Real-time chat and discussion forums" },
  ],
  goalsAndChallenges: {
    businessGoals: [
      { text: "Provide a scalable online education platform" },
      { text: "Offer interactive live sessions" },
    ],
    keyChallenges: [
      { text: "Scalable live streaming infrastructure" },
      { text: "Real-time collaboration features" },
    ],
  },
  solutionArchitecture: {
    description:
      "A modular architecture using microservices to support real-time interactions and content management.",
    images: [
      {
        src: "/work/solution-1.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
      {
        src: "/work/solution-2.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
    ],
  },
  featureHighlights: [
    { title: "Live Sessions", description: "Real-time video classes" },
    {
      title: "Course Creation",
      description: "Customizable content management system",
    },
  ],
  screenGallery: [
    {
      title: "Instructor Dashboard",
      subtitle: "Desktop View",
      placeholder: true,
    },
    { title: "Student View", subtitle: "Mobile View", placeholder: true },
  ],
  technologyStack: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
  securityCompliance: [
    { text: "GDPR compliant" },
    { text: "Real-time data encryption" },
  ],
  resultImpact: [
    { value: "500K+", label: "Courses Offered", color: "green" },
    { value: "1M+", label: "Students Enrolled", color: "blue" },
  ],
  processTimeline: [
    {
      title: "Planning & Research (Week 1-4)",
      description:
        "Market study, feature identification, platform architecture.",
    },
    {
      title: "UI/UX Design (Week 5-8)",
      description: "Prototyping, user feedback, UI design.",
    },
    {
      title: "Development (Week 9-16)",
      description: "Building course features, live streaming, chat systems.",
    },
    {
      title: "Testing & QA (Week 17-20)",
      description: "Platform stress testing, feature validation.",
    },
    {
      title: "Launch & Ongoing Support (Week 21+)",
      description: "Go-live, bug fixes, feature updates.",
    },
  ],
  testimonial: {
    quote:
      "The platform has been a game-changer for both students and instructors, offering seamless live sessions.",
    author: {
      name: "Linda Gates",
      position: "Director of Education, LearnNow",
      initials: "LG",
      avatarColor: "red-400",
    },
  },
  callToAction: {
    title: "Build Your Learning Platform",
    description: "Create and deliver top-tier education online.",
    buttonText: "Start Today",
    buttonLink: "/contact",
  },
};

export const healthcareProjectData: WorkPageData = {
  id: 6,
  tag: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
  heroSection: {
    backgroundImage: "/work/heroBg.jpg",
    title: "Healthcare Management System",
    
    description:
      "A comprehensive healthcare system designed to manage patient records, appointments, and medical histories with compliance to healthcare standards.",
    stats: [
      { value: "99.98%", label: "System Uptime" },
      { value: "1000+", label: "Active Patients" },
      { value: "500+", label: "Healthcare Professionals" },
      { value: "HIPAA", label: "Compliance Certified" },
    ],
    ctaText: "Request Demo",
    heroImage: "/work/health.png",
    heroImageAlt: "Healthcare System Interface",
  },
  projectSummary: {
    industry: "Healthcare",
    platforms: "Web + Mobile",
    duration: "12 months",
    team: "PM, UX, 4 FE, 3 BE, QA, DevOps, Healthcare Consultant",
    service: "System Design, Development, DevOps",
    stack: "React, Node.js, MongoDB, PostgreSQL, AWS",
    ctaText: "Start Your Healthcare Project",
  },
  deliverables: [
    { text: "Patient management system" },
    { text: "Appointment scheduling and tracking" },
    { text: "Medical history and document management" },
    { text: "User authentication and role management" },
  ],
  goalsAndChallenges: {
    businessGoals: [
      { text: "Ensure efficient patient management" },
      { text: "Integrate various medical systems into one platform" },
    ],
    keyChallenges: [
      { text: "Data security and privacy compliance" },
      { text: "Integration with healthcare providers' legacy systems" },
    ],
  },
  solutionArchitecture: {
    description:
      "A modular architecture with integration capabilities for multiple third-party healthcare systems.",
    images: [
      {
        src: "/work/solution-1.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
      {
        src: "/work/solution-2.png",
        alt: "System Architecture Diagram",
        width: 380,
        height: 250,
      },
    ],
  },
  featureHighlights: [
    {
      title: "Patient Portal",
      description: "Access medical history, appointments, and test results",
    },
    {
      title: "Appointment Scheduling",
      description: "Book and track appointments with healthcare professionals",
    },
  ],
  screenGallery: [
    { title: "Patient Dashboard", subtitle: "Desktop View", placeholder: true },
    { title: "Medical History", subtitle: "Mobile View", placeholder: true },
  ],
  technologyStack: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
  securityCompliance: [
    { text: "HIPAA compliant" },
    { text: "End-to-end encryption for medical data" },
  ],
  resultImpact: [
    { value: "99.98%", label: "System Uptime", color: "green" },
    { value: "1000+", label: "Active Patients", color: "blue" },
  ],
  processTimeline: [
    {
      title: "Planning & Research (Week 1-4)",
      description:
        "Consultation with healthcare experts, defining requirements.",
    },
    {
      title: "UI/UX Design (Week 5-8)",
      description: "Designing user-friendly interfaces for patients and staff.",
    },
    {
      title: "System Development (Week 9-16)",
      description:
        "Building patient management system, appointment scheduling.",
    },
    {
      title: "Security & Testing (Week 17-20)",
      description: "Implementing security features, testing platform.",
    },
    {
      title: "Launch & Support (Week 21+)",
      description: "Go-live and post-launch support.",
    },
  ],
  testimonial: {
    quote:
      "The system has significantly improved our clinic's efficiency and patient satisfaction.",
    author: {
      name: "Dr. Susan Lee",
      position: "Chief Medical Officer",
      initials: "SL",
      avatarColor: "green-400",
    },
  },
  callToAction: {
    title: "Build Your Healthcare Platform",
    description: "Create a secure and efficient healthcare management system.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
};

// Export array of all projects
export const workDataMain: WorkPageData[] = [
  sampleWorkPageData,
  ecommerceProjectData,
  socialMediaProjectData,
  financialDashboardProjectData,
  learningPlatformProjectData,
  healthcareProjectData,
];

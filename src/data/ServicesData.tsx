import {
  Cloud,
  Code,
  Design,
  Earth,
  Gear,
  Grow,
  Search,
  Shield,
} from "@/components/svg/ServicesSVG";

export const WhoCardData = [
  {
    icon: <Shield />, // Replace with your icon path
    title: "Scalable & Secure Solutions",
    subtitle:
      "Build future-ready systems with top-level security and performance",
  },
  {
    icon: <Gear />, // Replace with your icon path
    title: "Custom Built for Your Needs",
    subtitle: "Tailored solutions designed to match your unique business goals",
  },
  {
    icon: <Earth />, // Replace with your icon path
    title: "Global Delivery Experience",
    subtitle:
      "Successfully delivering projects across diverse industries worldwide",
  },
  {
    icon: <Grow />, // Replace with your icon path
    title: "Proven Track Record",
    subtitle: "A portfolio filled with impactful and result-driven solutions",
  },
];

export const TopSecviceCardData = [
  {
    id: 1,
    title: "Web Development",
    subtitle:
      "Build high-performance, secure, and scalable websites tailored to your business goals.",
    image: "/services/service-1.png", // Path to the image in the public folder
    features: [
      "Front-End Development",
      "Back-End Development",
      "Full-Stack Development",
      "CMS Development",
      "E-Commerce Development",
      "Web Application Development",
    ],
    url: "/services/web",
  },
  {
    id: 2,
    title: "Mobile App Development",
    subtitle:
      "Build intuitive, powerful, and engaging mobile applications that help your business grow.",
    image: "/services/service-2.png", // Path to the image in the public folder
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Development",
      "UI/UX Design",
      "App Analytics",
    ],
    url: "/services/app",
  },
  {
    id: 3,
    title: "UI/UX Design",
    subtitle:
      "Create visually appealing and user-friendly designs that offer seamless user experiences.",
    image: "/services/service-3.jpg",
    features: [
      "Wireframing & Prototyping",
      "User Research & Testing",
      "Responsive Design",
      "Visual Design",
      "Interaction Design",
    ],
    url: "/services/design",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    subtitle:
      "Empower your business with cloud-based solutions that improve scalability and efficiency.",
    image: "/services/service-4.jpg",
    features: [
      "Cloud Migration",
      "Cloud Integration",
      "Cloud Security",
      "Data Storage & Backup",
      "Disaster Recovery",
    ],
    url: "/services/cloud",
  },
  {
    id: 5,
    title: "Data Analytics",
    subtitle:
      "Leverage data to gain actionable insights and make data-driven decisions for your business.",
    image: "/services/service-5.jpg",
    features: [
      "Business Intelligence",
      "Data Visualizations",
      "Predictive Analytics",
      "Big Data Solutions",
      "Data Warehousing",
    ],
    url: "/services/data",
  },
  {
    id: 6,
    title: "Digital Marketing",
    subtitle:
      "Boost your online presence with expert digital marketing strategies that drive results.",
    image: "/services/service-6.png",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "PPC Advertising",
      "Email Campaigns",
      "Analytics & Reporting",
    ],
    url: "/services/marketing",
  },
];

const processSteps = [
  {
    step: 1,
    icon: <Search />,
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
    features: [
      "Understand business goals, challenges and target audience.",
      "Gather technical requirements and feature priorities.",
      "Identify potential risks and mitigation strategies.",
      "Align project vision and objectives with client expectations.",
    ],
  },
  {
    step: 2,
    icon: <Design />,
    title: "Planning & Design",
    description:
      "Our team crafts a detailed project plan, wireframes, and design mockups. We focus on creating intuitive, user-friendly interfaces and clear workflows to bring your idea to life.",
    features: [
      "Develop a detailed project roadmap with milestones.",
      "Create wireframes outlining page layouts & workflows.",
      "Design user-friendly and visually appealing interfaces.",
      "Review and refine designs based on client feedback.",
    ],
  },
  {
    step: 3,
    icon: <Code />,
    title: "Development & Testing",
    description:
      "Using modern technologies and best coding practices, we develop your solution with scalability and security in mind. ",
    features: [
      "Implement features using clean, scalable, and secure code.",
      "Integrate APIs, databases, and third-party tools as needed.",
      "Perform unit, integration, and performance testing.",
      "Ensure responsive design for all devices and browsers.",
    ],
  },
  {
    step: 4,
    icon: <Cloud />,
    title: "Deployment & Support",
    description:
      "We launch your solution smoothly, ensuring zero downtime. Post-launch, ",
    features: [
      "Prepare production environment and conduct final testing.",
      "Deploy solution with zero downtime strategy.",
      "Monitor performance post-launch for quick issue resolution.",
      "Provide ongoing technical support and regular updates.",
    ],
  },
];

// Export for use in your application
export default processSteps;

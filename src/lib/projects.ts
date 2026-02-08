export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "AI/ML" | "Automation" | "Civic Tech" | "IoT";
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  metrics: string[];
  features: string[];
  challenges: string[];
  githubUrl: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SafeWatch Kenya",
    slug: "safewatch-kenya",
    category: "Civic Tech",
    tagline: "National-scale civic safety platform with AI-driven incident routing",
    description: "A comprehensive multi-channel platform (Web, SMS, USSD) allowing citizens to report safety incidents. Uses AI for classification and automated county-level routing.",
    problem: "Limited emergency response coordination and civic safety reporting infrastructure across Kenya creates gaps in public safety and incident management.",
    solution: "National-scale platform enabling citizens to report incidents via web, mobile, and SMS, with AI-powered classification, intelligent routing to authorities, and real-time analytics for decision-makers.",
    tech: ["FastAPI", "Next.js", "React Native", "PostgreSQL", "Redis", "Celery", "TensorFlow", "Docker", "Kubernetes", "Terraform"],
    metrics: ["220+ Files", "National Deployment Ready", "Kenya DPA 2019 Compliant", "Multi-county Routing"],
    features: [
      "Real-time Incident Reporting",
      "AI-Driven Classification & Routing",
      "Multi-channel Access (Web, Mobile, SMS, USSD)",
      "Privacy & Compliance Framework",
      "Analytics & Heatmap Visualization",
      "Government System Integration"
    ],
    challenges: [
      "Privacy & Compliance: Built-in consent management, audit trails, data retention policies",
      "AI Trust: Confidence gating, human override systems, explainability features",
      "Scale: Multi-region support, degraded mode operations, feature flags",
      "Interoperability: DHIS2, police OB systems, county dashboards"
    ],
    githubUrl: "https://github.com/denishomondi00-create/safewatch-kenya",
    featured: true,
    image: "/images/projects/safewatch-hero.png"
  },
  {
    id: "2",
    title: "Afya-OS",
    slug: "afya-os",
    category: "AI/ML",
    tagline: "AI-assisted clinical decision support for community health workers",
    description: "An offline-first medical operating system running quantized LLaMA 3.2 models on mid-range Android devices to provide clinical guidance in zero-connectivity zones.",
    problem: "Community health workers in rural Kenya lack real-time clinical decision support, leading to delayed diagnoses and unnecessary referrals.",
    solution: "Offline-first mobile platform with on-device AI (LLaMA 3.2) providing voice-enabled symptom assessment, IMCI-compliant diagnosis, and intelligent referral routing.",
    tech: ["React Native", "Node.js", "GraphQL", "LLaMA 3.2", "Whisper STT", "PostgreSQL", "Prisma", "TensorFlow", "Docker", "Terraform"],
    metrics: ["2.1GB On-device Model", "100% Offline Capability", "15K Clinical Cases Dataset", "IMCI Compliant"],
    features: [
      "On-device AI inference (no internet required)",
      "Swahili voice input via Whisper",
      "IMCI protocol compliance",
      "Offline case management",
      "DHIS2/eCHIS integration",
      "Outbreak detection analytics"
    ],
    challenges: [
      "On-device AI: Runs without internet using GGUF quantization",
      "Voice Interface: Rural-optimized noise cancellation",
      "Safety Controls: Red flag detection, fallback to manual protocols",
      "Clinical Validation: Physician review benchmarks, adverse event reporting"
    ],
    githubUrl: "https://github.com/denishomondi00-create/Afya-OS",
    featured: true,
    image: "/images/projects/afya-dashboard.png"
  },
  {
    id: "3",
    title: "Automation Workflows",
    slug: "automation-workflows",
    category: "Automation",
    tagline: "Production automation tools eliminating repetitive manual tasks",
    description: "Python-based automation suite for Excel report generation, data cleaning, and API integrations, delivering up to 90% time reduction in routine workflows.",
    problem: "Manual reporting and fragmented data processes slow organizations, introduce errors, and reduce operational visibility.",
    solution: "Python-based automation suite for Excel report generation, data cleaning, and API integrations, delivering up to 90% time reduction in routine workflows.",
    tech: ["Python", "Pandas", "NumPy", "OpenPyXL", "XlsxWriter", "REST APIs", "Pytest"],
    metrics: ["90% Manual Time Reduction", "Zero-Error Output", "32hrs/month Saved", "Production-Ready"],
    features: [
      "Excel Report Automation",
      "Data Cleaning Pipelines",
      "REST API Integrations",
      "Scheduled Workflow Execution",
      "Error Handling & Retries",
      "Audit Logging"
    ],
    challenges: [
      "Deterministic processing for compliance",
      "Error handling and retry logic",
      "Multi-system data synchronization",
      "Production-grade reliability"
    ],
    githubUrl: "https://github.com/denishomondi00-create/automation-workflows",
    featured: false,
    image: "/images/projects/automation-screenshot.png"
  },
  {
    id: "4",
    title: "IoT Monitoring System",
    slug: "iot-monitoring",
    category: "IoT",
    tagline: "Real-time embedded sensing and visualization platform",
    description: "A hardware-to-cloud monitoring solution utilizing ESP32 microcontrollers to stream environmental data via MQTT to a real-time React dashboard.",
    problem: "Environmental and operational monitoring requires reliable real-time data collection from physical sensors with live visibility.",
    solution: "End-to-end IoT platform spanning firmware, data transmission, backend processing, and live dashboards for environmental monitoring.",
    tech: ["C/C++", "Arduino", "ESP32", "Python", "MQTT", "SQLite", "PostgreSQL", "React"],
    metrics: ["Real-time Latency < 500ms", "Low-power Deep Sleep", "Industrial Ready", "Multi-sensor Support"],
    features: [
      "Multi-sensor data acquisition",
      "MQTT/Wi-Fi data transmission",
      "Real-time visualization",
      "Historical trend analysis",
      "Threshold-based alerts",
      "Offline buffering"
    ],
    challenges: [
      "Hardware-software integration",
      "Serial/MQTT communication protocols",
      "Sensor calibration and noise filtering",
      "Real-time data pipelines",
      "Power-efficient sampling"
    ],
    githubUrl: "https://github.com/denishomondi00-create/iot-monitoring-system",
    featured: false,
    image: "/images/projects/iot-monitoring.png"
  }
];

export function getFeaturedProjects() {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByCategory(category: string) {
  if (category === "All") return projects;
  return projects.filter(p => p.category === category);
}
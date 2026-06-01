import type { Project } from "../types";

// screenshots convention: public/projects/<slug>/01.png, 02.png, …
// Add a `screenshots` array to a project once you've placed images in the folder.

export const FEATURED: Project[] = [
  {
    title: "VSULHS Connect System",
    description:
      "A full-stack guidance information system I built as Full-Stack Developer & AI Engineer, with secure role-based access and an AI assistant.",
    highlights: [
      "Row-Level Security for role-based student data access",
      "Offline-resilient layer with Service Workers and IndexedDB",
      "RAG-based AI assistant with pgvector and hybrid relational/vector storage",
    ],
    tags: ["Nuxt.js", "Supabase", "PostgreSQL", "pgvector", "RAG"],
    image: "/projects/vsulhs-connect-system/01.png",
    // screenshots: [
    //   "/projects/vsulhs-connect-system/01.png",
    //   "/projects/vsulhs-connect-system/02.png",
    //   "/projects/vsulhs-connect-system/03.png",
    //   "/projects/vsulhs-connect-system/04.png",
    //   "/projects/vsulhs-connect-system/05.png",
    //   "/projects/vsulhs-connect-system/06.png",
    //   "/projects/vsulhs-connect-system/07.png",
    //   "/projects/vsulhs-connect-system/08.png",
    //   "/projects/vsulhs-connect-system/09.png",
    //   "/projects/vsulhs-connect-system/10.png",
    //   "/projects/vsulhs-connect-system/11.png",
    //   "/projects/vsulhs-connect-system/12.png",
    // ],
    liveUrl: "https://vsu-lhs-connect-system-amber.vercel.app/auth/login",
    //codeUrl: "#",
  },
    {
    title: "USSC Connect",
    description:
      "A university-wide attendance and clearance management system for the VSU Supreme Student Council used by thousands of users.",
    highlights: [
      "Led 3 frontend developers on a 10-person team",
      "Delivered core layouts, maintenance mode UI, receipt flows, and bulk import dialogs",
      "Drove responsiveness and accessibility end to end",
      "Enforced design consistency through structured refactors",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Frontend Lead"],
    image: "/projects/ussc-connect/01.png",
      screenshots: [
      "/projects/ussc-connect/01.png",
      "/projects/ussc-connect/02.png",
      "/projects/ussc-connect/03.png",
      "/projects/ussc-connect/04.png",
      "/projects/ussc-connect/05.png",
      "/projects/ussc-connect/06.png",
      "/projects/ussc-connect/07.png",
      "/projects/ussc-connect/08.png",
      "/projects/ussc-connect/09.png",
      "/projects/ussc-connect/10.png",
      "/projects/ussc-connect/11.png",
      "/projects/ussc-connect/12.png",
    ],
    liveUrl: "https://ussc-connect.fc-ssc.online/",
    codeUrl: "https://github.com/Atlas-VSU/coral-ussc",
  },
    {
    title: "Centralized Online Record for Attendance and Logging (CORAL)",
    description:
      "An event and attendance management system for university organizations, where I served as UI/UX & Frontend Lead on a 4-person team.",
    highlights: [
      "Established component architecture and design consistency via refactors",
      "Shipped end-to-end features through heavily reviewed PRs",
      "Drove responsiveness and accessibility from implementation to merge",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Frontend Lead"],
    image: "/projects/coral/01.png",
    screenshots: [
      "/projects/coral/01.png",
      "/projects/coral/02.png",
      "/projects/coral/03.png",
      "/projects/coral/04.png",
      "/projects/coral/05.png",
      "/projects/coral/06.png",
      "/projects/coral/07.png",
      "/projects/coral/08.png",
      "/projects/coral/09.png",
      "/projects/coral/10.png",
      "/projects/coral/11.png",
      "/projects/coral/12.png",
      "/projects/coral/13.png",
      "/projects/coral/14.png",
      "/projects/coral/15.png",
    ],
    liveUrl: "https://checka-org.vercel.app/",
    codeUrl: "https://github.com/SSKiyan25/sams-dev",
  },
    {
    title: "DormPay",
    description:
      "A campus dormitory billing system where I served as UI/UX & Frontend Lead, building the core admin experience and billing utilities.",
    highlights: [
      "Built the core admin and super admin UI",
      "Built bulk billing/fine import utilities and automation-facing interfaces",
      "Mobile-first responsive improvements across admin and dormer pages",
      "Consistent loading/empty states and branding updates",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Frontend Lead"],
    image: "/projects/dormpay/01.png",
    // screenshots: [
    //   "/projects/dormpay/01.png",
    //   "/projects/dormpay/02.png",
    //   "/projects/dormpay/03.png",
    // ],
    liveUrl: "https://dorm-payment-system.vercel.app/",
    codeUrl: "https://github.com/vsUrhuel/everest",
  },
  {
    title: "PawsMatch",
    description:
      "A pet adoption and surrender management system built with Flutter, where I worked as Project Manager & Lead Developer.",
    highlights: [
      "Led a multidisciplinary team and resolved Git conflicts under tight deadlines",
      "Orchestrated data processing, authentication, and CRUD operations",
      "Built adoption/surrender workflows with approval logic and org-based permissions",
      "Oversaw design, implementation, and docs across all phases",
    ],
    tags: ["Flutter", "Dart", "Firebase", "Project Lead"],
    image: "/projects/pawsmatch/01.png",
    screenshots: ["/projects/pawsmatch/01.png", "/projects/pawsmatch/02.png"],
    // Add more: "/projects/pawsmatch/03.png", etc.
    liveUrl: "https://web-zeta-pied.vercel.app/",
    codeUrl: "https://github.com/repromantics01/pawsmatch",
  },
  {
    title: "CrackScope",
    description:
      "A computer vision system for automated structural crack detection and preventative maintenance, built as CV & ML Engineer.",
    highlights: [
      "Computer vision pipeline in Keras and Python for crack detection",
      "MobileNetV2 with custom layers and ImageNet weights for binary classification",
      "Severity scoring from model confidence and crack-area estimation, producing urgency tiers",
    ],
    tags: ["Python", "Keras", "TensorFlow", "Computer Vision"],
    image: "/projects/crackscope/01.png",
    // screenshots: [
    //   "/projects/crackscope/01.png",
    //   "/projects/crackscope/02.png",
    // ],
    codeUrl: "https://github.com/repromantics01/CrackScope",
  },
  {
    title: "Oviora",
    description:
      "A machine learning web app for PCOS screening with dual Random Forest models for symptom-based and clinical screening.",
    highlights: [
      "Dual Random Forest models for symptom-based and clinical PCOS screening",
      "Engineered domain features: BMI, Waist-Hip Ratio, Symptom Score",
      "Tuned to 0.96 ROC-AUC and 92.7% accuracy",
    ],
    image: "/projects/oviora/01.png",
    // screenshots: [
    //   "/projects/oviora/01.png",
    //   "/projects/oviora/02.png",
    // ],
    tags: ["Python", "Scikit-learn", "Streamlit", "Machine Learning"],
    codeUrl: "https://github.com/repromantics01/Oviora",
  },

];

export const OTHER: Project[] = [
  {
    title: "FUZZY Rusle",
    description:
      "A fuzzy logic-based erosion risk assessment tool using RUSLE soil-loss factors.",
    highlights: [
      "Designed a Mamdani fuzzy inference system with scikit-fuzzy",
      "Classified erosion risk from RUSLE soil-loss factors (R, K, LS, C, P)",
      "Validated across contrasting terrain and vegetation scenarios",
    ],
    tags: ["Python", "scikit-fuzzy", "Machine Learning", "Research"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "GigHub",
    description:
      "A Windows Forms desktop application in C# connecting students with freelance gig opportunities.",
    highlights: [
      "C# Windows Forms desktop app for freelance gig matching",
      "Containerized development with Docker",
      "Optimized MS SQL Server schema for query performance",
      "Authentication and CRUD workflows for gig management",
    ],
    tags: [".NET", "C#", "Docker", "MS SQL Server"],
    //codeUrl: "#",
  },
  {
    title: "ViscAnonymous",
    description: "An anonymous note-sharing website for Viscans. Another focused experiment in frontend development and design.",
    highlights: [
      "Anonymous note-sharing platform built for the Viscan community",
    ],
    tags: ["Vanilla JS", "HTML/CSS3"],
    liveUrl: "https://cloud-app-silkx.vercel.app/",
  },
  {
    title: "Weather Website",
    description: "A focused tool or experiment with weather data using external APIs.",
    highlights: ["A small weather lookup web app."],
    tags: ["Node.js"],
    liveUrl: "weather-website-blue-delta.vercel.app",
    //codeUrl: "#",
  },
];

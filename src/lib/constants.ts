/**
 * PMRG Solution — central content & navigation constants.
 * Single source of truth so pages stay consistent.
 */

export const COMPANY = {
  name: "PMRG Solution",
  shortName: "PMRG",
  legalName: "PMRG Solution LLP",
  tagline: "AI-Powered Telecom & Enterprise Solutions",
  description:
    "PMRG Solution is an AI-driven business and software services company specializing in Telecom BSS/OSS, CRM platforms, and enterprise digital transformation.",
  foundedYear: 2014,
  email: "admin@pmrgsolution.com",
  salesEmail: "admin@pmrgsolution.com",
  phone: "+91 7722017100",
  address: "E2-103, Sr No-296, Revell Orchid, Porwal Pune City, Pune-411047",
  hq: "Pune, India",
  offices: [
    { city: "Pune", country: "India", tz: "GMT+5:30" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/pmrg-solution-llp-24532537a/",
    facebook: "https://www.facebook.com/people/Sugaam-In/pfbid02MDjVo1ZDWVKJBJSR4cvnb5FYV94bXowvYji8nQeKkgez8DnuTQ9w7RE4QoSCjKNcl/",
  },
  url: "https://www.pmrgsolution.com",
} as const;

/** Brand palette (mirrors globals.css custom properties). */
export const COLORS = {
  navy: "#0A0F1C",
  primary: "#1E3A5F",
  accentCyan: "#00D4FF",
  accentViolet: "#7B2FFF",
  accentMint: "#00F5A0",
} as const;

export type NavChild = { label: string; href: string; description: string; icon: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};


export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "BSS/OSS Solutions", href: "/services/bss-oss", description: "Billing, rating, charging & mediation.", icon: "Network" },
      { label: "CRM Platforms", href: "/services/crm", description: "AI-enhanced customer management.", icon: "Users" },
      { label: "Digital Transformation", href: "/services/digital", description: "Modernize legacy systems.", icon: "RefreshCw" },
      { label: "AI & Machine Learning", href: "/services/ai-ml", description: "Predictive analytics & automation.", icon: "BrainCircuit" },
      { label: "Cloud & DevOps", href: "/services/cloud", description: "Scalable infra & CI/CD.", icon: "Cloud" },
      { label: "Custom Software", href: "/services/custom", description: "Bespoke enterprise apps.", icon: "Code2" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "PMRG BSS Suite", href: "/solutions/bss-suite", description: "Unified billing & revenue management.", icon: "Receipt" },
      { label: "PMRG CRM360", href: "/solutions/crm360", description: "AI-powered customer engagement.", icon: "Contact" },
      { label: "PMRG CloudOps", href: "/solutions/cloudops", description: "Infrastructure automation & monitoring.", icon: "Server" },
      { label: "PMRG DataIntel", href: "/solutions/dataintel", description: "Business intelligence & analytics.", icon: "BarChart3" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];


export const SERVICES = [
  {
    id: "bss-oss",
    slug: "bss-oss",
    icon: "Network",
    title: "BSS/OSS Solutions",
    short: "End-to-end billing, rating, charging, and mediation platforms for telecom operators.",
    description:
      "We build and modernize the mission-critical BSS/OSS stack — convergent charging, real-time rating, policy control, order management, and revenue assurance — engineered for 5G and cloud-native telcos.",
    features: [
      "Convergent charging & real-time rating engine",
      "Policy & charging rules function (PCRF)",
      "Order orchestration & catalog-driven provisioning",
      "Mediation & usage data management",
      "Revenue assurance & fraud management",
      "Interconnect & partner settlement",
    ],
    stack: ["Kubernetes", "Kafka", "PostgreSQL", "Redis", "gRPC", "Camel"],
    useCase: {
      title: "Case: 5G slice monetization",
      body: "We helped a tier-2 operator launch slice-based pricing in 11 days using a real-time rating engine — cutting rating latency 80% and unlocking new B2B revenue.",
    },
  },
  {
    id: "crm",
    slug: "crm",
    icon: "Users",
    title: "CRM Platforms",
    short: "AI-enhanced customer relationship management tailored for high-volume enterprises.",
    description:
      "Enterprise-grade CRM platforms that unify sales, service, and marketing with AI-driven insights — built to handle millions of customer records with sub-second response times.",
    features: [
      "360° customer view & unified profiles",
      "AI-driven lead scoring & next-best-action",
      "Omnichannel service desk & ticketing",
      "Marketing automation & journey orchestration",
      "Telecom-native subscription & plan management",
      "Custom dashboards & reporting studio",
    ],
    stack: ["React", "Node.js", "GraphQL", "PostgreSQL", "Elasticsearch", "RabbitMQ"],
    useCase: {
      title: "Case: Churn turnaround at an MVNO",
      body: "Our AI next-best-action engine flagged 92% of at-risk subscribers a quarter early and orchestrated retention offers — reducing monthly churn by 18%.",
    },
  },
  {
    id: "digital",
    slug: "digital",
    icon: "RefreshCw",
    title: "Digital Transformation",
    short: "Modernize legacy systems with cloud-native architectures and intelligent automation.",
    description:
      "From mainframe decommissioning to API-first re-platforming, we guide enterprises through end-to-end digital transformation — de-risking migration while accelerating time-to-value.",
    features: [
      "Legacy modernization & API-first re-platforming",
      "Strangler-fig & domain-driven migration",
      "Microservices & event-driven architecture",
      "Process automation with RPA & workflows",
      "Data lake & analytics platform design",
      "Change management & enablement",
    ],
    stack: ["AWS", "Azure", "Terraform", "Strangler", "Camunda", "Apache Kafka"],
    useCase: {
      title: "Case: Mainframe decommissioning",
      body: "Using a strangler-fig approach, we retired a 20-year-old mainframe order system domain-by-domain with zero downtime and full audit traceability.",
    },
  },
  {
    id: "ai-ml",
    slug: "ai-ml",
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    short: "Predictive analytics, NLP, computer vision, and intelligent process automation.",
    description:
      "Production AI/ML systems — from churn prediction to computer-vision QA — delivered as MLOps pipelines that scale and stay explainable. We turn model experiments into reliable business outcomes.",
    features: [
      "Churn, propensity & lifetime-value prediction",
      "Natural language processing & LLM integration",
      "Computer vision for inspection & QA",
      "Intelligent document processing (OCR + LLM)",
      "Forecasting & anomaly detection",
      "MLOps: CI/CD for models, monitoring & drift",
    ],
    stack: ["TensorFlow", "PyTorch", "MLflow", "Kubeflow", "LangChain", "Hugging Face"],
    useCase: {
      title: "Case: Grid anomaly detection at scale",
      body: "A streaming ML pipeline over 2M smart meters now detects outages and tampering sub-minute — cutting non-technical losses by 31%.",
    },
  },
  {
    id: "cloud",
    slug: "cloud",
    icon: "Cloud",
    title: "Cloud & DevOps",
    short: "Scalable cloud infrastructure, CI/CD pipelines, and container orchestration.",
    description:
      "Cloud-native foundations that scale: infrastructure-as-code, GitOps-driven delivery, observability, and FinOps — so your teams ship faster while keeping spend and risk in check.",
    features: [
      "Multi-cloud architecture (AWS / Azure / GCP)",
      "Infrastructure as Code with Terraform",
      "GitOps CI/CD with ArgoCD & Argo Rollouts",
      "Kubernetes platform engineering",
      "Observability: logs, metrics, traces, SLOs",
      "FinOps cost optimization & governance",
    ],
    stack: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana", "Istio"],
    useCase: {
      title: "Case: FinOps velocity engine",
      body: "GitOps delivery with ArgoCD plus FinOps guardrails doubled a fintech's deploy frequency while reducing cloud spend by 23%.",
    },
  },
  {
    id: "custom",
    slug: "custom",
    icon: "Code2",
    title: "Custom Software Development",
    short: "Bespoke enterprise applications built with modern tech stacks.",
    description:
      "Full-lifecycle custom software — discovery, design, engineering, and support — delivered by cross-functional pods that embed with your teams and ship in tight, transparent iterations.",
    features: [
      "Product discovery & UX design",
      "Web & mobile application engineering",
      "API & integration platform development",
      "Quality engineering & test automation",
      "Staff augmentation & managed pods",
      "Long-term application lifecycle support",
    ],
    stack: ["Next.js", "React Native", "Go", "NestJS", "PostgreSQL", "Playwright"],
    useCase: {
      title: "Case: Headless commerce re-platform",
      body: "We rebuilt a marketplace on a headless, event-driven stack — halving page load time and tripling peak throughput on Black Friday.",
    },
  },
] as const;


export const PRODUCTS = [
  {
    id: "bss-suite",
    slug: "bss-suite", 
    name: "PMRG BSS Suite",
    tagline: "Unified billing & revenue management",
    icon: "Receipt",
    description:
      "A convergent BSS platform unifying product catalog, charging, billing, and partner settlement into a single cloud-native fabric — built for 5G monetization.",
    features: [
      "Catalog-driven product & offer management",
      "Real-time online & offline charging",
      "Invoice generation & dunning",
      "Interconnect & wholesale settlement",
      "Open APIs (TMF Open) for partner integration",
    ],
    metrics: [
      { label: "Throughput", value: "50K TPS" },
      { label: "Avallability", value: "99.99%" },
      { label: "Latency", value: "<8ms" },
    ],
  },
  {
    id: "crm360",
    slug: "crm360",
    name: "PMRG CRM360",
    tagline: "AI-powered customer engagement platform",
    icon: "Contact",
    description:
      "A telecom-native CRM that fuses a 360° customer view with AI-driven next-best-action, omnichannel care, and marketing automation.",
    features: [
      "Unified customer profile & golden record",
      "AI next-best-action & sentiment analysis",
      "Omnichannel service desk (voice, chat, email, social)",
      "Journey orchestration & campaigns",
      "Self-care portal & mobile app",
    ],
    metrics: [
      { label: "CSAT lift", value: "+27%" },
      { label: "First-contact", value: "+34%" },
      { label: "Churn ↓", value: "−18%" },
    ],
  },
  {
    id: "cloudops",
    slug: "cloudops",
    name: "PMRG CloudOps",
    tagline: "Infrastructure automation & monitoring",
    icon: "Server",
    description:
      "A unified platform for provisioning, deploying, and observing your entire cloud estate — GitOps delivery, SLO management, and FinOps in one pane of glass.",
    features: [
      "Self-service provisioning & guardrails",
      "GitOps continuous delivery",
      "Full-stack observability & SLOs",
      "Auto-remediation & runbook automation",
      "Cost visibility & optimization",
    ],
    metrics: [
      { label: "Deploy freq", value: "12×/day" },
      { label: "MTTR", value: "−61%" },
      { label: "Cloud cost", value: "−23%" },
    ],
  },
  {
    id: "dataintel",
    slug: "dataintel",
    name: "PMRG DataIntel",
    tagline: "Business intelligence & analytics platform",
    icon: "BarChart3",
    description:
      "An end-to-end analytics platform — ingestion, modeling, BI, and augmented analytics — that turns raw data into trusted, governed insight across the enterprise.",
    features: [
      "Governed semantic layer & metrics store",
      "Self-serve BI & dashboard studio",
      "Real-time streaming analytics",
      "Augmented analytics with natural language",
      "Embedded analytics & data APIs",
    ],
    metrics: [
      { label: "Query speed", value: "10× faster" },
      { label: "Adoption", value: "4.2× users" },
      { label: "Trust score", value: "99.2%" },
    ],
  },
] as const;



export const STATS: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 99.9, suffix: "%", label: "System Uptime", decimals: 1 },
  { value: 15, suffix: "+", label: "Countries Served" },
];

export const WHY_PMRG = [
  {
    icon: "BrainCircuit",
    title: "AI-First Approach",
    description:
      "AI is woven into every layer — from predictive models in BSS to copilots in CRM — not bolted on as an afterthought.",
  },
  {
    icon: "RadioTower",
    title: "Telecom Domain Expertise",
    description:
      "A decade of deep BSS/OSS experience means we speak rating, mediation, and 5G policy fluently.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2, ISO 27001, and zero-trust by design. Security is engineered in, never audited in.",
  },
  {
    icon: "Headset",
    title: "24/7 Global Support",
    description:
      "Follow-the-sun operations across four delivery centers keep your platforms running around the clock.",
  },
] as const;

export const INDUSTRIES = [
  { icon: "RadioTower", name: "Telecommunications", description: "Operators, MVNOs & digital telcos" },
  { icon: "Landmark", name: "Banking & Finance", description: "Banks, fintech & insurance" },
  { icon: "HeartPulse", name: "Healthcare", description: "Providers, payers & healthtech" },
  { icon: "ShoppingCart", name: "E-Commerce", description: "Marketplaces & D2C brands" },
  { icon: "Building2", name: "Government", description: "Public sector & smart cities" },
  { icon: "Zap", name: "Energy & Utilities", description: "Grid, oil & gas, water" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "PMRG re-platformed our legacy billing stack onto a cloud-native convergent charging engine. We cut rating latency by 80% and shipped a new 5G plan in days, not months.",
    name: "Rajiv Menon",
    title: "CTO",
    company: "Airtel-class Operator",
  },
  {
    quote:
      "Their AI team built a churn model that flagged 92% of at-risk customers a full quarter ahead. The CRM360 next-best-action engine alone moved our CSAT by double digits.",
    name: "Sarah Whitfield",
    title: "VP, Customer Experience",
    company: "Global Telco Group",
  },
  {
    quote:
      "From discovery to production, PMRG operated as a true partner. Their CloudOps platform reduced our cloud spend by 23% while doubling deploy frequency.",
    name: "Daniel Osei",
    title: "Head of Platform",
    company: "FinServ International",
  },
] as const;

export const CLIENTS = [
  "NORTHWIND TELECOM",
  "ATLAS DIGITAL",
  "VERTEX FINANCE",
  "HELIX HEALTH",
  "ORBIS COMMERCE",
  "QUANTUM GRID",
  "MERIDIAN MOBILE",
  "NEXUS PAYMENTS",
] as const;

export const CORE_VALUES = [
  { icon: "Lightbulb", title: "Innovation", description: "We chase the frontier — relentlessly turning emerging tech into durable business value." },
  { icon: "ShieldCheck", title: "Integrity", description: "We say what we'll do and do what we say. Transparency is non-negotiable." },
  { icon: "Gem", title: "Excellence", description: "Craft at every layer. We sweat the details others skip, because quality compounds." },
  { icon: "Handshake", title: "Partnership", description: "We win when you win. Long-term trust over short-term transactions, always." },
] as const;

export const TIMELINE = [
  { year: "2014", title: "Founded in Pune", description: "PMRG starts as a 4-person BSS consultancy serving regional operators." },
  { year: "2016", title: "First Convergent Billing Launch", description: "We deliver our first end-to-end convergent charging platform for an MVNO." },
  { year: "2018", title: "CRM360 Hits the Market", description: "Our telecom-native CRM ships and crosses 1M subscriber profiles under management." },
  { year: "2020", title: "AI Practice Established", description: "We launch a dedicated AI/ML practice, shipping our first churn-prediction platform." },
  { year: "2022", title: "CloudOps & Global Expansion", description: "CloudOps platform debuts; offices open in Dubai, Singapore, and London." },
  { year: "2024", title: "DataIntel & 150+ Projects", description: "DataIntel launches; we cross 150 deliveries across 15+ countries." },
] as const;

export const LEADERSHIP = [
  { name: "Aarav Kapoor", role: "Co-Founder & CEO", initials: "AK" },
  { name: "Meera Nair", role: "Co-Founder & CTO", initials: "MN" },
  { name: "Vikram Shah", role: "Chief Revenue Officer", initials: "VS" },
  { name: "Lena Fischer", role: "VP, AI & Data", initials: "LF" },
  { name: "Daniel Osei", role: "VP, Cloud & DevOps", initials: "DO" },
  { name: "Priya Raman", role: "VP, Delivery", initials: "PR" },
  { name: "Tomás Vega", role: "VP, Engineering", initials: "TV" },
  { name: "Hana Kim", role: "Head of Design", initials: "HK" },
] as const;

export const CASE_STUDIES = [
  {
    slug: "mtc-mobile-info-platform",
    title: "MTC — Mobile Info Platform for MVNO Launch",
    industry: "Telecommunications",
    tag: "BSS/OSS",
    excerpt: "How we built a complete BSS stack from scratch for MTC, enabling rapid MVNO launch with automated billing, provisioning, and self-care.",
    challenge: "MTC needed a fully operational BSS platform to launch as a new MVNO — billing, provisioning, customer management, and compliance — without relying on expensive legacy systems or slow vendor timelines.",
    solution: "PMRG delivered a ground-up BSS suite with real-time convergent charging, automated invoicing, a cashback loyalty wallet, and a digital self-care portal for subscriber management. The platform was built with MVNE integration out of the box.",
    results: ["MVNO launched in under 6 months", "Zero-touch automated invoicing from day one", "Self-care portal reduced support tickets by 40%"],
    tech: ["Node.js", "React", "PostgreSQL", "Docker", "REST APIs"],
    testimonial: "PMRG gave us a BSS platform that let us compete with established operators from day one.",
  },
  {
    slug: "school-buddy-gen-ai",
    title: "School Buddy — Gen-AI Powered Education App",
    industry: "Education & AI",
    tag: "AI & GenAI",
    excerpt: "A Gen-AI application that personalizes learning experiences, automates assessments, and provides intelligent tutoring for students.",
    challenge: "Schools needed a scalable solution to provide personalized learning at scale — addressing diverse student needs without proportionally increasing teaching staff or administrative overhead.",
    solution: "We built School Buddy, a Gen-AI application leveraging large language models for adaptive tutoring, automated quiz generation, and intelligent progress tracking. The platform includes parent dashboards and teacher analytics.",
    results: ["Personalized learning paths for 10,000+ students", "60% reduction in manual assessment workload", "Teachers freed up 8 hours/week for high-impact activities"],
    tech: ["Python", "OpenAI API", "React Native", "FastAPI", "MongoDB"],
    testimonial: "School Buddy didn't replace teachers — it gave them superpowers.",
  },
  {
    slug: "vessel-audit-platform",
    title: "Vessel Audit — Maritime Compliance Web & App",
    industry: "Maritime & Logistics",
    tag: "Web & App Development",
    excerpt: "A full-stack web and mobile application that digitized vessel audits, replacing paper-based inspections with real-time compliance tracking.",
    challenge: "Maritime vessel audits relied on paper forms, offline checklists, and manual data entry — leading to delays, compliance gaps, and costly re-inspections across global fleets.",
    solution: "PMRG developed a cross-platform web and mobile application for real-time vessel audit management. Inspectors capture findings with photos and geo-tags, while fleet managers track compliance status across all vessels from a centralized dashboard.",
    results: ["Audit turnaround reduced from 2 weeks to 48 hours", "90% elimination of paper-based processes", "Real-time compliance visibility across 200+ vessels"],
    tech: ["React", "React Native", "Node.js", "PostgreSQL", "AWS S3"],
    testimonial: "We went from filing cabinets to real-time compliance dashboards. PMRG transformed how we manage audits.",
  },
  {
    slug: "mvno-convergent-billing",
    title: "Convergent Billing for European MVNO",
    industry: "Telecommunications",
    tag: "BSS/OSS",
    excerpt: "A convergent billing platform with real-time charging, automated invoicing, and cashback loyalty — launched for a European MVNO in 5 months.",
    challenge: "A European MVNO needed a flexible billing engine that could handle prepaid, postpaid, and hybrid plans with real-time balance management — without the cost and lock-in of legacy BSS vendors.",
    solution: "We delivered PMRG's convergent billing platform with real-time rating, multi-currency invoicing, cashback loyalty wallets, and a subscriber self-care portal. The system integrates seamlessly with the host MNO's MVNE platform.",
    results: ["Real-time charging across prepaid and postpaid", "Cashback wallet drove 22% increase in ARPU", "5-month launch timeline from contract to go-live"],
    tech: ["Go", "Redis", "Kafka", "PostgreSQL", "Kubernetes"],
    testimonial: "PMRG delivered the billing flexibility we needed to differentiate in a competitive market.",
  },
  {
    slug: "crm-telecom-operator",
    title: "CRM Transformation for Regional Operator",
    industry: "Telecommunications",
    tag: "CRM",
    excerpt: "Unified CRM with lead tracking, SLA management, and integrated ticketing — replacing 4 disconnected tools for a regional telecom.",
    challenge: "A regional operator was managing customer relationships across 4 disconnected tools — a CRM, a ticketing system, a call logger, and spreadsheets. Agent productivity was low and customer satisfaction suffered.",
    solution: "PMRG implemented a unified CRM platform with lead and deal tracking, integrated call/email logging, an SLA management engine, customizable sales pipelines, and performance analytics dashboards for management.",
    results: ["4 tools consolidated into 1 platform", "Agent handle time reduced by 35%", "CSAT score improved from 3.2 to 4.5"],
    tech: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "Docker"],
    testimonial: "Our agents finally have a single view of every customer. The difference in productivity is remarkable.",
  },
  {
    slug: "erp-manufacturing-firm",
    title: "ERP Implementation for Manufacturing Firm",
    industry: "Manufacturing",
    tag: "ERP",
    excerpt: "End-to-end ERP covering finance, inventory, procurement, and HR — streamlining operations for a 500-employee manufacturer.",
    challenge: "A mid-sized manufacturer managed finance, inventory, procurement, and payroll on separate legacy systems with manual data transfers. Month-end closing took 12 days and procurement visibility was poor.",
    solution: "PMRG deployed a comprehensive ERP covering finance & accounting, sales & order management, inventory & procurement, and HR & payroll — with automated workflows and real-time dashboards.",
    results: ["Month-end closing reduced from 12 days to 3", "Procurement cycle time cut by 45%", "Real-time inventory accuracy improved to 99.2%"],
    tech: ["React", "Python", "PostgreSQL", "Redis", "Docker"],
    testimonial: "PMRG didn't just install software — they re-engineered how we run our business.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "building-bss-from-scratch-mvno",
    title: "Building a BSS Platform from Scratch: Lessons from Launching MVNOs",
    excerpt: "Legacy BSS vendors charge millions and take years. Here's how we build modern billing and provisioning systems that launch operators in months.",
    category: "Telecom",
    date: "2026-06-15",
    readTime: "9 min read",
  },
  {
    slug: "gen-ai-education-personalized-learning",
    title: "How Gen-AI Is Transforming Personalized Learning in Schools",
    excerpt: "From adaptive tutoring to automated assessments — a deep dive into building School Buddy and what we learned about AI in education.",
    category: "AI & ML",
    date: "2026-06-01",
    readTime: "10 min read",
  },
  {
    slug: "mvne-integration-guide",
    title: "MVNE Integration: The Technical Blueprint for Virtual Operators",
    excerpt: "Connecting your BSS to an MVNE platform involves provisioning APIs, mediation layers, and real-time charging hooks. Here's the complete guide.",
    category: "Telecom",
    date: "2026-05-18",
    readTime: "8 min read",
  },
  {
    slug: "crm-unified-customer-view",
    title: "The Unified Customer View: Why Your CRM Needs a Single Pane of Glass",
    excerpt: "Most operators manage customers across 4+ tools. We explain why unified CRM with integrated ticketing and SLA tracking changes everything.",
    category: "Digital Transformation",
    date: "2026-05-02",
    readTime: "7 min read",
  },
  {
    slug: "self-care-portal-reducing-support-costs",
    title: "Digital Self-Care Portals: Cutting Support Costs by 40%",
    excerpt: "Subscribers want to check balances, change plans, and raise complaints without calling support. Here's how to build a portal that actually works.",
    category: "Telecom",
    date: "2026-04-14",
    readTime: "6 min read",
  },
  {
    slug: "erp-implementation-lessons",
    title: "ERP Implementation: 5 Hard Lessons from the Manufacturing Floor",
    excerpt: "Finance, inventory, procurement, and HR under one roof sounds simple. Getting adoption right is the real challenge — here's what we've learned.",
    category: "Digital Transformation",
    date: "2026-03-28",
    readTime: "8 min read",
  },
  {
    slug: "cashback-loyalty-wallets-telecom",
    title: "Cashback Loyalty Wallets: Boosting ARPU for Telecom Operators",
    excerpt: "How integrated cashback and loyalty programs inside BSS platforms drive subscriber engagement and increase average revenue per user.",
    category: "Telecom",
    date: "2026-03-10",
    readTime: "7 min read",
  },
  {
    slug: "digitizing-maritime-compliance",
    title: "From Paper to Platform: Digitizing Maritime Vessel Audits",
    excerpt: "Paper-based inspections cost the maritime industry millions in delays. We share how mobile-first audit platforms are changing compliance.",
    category: "Industry News",
    date: "2026-02-20",
    readTime: "6 min read",
  },
  {
    slug: "cloud-migration-enterprise-apps",
    title: "Cloud Migration for Enterprise Apps: A Practical Playbook",
    excerpt: "Moving legacy business applications to the cloud isn't a lift-and-shift job. Here's the phased approach that minimizes risk and maximizes ROI.",
    category: "Cloud",
    date: "2026-02-05",
    readTime: "9 min read",
  },
] as const;

export const JOB_LISTINGS = [
  { title: "Senior Backend Engineer (Go)", department: "Engineering", location: "Pune / Remote", type: "Full-time", description: "Build the charging core of our BSS Suite in Go and Kubernetes." },
  { title: "AI/ML Engineer — NLP & LLMs", department: "AI & Data", location: "Remote", type: "Full-time", description: "Productionize LLM features across CRM360 and DataIntel." },
  { title: "Cloud Platform Engineer", department: "Cloud & DevOps", location: "Dubai / Remote", type: "Full-time", description: "Own the CloudOps platform — Kubernetes, GitOps, observability." },
  { title: "Frontend Engineer (React/Next.js)", department: "Engineering", location: "Pune", type: "Full-time", description: "Craft premium, accessible UIs across our product suite." },
  { title: "Telecom BSS Solutions Architect", department: "Solutions", location: "Singapore", type: "Full-time", description: "Shape convergent-charging architectures for tier-1 operators." },
  { title: "DevSecOps Engineer", department: "Cloud & DevOps", location: "London / Remote", type: "Full-time", description: "Embed zero-trust security into CI/CD and platform engineering." },
  { title: "Product Designer", department: "Design", location: "Pune / Remote", type: "Full-time", description: "Define the design language for enterprise-grade products." },
  { title: "Technical Program Manager", department: "Delivery", location: "Pune", type: "Full-time", description: "Drive complex, multi-team delivery for enterprise clients." },
] as const;

export const BENEFITS = [
  
] as const;

export const BLOG_CATEGORIES = ["All", "AI & ML", "Telecom", "Digital Transformation", "Cloud", "Industry News"] as const;
export const CASE_STUDY_FILTERS = ["All", "Telecommunications", "Education & AI", "Maritime & Logistics", "Manufacturing"] as const;
export const SERVICE_INTERESTS = [
  "BSS/OSS Solutions",
  "CRM Platforms",
  "Digital Transformation",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Custom Software Development",
  "Not sure yet — help me decide",
] as const;
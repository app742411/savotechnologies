import { Service, Industry, Solution, Product, CaseStudy, Blog, Career, FAQItem, Testimonial, TeamMember, Award, Partner } from '../types';

export const services: Service[] = [
  {
    slug: 'cloud-migration',
    title: 'Cloud Architecture & Migration',
    shortDescription: 'Secure, scalable, and resilient cloud solutions tailored for modern global enterprises.',
    description: 'We help global companies migrate legacy systems, orchestrate multi-cloud infrastructures, and build cloud-native applications that drive efficiency, lower costs, and maximize service uptime.',
    icon: 'Cloud',
    image: '/images/services/cloud-migration.jpg',
    features: [
      'Multi-cloud strategy (AWS, Azure, GCP)',
      'Legacy-to-Cloud lift & shift or refactoring',
      'Infrastructure as Code (IaC) implementation',
      'Continuous compliance & security posture management'
    ],
    benefits: [
      'Reduce infrastructure overhead by up to 35%',
      '99.99% operational uptime SLA',
      'Elastic scalability to handle dynamic traffic spikes',
      'Automated disaster recovery & backups'
    ],
    technologies: ['Terraform', 'Kubernetes', 'Docker', 'AWS', 'Microsoft Azure', 'Google Cloud']
  },
  {
    slug: 'enterprise-software',
    title: 'Enterprise Software Development',
    shortDescription: 'High-performance, secure software designed for mission-critical operations.',
    description: 'We develop bespoke enterprise systems that streamline workflows, integrate disparate data silos, and scale dynamically with your business growth. Engineered with modern microservice architectures.',
    icon: 'Cpu',
    image: '/images/services/enterprise-software.jpg',
    features: [
      'Custom ERP and CRM custom modules',
      'Highly concurrent distributed system design',
      'Enterprise application integration (EAI)',
      'Legacy system modernization & API enablement'
    ],
    benefits: [
      'Increase departmental productivity by 40%',
      'Eliminate manual data entry errors across departments',
      'Bank-grade security protocols built into the core',
      'Seamless integration with existing enterprise software packages'
    ],
    technologies: ['Java / Spring Boot', 'Go', 'Next.js', 'PostgreSQL', 'Apache Kafka', 'GraphQL']
  },
  {
    slug: 'ai-automation',
    title: 'AI & Intelligent Automation',
    shortDescription: 'Harness the power of machine learning and LLMs to automate complex operations.',
    description: 'From predictive maintenance algorithms to custom generative AI search tools, we build intelligent automation flows that transform how your enterprise utilizes knowledge and automates routine decisions.',
    icon: 'BrainCircuit',
    image: '/images/services/ai-automation.jpg',
    features: [
      'Natural Language Processing & custom LLM fine-tuning',
      'Computer Vision for manufacturing quality control',
      'Predictive analytics & demand forecasting models',
      'Robotic Process Automation (RPA) integrations'
    ],
    benefits: [
      'Automate up to 70% of repetitive data processing tasks',
      'Gain real-time foresight with >92% forecasting accuracy',
      'Elevate user experience with smart self-service chatbots',
      'Supercharge employee productivity with co-pilot tools'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI API', 'Hugging Face', 'LangChain']
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security & Compliance',
    shortDescription: 'Protect your enterprise assets with state-of-the-art security systems.',
    description: 'Comprehensive risk assessments, continuous threat monitoring, and rapid response systems tailored to meet strict regulatory compliance structures including GDPR, HIPAA, SOC 2, and PCI-DSS.',
    icon: 'ShieldCheck',
    image: '/images/services/cyber-security.jpg',
    features: [
      '24/7 Security Operations Center (SOC) monitoring',
      'Zero-Trust network architecture design',
      'Penetration testing & vulnerability audits',
      'Regulatory compliance mapping and reporting'
    ],
    benefits: [
      'Prevent costly data breaches and downtime incidents',
      'Achieve SOC 2 and ISO 27001 readiness rapidly',
      'Ensure customers of your absolute data safety commitment',
      'Minimize response time to cyber threats to under 15 minutes'
    ],
    technologies: ['Wazuh', 'Splunk', 'AWS IAM', 'Cloudflare Enterprise', 'Okta', 'HashiCorp Vault']
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    shortDescription: 'Transform raw data lakes into actionable executive insights.',
    description: 'We orchestrate robust data pipelines, clean complex unstructured data, and deliver intuitive real-time dashboards that empower C-level executives to make data-backed strategic decisions.',
    icon: 'BarChart3',
    image: '/images/services/data-analytics.jpg',
    features: [
      'Data warehousing & ETL pipeline orchestration',
      'Real-time streaming analytics systems',
      'Interactive executive BI dashboard design',
      'Customer behavior and marketing attribution mapping'
    ],
    benefits: [
      'Unlock hidden revenue streams within transactional data',
      'Reduce report generation time from weeks to seconds',
      'Monitor company performance KPI updates in real-time',
      'Improve customer retention rates through churn prediction models'
    ],
    technologies: ['Snowflake', 'dbt', 'Apache Spark', 'PowerBI', 'Tableau', 'ClickHouse']
  }
];

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    shortDescription: 'HIPAA-compliant, highly secure digital health solutions.',
    description: 'Building secure healthcare portals, telemedicine systems, electronic health record integrations, and AI clinical diagnostic tools designed to improve patient outcomes and simplify clinical workflows.',
    icon: 'Activity',
    image: '/images/industries/healthcare.jpg',
    challenges: [
      'Fragmented patient data and legacy silos',
      'Stringent regulatory compliance requirements (HIPAA, GDPR)',
      'High administrative overhead for medical professionals'
    ],
    solutions: [
      'Interoperable FHIR-compliant API middleware solutions',
      'End-to-end encrypted telehealth consultation platform',
      'AI-powered clinical documentation drafting assistants'
    ],
    results: [
      '30% reduction in patient intake scheduling friction',
      '100% adherence to medical data privacy regulations',
      'Over 2 hours saved daily per clinician on paperwork'
    ]
  },
  {
    slug: 'finance',
    title: 'Banking, Finance & Insurance',
    shortDescription: 'Secure high-frequency banking infrastructure and fintech tools.',
    description: 'Accelerate digital transformation in banking. From core ledger systems to secure trading applications and fraud detection networks, we design systems that handle massive transactional throughput.',
    icon: 'DollarSign',
    image: '/images/industries/finance.jpg',
    challenges: [
      'Complex cyber threat landscapes & sophisticated fraud attempts',
      'Slowing legacy infrastructure limits market agility',
      'Intensified regulatory compliance overhead'
    ],
    solutions: [
      'Real-time anomaly detection using machine learning models',
      'Modern cloud-native microservices architecture replacing core mainframe dependencies',
      'Automated audit log generation and compliance verification tools'
    ],
    results: [
      '94% fraud detection accuracy before transactions settle',
      '60% reduction in transaction latency speeds',
      'SOC 2 compliance attained with automated evidence collection'
    ]
  },
  {
    slug: 'retail',
    title: 'Retail & Global E-Commerce',
    shortDescription: 'Omnichannel commerce platforms built for millions of concurrent customers.',
    description: 'Empower retail brands to deliver unified customer experiences across web, mobile, and physical stores. Scaling inventory management, personalized recommendation tools, and global cart systems.',
    icon: 'ShoppingBag',
    image: '/images/industries/retail.jpg',
    challenges: [
      'Handling extreme traffic spikes during holidays and flash sales',
      'Disjointed online and in-store inventory synchronization',
      'High shopping cart abandonment rates'
    ],
    solutions: [
      'Serverless auto-scaling micro-frontends with Next.js edge caching',
      'Real-time distributed database synchronization for inventory tracking',
      'Personalized recommendation engine powered by historical checkout data'
    ],
    results: [
      'Zero downtime experienced during peak seasonal shopping events',
      '18% increase in average order value (AOV) via custom personalization',
      'Real-time inventory synchronization across 500+ physical stores'
    ]
  },
  {
    slug: 'manufacturing',
    title: 'Smart Manufacturing & Logistics',
    shortDescription: 'IoT-enabled tracking, fleet management, and supply chain automation.',
    description: 'Optimize warehouse operations and monitor production lines using IoT integrations. We build software that manages inventory tracking, predictive maintenance, and distribution fleets.',
    icon: 'Factory',
    image: '/images/industries/manufacturing.jpg',
    challenges: [
      'Unexpected machinery breakdowns causing costly production shutdowns',
      'Lack of visibility into international shipping container locations',
      'Manual warehouse management bottlenecking order processing'
    ],
    solutions: [
      'IoT sensor anomaly alerts feeding into machine learning predictors',
      'GPS and RFID automated tracking portals updating real-time cargo locations',
      'Automated warehouse management system integrated with robotic sorters'
    ],
    results: [
      '25% drop in unexpected machinery downtime',
      '100% end-to-end visibility of supply chain transit operations',
      'Double the throughput capability of fulfillment centers'
    ]
  }
];

export const solutions: Solution[] = [
  {
    slug: 'hybrid-cloud',
    title: 'Hybrid Cloud Infrastructure',
    shortDescription: 'Unlock flexibility by bridging on-premise servers with modern public clouds.',
    description: 'We orchestrate hybrid environments that allow sensitive workloads to run in your private database, while leveraging the public cloud for scalable web layers, batch processing, and global CDN distribution.',
    icon: 'Network',
    image: '/images/solutions/hybrid-cloud.jpg',
    features: [
      'Unified network control panel and identity synchronization',
      'Secure site-to-site IPsec VPN tunnels and dedicated line routing',
      'Automated resource scaling policies across public and private nodes',
      'Distributed log aggregation and alert forwarding setup'
    ],
    architecture: [
      'On-premise secure SAN/NAS database clusters',
      'Kubernetes hybrid cluster running with Red Hat OpenShift',
      'Multi-region public cloud clusters for consumer traffic handling',
      'Cloudflare Enterprise DNS and security shield layer'
    ],
    useCases: [
      'Financial services wanting storage control but public-facing mobile app capability',
      'Government agencies complying with data localization laws',
      'Healthcare enterprises managing patient database networks'
    ]
  },
  {
    slug: 'erp-solutions',
    title: 'Enterprise Resource Planning (ERP)',
    shortDescription: 'Unify company operations into one secure, real-time database system.',
    description: 'A modular, high-performance ERP tailored to automate payroll, inventory management, supply procurement, and financial reporting across international operations.',
    icon: 'Layers',
    image: '/images/solutions/erp-solutions.jpg',
    features: [
      'Automated ledger entries based on physical warehouse events',
      'Global multi-currency payroll accounting systems',
      'Procurement request workflow approval automation',
      'Detailed strategic executive KPI custom report generation'
    ],
    architecture: [
      'Microservices structured API server running on Go',
      'High-availability PostgreSQL database with read-replicas',
      'Real-time message broker using Apache Kafka',
      'Next.js 15 Client Admin Dashboard interface'
    ],
    useCases: [
      'Manufacturing firms seeking unified material tracking',
      'Retail groups requiring multi-store inventory centralization',
      'Professional services firm tracking cross-border human capital logs'
    ]
  },
  {
    slug: 'cx-platforms',
    title: 'Customer Experience Platforms (CX)',
    shortDescription: 'Deliver modern, hyper-personalized experiences across every customer touchpoint.',
    description: 'We combine CRM capabilities, loyalty platforms, and predictive analytics to help your sales, marketing, and support teams present a unified face to your global customer base.',
    icon: 'Heart',
    image: '/images/solutions/cx-platforms.jpg',
    features: [
      '360-degree customer profile consolidation from web, app, and store visits',
      'Real-time behavioral event tracking triggers',
      'AI chatbot support escalation with handoff to human agents',
      'Segmented automated marketing email and push campaigns'
    ],
    architecture: [
      'Decoupled headless CMS architecture',
      'High-velocity data streams managed via Apache Flink',
      'NoSQL vector databases for semantic customer interest lookup',
      'Dynamic Next.js layouts for personalized web assets'
    ],
    useCases: [
      'E-commerce brands seeking higher repeat purchase metrics',
      'Telecom operators looking to minimize user churn rates',
      'Travel portals seeking real-time package booking recommendation capabilities'
    ]
  }
];

export const products: Product[] = [
  {
    slug: 'savohrm',
    title: 'SavoHRM',
    tagline: 'The Modern Workforce Intelligence Platform',
    shortDescription: 'Streamline payroll, onboarding, performance metrics, and shifts within a single corporate portal.',
    description: 'SavoHRM is a comprehensive employee resource management application engineered to handle the complexities of international operations. It automates cross-border tax compliance, tracks benefits package administration, and manages talent development pipelines.',
    icon: 'Users',
    image: '/images/products/savohrm.jpg',
    features: [
      'Cross-border automated multi-currency payroll distribution',
      'Self-service employee document upload and validation',
      'Dynamic shift scheduler with automated notification alerts',
      '360-degree review system with custom question builders'
    ],
    specifications: {
      'Deployment': 'SaaS (Cloud Hosted) or Self-Hosted Private Cloud',
      'Compliance': 'GDPR, SOC 2 Type II, ISO 27001 Certified',
      'SLA': '99.95% Availability Guarantee',
      'Integration': 'REST APIs, Webhooks, Active Directory, SAP, Workday'
    },
    pricing: [
      {
        plan: 'Growth',
        price: '$8',
        period: 'user/month',
        features: ['Up to 500 active employees', 'Basic payroll module', 'Self-service employee portal', 'Email support']
      },
      {
        plan: 'Enterprise',
        price: 'Custom Quote',
        period: 'contact sales',
        features: ['Unlimited employees', 'Advanced global payroll modules', 'Dedicated support engineer', 'Custom integration templates', 'SOC 2 security suite']
      }
    ]
  },
  {
    slug: 'savocrm',
    title: 'SavoCRM',
    tagline: 'AI-Powered Sales & Relationship Intelligence',
    shortDescription: 'Empower sales agents to close deals faster with AI client tracking and automated insights.',
    description: 'SavoCRM goes beyond typical contact databases by using predictive analysis to rank lead quality, summarize email exchanges, suggest optimal follow-up schedules, and forecast team revenue pipeline directly to management dashboards.',
    icon: 'MessageSquare',
    image: '/images/products/savocrm.jpg',
    features: [
      'Automated lead qualification and score grading',
      'Unified communications box (Email, WhatsApp, Phone calls)',
      'Collaborative deal tracking boards with real-time updates',
      'Instant contract generation templates with e-signature options'
    ],
    specifications: {
      'Deployment': 'SaaS Cloud',
      'AI Models': 'Custom fine-tuned GPT and Claude models',
      'Compliance': 'HIPAA-compliant channels, GDPR compliant records',
      'Supported Databases': 'Salesforce migration, HubSpot sync'
    },
    pricing: [
      {
        plan: 'Pro',
        price: '$45',
        period: 'user/month',
        features: ['Lead intelligence tools', 'Shared inbox synchronization', 'Sales forecasting dashboard', 'Standard integrations']
      },
      {
        plan: 'Enterprise Suite',
        price: '$95',
        period: 'user/month',
        features: ['All Pro features', 'Custom fine-tuned AI assistant models', 'Advanced pipeline sandbox environment', 'Dedicated database instance', 'SLA guaranteed support']
      }
    ]
  },
  {
    slug: 'savoops',
    title: 'SavoOps',
    tagline: 'Real-Time IT Operations & Server Health Monitor',
    shortDescription: 'Track server clusters, application performance metrics, and cloud costs in one dashboard.',
    description: 'SavoOps collects real-time hardware status metrics, memory spikes, API failures, and resource usage rates across AWS, Azure, GCP, and on-premise clusters. It uses anomaly detection to issue preventative warnings, preventing downtime incidents.',
    icon: 'Activity',
    image: '/images/products/savoops.jpg',
    features: [
      'Sub-second metrics aggregation from thousands of virtual nodes',
      'Machine learning anomaly triggers preventing server overload',
      'Actionable recommendations to scale down redundant virtual systems',
      'Integration templates for Slack, PagerDuty, and email alerts'
    ],
    specifications: {
      'Agent Compatibility': 'Linux, Windows Server, Kubernetes, Docker daemon',
      'Data Storage': 'Secure, encrypted time-series database storage',
      'Scalability': 'Validated for up to 500,000 active server nodes',
      'API': 'Full REST API capabilities for custom query pulling'
    },
    pricing: [
      {
        plan: 'Basic Node Tracker',
        price: '$15',
        period: 'node/month',
        features: ['Up to 100 nodes monitored', '14-day data retention logs', 'Standard metrics alerts', 'Web dashboard access']
      },
      {
        plan: 'Enterprise Scale',
        price: 'Custom Quote',
        period: 'contact sales',
        features: ['Unlimited nodes', 'Unlimited data retention logs', 'Preventative ML anomaly alerts', 'Dedicated reporting engineers', 'Custom security plugins']
      }
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'erp-implementation',
    title: 'ERP Modernization for Global Logistics Partner',
    client: 'LogiWorld International',
    industry: 'Manufacturing & Logistics',
    challenge: 'LogiWorld was managing multiple regional databases that led to inventory desynchronization, scheduling conflicts, and delayed financial reporting cycles.',
    solution: 'We deployed a custom modular Savo ERP solution that unified inventory, routes, employee scheduling, and customer invoices into a single PostgreSQL database cluster.',
    result: 'The centralized system created absolute transparency on container shipping routes and automated invoicing, eliminating manual spreadsheet consolidation.',
    metrics: [
      { label: 'Inventory Accuracy', value: '99.9%' },
      { label: 'Reporting Time', value: '-80%' },
      { label: 'Annual Cost Savings', value: '$1.4M' }
    ],
    image: '/images/case-studies/erp-implementation.jpg',
    tags: ['ERP', 'PostgreSQL', 'Logistics']
  },
  {
    slug: 'financial-security-compliance',
    title: 'Transitioning Legacy Banking to Zero-Trust Compliance',
    client: 'Apex Capital Bank',
    industry: 'Banking & Finance',
    challenge: 'Faced with rising cyber threat sophistication, Apex Capital needed to secure access controls across 45 regional branches and satisfy strict new data security regulations.',
    solution: 'We restructured their network routing using a Zero-Trust architecture, integrated Okta authentication protocols, and deployed high-performance logging streams to prevent malicious intrusion.',
    result: 'Apex successfully cleared security compliance audits, secured access logs, and blocked attempt trails.',
    metrics: [
      { label: 'Intrusion Rate', value: '0%' },
      { label: 'Audit Setup Time', value: '2 Weeks' },
      { label: 'Incident Response Time', value: '<5 Min' }
    ],
    image: '/images/case-studies/financial-security-compliance.jpg',
    tags: ['Zero-Trust', 'Cyber Security', 'Compliance']
  },
  {
    slug: 'ai-predictive-diagnostics',
    title: 'Deploying Predictive ML Diagnostics in Medical Imaging',
    client: 'St. Jude Imaging Center',
    industry: 'Healthcare & Life Sciences',
    challenge: 'Radiologists were facing high scan review request queues, creating delays in diagnosis confirmations for critical patient categories.',
    solution: 'We designed a computer vision algorithm integrated into their existing diagnostic software that flags high-risk abnormalities for priority review.',
    result: 'The diagnostic assistant streamlined the queue, highlighting high-priority scans to radiologists.',
    metrics: [
      { label: 'Abnormality Detection', value: '98.4%' },
      { label: 'Review Queue Latency', value: '-65%' },
      { label: 'Diagnostics Time Saving', value: '1.5 hrs/day' }
    ],
    image: '/images/case-studies/ai-predictive-diagnostics.jpg',
    tags: ['Machine Learning', 'Computer Vision', 'Healthcare']
  }
];

export const blogs: Blog[] = [
  {
    slug: 'how-ai-transforms-supply-chains',
    title: 'How AI is Transforming Modern Supply Chains',
    excerpt: 'Explore how smart machine learning systems predict inventory needs, map cargo routes, and prevent logistics bottlenecks before they occur.',
    content: '<p>Global supply chains are notoriously volatile, facing sudden demand shifts, maritime disruptions, and resource shortages. Traditionally, operations managers reacted to problems after they happened. However, artificial intelligence is transitioning logistics from a reactive status to proactive forecasting.</p><h3>1. Predictive Stocking</h3><p>By analyzing past buyer habits, local weather patterns, and macroeconomic conditions, machine learning systems predict product demand with high accuracy. This allows warehouses to keep optimal stock levels, eliminating overstocking costs and out-of-stock scenarios.</p><h3>2. Route Optimization</h3><p>AI models analyze traffic patterns, port queues, weather changes, and fuel usage profiles to recommend container routes. Moving routes dynamically saves shipping agencies hours of delay and fuel costs annually.</p>',
    image: '/images/blogs/how-ai-transforms-supply-chains.jpg',
    category: 'Technology',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Head of AI Solutions',
      avatar: '/images/team/sarah-jenkins.jpg'
    },
    publishedAt: '2026-07-15',
    readTime: '5 min read',
    tags: ['AI', 'Supply Chain', 'Logistics']
  },
  {
    slug: 'key-considerations-hybrid-cloud',
    title: 'Key Considerations for Hybrid Cloud Infrastructure',
    excerpt: 'Planning to mix local hardware databases with scalable cloud layers? Learn the best practices for security, network transit, and database sync.',
    content: '<p>For large enterprises, transitioning 100% to the public cloud is not always feasible. Regulatory mandates, custom legacy systems, and database latency make local hardware vital. A hybrid cloud infrastructure offers a balanced solution, but requires careful execution.</p><h3>1. Security Perimeter Consistency</h3><p>Organizations must verify identity and access policies remain uniform across both local nodes and public instances. Inconsistent configurations can create security vulnerabilities.</p><h3>2. Network Latency Management</h3><p>Connecting on-premise databases to cloud layers introduces data travel delays. Utilizing dedicated fibers or edge caching protocols is crucial to prevent user interface lags.</p>',
    image: '/images/blogs/key-considerations-hybrid-cloud.jpg',
    category: 'Cloud Services',
    author: {
      name: 'Marcus Vance',
      role: 'Staff Infrastructure Architect',
      avatar: '/images/team/marcus-vance.jpg'
    },
    publishedAt: '2026-07-20',
    readTime: '7 min read',
    tags: ['Cloud', 'Hybrid Cloud', 'Infrastructure']
  },
  {
    slug: 'future-cyber-security-finance',
    title: 'The Future of Cyber Security in Finance',
    excerpt: 'Regulatory frameworks are evolving. Learn how banking portals are adapting using Zero-Trust policies and automated threat isolation.',
    content: '<p>Modern cyber attacks are becoming increasingly sophisticated, rendering traditional firewalls insufficient. Security operations centers are adopting Zero-Trust frameworks to defend sensitive assets.</p><h3>1. Never Trust, Always Verify</h3><p>Zero-Trust requires active authentication and verification of every user, device, and request attempting access to corporate databases, regardless of whether they connect from inside the office network.</p><h3>2. Automated Threat Isolation</h3><p>If an employee account shows anomalous file download patterns, automated systems immediately isolate that segment to prevent wider damage across the network.</p>',
    image: '/images/blogs/future-cyber-security-finance.jpg',
    category: 'Cyber Security',
    author: {
      name: 'Elena Rostova',
      role: 'Director of Cyber Defense',
      avatar: '/images/team/elena-rostova.jpg'
    },
    publishedAt: '2026-07-28',
    readTime: '6 min read',
    tags: ['Security', 'Finance', 'Compliance']
  }
];

export const careers: Career[] = [
  {
    slug: 'senior-cloud-architect',
    title: 'Senior Cloud Architect',
    department: 'Infrastructure & DevOps',
    location: 'Austin, TX / Remote (US)',
    type: 'Full-time',
    experience: '8+ Years',
    shortDescription: 'We are seeking a cloud solutions architect to lead enterprise cloud migrations and design high-availability hybrid environments.',
    description: 'As a Senior Cloud Architect, you will partner with clients to design resilient multi-cloud strategies, build automation pipelines, and optimize systems for maximum performance and security.',
    requirements: [
      'Expertise in infrastructure orchestration tools like Terraform or CloudFormation',
      'Proven experience managing large Kubernetes environments in production',
      'AWS Solutions Architect Professional or Google Cloud equivalent certifications',
      'Background designing hybrid routing environments and site-to-site tunnels'
    ],
    responsibilities: [
      'Design scalable cloud-native architectures for enterprise customers',
      'Lead deployment projects from scoping to execution stages',
      'Optimize clients cloud spending and improve system response latency metrics',
      'Mentor junior team members on infrastructure best practices'
    ],
    benefits: [
      'Highly competitive salary & equity packages',
      'Comprehensive family medical, dental, and vision coverage',
      '401(k) matching up to 5% with immediate vesting',
      'Annual learning & development allowance of $3,000'
    ]
  },
  {
    slug: 'lead-frontend-engineer',
    title: 'Lead Frontend Engineer (Next.js / TypeScript)',
    department: 'Software Engineering',
    location: 'Remote (Worldwide)',
    type: 'Full-time',
    experience: '6+ Years',
    shortDescription: 'Join our team to build high-performance web applications using Next.js 15, TypeScript, Tailwind, and React.',
    description: 'We are looking for an experienced frontend engineer who cares deeply about UI aesthetics, page performance, SEO patterns, accessibility (WCAG AA), and code reusability.',
    requirements: [
      'Expert level knowledge of React, Next.js (App Router), and TypeScript',
      'Experience optimizing Next.js applications for Lighthouse score metrics (SEO, Accessibility, performance)',
      'Strong eye for premium layout design, smooth animations, and interactive elements',
      'Familiarity with state managers, TanStack Query, and schema validators'
    ],
    responsibilities: [
      'Build reusable UI and layouts for client enterprise web projects',
      'Implement structured schema data markup and clean SEO practices',
      'Conduct code reviews and set frontend quality standards',
      'Coordinate with UI/UX designers to translate Figma frames into responsive web pages'
    ],
    benefits: [
      'Work from anywhere with flexible operating hours',
      'Home office hardware setup stipend ($2,500)',
      'Generous paid time off policy (25 business days annually)',
      'Quarterly team retreats in destinations worldwide'
    ]
  }
];

export const faqs: FAQItem[] = [
  {
    question: 'How do you ensure enterprise-grade security during a cloud migration?',
    answer: 'We employ a strict security-first approach throughout the migration life cycle. This includes encrypting data both in transit (using TLS 1.3) and at rest (using AES-256 with customer-managed keys). We also build Zero-Trust access hierarchies using Identity and Access Management (IAM) controls, run automated vulnerability checks, and ensure compliance structures match regulatory standards like SOC 2, HIPAA, and GDPR.',
    category: 'Security'
  },
  {
    question: 'What is your typical project delivery timeline?',
    answer: 'Timelines vary based on complexity, but typical projects range from 6 to 12 weeks. Small scale integrations or cloud security audits are delivered in 4 weeks, while massive custom ERP builds or multi-region migrations can take 16 weeks or more. We utilize agile sprints to deliver functional milestones every 2 weeks.',
    category: 'Process'
  },
  {
    question: 'Do your products support integration with existing systems like SAP or Workday?',
    answer: 'Yes, all our platforms (SavoHRM, SavoCRM, and SavoOps) are built with open API architectures. They feature pre-built integration connectors for major legacy suites including SAP, Workday, Salesforce, Active Directory, and various databases.',
    category: 'Integrations'
  },
  {
    question: 'How do you approach accessibility compliance (WCAG 2.2)?',
    answer: 'We treat accessibility as a core requirement rather than an afterthought. We ensure semantic HTML tags are structured correctly, build keyboard navigation routes, add helpful ARIA attributes, and verify contrast ratios align with WCAG 2.2 AA guidelines to ensure an inclusive user experience.',
    category: 'Accessibility'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Connor',
    role: 'Chief Technology Officer',
    company: 'LogiWorld International',
    content: 'SavoTech redesigned our global logistics systems, consolidating regional databases into a single corporate portal. The transition was smooth, and our route scheduling efficiency has improved tremendously.',
    avatar: '/images/testimonials/sarah-connor.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'David Miller',
    role: 'VP of Engineering',
    company: 'Apex Capital Bank',
    content: 'Implementing their Zero-Trust architecture allowed our operations to meet strict data privacy standards ahead of schedule. The support team is exceptionally knowledgeable.',
    avatar: '/images/testimonials/david-miller.jpg',
    rating: 5
  }
];

export const awards: Award[] = [
  {
    id: 'aw1',
    title: 'Cloud Innovator of the Year',
    organization: 'Global Tech Awards',
    year: '2025',
    description: 'Recognized for pioneering multi-region hybrid cloud deployment architectures.',
    icon: 'Award'
  },
  {
    id: 'aw2',
    title: 'Best Enterprise Software Suite',
    organization: 'SaaS Digest Enterprise Expo',
    year: '2025',
    description: 'Awarded to SavoHRM for outstanding usability, compliance automation, and enterprise integrations.',
    icon: 'Trophy'
  }
];

export const partners: Partner[] = [
  { name: 'Amazon Web Services', logo: '/images/logos/aws.png', website: 'https://aws.amazon.com' },
  { name: 'Microsoft Azure', logo: '/images/logos/azure.png', website: 'https://azure.microsoft.com' },
  { name: 'Google Cloud Platform', logo: '/images/logos/gcp.png', website: 'https://cloud.google.com' },
  { name: 'Okta Identity Management', logo: '/images/logos/okta.png', website: 'https://okta.com' }
];

export const clients = [
  { name: 'LogiWorld International', logo: '/images/logos/logiworld.png' },
  { name: 'Apex Capital Bank', logo: '/images/logos/apexcapital.png' },
  { name: 'St. Jude Imaging', logo: '/images/logos/stjude.png' },
  { name: 'Omni Retail Group', logo: '/images/logos/omniretail.png' }
];

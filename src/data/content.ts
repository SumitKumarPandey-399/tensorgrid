export type NavLink = {
  label: string
  path: string
}

export type CardItem = {
  title: string
  description: string
  bullets?: string[]
}

export type CaseStudyItem = {
  eyebrow: string
  title: string
  context: string
  quote: string
  attribution: string
  stats: { value: string; label: string }[]
  takeaway: string
  ctaLabel: string
  ctaPath: string
}

export type MetricItem = {
  value: string
  label: string
  detail: string
}

export type ProcessStep = {
  title: string
  description: string
}

export const siteContent = {
  brand: 'TensorGrids',
  footerDescription:
    'TensorGrids delivers AI-led engineering and product systems built for measurable outcomes — from intelligent automation to dependable data platforms.',
  labels: {
    links: 'Links',
    contact: 'Contact',
    menu: 'Menu',
    loadingPage: 'Loading page...',
  },
  contact: {
    email: 'hello@tensorgrid.ai',
    phone: '+91 99887 66554',
    location: 'Bengaluru, India',
  },
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ] as NavLink[],
  navCta: { label: 'Book a demo', path: '/contact' },
}

export const homeContent = {
  hero: {
    credibilityBadge: 'Top-tier delivery cadence · remote-first squad',
    kickerPrimary: 'AI-led product engineering',
    kickerSecondary: 'Outcome owners, not slide decks',
    titleLead: 'AI that actually understands ',
    titleAccent: 'your systems and stakeholders',
    titleTrail:
      ', from messy inputs to audited outputs — with automation where it earns trust and humans where it earns liability.',
    subtitle:
      'We architect ingestion pipelines, retrieval + agents, reconciliation checks, observability, and product surfaces so teams ship intelligence that survives real operations.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'Explore services',
  },
  quote: {
    body:
      'The next frontier is not prettier chatbots — it is making operational knowledge structured, interrogable, and safe to automate so physical and regulated work can move at software speed.',
  },
  partnerLogos: [
    'McDermott',
    'Sapura Energy',
    'Saudi Aramco',
    'ADNOC',
    'Larsen & Toubro',
    'Bechtel',
    'TechnipFMC',
    'Fluor',
    'Worley',
    'Wood',
  ],
  metricHeadline: 'Outcome metrics from recent deployments',
  metrics: [
    { value: '99.5%', label: 'Extraction accuracy SLA', detail: 'contract-backed, production datasets' },
    { value: '11 weeks', label: 'Average delivery acceleration', detail: 'faster handover and launch readiness' },
    { value: '180K+', label: 'Engineering documents processed', detail: 'drawings, certs, datasheets, records' },
  ] as MetricItem[],
  processTitle: 'How we deliver: discover to deployment',
  processSubtitle:
    'A repeatable AI-first delivery model that balances automation speed with domain-engineering quality gates.',
  processSteps: [
    {
      title: 'Discover',
      description:
        'Map business objectives, data realities, compliance boundaries, and the highest-leverage workflows before model selection.',
    },
    {
      title: 'Build',
      description:
        'Design extraction/retrieval pipelines, validation rules, and product surfaces with clear interfaces and measurable KPIs.',
    },
    {
      title: 'Verify',
      description:
        'Run structured QA with human-in-the-loop signoff for safety-critical fields, edge cases, and exception-handling behavior.',
    },
    {
      title: 'Scale',
      description:
        'Deploy to production systems, monitor drift, and continuously improve model behavior with operational telemetry.',
    },
  ] as ProcessStep[],
  industriesTitle: 'Built for high-stakes operating environments',
  industries: [
    'Manufacturing',
    'Energy and utilities',
    'EPC and infrastructure',
    'Industrial automation',
    'Asset-heavy enterprise SaaS',
    'Supply chain and logistics',
  ],
  beyondTitle: 'Beyond the prototype',
  beyondSubtitle:
    'Your systems cannot retire after launch day. TensorGrids couples continuous evaluation, rollback-safe releases, and executive-grade reporting so ROI compounds instead of regressing silently.',
  whatWeDo:
    'We partner with fast-moving teams to architect AI-native products with clear business impact, enterprise reliability, and beautiful user experiences.',
  coreServices: [
    {
      title: 'AI Model Development',
      description: 'Custom multimodal models, evaluation pipelines, and high-performance inference layers.',
    },
    {
      title: 'Robotics & Automation',
      description: 'Autonomous workflows and operational automation engineered for precision and speed.',
    },
    {
      title: 'Web Platforms',
      description: 'High-end product interfaces that operationalize AI across teams and customers.',
    },
  ] as CardItem[],
  reasons: [
    'Research-led engineering team spanning AI, product systems, and platform architecture',
    'Outcome-first delivery with rapid iteration loops and measurable performance goals',
    'Long-term partnership for reliability, optimization, and continuous model improvement',
  ],
  cta: {
    title: 'Ready to launch your next AI breakthrough?',
    description: 'Collaborate with TensorGrids to ship differentiated intelligence experiences faster.',
    actionText: 'Talk to TensorGrids',
    actionPath: '/contact',
  },
  faqPreviewTitle: 'Answers before the first discovery call',
  caseStudies: [
    {
      eyebrow: 'Case study · Industrial intelligence',
      title: 'Faster RCA and fewer surprises on the plant floor',
      context: 'Global manufacturer · predictive operations stack',
      quote:
        'We stopped discovering bad telemetry two weeks late. The reconcile layer alone paid for phase one.',
      attribution: 'VP Operations, Discrete Manufacturing',
      stats: [
        { value: '37%', label: 'Fewer downtime hours' },
        { value: '11', label: 'Weeks faster rollout' },
        { value: '0', label: 'Critical regressions shipped' },
      ],
      takeaway:
        'Ingest plant historians + work orders → agentic RCA copilots with guardrailed synthesis and auditable citations.',
      ctaLabel: 'Read blueprint',
      ctaPath: '/projects',
    },
    {
      eyebrow: 'Case study · Regulated SaaS',
      title: 'Confident launches with retrieval that respects policy',
      context: 'B2B SaaS · security + contractual obligations',
      quote:
        'Finally a copilot stack that cites policy, refuses when uncertain, and lets legal sign without a science project.',
      attribution: 'Head of Trust, Late-stage SaaS',
      stats: [
        { value: '4.9/5', label: 'Deal desk satisfaction' },
        { value: '−62%', label: 'Security review churn' },
        { value: '100%', label: 'Traceability on answers' },
      ],
      takeaway:
        'Hybrid retrieval, signed corpora, human escalations — packaged as reusable components so every product line inherits the posture.',
      ctaLabel: 'See approach',
      ctaPath: '/services',
    },
  ] as CaseStudyItem[],
}

export const servicesContent = [
  {
    title: 'Foundation AI Solutions',
    description:
      'From fine-tuned models to production LLM orchestration, we build AI systems tied to real KPIs.',
    bullets: ['RAG and knowledge systems', 'Copilots and autonomous agents', 'Model evaluation and observability'],
  },
  {
    title: 'Automation Intelligence',
    description:
      'We design robust automation workflows that raise throughput, consistency, and operating resilience.',
    bullets: ['Workflow intelligence engines', 'Human-in-the-loop automation', 'Operations and logistics orchestration'],
  },
  {
    title: 'Predictive Maintenance',
    description:
      'Reduce downtime and service costs with forecasting systems that detect anomalies early.',
    bullets: ['Asset health intelligence', 'Failure prediction models', 'Maintenance scheduling workflows'],
  },
  {
    title: 'AI Product Interfaces',
    description:
      'We craft premium product experiences that surface intelligence clearly and drive confident decisions.',
    bullets: ['Modern React frontends', 'Real-time analytics surfaces', 'Secure API-first architecture'],
  },
  {
    title: 'Mobile Intelligence',
    description:
      'Mobile products that bring AI actions, telemetry, and control loops directly to field teams.',
    bullets: ['Real-time telemetry interfaces', 'Offline-ready workflows', 'Native performance reliability'],
  },
] as CardItem[]

export const aboutContent = {
  title: 'About Us',
  introduction:
    'TensorGrids is an AI product engineering company focused on designing real-world intelligence systems for ambitious teams.',
  visionTitle: 'Vision',
  vision:
    'To make intelligent systems accessible, trustworthy, and impactful across every industry.',
  missionTitle: 'Mission',
  mission:
    'Deliver practical AI and automation products that improve decision-making, productivity, and long-term growth.',
}

export const projectsContent = [
  {
    title: 'Industrial Intelligence Layer',
    description: 'A predictive intelligence platform that detects equipment anomalies before downtime occurs.',
  },
  {
    title: 'Enterprise AI Copilot',
    description: 'A domain-specific agentic assistant that improved support resolution and customer engagement.',
  },
  {
    title: 'Autonomous Workflow Engine',
    description: 'An AI-powered automation system for repetitive operational tasks across distributed teams.',
  },
  {
    title: 'TensorOps Console',
    description: 'A unified intelligence dashboard for model monitoring, insights, and workflow orchestration.',
  },
] as CardItem[]

export const contactContent = {
  heading: 'Contact Our Team',
  subtitle: 'Tell us about your project and we will get back to you shortly.',
  form: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Tell us about your project',
    submitText: 'Send Message',
    detailsTitle: 'Contact Details',
    emailPrefix: 'Email:',
    phonePrefix: 'Phone:',
    locationPrefix: 'Location:',
  },
}

export const faqContent = [
  {
    question: 'Which industries do you serve?',
    answer:
      'We work across manufacturing, logistics, healthcare, retail, and enterprise SaaS.',
  },
  {
    question: 'Do you build custom AI solutions?',
    answer: 'Yes, every implementation is tailored to your data, workflows, and success metrics.',
  },
  {
    question: 'Can you handle full product development?',
    answer:
      'Yes, we support discovery, design, development, deployment, and post-launch optimization.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes, we offer maintenance plans, monitoring, and iterative improvements after delivery.',
  },
  {
    question: 'What is a typical project timeline?',
    answer:
      'Most engagements run 6 to 16 weeks depending on complexity, integrations, and delivery scope.',
  },
]

export const pageHeadings = {
  homePartners: 'Trusted by global teams',
  homeMetrics: 'Proof in numbers',
  homeProcess: 'Delivery model',
  homeIndustries: 'Industries',
  homeCaseStudies: 'Proof in production',
  homeWhatWeDo: 'Capabilities at a glance',
  homeCoreServices: 'Solution accelerators',
  homeWhyChooseUs: 'Operating principles',
  servicesTitle: 'Services',
  servicesSubtitle:
    'Comprehensive AI, robotics, and product engineering services tailored to your business goals.',
  projectsTitle: 'Projects',
  projectsSubtitle: 'Selected work demonstrating practical AI and robotics outcomes.',
  faqTitle: 'Frequently Asked Questions',
}

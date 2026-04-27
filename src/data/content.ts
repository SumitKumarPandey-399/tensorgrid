export type NavLink = {
  label: string
  path: string
}

export type CardItem = {
  title: string
  description: string
  bullets?: string[]
}

export const siteContent = {
  brand: 'TensorGrid',
  footerDescription:
    'Next-generation AI product studio building intelligent systems, agentic workflows, and data-native platforms.',
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
}

export const homeContent = {
  hero: {
    title: 'Build AI Systems That Think, Adapt, and Scale',
    subtitle:
      'TensorGrid designs production-grade intelligence layers across data, automation, and product experiences.',
    ctaPrimary: 'Start a Project',
    ctaSecondary: 'Explore Services',
  },
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
    description: 'Collaborate with TensorGrid to ship differentiated intelligence experiences faster.',
    actionText: 'Talk to TensorGrid',
    actionPath: '/contact',
  },
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
    'TensorGrid is an AI product engineering company focused on designing real-world intelligence systems for ambitious teams.',
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
  homeWhatWeDo: 'What We Do',
  homeCoreServices: 'Core Services',
  homeWhyChooseUs: 'Why Choose Us',
  servicesTitle: 'Services',
  servicesSubtitle:
    'Comprehensive AI, robotics, and product engineering services tailored to your business goals.',
  projectsTitle: 'Projects',
  projectsSubtitle: 'Selected work demonstrating practical AI and robotics outcomes.',
  faqTitle: 'Frequently Asked Questions',
}

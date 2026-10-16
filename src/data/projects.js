export const projects = [
  {
    id: 'cyber-crime-case-management',
    number: '01',
    title: 'Cyber Crime & Case Management System',
    badge: 'CYBERSECURITY',
    category: ['CYBERSECURITY', 'JAVA', 'DATABASE'],
    description:
      'A cybersecurity-focused case management platform designed to organize cyber crime cases, investigation information, evidence, suspects, victims, and case progress in a structured digital environment.',
    problem:
      'Investigation teams often track cyber crime cases across scattered spreadsheets and paper records, making it hard to follow evidence, suspects, and case status in one place.',
    solution:
      'A centralized web platform where investigators register cases, attach evidence and suspect/victim details, and track investigation progress through a defined case-status workflow.',
    features: [
      'Cyber crime case registration',
      'Case tracking',
      'Evidence management',
      'Suspect information',
      'Victim information',
      'Investigation progress',
      'Case status management',
      'Investigator management',
      'Search and filtering',
      'Role-based access',
      'Secure authentication',
      'Case statistics dashboard',
    ],
    tech: [
      { name: 'Java', status: 'done' },
      { name: 'Spring Boot', status: 'done' },
      { name: 'Spring Security', status: 'done' },
      { name: 'REST API', status: 'done' },
      { name: 'MySQL', status: 'done' },
      { name: 'HTML', status: 'done' },
      { name: 'CSS', status: 'done' },
      { name: 'JavaScript', status: 'done' },
    ],
    contribution:
      'Designed the case data model, built the Spring Boot backend and REST endpoints, and implemented role-based authentication for investigators and administrators.',
    result:
      'A working case-management prototype that structures cyber crime investigations from registration through to resolution.',
    github: 'https://github.com/YajneshPoojary28',
    demo: null,
  },
  {
    id: 'ai-sales-analytics-dashboard',
    number: '02',
    title: 'AI Sales Analytics Dashboard',
    badge: 'AI • DATA ANALYTICS',
    category: ['AI / ANALYTICS', 'WEB'],
    description:
      'An interactive sales analytics dashboard designed to transform sales data into meaningful visual insights and support data-driven business decisions.',
    problem:
      'Raw sales data is hard to interpret at a glance, making it difficult for teams to spot trends, top products, and regional performance quickly.',
    solution:
      'A dashboard that visualizes revenue, product performance, customer and regional insights, and sales trends through interactive charts and AI-generated summaries.',
    features: [
      'Sales performance analysis',
      'Revenue tracking',
      'Product analysis',
      'Customer insights',
      'Regional analysis',
      'Sales trends',
      'KPI monitoring',
      'Interactive charts',
      'Data filtering',
      'AI-powered insights',
      'Business performance overview',
    ],
    tech: [
      { name: 'HTML5', status: 'done' },
      { name: 'CSS3', status: 'done' },
      { name: 'JavaScript', status: 'done' },
      { name: 'Data Analytics', status: 'done' },
      { name: 'AI', status: 'done' },
    ],
    contribution:
      'Built the dashboard UI and chart components, and implemented the filtering and KPI logic that drives the visual insights.',
    result:
      'An interactive analytics interface that turns sales datasets into readable visual summaries.',
    github: 'https://github.com/YajneshPoojary28',
    demo: null,
  },
  {
    id: 'smart-tourist-travel-platform',
    number: '03',
    title: 'AI-Based Smart Tourist Travel & Rental Management Platform',
    badge: 'AI • WEB',
    category: ['AI / ANALYTICS', 'WEB', 'DATABASE'],
    description:
      'An AI-based tourism platform for trip planning, vehicle rental, hotel booking, and booking management.',
    problem:
      'Tourists, vendors, and hotel owners typically rely on separate disconnected services for planning trips, renting vehicles, and booking stays.',
    solution:
      'A single multi-role platform connecting tourists, vehicle vendors, and hotel owners, with AI-assisted trip planning and centralized booking management.',
    features: [
      'AI-based trip planning',
      'Vehicle rental',
      'Hotel booking',
      'Booking management',
      'Tourist module',
      'Vendor module',
      'Hotel owner module',
      'Administrator module',
      'Authentication',
      'Role-based access',
    ],
    tech: [
      { name: 'Python', status: 'done' },
      { name: 'Django', status: 'done' },
      { name: 'HTML5', status: 'done' },
      { name: 'CSS3', status: 'done' },
      { name: 'JavaScript', status: 'done' },
      { name: 'Bootstrap 5', status: 'done' },
      { name: 'MySQL', status: 'done' },
      { name: 'SQLite', status: 'done' },
    ],
    contribution: null,
    result: null,
    github: 'https://github.com/YajneshPoojary28',
    demo: null,
  },
  {
    id: 'daily-expense-tracker',
    number: '04',
    title: 'Daily Expense Tracking System',
    badge: 'WEB',
    category: ['WEB', 'DATABASE'],
    description:
      'A web application for recording and managing daily expenses with categorization, budgeting, and spending analysis.',
    problem:
      'Manually tracking daily expenses across notes or spreadsheets makes it difficult to see spending patterns or stick to a budget.',
    solution:
      'A web app for logging expenses under categories, setting budgets, and reviewing spending analysis over time.',
    features: [
      'Expense recording',
      'Expense categorization',
      'Budget planning',
      'Spending analysis',
      'Database management',
    ],
    tech: [
      { name: 'PHP', status: 'done' },
      { name: 'MySQL', status: 'done' },
      { name: 'HTML', status: 'done' },
      { name: 'CSS', status: 'done' },
      { name: 'JavaScript', status: 'done' },
    ],
    contribution: null,
    result: null,
    github: 'https://github.com/YajneshPoojary28',
    demo: null,
  },
]

export const filterOptions = ['ALL', 'WEB', 'JAVA', 'CYBERSECURITY', 'AI / ANALYTICS', 'DATABASE']

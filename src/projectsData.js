export const projects = [
  {
    title: 'AutoLead Pro',
    slug: 'autolead-pro',
    tag: 'Automation',
    category: 'Automation',
    industry: 'Marketing Automation',
    desc: 'AI-driven lead generation and nurturing system with email and WhatsApp workflows powered by OpenAI.',
    tech: ['React', 'Make.com', 'OpenAI API', 'Twilio'],
    results: ['80% reduction in manual tasks', '3x lead conversion rate'],
    color: 'from-purple-500 to-pink-600',
    emoji: '⚡',
    image: '/1.jpg',
    detail: {
      summary: 'AI-first outbound engine that qualifies prospects, nurtures conversations, and moves leads into booked sales meetings.',
      challenge: 'The sales team was manually chasing leads across spreadsheets, email threads, and WhatsApp messages. Follow-ups were inconsistent, response time was slow, and many qualified opportunities were lost before sales reps ever reached them.',
      solution: 'We built a full lead orchestration platform that captures inbound demand, scores intent using AI, personalizes follow-up messages, and sends the right outreach through email and WhatsApp. The pipeline connects form submissions, CRM updates, and automated task creation so sales teams never miss a hot lead.',
      implementation: [
        'AI scoring and segmentation based on lead intent and engagement history.',
        'Automated WhatsApp and email follow-up sequences for each segment.',
        'CRM sync and task automation for sales pipeline visibility.',
        'Campaign analytics to monitor conversion quality and optimize spend.'
      ],
      resultsText: 'The system helped the team respond faster, qualify more accurately, and close more conversations without adding headcount.',
      metrics: [
        { value: '3x', label: 'Lead conversion rate' },
        { value: '80%', label: 'Manual tasks automated' },
        { value: '24/7', label: 'Lead engagement' }
      ]
    }
  },
  {
    title: 'DevBot AI',
    slug: 'devbot-ai',
    tag: 'Automation',
    category: 'Automation',
    industry: 'Customer Support',
    desc: 'Multi-agent conversational AI chatbot integrated with Slack, WhatsApp, and web widget resolving 70% of Tier-1 support tickets.',
    tech: ['Next.js', 'FastAPI', 'LangChain', 'Pinecone'],
    results: ['72% automated resolution rate', 'Instant 24/7 response time'],
    color: 'from-indigo-500 to-blue-600',
    emoji: '🤖',
    image: '/2.jpg',
    detail: {
      summary: 'A customer support agent that resolves the majority of Tier-1 issues automatically while escalating complex cases to human teams.',
      challenge: 'Support teams were inundated with repetitive ticket requests, slow response cycles, and inconsistent answers across channels. Customers were waiting too long for answers, and the team lacked a scalable support layer.',
      solution: 'We designed a conversational AI platform that understands incoming support queries, accesses knowledge sources, and triages issues across Slack, WhatsApp, and web chat. It identifies when a ticket should be escalated, assigns the correct context, and keeps the human team focused on high-value cases.',
      implementation: [
        'Unified support bot across WhatsApp, Slack, and website chat.',
        'Context-aware AI responses using FAQ and product knowledge.',
        'Escalation workflows for high-risk or complex support issues.',
        'Live analytics dashboard for response quality and deflection rate.'
      ],
      resultsText: 'The support organization gained faster resolution times, fewer repetitive manual replies, and significantly better customer satisfaction.',
      metrics: [
        { value: '72%', label: 'Automated resolution' },
        { value: '2.5x', label: 'Faster support turnaround' },
        { value: '24/7', label: 'Coverage' }
      ]
    }
  },
  {
    title: 'InvoiceFlow OCR',
    slug: 'invoiceflow-ocr',
    tag: 'Automation',
    category: 'Automation',
    industry: 'Enterprise Finance',
    desc: 'Robotic Process Automation (RPA) tool parsing invoice attachments, matching lines via OCR, and syncing to ERPs.',
    tech: ['Python', 'AWS Textract', 'Node.js', 'PostgreSQL'],
    results: ['95% faster processing', '$120K saved in admin overhead'],
    color: 'from-cyan-500 to-teal-600',
    emoji: '📄',
    image: '/3.jpg',
    detail: {
      summary: 'Finance automation system for invoice capture, validation, and ERP synchronization using OCR and workflow logic.',
      challenge: 'The finance team was spending hours manually opening invoice emails, extracting totals, matching vendor data, and checking line-item details. Data entry mistakes and delayed approvals caused regular cash-flow friction.',
      solution: 'We built an OCR-driven automation workflow that extracts invoice fields, validates tax and totals, matches vendor records, and routes the invoice for approval. The system then pushes approved records into the ERP with audit-ready logging.',
      implementation: [
        'Document ingestion from email, upload portals, and shared folders.',
        'OCR extraction with validation rules for totals, dates, and vendors.',
        'Approval workflow and ERP integration with transaction logging.',
        'Exception handling for mismatches or partial data capture.'
      ],
      resultsText: 'The process became faster, more accurate, and more transparent across the organization.',
      metrics: [
        { value: '95%', label: 'Faster processing' },
        { value: '$120K', label: 'Saved yearly' },
        { value: '99%', label: 'Validation accuracy' }
      ]
    }
  },
  {
    title: 'DocuParse Compliance',
    slug: 'docuparse-compliance',
    tag: 'Automation',
    category: 'Automation',
    industry: 'Legal Tech',
    desc: 'Intelligent document processing pipeline identifying compliance risks, contract dates, and liability clauses.',
    tech: ['TypeScript', 'LlamaIndex', 'Python', 'AWS S3'],
    results: ['99% extraction accuracy', 'Reduced review cycle by 14 days'],
    color: 'from-blue-500 to-violet-600',
    emoji: '⚖️',
    image: '/4.jpg',
    detail: {
      summary: 'Compliance intelligence tool that reads contracts and internal documents to flag obligations, dates, and legal risk exposures.',
      challenge: 'Legal and compliance teams were manually reviewing contracts and policy documents with a high chance of missing critical dates, penalties, or obligations. Review cycles were slow and inconsistent across departments.',
      solution: 'We built an intelligent document parsing pipeline that scans contract text, identifies legal clauses, highlights risk points, and organizes findings for human review. This accelerated due diligence without sacrificing regulatory accuracy.',
      implementation: [
        'Document ingestion pipeline for scanned PDFs and digital docs.',
        'Clause extraction and policy-risk tagging using AI models.',
        'Searchable review workspace for legal teams.',
        'Compliance reporting across contracts, vendors, and operations.'
      ],
      resultsText: 'The legal team reduced review delays and caught high-risk clauses much earlier in the contract lifecycle.',
      metrics: [
        { value: '99%', label: 'Extraction accuracy' },
        { value: '14 days', label: 'Faster review cycle' },
        { value: '100%', label: 'Clause coverage audit' }
      ]
    }
  },
  {
    title: 'OmniChat Marketing',
    slug: 'omnichat-marketing',
    tag: 'Automation',
    category: 'Automation',
    industry: 'E-Commerce',
    desc: 'Visual drag-and-drop conversational builder for Facebook Messenger and WhatsApp campaign tracking.',
    tech: ['React', 'NestJS', 'MongoDB', 'Meta APIs'],
    results: ['+45% cart recovery rate', '1.2M automated messages sent'],
    color: 'from-fuchsia-500 to-rose-600',
    emoji: '💬',
    image: '/5.jpg',
    detail: {
      summary: 'Campaign automation tool for conversational marketing, cart recovery, and audience engagement across social channels.',
      challenge: 'The marketing team was manually managing campaigns across Messenger and WhatsApp, making it difficult to trigger timely follow-ups and unify customer journeys. Cart abandonment rates were high and campaign analytics were fragmented.',
      solution: 'We created a visual builder to design automated conversational flows, segment audiences, and track message performance. The platform connects directly to customer events and campaign triggers so brands can engage users at the right moment.',
      implementation: [
        'Flow builder for multi-step conversational campaigns.',
        'Audience segmentation and event-triggered messaging.',
        'Message analytics for open rate, conversion, and recovery.',
        'Integration with CRM and ecommerce data.'
      ],
      resultsText: 'It turned conversational messaging into a measurable, repeatable growth channel for online stores.',
      metrics: [
        { value: '+45%', label: 'Cart recovery' },
        { value: '1.2M', label: 'Messages automated' },
        { value: '3x', label: 'Engagement lift' }
      ]
    }
  },
  {
    title: 'ShopVerse Marketplace',
    slug: 'shopverse-marketplace',
    tag: 'Web Dev',
    category: 'Web Dev',
    industry: 'E-Commerce',
    desc: 'High-performance multi-vendor marketplace with secure Stripe Connect, global search, and real-time inventory.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
    results: ['300K+ monthly visitors', '$2.4M GMV in year one'],
    color: 'from-cyan-500 to-blue-600',
    emoji: '🛒',
    image: '/6.jpg',
    detail: {
      summary: 'Multi-vendor commerce platform built to scale product discovery, seller operations, and secure payments for a growing marketplace.',
      challenge: 'The business needed a marketplace that could handle multiple sellers, global inventory complexity, and secure vendor payouts without compromising speed or usability.',
      solution: 'We designed a fast storefront and seller admin system with rich product discovery, inventory synchronization, and Stripe Connect for vendor payouts. The platform balances high performance with clear operational workflows for both visitors and sellers.',
      implementation: [
        'Multi-vendor storefront architecture with role-based dashboards.',
        'Global product search and category browsing improvements.',
        'Stripe Connect payouts and payment security integration.',
        'Inventory sync and order management automation.'
      ],
      resultsText: 'The marketplace became a strong digital retail engine with high traffic growth and consistent revenue expansion.',
      metrics: [
        { value: '300K+', label: 'Monthly visitors' },
        { value: '$2.4M', label: 'Year-one GMV' },
        { value: '4.9/5', label: 'Seller satisfaction' }
      ]
    }
  },
  {
    title: 'Pulse Headless CMS',
    slug: 'pulse-headless-cms',
    tag: 'Web Dev',
    category: 'Web Dev',
    industry: 'SaaS Platform',
    desc: 'Ultra-fast headless content management system for JAMstack sites with real-time preview and CDN delivery.',
    tech: ['React', 'Node.js', 'GraphQL', 'AWS CloudFront'],
    results: ['Sub-100ms API latency', 'Powers 400+ corporate websites'],
    color: 'from-emerald-500 to-cyan-600',
    emoji: '⚡',
    image: '/7.jpg',
    detail: {
      summary: 'Modern content platform for high-velocity marketing teams that need speed, flexibility, and preview tools.',
      challenge: 'Their content workflows were slow because a legacy CMS tied content updates to a monolithic frontend. Teams needed a faster system to push updates globally and support multiple sites.',
      solution: 'We implemented a headless CMS with structured content models, live preview, custom content permissions, and CDN-backed publishing. The result was a content engine optimized for marketing operations and site performance.',
      implementation: [
        'Headless content architecture with API-first schema design.',
        'Real-time preview environment for editors and stakeholders.',
        'CDN-based publishing to maximize global performance.',
        'Role-based workflow for content approvals and versioning.'
      ],
      resultsText: 'Publishing became much faster, more scalable, and more reliable across every digital touchpoint.',
      metrics: [
        { value: '<100ms', label: 'API latency' },
        { value: '400+', label: 'Websites powered' },
        { value: '2x', label: 'Content delivery speed' }
      ]
    }
  },
  {
    title: 'AeroRentals Portal',
    slug: 'aerorentals-portal',
    tag: 'Web Dev',
    category: 'Web Dev',
    industry: 'Travel & Mobility',
    desc: 'Interactive booking application for premium vehicle fleets featuring custom interactive maps and digital key integration.',
    tech: ['Next.js', 'Mapbox API', 'Node.js', 'PostgreSQL'],
    results: ['4.8/5 app rating', '35% increase in online bookings'],
    color: 'from-sky-500 to-indigo-600',
    emoji: '🚗',
    image: '/8.jpg',
    detail: {
      summary: 'Vehicle booking experience designed for premium rentals with live map selection, as-you-go pricing, and frictionless checkout.',
      challenge: 'Customers struggled with a fragmented booking flow, unclear pricing, and poor vehicle availability visibility. The company needed a seamless digital channel to increase conversion and reduce booking drop-offs.',
      solution: 'We created a polished reservation portal with interactive maps, geolocated fleet viewing, real-time inventory checks, and a conversion-focused checkout flow. The result was a smoother rental journey that felt premium and easy to trust.',
      implementation: [
        'Interactive map experience with fleet availability overlays.',
        'Dynamic pricing and rental rules engine.',
        'Booking flow with document verification and digital access control.',
        'Customer confirmation and account management dashboard.'
      ],
      resultsText: 'The business improved both customer trust and conversion through a better booking experience.',
      metrics: [
        { value: '35%', label: 'More online bookings' },
        { value: '4.8/5', label: 'App rating' },
        { value: '28%', label: 'Lower drop-off rate' }
      ]
    }
  },
  {
    title: 'LearnSphere LMS',
    slug: 'learnsphere-lms',
    tag: 'Web Dev',
    category: 'Web Dev',
    industry: 'EdTech',
    desc: 'Video learning management platform with live streaming, course certificates, interactive quiz engine, and dashboards.',
    tech: ['React', 'Mux Video', 'Express', 'Prisma'],
    results: ['150K registered students', '98% video streaming reliability'],
    color: 'from-orange-500 to-amber-600',
    emoji: '🎓',
    image: '/9.jpg',
    detail: {
      summary: 'Learning platform for internal and external education programs with live teaching, structured course paths, and clear learner dashboards.',
      challenge: 'The client needed a modern LMS that could host live training, track engagement, and issue credentials without relying on disconnected tools or manual reporting.',
      solution: 'We created a learning portal with multimedia content, course navigation, exam flows, progress tracking, and automated certificate issuance. The system gives instructors direct visibility into learner activity and completion.',
      implementation: [
        'Course catalog, enrollment, and user role management.',
        'Video delivery and live session support for remote learning.',
        'Quiz and assessment engine with progress tracking.',
        'Certification and analytics for learning outcomes.'
      ],
      resultsText: 'The platform scaled learning operations while keeping content, tracking, and outcomes centralized.',
      metrics: [
        { value: '150K', label: 'Registered students' },
        { value: '98%', label: 'Streaming reliability' },
        { value: '84%', label: 'Completion retention' }
      ]
    }
  },
  {
    title: 'TalentHub Creator',
    slug: 'talenthub-creator',
    tag: 'Web Dev',
    category: 'Web Dev',
    industry: 'Creator Economy',
    desc: 'No-code portfolio and page builder with custom domain routing and advanced visitor analytics dashboard.',
    tech: ['Next.js', 'Vercel APIs', 'PostgreSQL', 'Tailwind'],
    results: ['50K active creators', 'Average page load speed of 0.4s'],
    color: 'from-pink-500 to-purple-600',
    emoji: '🎨',
    image: '/10.jpg',
    detail: {
      summary: 'Creator platform enabling creatives to launch personalized digital portfolios and branded landing pages without coding.',
      challenge: 'Creators were juggling multiple tools just to publish their work, manage domains, and track engagement. The experience felt fragmented and hard to scale.',
      solution: 'We built a creator portal with drag-and-drop sections, custom domain support, and a streamlined analytics dashboard. New pages could be published fast while still feeling premium and brand-aware.',
      implementation: [
        'No-code builder with content blocks and site publishing flow.',
        'Custom domain routing and site management tools.',
        'Advanced analytics for page visits, conversions, and engagement.',
        'Creator dashboard for portfolio overview and content optimization.'
      ],
      resultsText: 'It gave creators a faster path to publish and optimize their online brand without technical complexity.',
      metrics: [
        { value: '50K', label: 'Active creators' },
        { value: '0.4s', label: 'Avg. page load' },
        { value: '3x', label: 'More profile engagement' }
      ]
    }
  },
  {
    title: 'SmartFlow CRM',
    slug: 'smartflow-crm',
    tag: 'Software',
    category: 'Software',
    industry: 'Sales Management',
    desc: 'Tailored enterprise CRM assisting sales departments in tracking deals, logging activity, and automating client communication.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    results: ['60% faster deal closing', '40% increase in pipeline efficiency'],
    color: 'from-blue-500 to-indigo-600',
    emoji: '📊',
    image: '/11.jpg',
    detail: {
      summary: 'Custom CRM for sales teams that centralizes pipeline activity, outreach, and reporting in one operational workspace.',
      challenge: 'Sales teams were storing deal activity in spreadsheets and disconnected messaging tools; forecasting was inaccurate and account follow-ups were inconsistent.',
      solution: 'We built a custom CRM with milestones, activity tracking, and dynamic pipeline reporting. It automates reminders, keeps stakeholder notes in context, and makes forecast visibility far clearer for managers.',
      implementation: [
        'Deal lifecycle tracking with account and lead management.',
        'Activity timeline with email, call, and meeting notes.',
        'Forecasting and team performance reporting.',
        'Automated follow-up reminders and lead handoff workflows.'
      ],
      resultsText: 'The sales organization gained more visibility, more consistency, and a faster pipeline conversion rhythm.',
      metrics: [
        { value: '60%', label: 'Faster closing' },
        { value: '40%', label: 'Pipeline efficiency lift' },
        { value: '1.7x', label: 'Forecast accuracy' }
      ]
    }
  },
  {
    title: 'TaskPilot Kanban',
    slug: 'taskpilot-kanban',
    tag: 'Software',
    category: 'Software',
    industry: 'Project Management',
    desc: 'Real-time collaborative task manager for remote engineering departments featuring custom Gantt and analytics.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Socket.io'],
    results: ['10K+ active users', '99.95% application availability'],
    color: 'from-amber-500 to-red-600',
    emoji: '✅',
    image: '/12.jpg',
    detail: {
      summary: 'Project coordination platform designed for distributed teams managing work across sprint boards, timelines, and dependencies.',
      challenge: 'The engineering team was using fragmented tools for planning, dependencies, and status updates, which caused blockers and poor visibility across projects.',
      solution: 'We developed a collaborative task manager with Kanban boards, sprint reporting, dependency tracking, and live updates. The interface keeps work visible and lets managers identify bottlenecks early.',
      implementation: [
        'Real-time board updates with workflow automation.',
        'Project timeline view for planning across teams.',
        'Dependency tracking and blocker visibility.',
        'Analytics for throughput and team workload.'
      ],
      resultsText: 'The team shipped faster and had much stronger visibility into delivery risk and workload quality.',
      metrics: [
        { value: '10K+', label: 'Active users' },
        { value: '99.95%', label: 'Availability' },
        { value: '32%', label: 'Faster planning' }
      ]
    }
  },
  {
    title: 'HRSync Suite',
    slug: 'hrsync-suite',
    tag: 'Software',
    category: 'Software',
    industry: 'Human Resources',
    desc: 'All-in-one HR system managing hiring pipelines, onboarding checklists, salary payroll, and performance records.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker'],
    results: ['70% reduction in HR admin hours', 'Used by 50+ midsize companies'],
    color: 'from-violet-500 to-purple-600',
    emoji: '👥',
    image: '/13.jpg',
    detail: {
      summary: 'Central HR management suite for hiring, onboarding, payroll visibility, and employee records in one secure dashboard.',
      challenge: 'HR teams were relying on several disconnected spreadsheets and administrative workflows, making it hard to manage hiring, onboarding, and records consistently.',
      solution: 'We implemented an integrated HR software that connects recruitment, onboarding, payroll data, and review history into one platform. It helps managers and staff remain compliant and organized.',
      implementation: [
        'Hiring pipeline management with candidate tracking.',
        'Onboarding task workflows and document collection.',
        'Payroll summary and compensation review support.',
        'Employee performance and review records.'
      ],
      resultsText: 'HR operations became much more scalable and less subjective to administrative bottlenecks.',
      metrics: [
        { value: '70%', label: 'Admin time saved' },
        { value: '50+', label: 'Companies onboarded' },
        { value: '100%', label: 'Workflow visibility' }
      ]
    }
  },
  {
    title: 'WarehouseIQ Pro',
    slug: 'warehouseiq-pro',
    tag: 'Software',
    category: 'Software',
    industry: 'Logistics',
    desc: 'Enterprise inventory control software integrated with hardware scanners for real-time stock levels and reordering.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'RabbitMQ'],
    results: ['40% reduction in inventory variance', '3 distribution centers connected'],
    color: 'from-slate-500 to-gray-600',
    emoji: '📦',
    image: '/14.jpg',
    detail: {
      summary: 'Warehouse operations system built to unify inventory tracking, stock movement, and reorder logic across multiple locations.',
      challenge: 'The client lacked live stock visibility and had inconsistent movement data across three warehouses. Manual reviews were too slow and inventory mismatches were costly.',
      solution: 'We delivered a warehouse platform with scanner integrations, live stock updates, stock movement tracing, and reorder triggers. Managers could monitor every movement and adjust stock levels before problems grew.',
      implementation: [
        'Barcode and scanning integration for warehouse operators.',
        'Real-time stock visibility and location tracking.',
        'Reorder automation based on stock thresholds.',
        'Facility-level reporting and operational monitoring.'
      ],
      resultsText: 'Warehouse efficiency improved across inventory movement, stock accuracy, and fulfillment planning.',
      metrics: [
        { value: '40%', label: 'Inventory variance reduction' },
        { value: '3', label: 'Distribution centers connected' },
        { value: '99.9%', label: 'Scan fidelity' }
      ]
    }
  },
  {
    title: 'DocuSign Signatures',
    slug: 'docusign-signatures',
    tag: 'Software',
    category: 'Software',
    industry: 'Enterprise Legal',
    desc: 'Secure digital document signing system with PDF generation, audit trails, and cryptographically verified links.',
    tech: ['React', 'Express', 'PDFKit', 'WebCrypto API'],
    results: ['100% legal compliance', 'Over 200K contracts signed'],
    color: 'from-emerald-500 to-blue-600',
    emoji: '✍️',
    image: '/15.jpg',
    detail: {
      summary: 'Digital signature platform built for compliant contract execution and verification with audit-ready evidence.',
      challenge: 'The company needed a secure process to sign, store, and audit legal documents without the delays and risks of paper-based approvals.',
      solution: 'We built a signing workflow that lets users review documents, authenticate signatures, and generate legally traceable evidence logs. The platform gives both teams and clients a trusted, simple signing experience.',
      implementation: [
        'Secure document upload and PDF generation pipeline.',
        'Signature workflow with verification metadata.',
        'Audit logs and signed-link record retention.',
        'Compliance-friendly document access controls.'
      ],
      resultsText: 'The organization drastically improved digital contract execution while keeping compliance tight and reviewable.',
      metrics: [
        { value: '200K+', label: 'Contracts signed' },
        { value: '100%', label: 'Compliance coverage' },
        { value: '1.5x', label: 'Faster approvals' }
      ]
    }
  },
  {
    title: 'MediCore Systems',
    slug: 'medicore-systems',
    tag: 'Healthcare',
    category: 'Healthcare',
    industry: 'Medical Admin',
    desc: 'Custom clinic management application handling patient schedules, digital charting, and insurance billing.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    results: ['Serving 5 regional clinics', '50K+ patient profiles active'],
    color: 'from-emerald-500 to-teal-600',
    emoji: '🏥',
    image: '/16.jpg',
    detail: {
      summary: 'Practice management system for clinics who need scheduling, patient records, and billing operations in one interface.',
      challenge: 'The clinic network was managing appointments, charting, and billing across several tools, creating friction for staff and inconsistent patient experience.',
      solution: 'We built a clinic operations platform that centralizes patient records, schedules, and billing workflows. It gives care teams one operational view while keeping patient data easier to manage and retrieve.',
      implementation: [
        'Appointment scheduling and reminder workflows.',
        'Electronic charting and patient history management.',
        'Insurance and billing integration for cash-flow processes.',
        'Clinic-level dashboards and admin reporting.'
      ],
      resultsText: 'The network gained a more consistent patient journey and reduced the administrative load on busy clinic teams.',
      metrics: [
        { value: '5', label: 'Clinics served' },
        { value: '50K+', label: 'Active patient profiles' },
        { value: '35%', label: 'Admin reduction' }
      ]
    }
  },
  {
    title: 'TeleHealth Direct',
    slug: 'telehealth-direct',
    tag: 'Healthcare',
    category: 'Healthcare',
    industry: 'Telemedicine',
    desc: 'Secure, HIPAA-compliant patient-doctor video meeting portal with automated appointment reminders and prescription sync.',
    tech: ['Next.js', 'WebRTC', 'FastAPI', 'PostgreSQL'],
    results: ['12K successful consults', 'Zero security breaches'],
    color: 'from-teal-500 to-emerald-600',
    emoji: '🩺',
    image: '/17.jpg',
    detail: {
      summary: 'Virtual care portal connecting clinicians and patients with secure sessions, automated workflows, and care continuity.',
      challenge: 'The client needed a patient-friendly digital care experience that could support secure consultation, follow-up, and prescription coordination without destabilizing care quality.',
      solution: 'We launched a telemedicine platform with secure video consultation, appointment reminders, doctor summaries, and prescription handoff flow. The system also improves continuity between appointments and patient communications.',
      implementation: [
        'HIPAA-oriented video consultation and secure chat workflows.',
        'Patient scheduling, reminders, and check-in automation.',
        'Prescription coordination and follow-up management.',
        'Doctor dashboards and patient triage workflows.'
      ],
      resultsText: 'Patients gained faster access to care, and clinicians gained an efficient, secure digital workflow.',
      metrics: [
        { value: '12K', label: 'Successful consults' },
        { value: '0', label: 'Security breaches' },
        { value: '2x', label: 'Patient engagement' }
      ]
    }
  },
  {
    title: 'PharmaChain Track',
    slug: 'pharmachain-track',
    tag: 'Healthcare',
    category: 'Healthcare',
    industry: 'Biotech Logistics',
    desc: 'Cold-chain supply manager tracing medical shipments and temperature thresholds using real-time IoT feeds.',
    tech: ['React', 'Python', 'InfluxDB', 'IoT Gateways'],
    results: ['99.9% temperature compliance', 'Tracked across 4 continents'],
    color: 'from-cyan-500 to-emerald-600',
    emoji: '🧪',
    image: '/18.jpg',
    detail: {
      summary: 'Cold-chain visibility solution for pharmaceutical distribution, ensuring temperature-sensitive products remain safe during transit.',
      challenge: 'Medical logistics teams needed to monitor temperature, storage conditions, and delivery exceptions across a global supply chain. Without proactive monitoring, product integrity was at risk.',
      solution: 'We developed a monitoring and alert system that captures sensor data, triggers automated alerts when thresholds are breached, and gives teams a live view of product condition from origin to destination.',
      implementation: [
        'IoT sensor data collection and live health monitoring.',
        'Cold-chain alerting for temperature deviations and timing issues.',
        'Shipment tracking with dashboard visibility and reporting.',
        'Inventory and route coordination for healthcare distribution.'
      ],
      resultsText: 'The company could identify risk earlier, reduce quality incidents, and maintain trustworthy product integrity across regions.',
      metrics: [
        { value: '99.9%', label: 'Temperature compliance' },
        { value: '4', label: 'Continents tracked' },
        { value: '2x', label: 'Faster issue visibility' }
      ]
    }
  },
  {
    title: 'CardioPredict AI',
    slug: 'cardiopredict-ai',
    tag: 'Healthcare',
    category: 'Healthcare',
    industry: 'Cardiology Analytics',
    desc: 'Clinical diagnostic tool analyzing electrocardiogram data to forecast heart health indicators.',
    tech: ['React', 'TensorFlow.js', 'FastAPI', 'MongoDB'],
    results: ['88% diagnosis assistance success', 'Approved for clinical research use'],
    color: 'from-rose-500 to-red-600',
    emoji: '❤️',
    image: '/19.jpg',
    detail: {
      summary: 'AI-assisted analysis platform for cardiac monitoring and early risk indication on ECG data patterns.',
      challenge: 'Healthcare teams needed more support in identifying early cardiac risk patterns and triaging diagnostic effort without delaying specialist review.',
      solution: 'We built a clinical analytics dashboard using signal-processing and model-based diagnostics to assist clinicians in reviewing ECG data and highlighting high-risk patterns. It supports early review and more informed triage decisions.',
      implementation: [
        'ECG data ingestion and signal review workflow.',
        'Risk scoring and anomaly detection for heart health indicators.',
        'Clinician review dashboard with explainable outputs.',
        'Research-grade record handling and model validation support.'
      ],
      resultsText: 'The platform improved anomaly visibility and gave clinicians better early-stage insight into high-risk patterns.',
      metrics: [
        { value: '88%', label: 'Diagnostic support success' },
        { value: '2x', label: 'Faster triage review' },
        { value: 'Research', label: 'Approved status' }
      ]
    }
  },
  {
    title: 'MyHealth Portal',
    slug: 'myhealth-portal',
    tag: 'Healthcare',
    category: 'Healthcare',
    industry: 'Patient Care',
    desc: 'Self-service patient medical records, lab result access, and encrypted doctor communication channel.',
    tech: ['React', 'GraphQL', 'Express', 'PostgreSQL'],
    results: ['84% patient engagement rating', '90% phone call inquiry reduction'],
    color: 'from-blue-500 to-teal-600',
    emoji: '📱',
    image: '/20.jpg',
    detail: {
      summary: 'Patient self-service portal designed to simplify access to records, test results, and secure communication.',
      challenge: 'Patients were burdened with phone calls and slow updates when checking documentation or asking follow-up questions. Staff needed a better way to provide access without extra administrative load.',
      solution: 'We designed a secure portal where patients can view medical summaries, review recent lab reports, and contact their care team in a safer digital flow. It empowers patients and reduces administrative friction.',
      implementation: [
        'Secure patient dashboard and record access.',
        'Lab report and history visualization.',
        'Encrypted messaging between patients and clinicians.',
        'Appointment and follow-up reminders.'
      ],
      resultsText: 'The portal shifted routine contact into a more efficient digital experience without compromising care access.',
      metrics: [
        { value: '84%', label: 'Patient engagement' },
        { value: '90%', label: 'Inquiry reduction' },
        { value: '24/7', label: 'Record access' }
      ]
    }
  },
  {
    title: 'FinTrack Cashflow',
    slug: 'fintrack',
    tag: 'Finance',
    category: 'Finance',
    industry: 'Business Analytics',
    desc: 'Financial forecasting dashboard with multi-bank sync, budget modeling, and automatic CSV statement matching.',
    tech: ['React', 'Plaid API', 'Python', 'PostgreSQL'],
    results: ['$50M+ processed monthly', 'Real-time sync for 12 major currencies'],
    color: 'from-yellow-500 to-orange-600',
    emoji: '💳',
    image: '/21.jpg',
    detail: {
      summary: 'Cashflow intelligence dashboard that aligns banking data, budgets, and forecasts in a single operations view.',
      challenge: 'The finance team depended on stale spreadsheets and manual data imports, making cash forecasting and budget tracking slow and error-prone.',
      solution: 'We built a dashboard that syncs transactions from multiple banks, maps statement entries to categories, and visualizes working capital forecasts in near real time. Managers receive a sharper picture of cash position and business readiness.',
      implementation: [
        'Bank-account sync and transaction reconciliation.',
        'Budgeting and forecast modeling view.',
        'CSV import and statement matching automation.',
        'Cash position reporting and exception flags.'
      ],
      resultsText: 'The team stopped relying on spreadsheet guesswork and instead made faster, more confident financial decisions.',
      metrics: [
        { value: '$50M+', label: 'Monthly processed' },
        { value: '12', label: 'Currencies synced' },
        { value: '3x', label: 'Faster forecasting' }
      ]
    }
  },
  {
    title: 'CryptoTrade Engine',
    slug: 'cryptotrade-engine',
    tag: 'Finance',
    category: 'Finance',
    industry: 'Asset Trading',
    desc: 'High-frequency digital asset tracker and trading simulator with sub-second chart updates and websocket tickers.',
    tech: ['React', 'WebSockets', 'Go', 'Redis'],
    results: ['Under 20ms update latency', '100K active test accounts'],
    color: 'from-amber-500 to-yellow-600',
    emoji: '🪙',
    image: '/22.jpg',
    detail: {
      summary: 'Real-time digital asset monitoring and simulation platform built for fast-moving market research and trading practice.',
      challenge: 'The client needed an interface that could support live market data, fast chart refreshes, and simulation-based education without lag or stale values.',
      solution: 'We built a real-time dashboard that streams pricing updates, supports multiple charting views, and gives users a simulated trading environment. The frontend and backend were tuned for speed and consistent market visibility.',
      implementation: [
        'WebSocket-driven market data stream.',
        'Fast charting and portfolio simulation experience.',
        'Risk and trade activity tracking for test users.',
        'Performance views for active market scenarios.'
      ],
      resultsText: 'The platform created a responsive trading experience that felt close to production-level market conditions.',
      metrics: [
        { value: '20ms', label: 'Update latency' },
        { value: '100K', label: 'Test accounts' },
        { value: '99.9%', label: 'Market stream uptime' }
      ]
    }
  },
  {
    title: 'PaySplit API',
    slug: 'paysplit-api',
    tag: 'Finance',
    category: 'Finance',
    industry: 'Payments SaaS',
    desc: 'Flexible payment gateway orchestrator handling multi-merchant splits and escrow for global gig marketplaces.',
    tech: ['Node.js', 'Stripe API', 'PostgreSQL', 'AWS Lambda'],
    results: ['Processed $15M in payments', '99.99% uptime during peak holiday sales'],
    color: 'from-purple-500 to-indigo-600',
    emoji: '💸',
    image: '/23.jpg',
    detail: {
      summary: 'Payments infrastructure for marketplace operations that need flexible settlement and escrow logic across multiple merchants and beneficiaries.',
      challenge: 'The platform needed to manage transactions between multiple stakeholders with transparent splits, settlement rules, and reliable holiday season availability.',
      solution: 'We built a payment orchestration layer that manages split logic, escrow flows, and transaction tracing across payment rails. The system keeps settlement operations clear, auditable, and resilient during peak load.',
      implementation: [
        'Multi-party payout logic with configurable split rules.',
        'Escrow and settlement workflow for marketplace transactions.',
        'Monitoring, retry logic, and payment integrity checks.',
        'Operational analytics for platform performance and volume.'
      ],
      resultsText: 'The platform handled large transaction volumes without sacrificing trust or operational transparency.',
      metrics: [
        { value: '$15M', label: 'Processed payments' },
        { value: '99.99%', label: 'Uptime' },
        { value: '3x', label: 'Faster settlement workflows' }
      ]
    }
  },
  {
    title: 'TaxFile Intelligence',
    slug: 'taxfile-intelligence',
    tag: 'Finance',
    category: 'Finance',
    industry: 'Taxation Tech',
    desc: 'Assisted corporate tax calculator optimizing deductions by scanning invoices and receipts automatically.',
    tech: ['React', 'Python', 'OpenAI Vision API', 'Django'],
    results: ['Average of $4.2K saved per business', '10K+ corporate tax filers'],
    color: 'from-emerald-500 to-lime-600',
    emoji: '📈',
    image: '/24.jpg',
    detail: {
      summary: 'Tax optimization tool for business owners who want faster deduction analysis from their financial documents.',
      challenge: 'Tax filers were manually reviewing receipts and invoices to identify deductions, a process that was slow and often missed opportunities.',
      solution: 'We designed a workflow that extracts financial document data, identifies potential deductions, and surfaces the highest-value opportunities with a clear review flow. It gives businesses a much faster path to optimized filings.',
      implementation: [
        'Document scanning and data extraction from receipts and invoices.',
        'Tax-rule mapping to classify eligible deductions.',
        'Review workflow for users before submission.',
        'Business reporting for yearly tax optimization.'
      ],
      resultsText: 'The tool improved filing confidence and created more value from routine financial documents.',
      metrics: [
        { value: '$4.2K', label: 'Avg. savings per business' },
        { value: '10K+', label: 'Tax filers' },
        { value: '2x', label: 'Faster review workflow' }
      ]
    }
  },
  {
    title: 'FundRaise Crowdfund',
    slug: 'fundraise-crowdfund',
    tag: 'Finance',
    category: 'Finance',
    industry: 'Venture Capital',
    desc: 'Startup funding platform facilitating legal compliance, investor documents, and milestones disbursements.',
    tech: ['React', 'Express', 'MongoDB', 'DocuSign API'],
    results: ['$38M raised for startups', 'Secured transactions for 2K+ angels'],
    color: 'from-teal-500 to-emerald-600',
    emoji: '🏦',
    image: '/25.jpg',
    detail: {
      summary: 'Crowdfunding platform built to streamline startup fundraising, document approvals, and milestone-driven capital release.',
      challenge: 'Startup fundraising required a trusted flow for fundraising documents, legal compliance, and milestone-based distribution without sacrificing speed or investor confidence.',
      solution: 'We created a fundraising platform with investor onboarding, legal document handling, campaign dashboards, and milestone tracking. It brought clarity to both startup teams and investors while keeping the process compliant.',
      implementation: [
        'Campaign and investor onboarding workflow.',
        'Document exchange and legal compliance tracking.',
        'Milestone-based funding and tranche release logic.',
        'Investor reporting and campaign progress monitoring.'
      ],
      resultsText: 'The platform gave startups and investors a better path to fundraising without undue operational friction.',
      metrics: [
        { value: '$38M', label: 'Raised for startups' },
        { value: '2K+', label: 'Angels secured' },
        { value: '100%', label: 'Documentation flow visibility' }
      ]
    }
  },
  {
    title: 'Growth SaaS SEO',
    slug: 'growth-saas-seo',
    tag: 'SEO',
    category: 'SEO',
    industry: 'B2B SaaS',
    desc: 'Comprehensive technical and content SEO strategy targeting high-intent mid-market software buyers.',
    tech: ['Ahrefs', 'Content Strategy', 'Technical SEO'],
    results: ['300% increase in organic traffic', 'Page 1 ranking for 40+ keywords'],
    color: 'from-orange-500 to-amber-600',
    emoji: '📈',
    image: '/26.jpg',
    detail: {
      summary: 'SEO growth engine for a SaaS business focused on pipeline growth through higher-intent organic discovery.',
      challenge: 'The brand had product-market fit but not enough organic visibility in competitive mid-market search terms. Growth was constrained by poor content coverage and technical discoverability gaps.',
      solution: 'We implemented an SEO program combining technical fixes, keyword strategy, and content architecture. The outcome was a prioritized search plan designed to generate more qualified visits and pipeline opportunities.',
      implementation: [
        'Technical SEO review and site improvement plan.',
        'Content roadmap for high-intent product keywords.',
        'On-page optimization and internal linking strategy.',
        'Analytics and ranking tracking for growth reporting.'
      ],
      resultsText: 'Organic acquisition became a meaningful growth driver rather than a secondary marketing channel.',
      metrics: [
        { value: '300%', label: 'Organic traffic lift' },
        { value: '40+', label: 'Keywords on page 1' },
        { value: '2x', label: 'Pipeline quality improvement' }
      ]
    }
  },
  {
    title: 'Local Clinic Visibility',
    slug: 'local-clinic-visibility',
    tag: 'SEO',
    category: 'SEO',
    industry: 'Healthcare',
    desc: 'Local search engine optimization campaign for a multi-location dental practice network.',
    tech: ['Google Business', 'Local Citations', 'Schema Markup'],
    results: ['210% increase in map views', '140% more booked appointments'],
    color: 'from-amber-400 to-orange-500',
    emoji: '📍',
    image: '/27.jpg',
    detail: {
      summary: 'Local search strategy to improve visibility for multiple clinics and drive more high-intent patient bookings.',
      challenge: 'The clinic network had multiple locations with inconsistent local listings, weak review signals, and limited map visibility. This reduced appointment volume despite strong service quality.',
      solution: 'We optimized local SEO through Google Business Profiles, location pages, citations, and schema improvements. The campaign also improved local conversion signals and patient trust indicators.',
      implementation: [
        'Local listing optimization and review strategy.',
        'Location page improvements with schema markup.',
        'Citation and map visibility enhancement.',
        'Appointment conversion tracking by service and location.'
      ],
      resultsText: 'The clinic network became far easier to find in local searches and converted that demand into booked visits.',
      metrics: [
        { value: '210%', label: 'Map view increase' },
        { value: '140%', label: 'More booked appointments' },
        { value: '3x', label: 'Local visibility lift' }
      ]
    }
  },
  {
    title: 'E-Com Organic Boost',
    slug: 'e-com-organic-boost',
    tag: 'SEO',
    category: 'SEO',
    industry: 'E-Commerce',
    desc: 'Large scale product category optimization and programmatic SEO implementation for online retailer.',
    tech: ['SEMrush', 'Programmatic SEO', 'Site Architecture'],
    results: ['180% growth in non-branded search', '$450K new organic revenue'],
    color: 'from-yellow-400 to-orange-500',
    emoji: '🛍️',
    image: '/28.jpg',
    detail: {
      summary: 'Search growth initiative focused on category expansion and long-tail discovery for an online retailer.',
      challenge: 'The retail brand was relying heavily on branded queries and had low visibility in high-intent product and category search terms. Growth required better architecture and broader coverage.',
      solution: 'We built a programmatic SEO strategy with optimized category pages, product content improvements, and scalable landing pages for important search queries. This expanded reach without degrading search quality.',
      implementation: [
        'Category and landing page architecture review.',
        'Programmatic content generation and keyword expansion.',
        'Internal linking and indexability improvements.',
        'Revenue and traffic reporting by product cluster.'
      ],
      resultsText: 'The brand gained meaningful traffic from non-branded demand and translated that into additional revenue and order growth.',
      metrics: [
        { value: '180%', label: 'Non-branded search growth' },
        { value: '$450K', label: 'Organic revenue' },
        { value: '2.4x', label: 'Search conversion lift' }
      ]
    }
  }
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

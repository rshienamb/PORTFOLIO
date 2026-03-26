export const NAV_ITEMS = [
  "Home", "Overview", "Education", "Strengths",
  "Experience", "Skills", "Why Me", "References", "Contact",
];

export interface EduItem {
  emoji: string;
  stage: string;
  title: string;
  short: string;
  full: string;
  image?: string; // e.g. "/images/edu-primary.jpg"
}

export const EDUCATION: EduItem[] = [
  {
    emoji: "🏫",
    stage: "Primary & Junior High",
    title: "Nabua, Camarines Sur",
    short: "15 years of foundational learning with consistent honor status. Discovered a love for art and creativity.",
    full: "I spent 15 years in Nabua, Camarines Sur, from childhood through junior high school, where I consistently achieved honor status. During these early years, I developed both a love for learning and an appreciation for creativity, influenced by my interest in art and design.",
    image: "/images/edu-primary.jpg",
  },
  {
    emoji: "🎓",
    stage: "Senior High School",
    title: "ABM Strand, Cavite",
    short: "Pioneer K-12 batch, Accountancy, Business & Management strand. Graduated with honors despite financial challenges.",
    full: "At 16, I moved to Cavite as part of the pioneering batch of the K-12 program under the ABM (Accountancy, Business, and Management) strand. Financial challenges and the demands of math-intensive subjects tested my determination, but through persistence, careful budgeting, and extra effort, I graduated with honors.",
    image: "/images/edu-secondary.jpg",
  },
  {
    emoji: "🏛️",
    stage: "College",
    title: "PUP — BS Business Administration",
    short: "Major in Human Resource Management. Magna Cum Laude, GWA 1.43.",
    full: "I completed my Bachelor's Degree in Business Administration major in Human Resource Management at the Polytechnic University of the Philippines, earning Magna Cum Laude with a general average of 1.43. Although Architecture was my initial goal, financial limitations led me to a path that strengthened my understanding of people, organizational behavior, and workplace dynamics. I also adapted to online learning during the pandemic while supporting my family.",
    image: "/images/edu-college.jpg",
  },
];

export const STRENGTHS = [
  {
    icon: "💬",
    title: "Communication",
    text: "Honed through extensive client interaction — adapts quickly to new roles, systems, and environments. Knows when to ask for help and when to take initiative.",
  },
  {
    icon: "🔄",
    title: "Flexible & Adaptable",
    text: "Thrives in different roles, environments, and schedules. Adjusts seamlessly to maintain productivity even in rapidly changing circumstances.",
  },
  {
    icon: "🔒",
    title: "Integrity & Transparency",
    text: "Handles sensitive matters with discretion while remaining open when sharing insights that can improve systems and team performance.",
  },
];

export const CHALLENGES = [
  {
    icon: "🧮",
    title: "Complex Computations",
    text: "Proactively leverages tools — calculators, spreadsheets, Excel — to ensure accuracy and efficiency when faced with complex numerical tasks.",
  },
  {
    icon: "🔍",
    title: "Detail Orientation",
    text: "Being highly detail-oriented can slow decision-making, but learned to balance accuracy with efficiency and timely action without compromising quality.",
  },
  {
    icon: "⏱️",
    title: "Time Management",
    text: "Focuses on completing tasks one at a time for quality. Highly flexible for multiple tasks when they don't require close, complex supervision.",
  },
];

export interface ExpItem {
  role: string;
  company: string;
  period: string;
  desc: string;
  tags: string[];
}

export const EXPERIENCE: ExpItem[] = [
  {
    role: "Chat Agent",
    company: "EMA",
    period: "Aug 2025 – Feb 2025",
    desc: "Remote independent contractor focused on producing sales and building strong client relationships. Engaged clients via chat, conducted upsells, and analyzed purchasing trends.",
    tags: ["Remote Sales", "Upselling", "Client Relations", "Data Tracking", "Slack / Zoom"],
  },
  {
    role: "Documentation Specialist",
    company: "Convergent Outsourcing Solutions Inc.",
    period: "Oct 2024 – Jun 2025",
    desc: "Specialized in real estate transaction documentation — estate tax amnesty, title transfers, land titling. Acted as liaison between clients, lawyers, brokers, and government agencies.",
    tags: ["Real Estate Docs", "Legal Drafting", "Government Liaison", "CRM", "Client Management"],
  },
  {
    role: "Customer Service Representative",
    company: "Concentrix – Makati City",
    period: "Feb 2025 – Sep 2025",
    desc: "Provided support for an international ticketing account via voice and non-voice channels. Handled refunds, fraud escalation, and technical troubleshooting in a high-volume BPO environment.",
    tags: ["Voice & Chat Support", "Refund Processing", "Fraud Escalation", "Zendesk", "CRM"],
  },
  {
    role: "Executive Assistant",
    company: "Arquee Corporation (ASYA Design)",
    period: "Jun 2023 – Aug 2023",
    desc: "EA to the HR Director at a prominent architecture firm in Pasay. Managed recruitment support, HR documentation, calendar coordination, and confidential records.",
    tags: ["HR Documentation", "Recruitment Support", "Calendar Coordination", "Records Management"],
  },
  {
    role: "Administrative Assistant → Officer",
    company: "Happy Tan Shopping Center",
    period: "Dec 2022 – Feb 2023",
    desc: "Pioneer warehouse employee handling inventory, accounts payable, barcode generation, and interdepartmental coordination. Promoted to Administrative Officer after one month.",
    tags: ["Inventory Management", "Accounts Payable", "Barcode Generation", "Records", "Reporting"],
  },
];

export const SKILLS = [
  {
    icon: "📋",
    title: "Administrative & Office Support",
    items: [
      "HR documentation & records management",
      "Calendar coordination & report preparation",
      "Confidential data handling",
      "Interdepartmental coordination",
      "Problem-solving & workflow guidance",
    ],
  },
  {
    icon: "🎧",
    title: "Customer & Client Support",
    items: [
      "Voice & non-voice support & escalation",
      "Technical troubleshooting",
      "Refund/order processing & upselling",
      "Remote engagement & chat communication",
      "Goal-oriented multitasking in high volume",
    ],
  },
  {
    icon: "🏠",
    title: "Real Estate & Legal",
    items: [
      "Estate tax amnesty processing",
      "Title transfer & land titling",
      "Legal document drafting (attorney-reviewed)",
      "Government agency liaison",
      "Compliance & regulatory documentation",
    ],
  },
  {
    icon: "📊",
    title: "Data, Reporting & Analytics",
    items: [
      "Data accuracy, tracking & reporting",
      "Trend analysis & insights",
      "Process improvement & efficiency monitoring",
      "CRM & ticketing systems navigation",
    ],
  },
];

export const TOOLS = [
  "Google Workspace", "Microsoft Office", "Slack", "Zoom", "Teams",
  "Meta Business Suite", "Zendesk", "Freshdesk", "Trello", "Calendly",
  "Notion", "eBIR & Regulatory Portals", "AI Automation Tools",
  "PDF/Doc Editors", "WhatsApp Business",
];

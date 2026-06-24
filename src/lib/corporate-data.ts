import assembleVideo from "@/assets/assemble.mp4";
import heroVideo from "@/assets/hero/hero.mp4";
import danielOkoroPortrait from "@/assets/leadership/daniel-okoro.jpg";
import elenaVossPortrait from "@/assets/leadership/elena-voss.jpg";
import maraEllisonPortrait from "@/assets/leadership/mara-ellison.jpg";
import pHospital from "@/assets/p-hospital.png";
import pTransit from "@/assets/p-transit.png";
import pillarLegacy from "@/assets/pillar-legacy.png";
import pillarOwnership from "@/assets/pillar-ownership.png";
import aviationAirport from "@/assets/stock/aviation-airport.jpg";
import aviationHangar from "@/assets/stock/aviation-hangar.jpg";
import consultingBriefing from "@/assets/stock/consulting-briefing.jpg";
import consultingTeam from "@/assets/stock/consulting-team.jpg";
import droneFlight from "@/assets/stock/drone-flight.jpg";
import dronePilot from "@/assets/stock/drone-pilot.jpg";
import miningAerial from "@/assets/stock/mining-aerial.jpg";
import researchLab from "@/assets/stock/research-lab.jpg";
import sustainabilityWind from "@/assets/stock/sustainability-wind.jpg";
import { remoteMedia } from "@/lib/remote-media";

export const corporateNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const businessUnits = [
  {
    slug: "aviation",
    name: "Aviation",
    eyebrow: "Flagship Business",
    href: "/services/aviation",
    summary:
      "Commercial aircraft programs, maintenance ecosystems, and flight operations technologies for regional and global carriers.",
    description:
      "Lucid Aviation Aviation develops aircraft platforms, digital flight operations, and lifecycle programs for operators that need safety, reliability, and fleet efficiency at scale.",
    image: aviationAirport,
    stats: ["Fleet programs", "Advanced manufacturing", "Operator services"],
  },
  {
    slug: "drones",
    name: "Drones & Autonomous Systems",
    eyebrow: "Aerial Intelligence",
    href: "/services/drones",
    summary:
      "Uncrewed aircraft, autonomous inspection systems, and data platforms for infrastructure, logistics, and high-priority industrial monitoring.",
    description:
      "The drones business connects aircraft design, autonomy software, sensor integration, and field support for organizations operating in complex environments.",
    image: droneFlight,
    stats: ["Autonomous flight", "Inspection networks", "Fleet telemetry"],
  },
  {
    slug: "consulting",
    name: "Consulting",
    eyebrow: "Operational Advisory",
    href: "/services/consulting",
    summary:
      "Strategy, transformation, and technical advisory for aviation, infrastructure, mining, and industrial clients.",
    description:
      "Consulting teams help customers modernize operations, deploy technology responsibly, and improve performance across complex industrial systems.",
    image: consultingTeam,
    stats: ["Transformation", "Risk advisory", "Program delivery"],
  },
  {
    slug: "research",
    name: "Research",
    eyebrow: "Applied Discovery",
    href: "/services/research",
    summary:
      "Advanced research programs across aviation materials, autonomy, digital operations, energy efficiency, and industrial intelligence.",
    description:
      "The research division turns emerging science into field-ready methods, prototypes, and technical standards for the group and its partners.",
    image: researchLab,
    stats: ["Materials labs", "AI systems", "Prototype programs"],
  },
  {
    slug: "mining",
    name: "Mining",
    eyebrow: "Resource Operations",
    href: "/services/mining",
    summary:
      "Responsible mineral operations, aerial survey systems, automation, and industrial logistics for critical supply chains.",
    description:
      "Mining programs combine ground operations, aerial intelligence, environmental monitoring, and digital logistics to support safe resource development.",
    image: miningAerial,
    stats: ["Aerial survey", "Automation", "Supply chain resilience"],
  },
];

export const platformHighlights = [
  {
    name: "AeroLine A-90",
    category: "Commercial Aviation",
    href: "/services/aviation",
    image: aviationAirport,
    summary: "A next-generation narrow-body aircraft concept for efficient regional networks.",
  },
  {
    name: "SkyGrid UAS",
    category: "Drones",
    href: "/services/drones",
    image: droneFlight,
    summary: "Autonomous inspection aircraft for infrastructure corridors and remote assets.",
  },
  {
    name: "TerraSight",
    category: "Mining Intelligence",
    href: "/services/mining",
    image: miningAerial,
    summary: "Aerial mapping and operational telemetry for responsible resource operations.",
  },
  {
    name: "Research Campus 04",
    category: "Research",
    href: "/services/research",
    image: researchLab,
    summary: "A cross-disciplinary environment for applied aviation and industrial research.",
  },
];

export const featuredProducts = [
  {
    slug: "aeroline-a-90",
    name: "AeroLine A-90",
    category: "Aviation",
    service: "Regional Aircraft Concept",
    company: "Aviation",
    href: "/products/aeroline-a-90",
    image: remoteMedia.products.aeroline.cover.src,
    gallery: remoteMedia.products.aeroline.gallery.map((image) => image.src),
    video: heroVideo,
    span: "lg:col-span-8",
    aspect: "aspect-[21/10]",
    summary:
      "A regional aircraft concept built around efficient operations, passenger comfort, digital maintenance, and dependable fleet economics.",
    description:
      "AeroLine A-90 is the flagship aviation product in the Lucid Aviation portfolio. It combines aircraft program planning, lifecycle support, and digital fleet operations into one concept designed for regional carriers and government-backed transport networks.",
    challenge:
      "Regional operators need aircraft programs that balance fuel efficiency, dispatch reliability, passenger experience, maintainability, and predictable long-term operating costs.",
    solution:
      "The product brings together aircraft configuration planning, supplier readiness, digital maintenance records, operator training, and service-model design before any fleet decision moves forward.",
    outcome:
      "A first-pass platform blueprint that can guide feasibility studies, manufacturing partnerships, operator service packages, and future aircraft-family planning.",
    specs: [
      ["Program type", "Regional aircraft concept"],
      ["Primary users", "Regional carriers and transport operators"],
      ["Operational focus", "Fleet efficiency, maintainability, passenger comfort"],
      ["Support model", "Digital maintenance and lifecycle services"],
      ["Product status", "Concept and feasibility planning"],
      ["Business unit", "Aviation"],
    ],
    capabilities: [
      "Aircraft program planning",
      "Fleet lifecycle strategy",
      "Digital maintenance model",
      "Operator readiness planning",
    ],
  },
  {
    slug: "skygrid-uas",
    name: "SkyGrid UAS",
    category: "Drones",
    service: "Autonomous Inspection",
    company: "Drones",
    href: "/products/skygrid-uas",
    image: remoteMedia.products.skygrid.cover.src,
    gallery: remoteMedia.products.skygrid.gallery.map((image) => image.src),
    video: assembleVideo,
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    summary:
      "An autonomous inspection system for infrastructure corridors, industrial sites, logistics routes, and remote operating environments.",
    description:
      "SkyGrid UAS is a drone operations product focused on dependable aerial data. It combines autonomous flight planning, sensor workflows, field-team handoff, and reporting tools for customers that need repeatable inspection coverage.",
    challenge:
      "Industrial teams often rely on slow, manual, and inconsistent inspection routines across assets that are geographically distributed or difficult to access.",
    solution:
      "SkyGrid standardizes inspection missions with pre-planned flight profiles, validated data capture, operator oversight, and downstream reporting for maintenance and operations teams.",
    outcome:
      "A repeatable drone operations model that improves site visibility, shortens inspection windows, and gives decision-makers cleaner operational data.",
    specs: [
      ["Program type", "Autonomous aerial inspection"],
      ["Primary users", "Infrastructure and industrial operators"],
      ["Operational focus", "Inspection, mapping, condition monitoring"],
      ["Data model", "Telemetry, imagery, and field reporting"],
      ["Product status", "Readiness review"],
      ["Business unit", "Drones"],
    ],
    capabilities: [
      "Autonomous flight planning",
      "Infrastructure inspection",
      "Remote asset monitoring",
      "Operator handoff workflows",
    ],
  },
  {
    slug: "fleetops-advisory",
    name: "FleetOps Advisory",
    category: "Consulting",
    service: "Operational Transformation",
    company: "Consulting",
    href: "/products/fleetops-advisory",
    image: remoteMedia.products.fleetOps.cover.src,
    gallery: remoteMedia.products.fleetOps.gallery.map((image) => image.src),
    video: heroVideo,
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    summary:
      "A consulting program for aviation and industrial leaders modernizing fleet operations, governance, training, and performance systems.",
    description:
      "FleetOps Advisory helps organizations make complex operational change without losing control of the day-to-day business. The product combines business analysis, technical advisory, data governance, and implementation planning.",
    challenge:
      "Fleet and industrial operators often carry fragmented systems, unclear performance metrics, and modernization plans that are difficult to execute across people, assets, and governance.",
    solution:
      "The advisory team maps operating realities, identifies practical technology upgrades, creates governance pathways, and supports phased rollout with measurable milestones.",
    outcome:
      "A modernization roadmap that customers can execute with clearer priorities, lower disruption, and stronger accountability across leadership and field teams.",
    specs: [
      ["Program type", "Consulting and transformation"],
      ["Primary users", "Aviation and industrial leadership teams"],
      ["Operational focus", "Fleet performance and governance"],
      ["Delivery model", "Assessment, roadmap, implementation support"],
      ["Product status", "Operational evaluation"],
      ["Business unit", "Consulting"],
    ],
    capabilities: [
      "Operational diagnostics",
      "Transformation roadmaps",
      "Governance design",
      "Performance measurement",
    ],
  },
  {
    slug: "research-campus-04",
    name: "Research Campus 04",
    category: "Research",
    service: "Applied Aviation Research",
    company: "Research",
    href: "/products/research-campus-04",
    image: remoteMedia.products.researchCampus.cover.src,
    gallery: remoteMedia.products.researchCampus.gallery.map((image) => image.src),
    video: assembleVideo,
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    summary:
      "A cross-disciplinary research environment for aviation materials, connected operations, autonomy workflows, and industrial systems.",
    description:
      "Research Campus 04 is a corporate research product designed to connect labs, operators, consultants, and business units. It turns emerging ideas into prototypes, standards, and operational practices.",
    challenge:
      "Research work can become isolated from operational needs when labs, business units, and customer-facing teams do not share a clear delivery path.",
    solution:
      "The campus model links applied research, prototype reviews, simulation, partner engagement, and business-unit pilots inside one operating framework.",
    outcome:
      "A repeatable research-to-operations pathway for aviation, drones, consulting, mining, and connected industrial programs.",
    specs: [
      ["Program type", "Applied research campus"],
      ["Primary users", "Research teams and business-unit partners"],
      ["Operational focus", "Materials, autonomy, digital operations"],
      ["Delivery model", "Prototype, pilot, standardize"],
      ["Product status", "Campus planning"],
      ["Business unit", "Research"],
    ],
    capabilities: [
      "Applied research",
      "Prototype programs",
      "Simulation reviews",
      "Partner pilots",
    ],
  },
  {
    slug: "terrasight",
    name: "TerraSight",
    category: "Mining",
    service: "Aerial Resource Intelligence",
    company: "Mining",
    href: "/products/terrasight",
    image: remoteMedia.products.terrasight.cover.src,
    gallery: remoteMedia.products.terrasight.gallery.map((image) => image.src),
    video: heroVideo,
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    summary:
      "A responsible resource intelligence product combining aerial survey, field data, environmental monitoring, and logistics planning.",
    description:
      "TerraSight supports responsible resource operations by connecting aerial intelligence with ground activity. It is designed for mining teams that need clearer site visibility, safer planning, and stronger environmental awareness.",
    challenge:
      "Resource operators need better visibility across remote terrain, asset movement, environmental conditions, and field-team activity while maintaining responsible development practices.",
    solution:
      "TerraSight combines drone survey, mapping workflows, field reporting, logistics planning, and environmental monitoring into a single operational intelligence model.",
    outcome:
      "A resource-operations view that helps teams plan safer work, reduce blind spots, and communicate site conditions with greater confidence.",
    specs: [
      ["Program type", "Resource intelligence platform"],
      ["Primary users", "Mining and resource operators"],
      ["Operational focus", "Survey, logistics, environmental monitoring"],
      ["Data model", "Aerial mapping and field reports"],
      ["Product status", "Pilot planning"],
      ["Business unit", "Mining"],
    ],
    capabilities: [
      "Aerial survey",
      "Environmental monitoring",
      "Resource logistics",
      "Site intelligence",
    ],
  },
  {
    slug: "aerodigital-network",
    name: "AeroDigital Network",
    category: "Group Technology",
    service: "Connected Operations",
    company: "Group Technology",
    href: "/products/aerodigital-network",
    image: remoteMedia.products.aeroDigital.cover.src,
    gallery: remoteMedia.products.aeroDigital.gallery.map((image) => image.src),
    video: assembleVideo,
    span: "lg:col-span-12",
    aspect: "aspect-[21/9]",
    summary:
      "A connected operations product linking aircraft programs, drones, consulting teams, research work, and industrial assets.",
    description:
      "AeroDigital Network is the connective layer across the group. It gives leadership and operating teams a clearer way to view programs, assets, field activity, research pilots, and resource operations.",
    challenge:
      "As the group expands, each business unit needs autonomy while leadership still needs shared visibility, common data standards, and operational discipline.",
    solution:
      "The product defines shared dashboards, program status models, asset data structures, governance rules, and cross-division reporting workflows.",
    outcome:
      "A corporate operating network that supports better decisions, faster escalation, and consistent visibility across the full business portfolio.",
    specs: [
      ["Program type", "Connected operations network"],
      ["Primary users", "Corporate and business-unit operators"],
      ["Operational focus", "Visibility, governance, program data"],
      ["Delivery model", "Shared standards and digital workflows"],
      ["Product status", "Network architecture"],
      ["Business unit", "Group Technology"],
    ],
    capabilities: [
      "Program visibility",
      "Operational dashboards",
      "Data governance",
      "Cross-division reporting",
    ],
  },
];

export const corporateStats = [
  { value: "45", label: "markets served" },
  { value: "30K+", label: "engineers, operators, and specialists" },
  { value: "$4B+", label: "annual technology and infrastructure investment" },
  { value: "5", label: "core business divisions" },
];

export const corporateNewsPosts = [
  {
    slug: "drone-operations-readiness",
    category: "Drones",
    type: "Program update",
    date: "June 12, 2026",
    title: "Drone operations platform completes readiness review.",
    excerpt:
      "Lucid Aviation teams completed a readiness review for a new drone operations platform, validating endurance, data quality, and operator handoff profiles.",
    body: "The review brings together aviation engineering, autonomy software, and field operations. The program is designed for infrastructure monitoring, logistics support, and remote industrial inspection where dependable aerial data matters.",
    author: "Lucid Aviation Drones",
    readTime: "4 min read",
    image: dronePilot,
    href: "/news/drone-operations-readiness",
    sections: [
      {
        heading: "A system-level readiness review",
        paragraphs: [
          "The review assessed the aircraft, mission software, sensor workflows, ground equipment, and operator handoff as one operating system. Teams evaluated endurance profiles, data consistency, communications resilience, and recovery procedures across representative field scenarios.",
          "Rather than treating flight performance as the only measure of readiness, the program also examined how quickly field teams can plan missions, verify captured data, and transfer findings into customer maintenance and inspection workflows.",
        ],
      },
      {
        heading: "Preparing for operational trials",
        paragraphs: [
          "The next phase will place the platform into supervised customer trials across infrastructure corridors and remote industrial sites. Evidence from those deployments will shape service procedures, training, and future aircraft configurations.",
        ],
      },
    ],
  },
  {
    slug: "advanced-aircraft-production",
    category: "Aviation",
    type: "Manufacturing",
    date: "May 28, 2026",
    title: "Digital production cells accelerate aircraft assembly.",
    excerpt:
      "New synchronized manufacturing cells are reducing integration cycles while improving traceability across materials and flight-critical systems.",
    body: "The production program connects digital work instructions, materials tracking, and quality checkpoints across the aircraft assembly process. It supports safer delivery schedules and better long-term maintainability.",
    author: "Lucid Aviation Aviation",
    readTime: "5 min read",
    image: aviationHangar,
    href: "/news/advanced-aircraft-production",
    sections: [
      {
        heading: "Traceability built into production",
        paragraphs: [
          "Each production cell brings digital work instructions, tooling status, material records, and inspection evidence into a shared operating view. Engineers and manufacturing teams can identify deviations earlier and understand their effect on downstream assembly.",
          "The program is designed to improve more than production speed. Better records support certification evidence, maintenance planning, supplier learning, and future aircraft modifications throughout the platform lifecycle.",
        ],
      },
      {
        heading: "Scaling with the workforce",
        paragraphs: [
          "Technical teams are validating the production model alongside new training pathways so manufacturing knowledge grows with the system. Additional cells will enter evaluation after quality and human-factors reviews are complete.",
        ],
      },
    ],
  },
  {
    slug: "connected-operations-network",
    category: "Research",
    type: "Research insight",
    date: "May 09, 2026",
    title: "Research network expands industrial operations coverage.",
    excerpt:
      "A new connected operations program links aviation work, field teams, and industrial assets into a more resilient operating network.",
    body: "Lucid Aviation research teams are studying how connected operations can help customers manage distributed aircraft, drones, and industrial systems with greater clarity and resilience.",
    author: "Lucid Aviation Research",
    readTime: "3 min read",
    image: researchLab,
    href: "/news/connected-operations-network",
    sections: [
      {
        heading: "One view across distributed operations",
        paragraphs: [
          "The research network connects operational data from aircraft, autonomous platforms, maintenance teams, and industrial sites without forcing every business into the same workflow. Shared definitions allow leaders to compare readiness, risk, and resource demand while specialist teams retain the detail they need.",
        ],
      },
      {
        heading: "Resilience before scale",
        paragraphs: [
          "Current work focuses on data quality, access controls, degraded communications, and practical decision support. The research team will publish an operating framework after trials with aviation and resource-program partners.",
        ],
      },
    ],
  },
  {
    slug: "industrial-systems-modernization",
    category: "Consulting",
    type: "Client briefing",
    date: "April 22, 2026",
    title: "Industrial modernization program enters operational evaluation.",
    excerpt:
      "Consulting teams began field evaluation of a new modernization framework built for complex aviation and industrial environments.",
    body: "The framework supports clients as they modernize operations, improve governance, and introduce emerging technologies without interrupting essential service delivery.",
    author: "Lucid Aviation Consulting",
    readTime: "4 min read",
    image: consultingBriefing,
    href: "/news/industrial-systems-modernization",
    sections: [
      {
        heading: "Modernization grounded in daily work",
        paragraphs: [
          "The framework begins with operating evidence: how decisions are made, where information breaks down, and which constraints frontline teams manage every day. Technology options are evaluated against that reality before a transformation roadmap is approved.",
          "Early evaluations cover aviation support, infrastructure maintenance, and resource logistics. Each program uses common governance while adapting milestones to the customer's operating environment.",
        ],
      },
      {
        heading: "Measuring adoption and performance",
        paragraphs: [
          "Evaluation teams will track service continuity, workforce adoption, decision speed, and control effectiveness. Findings will be incorporated into the next release of the advisory method later this year.",
        ],
      },
    ],
  },
  {
    slug: "sustainable-aviation-benchmark",
    category: "Sustainability",
    type: "Group report",
    date: "March 31, 2026",
    title: "New benchmark connects flight efficiency with ground operations.",
    excerpt:
      "A group-wide aviation benchmark brings aircraft utilization, energy, maintenance, and airport processes into one operational performance view.",
    body: "The benchmark helps aviation teams evaluate environmental performance as part of everyday operating decisions rather than as a separate reporting exercise.",
    author: "Group Sustainability Office",
    readTime: "6 min read",
    image: sustainabilityWind,
    href: "/news/sustainable-aviation-benchmark",
    sections: [
      {
        heading: "Beyond a single efficiency measure",
        paragraphs: [
          "Flight efficiency is influenced by aircraft condition, routing, turnaround processes, ground equipment, and the quality of operational planning. The new benchmark combines those factors so teams can see where local improvements create wider system value.",
          "The first version establishes common definitions and review practices across aviation programs. It does not replace detailed regulatory or customer reporting.",
        ],
      },
      {
        heading: "A foundation for better decisions",
        paragraphs: [
          "Business units will use the benchmark to prioritize trials, compare operating changes, and improve the evidence behind future investment decisions. Results will be reviewed through group sustainability governance.",
        ],
      },
    ],
  },
  {
    slug: "responsible-resource-survey",
    category: "Mining",
    type: "Operations update",
    date: "March 14, 2026",
    title: "Aerial survey program strengthens responsible resource planning.",
    excerpt:
      "Integrated drone mapping and field verification are improving how resource teams understand land, water, and infrastructure before operations expand.",
    body: "The program combines aerial intelligence, environmental evidence, and site expertise to improve early planning and long-term operational monitoring.",
    author: "Lucid Aviation Mining",
    readTime: "4 min read",
    image: miningAerial,
    href: "/news/responsible-resource-survey",
    sections: [
      {
        heading: "Evidence before expansion",
        paragraphs: [
          "Survey teams combine repeatable aerial mapping with field observations and existing environmental records. This creates a clearer baseline for infrastructure planning, water management, community engagement, and operational risk review.",
        ],
      },
      {
        heading: "Monitoring through the lifecycle",
        paragraphs: [
          "The same survey model can be repeated as operations change, giving site teams and governance leaders a consistent view of conditions over time. Future work will connect the data with closure and restoration planning.",
        ],
      },
    ],
  },
  {
    slug: "accra-technical-learning-hub",
    category: "Company",
    type: "Corporate news",
    date: "February 26, 2026",
    title: "Lucid Aviation opens technical learning hub in Accra.",
    excerpt:
      "The new learning hub supports early-career engineers, experienced specialists, and cross-business technical development across the group.",
    body: "The Accra hub creates shared space for technical academies, simulation, mentoring, and practical learning across aviation and industrial disciplines.",
    author: "Lucid Aviation",
    readTime: "3 min read",
    image: consultingTeam,
    href: "/news/accra-technical-learning-hub",
    sections: [
      {
        heading: "Learning connected to programs",
        paragraphs: [
          "Courses and technical pathways are developed with active business teams so learning remains connected to current engineering, operations, research, and advisory work. The hub will also host graduate rotations and partner workshops.",
        ],
      },
      {
        heading: "Building depth across the group",
        paragraphs: [
          "The learning model combines formal instruction with mentoring, simulation, project reviews, and cross-business assignments. Additional programs will be introduced as the first cohorts progress.",
        ],
      },
    ],
  },
  {
    slug: "efficient-propulsion-ground-test",
    category: "Innovation",
    type: "Technology milestone",
    date: "February 08, 2026",
    title: "Efficient propulsion demonstrator completes ground-test series.",
    excerpt:
      "A research demonstrator completed its first integrated ground tests, generating new evidence for efficient regional aviation systems.",
    body: "The test series brought together propulsion, energy management, thermal systems, controls, and operator-focused maintainability studies.",
    author: "Lucid Aviation Innovation",
    readTime: "5 min read",
    image: aviationHangar,
    href: "/news/efficient-propulsion-ground-test",
    sections: [
      {
        heading: "Testing the integrated system",
        paragraphs: [
          "Engineers evaluated energy flow, thermal behavior, control logic, fault response, and maintenance access under representative ground conditions. The demonstrator is intended to answer system questions before any future flight configuration is selected.",
          "Data from the series will improve digital models and help research teams identify the most valuable areas for additional testing.",
        ],
      },
      {
        heading: "The next evidence gate",
        paragraphs: [
          "The program will now complete detailed inspection and model correlation. A future test phase will be approved only after safety, performance, and lifecycle evidence has been reviewed across the aviation and research businesses.",
        ],
      },
    ],
  },
];

export const corporateLeaders = [
  {
    id: "mara-ellison",
    body: "Aviation is our starting point, but the same discipline helps customers modernize infrastructure, research, and resource operations.",
    name: "Mara Ellison",
    role: "Group Chief Executive Officer",
    bio: "Mara leads group strategy and long-range investment across aviation, autonomous systems, research, advisory services, and responsible resource operations.",
    image: maraEllisonPortrait,
    imageAlt: "Executive portrait of Mara Ellison seated against a dark studio background",
    objectPosition: "50% 42%",
    sourceCredit: "Mikelya Fournier / Unsplash",
    sourceUrl: "https://unsplash.com/photos/YSL09pV7lek",
  },
  {
    id: "daniel-okoro",
    body: "Our strength is the ability to connect engineering, operations, and advisory teams around one practical outcome: systems that work in the real world.",
    name: "Daniel Okoro",
    role: "Chief Operating Officer",
    bio: "Daniel oversees operating performance across the group, aligning program delivery, field teams, safety systems, and customer commitments across every division.",
    image: danielOkoroPortrait,
    imageAlt: "Executive portrait of Daniel Okoro standing outside a modern office building",
    objectPosition: "50% 42%",
    sourceCredit: "Vitaly Gariev / Unsplash",
    sourceUrl: "https://unsplash.com/photos/7H-q-K0soEI",
  },
  {
    id: "elena-voss",
    body: "Responsible growth means building aircraft, drones, and industrial programs with safety, transparency, and long-term value in mind.",
    name: "Elena Voss",
    role: "Chief Strategy & Sustainability Officer",
    bio: "Elena guides corporate strategy, sustainability standards, and responsible growth programs, ensuring innovation creates durable value for customers and communities.",
    image: elenaVossPortrait,
    imageAlt: "Executive portrait of Elena Voss in a modern corporate interior",
    objectPosition: "66% 50%",
    sourceCredit: "Vitaly Gariev / Unsplash",
    sourceUrl: "https://unsplash.com/photos/LlcpQWSWPUo",
  },
];

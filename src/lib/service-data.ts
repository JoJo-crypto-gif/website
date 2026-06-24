import assembleVideo from "@/assets/assemble.mp4";
import heroVideo from "@/assets/hero/hero.mp4";
import videoPoster from "@/assets/video-poster.png";
import { remoteMedia } from "@/lib/remote-media";

export type ServiceCapability = {
  label: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export type ServiceProfile = {
  slug: string;
  eyebrow: string;
  heroTitle: string;
  heroIntro: string;
  heroImage: string;
  heroVideo?: string;
  heroPoster?: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewBody: string[];
  stats: { value: string; label: string }[];
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: ServiceCapability[];
  deliveryTitle: string;
  deliveryIntro: string;
  delivery: { title: string; body: string }[];
  mediaLabel: string;
  mediaTitle: string;
  mediaBody: string;
  mediaVideo: string;
  mediaPoster: string;
  mediaImages: { src: string; alt: string; caption: string }[];
  productSlugs: string[];
  inquiryLabel: string;
  inquiryTitle: string;
  inquiryBody: string;
  inquiryCta: string;
};

export const serviceProfiles: ServiceProfile[] = [
  {
    slug: "aviation",
    eyebrow: "Flagship Service / Aviation",
    heroTitle: "Aircraft programs built around the operator.",
    heroIntro:
      "From early fleet strategy to lifecycle support, Lucid Aviation Aviation brings aircraft, operations, people, and data into one dependable program.",
    heroImage: remoteMedia.services.aviation.hero.src,
    heroVideo,
    heroPoster: remoteMedia.services.aviation.hero.src,
    overviewLabel: "Aviation, end to end",
    overviewTitle: "A practical route from fleet ambition to daily reliability.",
    overviewBody: [
      "Our aviation teams support carriers, public-sector operators, investors, and program partners across the full aircraft lifecycle. Every engagement starts with the operating environment, the network, and the people responsible for safe delivery.",
      "We combine program planning, technical integration, maintenance strategy, training readiness, and connected operations. The result is not a disconnected study, but a decision framework that can keep working as the fleet evolves.",
    ],
    stats: [
      { value: "360°", label: "Aircraft lifecycle view" },
      { value: "24/7", label: "Operations-led planning" },
      { value: "1", label: "Integrated program team" },
      { value: "5", label: "Group services connected" },
    ],
    capabilitiesTitle: "Build the fleet. Prepare the operation. Sustain the value.",
    capabilitiesIntro:
      "Select a workstream to see how aircraft planning, readiness, and lifecycle services connect.",
    capabilities: [
      {
        label: "Fleet & network strategy",
        title: "Aircraft decisions grounded in the route network.",
        body: "We translate demand, mission profile, infrastructure, and operating economics into a fleet strategy leadership teams can test and govern.",
        bullets: [
          "Fleet and mission requirements",
          "Network and capacity scenarios",
          "Program feasibility and partner strategy",
          "Commercial and operational risk reviews",
        ],
        image: remoteMedia.services.aviation.capabilities[0].src,
        imageAlt: remoteMedia.services.aviation.capabilities[0].alt,
      },
      {
        label: "Program readiness",
        title: "The organization prepared before the aircraft arrives.",
        body: "Technical, workforce, supplier, and infrastructure plans are developed as one readiness program, with clear ownership and review gates.",
        bullets: [
          "Entry-into-service planning",
          "Maintenance and engineering readiness",
          "Training and workforce pathways",
          "Airport and ground-operation integration",
        ],
        image: remoteMedia.services.aviation.capabilities[1].src,
        imageAlt: remoteMedia.services.aviation.capabilities[1].alt,
      },
      {
        label: "Lifecycle operations",
        title: "More visibility across every operational day.",
        body: "Connected maintenance, performance, and supplier information helps operators protect reliability while improving the long-term value of the fleet.",
        bullets: [
          "Reliability and maintenance programs",
          "Fleet performance dashboards",
          "Supply and technical support models",
          "Continuous improvement governance",
        ],
        image: remoteMedia.services.aviation.capabilities[2].src,
        imageAlt: remoteMedia.services.aviation.capabilities[2].alt,
      },
    ],
    deliveryTitle: "A program model with clear gates and shared accountability.",
    deliveryIntro:
      "Lucid Aviation adapts the sequence to the operator, while keeping decisions visible from discovery through long-term support.",
    delivery: [
      {
        title: "Define the mission",
        body: "Align fleet goals, routes, stakeholders, operating constraints, and measures of success.",
      },
      {
        title: "Design the program",
        body: "Build the aircraft, partner, infrastructure, workforce, and governance blueprint.",
      },
      {
        title: "Prove readiness",
        body: "Use reviews, simulation, training, and operational trials to close readiness gaps.",
      },
      {
        title: "Sustain performance",
        body: "Connect lifecycle data, technical support, and improvement cycles after entry into service.",
      },
    ],
    mediaLabel: "Aviation in motion",
    mediaTitle: "See the program as an operating system, not a single asset.",
    mediaBody:
      "Aircraft are the visible center of aviation. The complete service joins them to infrastructure, data, maintenance, and the teams that keep every flight moving.",
    mediaVideo: heroVideo,
    mediaPoster: remoteMedia.services.aviation.hero.src,
    mediaImages: [
      {
        src: remoteMedia.services.aviation.gallery[0].src,
        alt: remoteMedia.services.aviation.gallery[0].alt,
        caption: "Fleet operations",
      },
      {
        src: remoteMedia.services.aviation.gallery[1].src,
        alt: remoteMedia.services.aviation.gallery[1].alt,
        caption: "Lifecycle planning",
      },
      {
        src: remoteMedia.services.aviation.gallery[2].src,
        alt: remoteMedia.services.aviation.gallery[2].alt,
        caption: "Connected operations",
      },
      {
        src: remoteMedia.services.aviation.gallery[3].src,
        alt: remoteMedia.services.aviation.gallery[3].alt,
        caption: "Fleet readiness",
      },
      {
        src: remoteMedia.services.aviation.gallery[4].src,
        alt: remoteMedia.services.aviation.gallery[4].alt,
        caption: "Manufacturing integration",
      },
      {
        src: remoteMedia.services.aviation.gallery[5].src,
        alt: remoteMedia.services.aviation.gallery[5].alt,
        caption: "Hangar support",
      },
    ],
    productSlugs: ["aeroline-a-90", "aerodigital-network"],
    inquiryLabel: "Aviation inquiry",
    inquiryTitle: "Planning an aircraft, fleet, or operations program?",
    inquiryBody:
      "Share the mission, network, timing, and current operating context. Our aviation team will route the conversation to the right program specialists.",
    inquiryCta: "Discuss an aviation program",
  },
  {
    slug: "drones",
    eyebrow: "Aerial Intelligence / Autonomous Systems",
    heroTitle: "Autonomy designed for real field work.",
    heroIntro:
      "Lucid Aviation develops drone operations that connect aircraft, sensors, mission control, and usable data for infrastructure and industrial teams.",
    heroImage: remoteMedia.services.drones.hero.src,
    overviewLabel: "Beyond the airframe",
    overviewTitle: "Repeatable aerial intelligence from mission design to decision.",
    overviewBody: [
      "A useful drone program is more than a vehicle. It needs a safe operating concept, the right payload, trained people, dependable field processes, and a clear route from captured data to action.",
      "Our autonomous-systems teams shape that full workflow for asset inspection, mapping, corridor monitoring, logistics, and remote operations. Programs are designed around the conditions customers actually face in the field.",
    ],
    stats: [
      { value: "BVLOS", label: "Mission planning pathways" },
      { value: "3D", label: "Mapping and site context" },
      { value: "1:Many", label: "Scalable fleet supervision" },
      { value: "Live", label: "Mission and asset telemetry" },
    ],
    capabilitiesTitle: "Aircraft, autonomy, and insight in one mission chain.",
    capabilitiesIntro:
      "Move through the mission chain to explore the systems behind repeatable drone operations.",
    capabilities: [
      {
        label: "Mission systems",
        title: "Every flight starts with an operating concept.",
        body: "We define routes, risk controls, payloads, communications, field roles, and approval pathways around the customer mission.",
        bullets: [
          "Concept of operations",
          "Mission and route planning",
          "Payload and communications integration",
          "Safety case and operating procedures",
        ],
        image: remoteMedia.services.drones.capabilities[0].src,
        imageAlt: remoteMedia.services.drones.capabilities[0].alt,
      },
      {
        label: "Autonomous operations",
        title: "Consistency across aircraft, crews, and locations.",
        body: "Fleet workflows coordinate mission preparation, remote supervision, health monitoring, and field exceptions without removing accountable human oversight.",
        bullets: [
          "Fleet and mission control",
          "Remote supervision models",
          "Aircraft health and telemetry",
          "Field-team training and handoff",
        ],
        image: remoteMedia.services.drones.capabilities[1].src,
        imageAlt: remoteMedia.services.drones.capabilities[1].alt,
      },
      {
        label: "Data operations",
        title: "Captured data converted into a working decision.",
        body: "Inspection imagery, maps, telemetry, and exceptions are organized for the maintenance, engineering, or operations teams that need them.",
        bullets: [
          "Inspection and mapping workflows",
          "Condition and change detection",
          "Operational dashboards",
          "Integration with asset systems",
        ],
        image: remoteMedia.services.drones.capabilities[2].src,
        imageAlt: remoteMedia.services.drones.capabilities[2].alt,
      },
    ],
    deliveryTitle: "Start focused, prove the mission, then scale the network.",
    deliveryIntro:
      "Each phase creates evidence for the next, keeping safety and operational usefulness in the same conversation.",
    delivery: [
      {
        title: "Mission discovery",
        body: "Select the operational problem, site, asset type, data need, and success criteria.",
      },
      {
        title: "System configuration",
        body: "Configure aircraft, payload, communications, control, procedures, and data workflow.",
      },
      {
        title: "Field validation",
        body: "Run controlled missions and validate safety, coverage, data quality, and team readiness.",
      },
      {
        title: "Fleet scale-up",
        body: "Expand routes, sites, aircraft, and integrations through governed operating standards.",
      },
    ],
    mediaLabel: "Mission sequence",
    mediaTitle: "A system assembled around the work to be done.",
    mediaBody:
      "The flight platform, sensor package, autonomy layer, field team, and data products are configured as one service rather than separate technologies.",
    mediaVideo: assembleVideo,
    mediaPoster: videoPoster,
    mediaImages: [
      {
        src: remoteMedia.services.drones.gallery[0].src,
        alt: remoteMedia.services.drones.gallery[0].alt,
        caption: "Corridor inspection",
      },
      {
        src: remoteMedia.services.drones.gallery[1].src,
        alt: remoteMedia.services.drones.gallery[1].alt,
        caption: "Fleet operations",
      },
      {
        src: remoteMedia.services.drones.gallery[2].src,
        alt: remoteMedia.services.drones.gallery[2].alt,
        caption: "Site intelligence",
      },
      {
        src: remoteMedia.services.drones.gallery[3].src,
        alt: remoteMedia.services.drones.gallery[3].alt,
        caption: "Remote terrain",
      },
      {
        src: remoteMedia.services.drones.gallery[4].src,
        alt: remoteMedia.services.drones.gallery[4].alt,
        caption: "Mission platform",
      },
      {
        src: remoteMedia.services.drones.gallery[5].src,
        alt: remoteMedia.services.drones.gallery[5].alt,
        caption: "Aerial inspection",
      },
    ],
    productSlugs: ["skygrid-uas", "aerodigital-network"],
    inquiryLabel: "Drone operations inquiry",
    inquiryTitle: "Have a site, route, or asset that needs better visibility?",
    inquiryBody:
      "Tell us what needs to be inspected, mapped, moved, or monitored. We will help frame a safe, useful first mission and a route to scale.",
    inquiryCta: "Plan a drone mission",
  },
  {
    slug: "consulting",
    eyebrow: "Advisory / Operational Transformation",
    heroTitle: "Strategy that survives contact with operations.",
    heroIntro:
      "Lucid Aviation Consulting helps leadership teams modernize complex aviation and industrial organizations while keeping delivery, people, and accountability in view.",
    heroImage: remoteMedia.services.consulting.hero.src,
    overviewLabel: "Advice built to move",
    overviewTitle: "From an executive decision to an executable operating plan.",
    overviewBody: [
      "Complex transformation crosses strategy, technology, process, people, suppliers, and governance. Treating any one of those in isolation creates a plan that can look convincing but remain difficult to deliver.",
      "Our consultants work with leadership and frontline teams to understand the operating reality, define a clear target state, and build a sequenced path to measurable change. Specialist aviation, research, digital, and industrial teams can be brought in when the problem demands it.",
    ],
    stats: [
      { value: "C-Suite", label: "Executive decision support" },
      { value: "Field", label: "Frontline operating context" },
      { value: "90-Day", label: "Mobilization planning" },
      { value: "End-to-End", label: "Strategy through delivery" },
    ],
    capabilitiesTitle: "Clarity, control, and momentum for difficult programs.",
    capabilitiesIntro:
      "Choose an advisory domain to see how we connect executive intent with operating execution.",
    capabilities: [
      {
        label: "Enterprise strategy",
        title: "A direction that reflects the choices the business must make.",
        body: "We help leadership teams understand markets, capabilities, investment options, and risk before committing to a program or new operating model.",
        bullets: [
          "Portfolio and growth strategy",
          "Operating-model design",
          "Investment and partnership cases",
          "Scenario and risk analysis",
        ],
        image: remoteMedia.services.consulting.capabilities[0].src,
        imageAlt: remoteMedia.services.consulting.capabilities[0].alt,
      },
      {
        label: "Operational transformation",
        title: "Change organized around how work really happens.",
        body: "Processes, technology, roles, and measures are redesigned together, with implementation waves that protect critical operations.",
        bullets: [
          "Process and performance diagnostics",
          "Digital transformation roadmaps",
          "Organization and workforce design",
          "Implementation management",
        ],
        image: remoteMedia.services.consulting.capabilities[1].src,
        imageAlt: remoteMedia.services.consulting.capabilities[1].alt,
      },
      {
        label: "Technical advisory",
        title: "Independent structure for high-consequence decisions.",
        body: "Specialist reviews turn complex program, system, and supplier information into decisions leaders can govern with confidence.",
        bullets: [
          "Program assurance and recovery",
          "Technology and supplier evaluation",
          "Safety, risk, and governance reviews",
          "Benefits and performance tracking",
        ],
        image: remoteMedia.services.consulting.capabilities[2].src,
        imageAlt: remoteMedia.services.consulting.capabilities[2].alt,
      },
    ],
    deliveryTitle: "Small senior teams, expanded only when the work requires it.",
    deliveryIntro:
      "The engagement stays focused on the decision and the people accountable for making it real.",
    delivery: [
      {
        title: "Frame the decision",
        body: "Clarify the business question, decision owners, evidence, constraints, and timing.",
      },
      {
        title: "Diagnose reality",
        body: "Combine data, interviews, field observation, and technical review into a shared baseline.",
      },
      {
        title: "Design the path",
        body: "Set the target state, priorities, governance, business case, and practical delivery sequence.",
      },
      {
        title: "Mobilize delivery",
        body: "Stand up teams, measures, review cadences, and implementation support for the first waves.",
      },
    ],
    mediaLabel: "Inside the engagement",
    mediaTitle: "A shared view of the operation creates better decisions.",
    mediaBody:
      "Our work moves between executive context, technical evidence, and frontline reality. That range helps recommendations remain both ambitious and executable.",
    mediaVideo: heroVideo,
    mediaPoster: remoteMedia.services.consulting.hero.src,
    mediaImages: [
      {
        src: remoteMedia.services.consulting.gallery[0].src,
        alt: remoteMedia.services.consulting.gallery[0].alt,
        caption: "Leadership alignment",
      },
      {
        src: remoteMedia.services.consulting.gallery[1].src,
        alt: remoteMedia.services.consulting.gallery[1].alt,
        caption: "Operating reality",
      },
      {
        src: remoteMedia.services.consulting.gallery[2].src,
        alt: remoteMedia.services.consulting.gallery[2].alt,
        caption: "Delivery partnership",
      },
      {
        src: remoteMedia.services.consulting.gallery[3].src,
        alt: remoteMedia.services.consulting.gallery[3].alt,
        caption: "Operational review",
      },
      {
        src: remoteMedia.services.consulting.gallery[4].src,
        alt: remoteMedia.services.consulting.gallery[4].alt,
        caption: "Program leadership",
      },
      {
        src: remoteMedia.services.consulting.gallery[5].src,
        alt: remoteMedia.services.consulting.gallery[5].alt,
        caption: "Technical delivery",
      },
    ],
    productSlugs: ["fleetops-advisory", "aerodigital-network"],
    inquiryLabel: "Consulting inquiry",
    inquiryTitle: "Facing a decision or transformation that cannot drift?",
    inquiryBody:
      "Give us the decision, the operating context, and the outcome leadership needs. We will assemble the right advisory conversation around it.",
    inquiryCta: "Speak with an advisor",
  },
  {
    slug: "research",
    eyebrow: "Applied Discovery / Research",
    heroTitle: "Move promising ideas into operational proof.",
    heroIntro:
      "Lucid Aviation Research connects science, engineering, simulation, and field partners to turn emerging capability into prototypes, evidence, and standards.",
    heroImage: remoteMedia.services.research.hero.src,
    overviewLabel: "Research with a destination",
    overviewTitle: "Built around the transition from possibility to use.",
    overviewBody: [
      "Research creates value when technical progress can move into a product, service, operating method, or policy decision. Our programs establish that destination early and keep operational partners close to the work.",
      "Teams combine materials, autonomy, digital operations, energy systems, simulation, and human factors. Shared facilities and staged reviews give partners a clear view of maturity, evidence, and the next investment decision.",
    ],
    stats: [
      { value: "TRL", label: "Maturity-led development" },
      { value: "Lab→Field", label: "Transition pathway" },
      { value: "Multi", label: "Disciplinary teams" },
      { value: "Open", label: "Partner innovation model" },
    ],
    capabilitiesTitle: "Discover, prototype, validate, and transition.",
    capabilitiesIntro:
      "Explore the research environments that move a technical question toward operational evidence.",
    capabilities: [
      {
        label: "Applied science",
        title: "Research questions shaped by future operating needs.",
        body: "We explore materials, energy efficiency, sensing, autonomy, and human-system performance against defined technical hypotheses.",
        bullets: [
          "Advanced materials and structures",
          "Energy and efficiency systems",
          "Sensing and intelligent systems",
          "Human factors and safety research",
        ],
        image: remoteMedia.services.research.capabilities[0].src,
        imageAlt: remoteMedia.services.research.capabilities[0].alt,
      },
      {
        label: "Prototype & simulation",
        title: "Make the concept testable before making it expensive.",
        body: "Digital models, rigs, prototypes, and simulations expose technical trade-offs and operating implications while change remains affordable.",
        bullets: [
          "Digital engineering and simulation",
          "Rapid prototype programs",
          "System integration reviews",
          "Test design and instrumentation",
        ],
        image: remoteMedia.services.research.capabilities[1].src,
        imageAlt: remoteMedia.services.research.capabilities[1].alt,
      },
      {
        label: "Technology transition",
        title: "Evidence organized for the next owner and environment.",
        body: "Pilots, standards, documentation, and partner handoffs prepare validated capability for a business unit, customer, or wider ecosystem.",
        bullets: [
          "Operational pilot design",
          "Verification and evidence packages",
          "Standards and method development",
          "Product and partner transition",
        ],
        image: remoteMedia.services.research.capabilities[2].src,
        imageAlt: remoteMedia.services.research.capabilities[2].alt,
      },
    ],
    deliveryTitle: "Maturity gates keep technical progress and investment aligned.",
    deliveryIntro:
      "Each gate answers a different question, from whether the concept is credible to whether it is ready for an operating partner.",
    delivery: [
      {
        title: "Question",
        body: "Define the technical hypothesis, use case, evidence standard, and transition destination.",
      },
      {
        title: "Explore",
        body: "Run early studies, models, experiments, and technical comparisons to identify viable paths.",
      },
      {
        title: "Prove",
        body: "Build prototypes and conduct controlled tests against measurable performance criteria.",
      },
      {
        title: "Transition",
        body: "Package evidence, standards, risks, and support for pilots or adoption by an operating team.",
      },
    ],
    mediaLabel: "From concept to proof",
    mediaTitle: "A visible record of how a system becomes ready.",
    mediaBody:
      "Models, components, tests, and operational demonstrations create a traceable path between the original research question and the final transition decision.",
    mediaVideo: assembleVideo,
    mediaPoster: videoPoster,
    mediaImages: [
      {
        src: remoteMedia.services.research.gallery[0].src,
        alt: remoteMedia.services.research.gallery[0].alt,
        caption: "Applied research",
      },
      {
        src: remoteMedia.services.research.gallery[1].src,
        alt: remoteMedia.services.research.gallery[1].alt,
        caption: "Prototype review",
      },
      {
        src: remoteMedia.services.research.gallery[2].src,
        alt: remoteMedia.services.research.gallery[2].alt,
        caption: "Technology transition",
      },
      {
        src: remoteMedia.services.research.gallery[3].src,
        alt: remoteMedia.services.research.gallery[3].alt,
        caption: "Prototype systems",
      },
      {
        src: remoteMedia.services.research.gallery[4].src,
        alt: remoteMedia.services.research.gallery[4].alt,
        caption: "Field robotics",
      },
      {
        src: remoteMedia.services.research.gallery[5].src,
        alt: remoteMedia.services.research.gallery[5].alt,
        caption: "Engineering validation",
      },
    ],
    productSlugs: ["research-campus-04", "aerodigital-network"],
    inquiryLabel: "Research partnership",
    inquiryTitle: "Have a technical question ready for a serious program?",
    inquiryBody:
      "Share the hypothesis, intended operating use, maturity, and evidence you need. Our research team will identify the right first review and partner model.",
    inquiryCta: "Explore a research partnership",
  },
  {
    slug: "mining",
    eyebrow: "Resource Operations / Mining",
    heroTitle: "Resource intelligence for safer, clearer operations.",
    heroIntro:
      "Lucid Aviation Mining combines aerial survey, field information, environmental monitoring, and logistics planning for responsible resource programs.",
    heroImage: remoteMedia.services.mining.hero.src,
    overviewLabel: "A clearer operating picture",
    overviewTitle: "Connect terrain, assets, activity, and responsibility.",
    overviewBody: [
      "Resource operations depend on timely knowledge across large, changing environments. Survey, logistics, environmental conditions, and field execution need to be viewed together if leaders are to plan safely and respond early.",
      "Our mining service combines aerial intelligence with operating workflows and advisory support. It can begin with a focused survey or monitoring need, then expand into a broader site-intelligence and logistics model as evidence and value become clear.",
    ],
    stats: [
      { value: "Sitewide", label: "Operational visibility" },
      { value: "Repeat", label: "Survey and change tracking" },
      { value: "Remote", label: "Asset monitoring" },
      { value: "ESG", label: "Environmental context" },
    ],
    capabilitiesTitle: "Know the site, understand the change, coordinate the response.",
    capabilitiesIntro:
      "Select an operating layer to explore how field and aerial information become practical site intelligence.",
    capabilities: [
      {
        label: "Survey & mapping",
        title: "Reliable site context across difficult terrain.",
        body: "Repeatable aerial capture and mapping workflows create an accessible baseline for planning, measurement, and change review.",
        bullets: [
          "Topographic and corridor survey",
          "Site mapping and change detection",
          "Stockpile and volume workflows",
          "Remote terrain assessment",
        ],
        image: remoteMedia.services.mining.capabilities[0].src,
        imageAlt: remoteMedia.services.mining.capabilities[0].alt,
      },
      {
        label: "Responsible operations",
        title: "Environmental and field conditions kept in view.",
        body: "Monitoring plans connect aerial evidence, field observations, operating boundaries, and reporting needs across the site lifecycle.",
        bullets: [
          "Environmental baseline monitoring",
          "Water and land observations",
          "Rehabilitation progress tracking",
          "Evidence and reporting workflows",
        ],
        image: remoteMedia.services.mining.capabilities[1].src,
        imageAlt: remoteMedia.services.mining.capabilities[1].alt,
      },
      {
        label: "Logistics & control",
        title: "Movement, assets, and priorities coordinated together.",
        body: "Operational views help teams understand routes, constraints, asset activity, and exceptions across remote and distributed resource sites.",
        bullets: [
          "Site and corridor logistics",
          "Asset and route visibility",
          "Remote-operation dashboards",
          "Exception and response planning",
        ],
        image: remoteMedia.services.mining.capabilities[2].src,
        imageAlt: remoteMedia.services.mining.capabilities[2].alt,
      },
    ],
    deliveryTitle: "Begin with the operating question, then build the site view.",
    deliveryIntro:
      "The program grows from a defined decision need, avoiding a large technology deployment without a clear operational owner.",
    delivery: [
      {
        title: "Site definition",
        body: "Map stakeholders, decisions, terrain, assets, constraints, available data, and field access.",
      },
      {
        title: "Baseline capture",
        body: "Establish survey, monitoring, data-quality, and reporting methods for the selected area.",
      },
      {
        title: "Operational pilot",
        body: "Run repeat missions and field workflows against real planning or monitoring decisions.",
      },
      {
        title: "Scaled intelligence",
        body: "Expand coverage, integrations, dashboards, and governance across sites or corridors.",
      },
    ],
    mediaLabel: "The operating environment",
    mediaTitle: "See more of the site without losing the field context.",
    mediaBody:
      "Aerial and digital visibility supports people on the ground. The service is designed to strengthen planning, coordination, and responsible action rather than separate information from operations.",
    mediaVideo: heroVideo,
    mediaPoster: remoteMedia.services.mining.hero.src,
    mediaImages: [
      {
        src: remoteMedia.services.mining.gallery[0].src,
        alt: remoteMedia.services.mining.gallery[0].alt,
        caption: "Aerial survey",
      },
      {
        src: remoteMedia.services.mining.gallery[1].src,
        alt: remoteMedia.services.mining.gallery[1].alt,
        caption: "Environmental context",
      },
      {
        src: remoteMedia.services.mining.gallery[2].src,
        alt: remoteMedia.services.mining.gallery[2].alt,
        caption: "Field coordination",
      },
      {
        src: remoteMedia.services.mining.gallery[3].src,
        alt: remoteMedia.services.mining.gallery[3].alt,
        caption: "Extraction systems",
      },
      {
        src: remoteMedia.services.mining.gallery[4].src,
        alt: remoteMedia.services.mining.gallery[4].alt,
        caption: "Terrain operations",
      },
      {
        src: remoteMedia.services.mining.gallery[5].src,
        alt: remoteMedia.services.mining.gallery[5].alt,
        caption: "Haulage coordination",
      },
    ],
    productSlugs: ["terrasight", "skygrid-uas"],
    inquiryLabel: "Mining services inquiry",
    inquiryTitle: "Need a clearer view of a site, corridor, or resource operation?",
    inquiryBody:
      "Tell us the location, decision, operating conditions, and information currently available. We will shape a focused first survey or intelligence program.",
    inquiryCta: "Discuss a site program",
  },
];

export function getServiceProfile(slug: string) {
  return serviceProfiles.find((profile) => profile.slug === slug) ?? serviceProfiles[0];
}

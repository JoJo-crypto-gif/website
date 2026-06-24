export type CareerOpening = {
  slug: string;
  title: string;
  discipline: string;
  location: string;
  business: string;
  type: string;
  workingModel: string;
  reference: string;
  posted: string;
  summary: string;
  overview: string;
  team: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
};

export const careerOpenings: CareerOpening[] = [
  {
    slug: "aircraft-systems-engineer",
    title: "Aircraft Systems Engineer",
    discipline: "Engineering",
    location: "Accra",
    business: "Aviation",
    type: "Full time",
    workingModel: "On-site / Flexible",
    reference: "AD-AV-1042",
    posted: "June 2026",
    summary:
      "Translate aircraft-level requirements into dependable systems, interfaces, verification plans, and lifecycle decisions.",
    overview:
      "The Aircraft Systems Engineer works across airframe, avionics, propulsion, manufacturing, and operator-support teams. You will help define how aircraft systems work together, how requirements are verified, and how technical decisions remain traceable throughout the program lifecycle.",
    team: "You will join a multidisciplinary aviation engineering group working with program leadership, suppliers, safety specialists, manufacturing teams, and future operators.",
    responsibilities: [
      "Develop and maintain system requirements, interfaces, and verification evidence.",
      "Coordinate technical decisions across aircraft, manufacturing, and support disciplines.",
      "Support design reviews, risk assessments, trade studies, and certification planning.",
      "Turn operator needs into measurable engineering and lifecycle requirements.",
    ],
    requirements: [
      "Degree or equivalent experience in aerospace, mechanical, electrical, or systems engineering.",
      "Experience working with complex engineered products or regulated systems.",
      "Clear technical writing, structured problem solving, and collaborative decision-making.",
      "Ability to work across technical disciplines and communicate design implications.",
    ],
    preferred: [
      "Aircraft certification or safety-assessment experience.",
      "Familiarity with requirements-management and model-based engineering tools.",
      "Experience supporting aircraft manufacturing or in-service operations.",
    ],
  },
  {
    slug: "autonomy-software-lead",
    title: "Autonomy Software Lead",
    discipline: "Digital & Research",
    location: "Washington",
    business: "Drones",
    type: "Full time",
    workingModel: "Hybrid",
    reference: "AD-DR-2086",
    posted: "June 2026",
    summary:
      "Lead the software architecture behind supervised autonomy, mission planning, and dependable field operations.",
    overview:
      "The Autonomy Software Lead owns technical direction for flight autonomy and mission software used across inspection and aerial-intelligence programs. The role balances research ambition with testability, operator oversight, and field reliability.",
    team: "You will lead a compact software group and work closely with flight-test, sensor, safety, product, and field-operations teams across the drones business.",
    responsibilities: [
      "Set architecture and engineering standards for autonomy and mission software.",
      "Guide simulation, hardware-in-the-loop testing, and flight-test readiness.",
      "Translate operational scenarios into safe system behavior and operator controls.",
      "Coach engineers and coordinate technical delivery across partner teams.",
    ],
    requirements: [
      "Substantial experience delivering robotics, autonomy, or safety-critical software.",
      "Strong knowledge of modern software architecture, testing, and observability.",
      "Experience leading technical decisions across multidisciplinary teams.",
      "Ability to explain complex behavior to operators and non-software stakeholders.",
    ],
    preferred: [
      "Uncrewed-aircraft or flight-control software experience.",
      "Experience with simulation, perception, or edge-computing systems.",
      "Familiarity with assurance methods for autonomous systems.",
    ],
  },
  {
    slug: "flight-operations-specialist",
    title: "Flight Operations Specialist",
    discipline: "Operations",
    location: "Accra",
    business: "Aviation",
    type: "Full time",
    workingModel: "On-site",
    reference: "AD-AV-1168",
    posted: "May 2026",
    summary:
      "Build safe, repeatable operating procedures across flight programs, training, dispatch, and field coordination.",
    overview:
      "The Flight Operations Specialist connects program plans with daily operating reality. You will develop procedures, coordinate readiness activity, and help teams learn from operational data, events, and changing mission requirements.",
    team: "You will work with flight crews, dispatch, safety, maintenance, engineering, and customer-program teams from our Accra aviation operations base.",
    responsibilities: [
      "Develop operating procedures, readiness checklists, and coordination plans.",
      "Support flight scheduling, dispatch interfaces, and operational risk reviews.",
      "Coordinate lessons learned between crews, engineering, and program leadership.",
      "Contribute to training standards, exercises, and operational assurance activity.",
    ],
    requirements: [
      "Experience in aviation operations, dispatch, flight programs, or technical operations.",
      "Strong attention to detail and confidence working within controlled procedures.",
      "Ability to coordinate people and information in time-sensitive environments.",
      "Clear written and verbal communication.",
    ],
    preferred: [
      "Operational safety or quality-management experience.",
      "Knowledge of airline, government, or special-mission flight operations.",
      "Experience using operational planning or fleet-management systems.",
    ],
  },
  {
    slug: "industrial-transformation-consultant",
    title: "Industrial Transformation Consultant",
    discipline: "Business & Advisory",
    location: "London",
    business: "Consulting",
    type: "Full time",
    workingModel: "Hybrid / Client travel",
    reference: "AD-CO-3014",
    posted: "June 2026",
    summary:
      "Help aviation and industrial clients turn strategic ambition into practical operating change.",
    overview:
      "The Industrial Transformation Consultant works with client leaders and frontline teams to diagnose performance, shape modernization programs, and support implementation. Assignments combine operating-model design, digital change, governance, and measurable delivery.",
    team: "You will join an interdisciplinary advisory team spanning aviation, data, engineering, operations, sustainability, and program delivery.",
    responsibilities: [
      "Structure client problems, gather evidence, and identify practical improvement opportunities.",
      "Design transformation roadmaps, governance, measures, and implementation plans.",
      "Facilitate workshops with executives, technical specialists, and frontline teams.",
      "Produce clear analysis and recommendations that clients can act on.",
    ],
    requirements: [
      "Experience in consulting, transformation, strategy, or complex program delivery.",
      "Strong analytical, facilitation, presentation, and stakeholder-management skills.",
      "Ability to move between strategic context and operational detail.",
      "Willingness to travel when client work requires it.",
    ],
    preferred: [
      "Experience in aviation, infrastructure, manufacturing, or resources.",
      "Knowledge of digital operations or performance-management systems.",
      "Formal project, change, or process-improvement qualification.",
    ],
  },
  {
    slug: "materials-research-scientist",
    title: "Materials Research Scientist",
    discipline: "Digital & Research",
    location: "London",
    business: "Research",
    type: "Hybrid",
    workingModel: "Laboratory / Hybrid",
    reference: "AD-RS-4019",
    posted: "May 2026",
    summary:
      "Investigate materials and manufacturing methods that improve performance, repairability, and lifecycle value.",
    overview:
      "The Materials Research Scientist develops and evaluates material systems for aviation and industrial applications. Work spans laboratory investigation, supplier collaboration, prototype trials, technical reporting, and transition into business-unit programs.",
    team: "You will work in the applied research division alongside materials engineers, manufacturing specialists, simulation teams, and external research partners.",
    responsibilities: [
      "Plan and conduct material characterization and manufacturing experiments.",
      "Interpret evidence and communicate implications for design and lifecycle decisions.",
      "Coordinate prototype and validation activity with internal and external laboratories.",
      "Support technology-readiness assessments and transition plans.",
    ],
    requirements: [
      "Advanced degree or equivalent research experience in materials science or engineering.",
      "Practical laboratory, experimental-design, and technical-reporting experience.",
      "Ability to connect scientific findings with engineering and operating requirements.",
      "Strong collaboration and research-integrity practices.",
    ],
    preferred: [
      "Experience with composites, lightweight alloys, coatings, or additive manufacturing.",
      "Knowledge of aerospace qualification or industrial scale-up.",
      "Published research or technology-transfer experience.",
    ],
  },
  {
    slug: "responsible-sourcing-manager",
    title: "Responsible Sourcing Manager",
    discipline: "Business & Advisory",
    location: "Accra",
    business: "Mining",
    type: "Full time",
    workingModel: "Hybrid / Site travel",
    reference: "AD-MN-5063",
    posted: "June 2026",
    summary:
      "Build transparent sourcing, supplier assurance, and responsible procurement systems across resource operations.",
    overview:
      "The Responsible Sourcing Manager turns group standards into practical supplier and site processes. You will strengthen due diligence, traceability, performance reviews, and corrective-action programs across critical supply chains.",
    team: "You will partner with procurement, sustainability, legal, site operations, community teams, suppliers, and group governance.",
    responsibilities: [
      "Develop sourcing standards, due-diligence processes, and supplier controls.",
      "Lead risk reviews, supplier engagement, and corrective-action tracking.",
      "Improve traceability and reporting across priority materials and services.",
      "Support procurement decisions with responsible-business evidence.",
    ],
    requirements: [
      "Experience in responsible sourcing, procurement, supply-chain risk, or ESG assurance.",
      "Knowledge of supplier due diligence and performance-management practices.",
      "Confidence working with operations, executives, and external partners.",
      "Strong judgment, documentation, and follow-through.",
    ],
    preferred: [
      "Mining, resources, manufacturing, or infrastructure experience.",
      "Knowledge of international responsible-sourcing frameworks.",
      "Audit, compliance, or sustainability-reporting experience.",
    ],
  },
  {
    slug: "field-robotics-technician",
    title: "Field Robotics Technician",
    discipline: "Operations",
    location: "Washington",
    business: "Drones",
    type: "Full time",
    workingModel: "Field based",
    reference: "AD-DR-2192",
    posted: "May 2026",
    summary:
      "Prepare, maintain, test, and deploy robotic aircraft and sensing equipment in demanding field environments.",
    overview:
      "The Field Robotics Technician keeps autonomous inspection equipment ready for work. You will support integration, maintenance, pre-deployment testing, field troubleshooting, and disciplined handover of aircraft and sensor systems.",
    team: "You will work with operators, software engineers, maintenance specialists, logistics teams, and customer field personnel.",
    responsibilities: [
      "Inspect, configure, test, and maintain aircraft, payloads, and ground equipment.",
      "Support deployment readiness, field setup, and post-mission technical review.",
      "Diagnose faults and document repair, configuration, and service history.",
      "Provide practical feedback to engineering and product teams.",
    ],
    requirements: [
      "Hands-on experience with robotics, drones, electronics, avionics, or field equipment.",
      "Strong troubleshooting habits and disciplined technical documentation.",
      "Ability to work safely outdoors and travel for field assignments.",
      "Comfort collaborating with engineering and operating teams.",
    ],
    preferred: [
      "UAS maintenance or operator qualification.",
      "Experience with sensors, communications, or electromechanical integration.",
      "Background in aviation maintenance or industrial field service.",
    ],
  },
  {
    slug: "graduate-engineering-program",
    title: "Graduate Engineering Program",
    discipline: "Engineering",
    location: "Multiple",
    business: "Group",
    type: "Early career",
    workingModel: "Rotational",
    reference: "AD-GR-6001",
    posted: "June 2026",
    summary:
      "Begin your career through structured rotations across engineering, operations, research, and business programs.",
    overview:
      "The Graduate Engineering Program combines real project responsibility with mentoring, technical learning, and rotations across Lucid Aviation businesses. Placements are shaped around business demand, candidate discipline, and long-term development.",
    team: "You will belong to a graduate cohort while working inside established aviation, drones, research, consulting, or resource teams.",
    responsibilities: [
      "Contribute to supervised engineering, analysis, testing, or operations work.",
      "Complete rotations and structured technical-development activities.",
      "Document learning and present recommendations to program teams.",
      "Build professional networks across the group and its partners.",
    ],
    requirements: [
      "Recent or upcoming degree in an engineering, science, technology, or related discipline.",
      "Evidence of practical problem solving through study, projects, internships, or work.",
      "Curiosity, accountability, and willingness to learn across disciplines.",
      "Clear communication and collaborative working habits.",
    ],
    preferred: [
      "Internship, research, design-team, or technical-volunteering experience.",
      "Interest in aviation, autonomy, manufacturing, sustainability, or industrial systems.",
      "Mobility for at least one cross-business placement.",
    ],
  },
];

export function getCareerOpening(slug: string) {
  return careerOpenings.find((opening) => opening.slug === slug);
}

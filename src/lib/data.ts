export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  whyItMatters?: string;
  futureImpact?: string;
  content?: string[];
  keywords?: string[];
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

// Fallback image used if Unsplash IDs ever fail to load.
export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70";

function buildContent(a: { title: string; summary: string; category: string; whyItMatters?: string; futureImpact?: string }): string[] {
  return [
    `${a.summary} This story, filed under ${a.category}, looks beyond the headline to examine what is actually new, what remains uncertain, and what curious readers should take away.`,
    `Researchers and engineers behind the work emphasize that progress here did not arrive overnight. Years of incremental advances — quieter papers, failed prototypes and patient funding — set the stage for the breakthrough now making the rounds. Understanding that long arc helps separate genuine signal from hype.`,
    a.whyItMatters
      ? `Why it matters: ${a.whyItMatters} The practical consequences could ripple across adjacent industries, change how products are designed, and shift the questions the next generation of researchers chooses to ask.`
      : `What stands out is how cleanly the result fits into a broader pattern: tools maturing, costs falling, and once-exotic ideas becoming everyday engineering. That is usually how transformative technology actually arrives.`,
    a.futureImpact
      ? `Looking ahead: ${a.futureImpact} The roadmap is not guaranteed, but the direction of travel is clear, and the teams involved are already iterating on the next version.`
      : `Looking ahead, expect follow-up work to focus on reliability, cost and accessibility. The most exciting versions of this idea are likely still a few iterations away.`,
    `NovaTech will keep tracking developments in ${a.category.toLowerCase()} and surface the most meaningful updates as they happen. If a topic here sparks your curiosity, explore the related sections to see how it connects to the wider landscape of science and technology.`,
  ];
}

export const trendingArticles: Article[] = enrich([
  { id: "t1", title: "NASA's Artemis III Targets Lunar South Pole", category: "Space", date: "Jun 24, 2026", summary: "Updated mission plan focuses on water-ice rich craters for a sustained human presence on the Moon.", image: img("photo-1446776811953-b23d57bd21aa"), whyItMatters: "Water ice could fuel future Mars missions.", futureImpact: "Foundation for a permanent lunar base by 2030." },
  { id: "t2", title: "GPT-Class Model Runs Fully On-Device", category: "AI", date: "Jun 22, 2026", summary: "New 3B parameter model delivers near-cloud quality with privacy-first local inference on phones.", image: img("photo-1677442136019-21780ecad995"), whyItMatters: "Removes cloud dependency and keeps data private.", futureImpact: "Mainstream offline AI assistants on every device." },
  { id: "t3", title: "Solid-State Batteries Hit 500 Wh/kg Milestone", category: "Technology", date: "Jun 20, 2026", summary: "A breakthrough lithium-metal architecture nearly doubles energy density for EVs.", image: img("photo-1593941707882-a5bba14938c7") },
  { id: "t4", title: "CRISPR Cure for Sickle Cell Reaches Wider Rollout", category: "Science", date: "Jun 18, 2026", summary: "Gene-editing therapy approved across new markets after strong long-term results.", image: img("photo-1530026405186-ed1f139313f8") },
  { id: "t5", title: "Quantum Chip Achieves 1,000 Logical Qubits", category: "Technology", date: "Jun 15, 2026", summary: "Error-corrected qubits cross a threshold considered useful for real-world problems.", image: img("photo-1635070041078-e363dbe005cb") },
  { id: "t6", title: "James Webb Spots Possible Biosignature on K2-18b", category: "Space", date: "Jun 12, 2026", summary: "Dimethyl sulfide detection strengthens the case for a habitable ocean world.", image: img("photo-1543722530-d2c3201371e7") },
]);

// Attach generated rich content + keywords to every article collection.
function enrich<T extends Article>(items: T[]): T[] {
  return items.map((a) => ({
    ...a,
    content: a.content ?? buildContent(a),
    keywords: a.keywords ?? [a.category, ...a.title.toLowerCase().split(/\W+/).filter((w) => w.length > 3)],
  }));
}

export const featuredStory: Article = enrich([{
  id: "f1",
  title: "The Year Fusion Power Became Real",
  category: "Energy",
  date: "Jun 26, 2026",
  summary: "Three independent reactors achieved net energy gain in the past six months — a turning point that could redefine the global energy grid within a decade.",
  whyItMatters: "Abundant clean power could transform transport, industry and climate policy.",
  futureImpact: "Fusion-backed grids may begin commercial pilots before 2035.",
  image: img("photo-1473341304170-971dccb5ac1e"),
}])[0];

export const todaysInnovation: Article = enrich([{
  id: "innov-self-healing-concrete",
  title: "Self-Healing Concrete Goes Mainstream",
  category: "Innovation",
  date: "Jun 26, 2026",
  image: img("photo-1503387762-592deb58ef4e"),
  summary: "Bacteria-infused concrete that seals its own cracks is now being deployed on highways and bridges across Europe.",
  whyItMatters: "Cuts infrastructure maintenance costs by up to 50% and extends bridge lifespans by decades.",
  futureImpact: "Could redefine urban infrastructure with buildings that quietly repair themselves over a century.",
}])[0];

export const categories = [
  { name: "Science", href: "/science", icon: "🔬", desc: "Physics, chemistry, biology and breakthroughs." },
  { name: "Technology", href: "/technology", icon: "💻", desc: "Software, robotics, and emerging tech." },
  { name: "Artificial Intelligence", href: "/ai", desc: "Models, tools, research and ethics.", icon: "🤖" },
  { name: "Space", href: "/space", icon: "🚀", desc: "Missions, astronomy and exploration." },
  { name: "Product Launches", href: "/launches", icon: "📱", desc: "New gadgets, EVs and apps." },
  { name: "Cybersecurity", href: "/technology", icon: "🛡️", desc: "Threats, defense, and privacy." },
  { name: "Biotechnology", href: "/science", icon: "🧬", desc: "Gene-editing and medical advances." },
  { name: "Renewable Energy", href: "/technology", icon: "⚡", desc: "Solar, wind, fusion and storage." },
];

export const didYouKnow = [
  "Octopuses have three hearts and blue, copper-based blood.",
  "A single bolt of lightning is five times hotter than the surface of the Sun.",
  "Voyager 1 is over 24 billion km from Earth — and still sending data.",
  "Honey never spoils — edible pots have been found in 3,000-year-old tombs.",
  "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
  "There are more stars in the universe than grains of sand on every beach on Earth.",
  "A teaspoon of neutron star material would weigh about 6 billion tonnes.",
];

export const launches: Article[] = enrich([
  { id: "l1", title: "Aurora Phone 7 Pro", category: "Smartphones", date: "Jun 25, 2026", summary: "Titanium frame, 3nm chip, and on-device AI camera engine.", image: img("photo-1511707171634-5f897ff02aa9") },
  { id: "l2", title: "Helix Studio Laptop M4", category: "Laptops", date: "Jun 20, 2026", summary: "18-hour battery, OLED display, and silent fanless design.", image: img("photo-1496181133206-80ce9b88a853") },
  { id: "l3", title: "Nimbus AI Workspace", category: "AI Tools", date: "Jun 18, 2026", summary: "Unified AI canvas for writing, design and code.", image: img("photo-1620712943543-bcc4688e7485") },
  { id: "l4", title: "Lumen Health App 3.0", category: "Apps", date: "Jun 14, 2026", summary: "Sleep coaching, on-device health summaries, and a redesigned dashboard.", image: img("photo-1551288049-bebda4e38f71") },
  { id: "l5", title: "Voltra Sky EV", category: "Electric Vehicles", date: "Jun 10, 2026", summary: "600 km range, 10-minute fast charge and a panoramic glass roof.", image: img("photo-1593941707882-a5bba14938c7") },
  { id: "l6", title: "Pulse Ring 2", category: "Wearables", date: "Jun 6, 2026", summary: "7-day battery smart ring with continuous biometrics.", image: img("photo-1523275335684-37898b6baf30") },
  { id: "l7", title: "EchoBuds Studio", category: "Consumer Electronics", date: "Jun 2, 2026", summary: "Adaptive ANC and lossless audio in a pocket case.", image: img("photo-1606220588913-b3aacb4d2f46") },
]);

export const scienceArticles: Article[] = enrich([
  { id: "s1", title: "Room-Temperature Superconductor Verified", category: "Physics", date: "Jun 26, 2026", summary: "Independent labs reproduce a key result that could revolutionize power transmission.", image: img("photo-1532187863486-abf9dbad1b69"), whyItMatters: "Could eliminate the ~10% of energy lost in transmission lines globally." },
  { id: "s2", title: "New Class of Catalysts Cleans CO2", category: "Chemistry", date: "Jun 24, 2026", summary: "Iron-based catalysts pull CO2 from air using 60% less energy.", image: img("photo-1554475901-4538ddfbccc2"), whyItMatters: "Makes direct air capture economically viable at scale." },
  { id: "s3", title: "Lab-Grown Heart Tissue Beats For a Year", category: "Medical Research", date: "Jun 22, 2026", summary: "Bioengineered cardiac patches sustained function in long-term trials.", image: img("photo-1576091160550-2173dba999ef"), whyItMatters: "A real path to repairing damaged hearts without transplants." },
  { id: "s4", title: "Deep-Sea Microbe Eats Plastic", category: "Biology", date: "Jun 20, 2026", summary: "An ocean-floor organism breaks down PET in days, not centuries.", image: img("photo-1559827260-dc66d52bef19"), whyItMatters: "Could anchor large-scale ocean plastic remediation." },
  { id: "s5", title: "Antarctic Ice Loss Slows In Key Sector", category: "Climate", date: "Jun 18, 2026", summary: "A regional eddy shift has temporarily reduced melt — but trends remain dire.", image: img("photo-1452796749083-bd92ad7a5e8d"), whyItMatters: "Buys time for sea-level adaptation planning." },
  { id: "s6", title: "New Fault Line Mapped Beneath Pacific", category: "Earth Science", date: "Jun 16, 2026", summary: "Higher-resolution sonar reveals an active 200 km fault system.", image: img("photo-1559627755-f3d6f87f4f5e"), whyItMatters: "Improves regional earthquake forecasting." },
  { id: "s7", title: "Mangrove Restoration Outperforms Sea Walls", category: "Environment", date: "Jun 14, 2026", summary: "Coastal mangroves absorb storm surge better and store carbon.", image: img("photo-1500382017468-9049fed747ef"), whyItMatters: "Nature-based defenses are cheaper and more durable." },
]);

export const technologyArticles: Article[] = enrich([
  { id: "tc1", title: "Open-Source IDE Adds Local Agent", category: "Software", date: "Jun 26, 2026", summary: "Free developer tools ship with an offline coding agent.", image: img("photo-1517694712202-14dd9538aa97") },
  { id: "tc2", title: "Warehouse Robots Hit Human Parity", category: "Robotics & Automation", date: "Jun 24, 2026", summary: "Bimanual robots match human packers in dexterity tests.", image: img("photo-1485827404703-89b55fcc595e") },
  { id: "tc3", title: "Zero-Trust Becomes the Default", category: "Cybersecurity", date: "Jun 22, 2026", summary: "Enterprises ditch VPNs for identity-based access models.", image: img("photo-1550751827-4bd374c3f58b") },
  { id: "tc4", title: "Edge Cloud Cuts Latency To 5ms", category: "Cloud Computing", date: "Jun 20, 2026", summary: "Distributed compute brings real-time apps to every region.", image: img("photo-1451187580459-43490279c0fa") },
  { id: "tc5", title: "Foldables Now 30% of Premium Phones", category: "Consumer Technology", date: "Jun 18, 2026", summary: "Improved hinges and crease-free displays drive adoption.", image: img("photo-1512941937669-90a1b58e7e9c") },
  { id: "tc6", title: "IPv6 Adoption Crosses 60% Globally", category: "Internet & Web", date: "Jun 16, 2026", summary: "Mobile carriers lead the long-awaited transition.", image: img("photo-1558494949-ef010cbdcc31") },
  { id: "tc7", title: "Cloud Gaming Hits 4K at 120fps", category: "Gaming Technology", date: "Jun 14, 2026", summary: "New codecs make streamed games feel local.", image: img("photo-1542751371-adc38448a05e") },
  { id: "tc8", title: "Lightweight AR Glasses Ship This Fall", category: "AR / VR / XR", date: "Jun 12, 2026", summary: "Under 60g, all-day battery, prescription-ready lenses.", image: img("photo-1593508512255-86ab42a8e620") },
  { id: "tc9", title: "Logical Qubit Milestone Reached", category: "Quantum Computing", date: "Jun 10, 2026", summary: "Useful quantum advantage for chemistry simulations.", image: img("photo-1635070041078-e363dbe005cb") },
  { id: "tc10", title: "Stablecoin Settlement Goes Mainstream", category: "Blockchain & Web3", date: "Jun 8, 2026", summary: "Payment processors integrate on-chain settlement rails.", image: img("photo-1639762681485-074b7f938ba0") },
  { id: "tc11", title: "Smart Cities Embrace IoT Standards", category: "Internet of Things (IoT)", date: "Jun 6, 2026", summary: "Matter-like spec unifies city infrastructure devices.", image: img("photo-1473968512647-3e447244af8f") },
  { id: "tc12", title: "Robotaxis Cleared In 12 New Cities", category: "Electric & Autonomous Vehicles", date: "Jun 4, 2026", summary: "Operational safety records cross regulatory thresholds.", image: img("photo-1549921296-3a6b3d3a8b5e") },
  { id: "tc13", title: "Vertical Farms Cut Water Use 95%", category: "Green Technology", date: "Jun 2, 2026", summary: "Indoor agriculture scales toward urban food security.", image: img("photo-1530836369250-ef72a3f5cda8") },
  { id: "tc14", title: "Neuromorphic Chips Sip Microwatts", category: "Emerging Technologies", date: "May 30, 2026", summary: "Brain-inspired processors enable always-on sensing.", image: img("photo-1518770660439-4636190af475") },
]);

export const aiArticles: Article[] = enrich([
  { id: "a1", title: "Multimodal Frontier Model Released", category: "AI Models", date: "Jun 26, 2026", summary: "Combined vision, audio and text reasoning at new state of the art.", image: img("photo-1677442136019-21780ecad995") },
  { id: "a2", title: "Generative Video Hits Hollywood Quality", category: "Generative AI", date: "Jun 22, 2026", summary: "Studios begin integrating AI shots into theatrical releases.", image: img("photo-1626814026160-2237a95fc5a0") },
  { id: "a3", title: "Self-Supervised Models Beat Labels", category: "Machine Learning", date: "Jun 18, 2026", summary: "Unlabeled data + clever objectives match human-labeled benchmarks.", image: img("photo-1551288049-bebda4e38f71") },
  { id: "a4", title: "Mechanistic Interpretability Breakthrough", category: "AI Research", date: "Jun 14, 2026", summary: "Researchers map circuits inside large models.", image: img("photo-1620712943543-bcc4688e7485") },
  { id: "a5", title: "Open AI Coding Agents Mature", category: "AI Tools", date: "Jun 10, 2026", summary: "Open-source agents reliably ship small features end-to-end.", image: img("photo-1526378722484-bd91ca387e72") },
  { id: "a6", title: "Global AI Safety Framework Signed", category: "AI Ethics", date: "Jun 6, 2026", summary: "30 nations agree on baseline evaluation requirements.", image: img("photo-1605379399642-870262d3d051") },
]);

export const spaceArticles: Article[] = enrich([
  { id: "sp1", title: "Crewed Mars Flyby Approved", category: "Space Missions", date: "Jun 26, 2026", summary: "International coalition targets a 2032 free-return mission.", image: img("photo-1446776811953-b23d57bd21aa") },
  { id: "sp2", title: "Europa Lander Survives First Winter", category: "Planetary Exploration", date: "Jun 22, 2026", summary: "Ice-shell samples returned new clues about a subsurface ocean.", image: img("photo-1462331940025-496dfbfc7564") },
  { id: "sp3", title: "Astronomers Spot Earliest Galaxy Yet", category: "Astronomy", date: "Jun 18, 2026", summary: "JWST pushes the cosmic dawn boundary further back.", image: img("photo-1419242902214-272b3f66ee7a") },
  { id: "sp4", title: "Gravitational Wave Hints At Cosmic Strings", category: "Deep Space Discoveries", date: "Jun 14, 2026", summary: "A persistent stochastic signal challenges current models.", image: img("photo-1502134249126-9f3755a50d78") },
  { id: "sp5", title: "Reusable Heavy Lifter Lands 100th Time", category: "Space Technology", date: "Jun 10, 2026", summary: "Booster reliability milestone slashes per-kilo launch costs.", image: img("photo-1517976487492-5750f3195933") },
  { id: "sp6", title: "10,000 Satellite Constellation Online", category: "Satellites", date: "Jun 6, 2026", summary: "New mesh networking improves global internet coverage.", image: img("photo-1614728263952-84ea256f9679") },
  { id: "sp7", title: "Sentinel-7 Maps Methane Leaks Live", category: "Earth Observation", date: "Jun 2, 2026", summary: "Hyperspectral imagery pinpoints super-emitter facilities.", image: img("photo-1451187580459-43490279c0fa") },
  { id: "sp8", title: "Africa's Space Agency Launches First Probe", category: "Space Agencies Worldwide", date: "May 28, 2026", summary: "Continent-wide collaboration achieves lunar orbit.", image: img("photo-1517976487492-5750f3195933") },
]);

export const faqs: { q: string[]; a: string }[] = [
  { q: ["what is novatech", "about novatech", "who are you", "what is this site"], a: "NovaTech is a science and technology discovery platform. We curate stories across science, technology, AI, space and product launches — where curiosity meets innovation." },
  { q: ["navigate", "navigation", "how to use", "menu"], a: "Use the top navigation to jump between News, Science, Technology, AI, Space and Launches. The hamburger menu opens the same sections on mobile." },
  { q: ["dark mode", "theme", "night mode"], a: "Tap the sun/moon icon in the navigation bar to toggle dark mode. Your choice is saved on this device." },
  { q: ["news", "latest news"], a: "Head to the News page for curated trending, latest and editor's pick stories." },
  { q: ["science", "physics", "chemistry", "biology"], a: "The Science page covers physics, chemistry, biology, medical research, environment, climate and earth science." },
  { q: ["technology", "robotics", "cybersecurity", "cloud"], a: "The Technology page is organized by software, robotics, cybersecurity, cloud, consumer tech, AR/VR, quantum, blockchain, IoT, EVs, green tech and more." },
  { q: ["ai", "artificial intelligence", "machine learning"], a: "The AI page covers models, generative AI, machine learning, research, tools and ethics." },
  { q: ["space", "nasa", "rocket", "mars"], a: "The Space page covers missions, planetary exploration, astronomy, deep space, satellites, Earth observation and global space agencies." },
  { q: ["launches", "product", "phone", "ev", "wearable"], a: "Check the Launches page for new smartphones, laptops, AI tools, apps, electric vehicles, wearables and consumer electronics." },
  { q: ["contact", "email", "support"], a: "Visit the Contact page to send us a message or find our email and social links." },
  { q: ["subscribe", "newsletter"], a: "Scroll to the newsletter section on the home page to subscribe for weekly highlights." },
  { q: ["account", "login", "signup"], a: "NovaTech doesn't require an account. All content is freely available." },
  { q: ["who made", "team", "creator"], a: "NovaTech is built by a small team of science and technology enthusiasts. Learn more on the About page." },
  { q: ["fact", "did you know"], a: "Check the 'Did You Know?' card on the home page — it shows a new fact each time you visit." },
  { q: ["search", "find", "look for"], a: "Tap the magnifying glass in the top bar to search every article — results filter as you type by title, summary, category or keywords." },
  { q: ["read more", "full article", "open article"], a: "Click any 'Read more' button to open the full article page with the image, date, category and complete write-up." },
  { q: ["quantum"], a: "Quantum computing uses qubits — which can be 0, 1, or both at once — to explore many possible answers in parallel. See the Technology page for the latest milestones." },
  { q: ["black hole"], a: "A black hole is a region where gravity is so strong that not even light can escape. Telescopes like the Event Horizon Telescope have imaged the shadows of supermassive ones." },
  { q: ["big bang", "universe"], a: "Cosmologists describe the universe as expanding from a hot, dense state about 13.8 billion years ago — the Big Bang. The Space page covers the latest cosmological discoveries." },
  { q: ["dna", "gene", "genetics", "crispr"], a: "DNA is the molecule that stores the instructions for life. CRISPR is a precise gene-editing tool now being used to treat diseases like sickle cell — see the Science page." },
  { q: ["climate", "global warming"], a: "Climate change refers to long-term shifts in temperature and weather, driven largely by greenhouse gases. The Science page covers climate, environment and earth science." },
  { q: ["renewable", "solar", "wind", "fusion"], a: "Renewable energy includes solar, wind, hydro and emerging fusion power. We track each on the Technology page under Green Tech and Renewable Energy." },
  { q: ["how does ai work", "what is ai", "neural network"], a: "Modern AI is built from neural networks trained on huge datasets to find patterns. Today's frontier models combine text, images and audio. See the AI page for deeper coverage." },
  { q: ["generative", "chatgpt", "llm", "gpt"], a: "Generative AI creates new text, images, audio or video. Large language models (LLMs) are the engine behind chat assistants — explore them on the AI page." },
  { q: ["robot", "robotics"], a: "Robotics combines mechanical engineering, electronics and AI to build machines that sense and act. Warehouse, surgical and humanoid robots are all profiled on the Technology page." },
  { q: ["smartphone", "phone"], a: "Smartphone reviews and new launches — including the Aurora Phone 7 Pro — live on the Launches page under Smartphones." },
  { q: ["laptop"], a: "Latest laptops, including the Helix Studio M4, are on the Launches page under Laptops." },
  { q: ["car", "ev", "electric vehicle", "tesla"], a: "Electric and autonomous vehicle launches sit on the Launches page; broader EV technology stories are on the Technology page." },
  { q: ["satellite", "starlink"], a: "Satellites — from broadband constellations to Earth observation — are covered on the Space page under Satellites and Earth Observation." },
  { q: ["moon", "lunar", "artemis"], a: "Lunar missions, including NASA's Artemis programme, are on the Space page under Space Missions." },
  { q: ["webb", "telescope", "jwst"], a: "The James Webb Space Telescope's discoveries — from early galaxies to exoplanet atmospheres — appear on the Space page under Astronomy and Deep Space." },
  { q: ["privacy", "security", "hack", "cyber"], a: "Cybersecurity stories — zero-trust, encryption, breaches and defenses — live on the Technology page under Cybersecurity." },
  { q: ["blockchain", "crypto", "web3"], a: "Blockchain and Web3 coverage, including stablecoin and payment rails, is on the Technology page." },
  { q: ["iot", "smart home"], a: "Internet of Things and connected-device stories are on the Technology page under IoT." },
  { q: ["ar", "vr", "xr", "vision"], a: "AR, VR and mixed-reality hardware and software updates live on the Technology page under AR / VR / XR." },
  { q: ["hello", "hi", "hey"], a: "Hi there! I'm Nova. Ask me about science, technology, AI, space, product launches or how to use NovaTech." },
  { q: ["thanks", "thank you"], a: "You're welcome — happy exploring on NovaTech!" },
  { q: ["bye", "goodbye"], a: "Bye for now — come back anytime for the latest in science and technology." },
];

export const allArticles: Article[] = [
  featuredStory,
  todaysInnovation,
  ...trendingArticles,
  ...launches,
  ...scienceArticles,
  ...technologyArticles,
  ...aiArticles,
  ...spaceArticles,
];

export function findArticle(id: string): Article | undefined {
  return allArticles.find((a) => a.id === id);
}
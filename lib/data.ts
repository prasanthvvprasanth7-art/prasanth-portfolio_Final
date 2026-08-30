// ─── PRASANTH V — Portfolio Data ─────────────────────────────────────────────
// Replace placeholder values with your own when deploying

export const profile = {
  name: "Prasanth V",
  initials: "PV",
  title: "GIS & Geoinformatics Engineer",
  subtitle: "Remote Sensing · Spatial Analysis · Environmental Mapping",
  tagline: "Decoding the Earth — one spatial dataset at a time.",
  summary:
    "GIS professional with deep expertise in spatial analysis, remote sensing, and environmental mapping. Skilled at translating complex geospatial data into actionable insights for disaster management, environmental monitoring, and land-use planning. Currently completing an Integrated M.Tech in Geological Technology & Geoinformatics at Bharathidasan University.",
  location: "Thiruvannamalai, Tamil Nadu, India",
  email: "prasanthvvprasanth7@gmail.com",
  phone: "+91 9360714214",
  resumeUrl: "https://drive.google.com/file/d/1W16ADQcBkWzam8NmCUEO6xJA6s9me6zo/view?usp=drive_link",
  social: {
    linkedin: "https://www.linkedin.com/in/prasanth-v-prasanth",
    github: "https://github.com/prasanthv",
    instagram: "https://www.instagram.com/prasanth.vapg",
  },
  stats: [
    { label: "Academic Projects", value: 4, suffix: "+" },
    { label: "GIS Tools Mastered", value: 15, suffix: "+" },
    { label: "Workshops & Seminars", value: 6, suffix: "" },
    { label: "CGPA", value: 78, suffix: "/10", display: "7.8" },
  ],
};

export const about = {
  summary:
    "I am a GIS and Geoinformatics professional specializing in spatial data analysis, remote sensing, and environmental hazard assessment. Over five years of integrated study at Bharathidasan University, I have built expertise spanning geological fieldwork, satellite image processing, machine-learning-driven susceptibility mapping, and web GIS dashboard development. My work focuses on solving real-world environmental challenges — from mapping flood corridors to modeling wildfire risk — by merging Earth science principles with modern geospatial technology.",
  highlights: [
    "Developed a Flood Susceptibility Web GIS Dashboard using Machine Learning & Decision Support Systems for coastal Cuddalore District",
    "Conducted DGPS and bathymetric surveys for geospatial data collection at Nevar Systems, Puducherry",
    "Applied AHP-based GIS techniques for Forest Fire and Flash-Flood hazard vulnerability mapping",
    "Trained in advanced remote sensing at IIRS (Indian Institute of Remote Sensing): Hyperspectral, Microwave & ML-based GEE analysis",
    "Participated in national-level workshops at NIDM, Anna University, and TNCCM on disaster management and climate action",
  ],
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "GIS & Remote Sensing",
    icon: "Globe",
    skills: [
      { name: "ArcGIS / ArcGIS Pro", level: 90 },
      { name: "QGIS", level: 88 },
      { name: "ERDAS Imagine", level: 82 },
      { name: "ENVI", level: 80 },
      { name: "Google Earth Engine (GEE)", level: 85 },
      { name: "SAGA GIS", level: 75 },
    ],
  },
  {
    category: "Surveying & Fieldwork",
    icon: "Compass",
    skills: [
      { name: "GPS & DGPS Surveying", level: 85 },
      { name: "Bathymetry Survey", level: 80 },
      { name: "Digital Image Processing", level: 82 },
      { name: "Agisoft Metashape (Photogrammetry)", level: 74 },
      { name: "AutoCAD", level: 72 },
      { name: "Global Mapper", level: 78 },
    ],
  },
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "SQL", level: 72 },
      { name: "HTML & CSS", level: 75 },
      { name: "R (Basics)", level: 60 },
      { name: "C / C++", level: 60 },
    ],
  },
  {
    category: "Specialist Tools",
    icon: "Layers",
    skills: [
      { name: "SNAP (Sentinel Application Platform)", level: 78 },
      { name: "Oasis Montaj", level: 70 },
      { name: "Emalid Studio", level: 68 },
      { name: "Geo Server", level: 72 },
      { name: "SWAT Model", level: 75 },
      { name: "Pix4D Drone Mapping", level: 65 },
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  period: string;
  type: "academic" | "internship";
  featured: boolean;
  projectUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Flood Susceptibility Mapping",
    subtitle: "Machine Learning · Decision Support System · Web GIS Dashboard",
    description:
      "Developed an integrated flood susceptibility model for the coastal taluks of Cuddalore District, Tamil Nadu, combining machine learning algorithms with a multi-criteria Decision Support System. The output was delivered as an interactive Web GIS Dashboard enabling disaster management authorities to visualize and query flood risk zones.",
    image: "/projects/Coastal_flooding.jpg",
    tech: ["Python", "Machine Learning", "GEE", "Web GIS", "QGIS", "DSS"],
    period: "M.Tech · Jan – Apr 2026",
    type: "academic",
    featured: true,
      projectUrl: "https://drive.google.com/file/d/1z_M9jsWWlW_6D0iRVnGr0imTdJwrCNgP/view?usp=drivesdk",
  },
  {
    title: "Forest Fire Susceptibility Mapping",
    subtitle: "GIS-Based AHP Technique",
    description:
      "Mapped forest fire susceptibility across Udhagamandalam Taluk, Tamil Nadu using an Analytical Hierarchy Process (AHP) framework within a GIS environment. Integrated multi-source spatial parameters including slope, aspect, NDVI, land cover, and proximity to roads to generate a composite wildfire risk map.",

    image: "/projects/Forest_fire.jpg",
    tech: ["ArcGIS Pro", "AHP", "NDVI Analysis", "Multi-criteria GIS"],
    period: "M.Tech · Jul – Dec 2025",
    type: "academic",
    featured: true,
    projectUrl: "https://drive.google.com/file/d/1ruklfRxPaS57wqKjP2nA4eyCuwBnfuhY/view?usp=drivesdk",
  },
  {
    title: "Soil Erosion & Sediment Yield Modelling",
    subtitle: "SWAT Model — Chaliyar River Basin, Kerala",
    description:
      "Modelled soil erosion and sediment transport dynamics across the Chaliyar River Basin in Kerala using the Soil and Water Assessment Tool (SWAT). Calibrated the model with hydro-meteorological data to estimate annual sediment yield and identify critical erosion-prone sub-watersheds for conservation planning.",
    image: "/projects/soil_erosion.jpg",
    tech: ["SWAT Model", "ArcGIS", "DEM Analysis", "Hydrology", "Python"],
    period: "B.Tech · Jan – Apr 2024",
    type: "academic",
    featured: true,
    projectUrl: "https://drive.google.com/file/d/1diLcZwPrvFsda2sManwTGOXtcJMCWq8Y/view?usp=drivesdk",
  },
  {
    title: "Flash-Flood Hazard Vulnerability Mapping",
    subtitle: "GIS-Based AHP Technique — UHL River Basin, Himachal Pradesh",
    description:
      "Assessed flash-flood hazard vulnerability for the mountainous UHL River Basin in Himachal Pradesh, applying AHP-weighted spatial analysis over terrain, drainage density, soil type, and precipitation datasets. Produced hazard zone maps supporting early warning and land-use planning for local authorities.",
    image: "/projects/Flash_flood.jpg",
    tech: ["ArcGIS", "AHP", "Terrain Analysis", "QGIS", "Hydro-geomorphology"],
    period: "B.Tech · Jul – Dec 2023",
    type: "academic",
    featured: false,
    projectUrl: "https://drive.google.com/file/d/1ESOhamRi_aNuFqNFuOjVDKoZpJ-QT8vz/view?usp=drivesdk",
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "internship" | "employment";
  description: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Jun 2026 – Present",
    role: "Remote Sensing & GIS Engineer",
    company: "Geotech Geospatial Pvt. Ltd.",
    location: "Chennai, India",
    type: "employment",
    description:
      "Working on professional GIS and remote sensing projects with a focus on wetland mapping, spatial data processing, and geospatial workflow automation.",
    points: [
      "Performed Land Use / Land Cover (LULC) digitization and mapping for the Maharashtra Wetland Project at NCSCM",
      "Developed and automated geospatial workflows using ArcPy for efficient spatial data processing and analysis",
    ],
    tags: ["ArcGIS", "ArcPy", "LULC Mapping", "Remote Sensing", "Wetland Mapping"],
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "Geospatial & Surveying Intern",
    company: "Nevar Systems Private Limited",
    location: "Puducherry, India",
    type: "internship",
    description:
      "Contributed to real-world geospatial and surveying projects, gaining hands-on industry experience with advanced field instruments and spatial analysis workflows.",
    points: [
      "Conducted precision field surveys using DGPS and bathymetric techniques for accurate geospatial data collection",
      "Performed Land Use / Land Cover (LULC) digitization and thematic mapping to support environmental and planning analysis",
      "Applied multispectral band extraction and remote sensing indices computation for active remote sensing projects",
    ],
    tags: ["DGPS", "Bathymetry", "LULC Mapping", "Remote Sensing", "GIS"],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
};

export const education: EducationItem[] = [
  {
    degree: "M.Tech (Integrated) — Geological Technology & Geoinformatics",
    institution: "Bharathidasan University",
    location: "Trichy, Tamil Nadu",
    period: "2020 – 2026",
    grade: "7.8",
    gradeLabel: "CGPA",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Ansaldo Matric Hr Sec School",
    location: "Maruthuvambadi, Tamil Nadu",
    period: "2019 – 2020",
    grade: "68%",
    gradeLabel: "Percentage",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Danie Matriculation School",
    location: "Chetpet, Tamil Nadu",
    period: "2017 – 2018",
    grade: "78%",
    gradeLabel: "Percentage",
  },
];

export type Workshop = {
  title: string;
  organizer: string;
  year: string;
};

export const workshops: Workshop[] = [
  {
    title: "Workshop on GIS — Geohorizon 2026",
    organizer: "Anna University, Chennai",
    year: "2026",
  },
  {
    title: "Geospatial Technology for Sustainable Earth and Coastal Resource Management",
    organizer: "DRS-BECH-RUSA 2.0",
    year: "2025",
  },
  {
    title: "Geospatial Technologies for Disaster Management",
    organizer: "National Institute of Disaster Management (NIDM)",
    year: "2025",
  },
  {
    title: "Climate Change Awareness Workshop",
    organizer: "Tamil Nadu Climate Change Mission (TNCCM)",
    year: "2024",
  },
  {
    title: "Machine Learning through GEE & Python for ML and Deep Learning",
    organizer: "Shri Prasun Kumar Gupta, IIRS",
    year: "2024",
  },
  {
    title: "Hyperspectral and Microwave Remote Sensing Techniques for Geological Studies",
    organizer: "S. Tiwari, IIRS",
    year: "2024",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  category: string;
};

export const certifications: Certification[] = [
  {
    title: "Orthorectification of Aerial Imagery through Orthophoto.io & ArcGIS Python Scripting",
    issuer: "LinkedIn Learning",
    year: "2025",
    category: "GIS & Remote Sensing",
  },
  {
    title: "Advanced QGIS Analysis with AI and Machine Learning",
    issuer: "LinkedIn Learning",
    year: "2025",
    category: "GIS & ML",
  },
  {
    title: "Pix4D Drone Mapping",
    issuer: "LinkedIn Learning",
    year: "2025",
    category: "Photogrammetry",
  },
];

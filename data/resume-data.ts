export type WorkExperience = {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export type Language = {
  name: string;
  level: string;
  certificate?: string;
};

export type Publication = {
  title: string;
  description: string;
  year: string;
  link?: string;
};

export type ResumeData = {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    location: string;
    linkedin: string;
    github: string | null;
    website: string;
    photo?: string;
    yearsOfExperience: string;
    teamLeadExperience: string;
  };
  summary: string[];
  skills: {
    languages: string[];
    architecture: string[];
    cloud: string[];
    data: string[];
    quality: string[];
  };
  experience: WorkExperience[];
  hardSkills: string[];
  softSkills: string[];
  languages: Language[];
  publications: Publication[];
};

const resumeData: ResumeData = {
  personalInfo: {
    name: "Adeen Amir",
    title: "Full Stack Developer & AI Engineer",
    email: "adeenamir08@gmail.com",
    location: "Karachi, Pakistan",
    linkedin: "www.linkedin.com/in/adeen-amir",
    github: "github.com/adeen08",
    website: "", // Replace with Adeen's actual site if available
    photo: "/images/profile.jpeg",
    yearsOfExperience:
      "2+ years of software development experience as a freelancer",
    teamLeadExperience:
      "Led multiple projects in academic and internship settings",
  },
  summary: [
    "Full Stack Developer and AI enthusiast with hands-on experience in web development, NLP pipelines, and cloud-powered solutions.",
  ],
  skills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "C++",
      "C",
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "FastAPI",
      "OpenAI",
      "Cheerio",
      "Supabase",
      "Tailwind",
      "Tensorflow",
      "Sickit-learn",
      "NumPy",
      "Pandas",
      "Expo",
      "Flask",
    ],
    architecture: ["MVC", "REST", "Microservices", "Clean Code"],
    cloud: ["Supabase", "NeonDB", "Firebase", "Vercel"],
    data: ["PostgreSQL", "MongoDB", "MySQL", "Pandas", "OpenCV"],
    quality: ["Jest", "Mocha/Chai", "SonarQube", "Pino"],
  },
  experience: [
    {
      title: "Data Science Intern",
      company: "Systems Limited",
      period: "Jul 2023 - Aug 2023",
      location: "Lahore, Pakistan",
      responsibilities: [
        "Built an NLP pipeline using BERT to extract insights from transcribed conversations.",
        "Applied lemmatization and stemming to improve data accuracy.",
        "Created and delivered software proposal presentations for clients.",
      ],
    },
    {
      title: "Web Development Intern",
      company: "10Pearls",
      period: "Jun 2024 - Aug 2024",
      location: "Karachi, Pakistan",
      responsibilities: [
        "Developed a full-stack web application using Next.js, Node.js, and MongoDB.",
        "Integrated robust testing with Jest and Mocha/Chai, and logging with Pino.",
        "Performed static code analysis using SonarQube.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "PowerUp Global",
      period: "Jan 2025 - Jun 2025",
      location: "Remote",
      responsibilities: [
        "Redesigned the PowerUp website frontend using Next.js, React.js, and Tailwind CSS.",
        "Integrated the mobile app with Apple HealthKit and Android Health Connect via React Native and Expo to sync health data.",
        "Developed an AI-powered feature to extract and analyze blood pressure data from images of medical devices, automating user input on both platforms.",
      ],
    },
    {
      title: "Event Coordinator",
      company: "Project Topi",
      period: "May 2024 - Jun 2025",
      location: "GIKI, Topi, Pakistan",
      responsibilities: [
        "Managed a budget of over PKR 300,000 for welfare events.",
        "Led bi-monthly aid programs benefiting struggling workers.",
        "Organized career counseling and skill development sessions for 150+ underprivileged students.",
      ],
    },
  ],
  hardSkills: [
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "FastAPI",
    "OpenAI",
    "Cheerio",
    "Supabase",
    "Tailwind",
    "Tensorflow",
    "Sickit-learn",
    "NumPy",
    "Pandas",
    "Expo",
    "Flask",
  ],
  softSkills: [
    "Communication",
    "Problem Solving",
    "Teamwork",
    "Leadership",
    "Adaptability",
    "Project Management",
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Native" },
  ],
  publications: [],
};

export default resumeData;

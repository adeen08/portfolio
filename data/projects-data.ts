export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  tags: string[];
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    id: 1,
    title: "KairosAI - AI Tool for Automating Job Applications",
    description:
      "AI-powered job platform using Next.js, Node.js, and OpenAI to parse and optimize resumes, scrape job listings, and conduct mock interviews.",
    image: "/images/kairos-1.png",
    tags: ["Next.js", "Node.js", "OpenAI", "Supabase", "Web Scraping"],
    github: null,
    demo: "https://kairos-ai-two.vercel.app",
  },
  {
    id: 2,
    title: "PowerUp - Web App",
    description:
      "Redesigned the PowerUp website using Next.js, React.js, and Tailwind. Integrated psychometric profiles for health insights.",
    image: "/images/powerup-1.png",

    tags: ["Next.js", "React", "Tailwind", "Health"],
    github: null,
    demo: "https://app.powerupglobal.io",
  },
  {
    id: 3,
    title: "PowerUp - Mobile App",
    description:
      "React Native app integrating Apple HealthKit and Android Health Connect. Added AI-powered blood pressure image extraction and syncing.",
    image: "/images/powerup-appstore-1.jpeg",
    tags: ["React Native", "Expo", "HealthKit", "AI"],
    github: null,
    demo: "https://apps.apple.com/us/app/powerup-individual/id6743502030?uo=4",
  },
  {
    id: 4,
    title: "Natours",
    description:
      "Developed a fully responsive and animated landing page for a fictional tour company using HTML, CSS3, and SASS.",
    image: "/images/Natours-1.png",
    tags: ["HTML", "CSS3", "SASS", "Front-end"],
    github: "https://github.com/adeen08/Natours",
    demo: "https://adeen08.github.io/Natours",
  },
  {
    id: 5,
    title: "Castle of Charms",
    description:
      "A fantasy-inspired webpage blending Harry Potter themes with modern design elements for a magical web experience.",
    image: "/images/castle.png",
    tags: ["HTML", "CSS", "Fantasy", "Design"],
    github: null,
    demo: "https://castleof-charms.vercel.app/home.html",
  },
  {
    id: 6,
    title: "Smart Attendance System Using FaceNet",
    description:
      "Mobile app built with React Native and Flask backend to streamline attendance tracking using MTCNN and FaceNet. Improved recognition accuracy from 67% to 86%.",
    image: null,
    tags: ["React Native", "Flask", "FaceNet", "MTCNN", "AI"],
    github: null,
    demo: null,
  },
];

export const featuredProjects = [projects[0], projects[1], projects[2]];

export default {
  projects,
  featuredProjects,
};

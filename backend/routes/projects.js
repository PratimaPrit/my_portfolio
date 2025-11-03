import express from 'express';

const router = express.Router();

// Project data based on resume
const projects = [
  {
    id: 1,
    title: "Claims Management System",
    description: "End-to-end claims management platform using MERN stack integrated with Apache Unomi and Mautic",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Apache Unomi", "Mautic"],
    features: [
      "Automated workflows and email notifications",
      "Customer 360° dashboard",
      "35% reduction in claim resolution time"
    ],
    github: "",
    demo: "https://claim-management-system-1-5pzo.onrender.com/",
    image: "/projects/claims.jpg"
  },
  {
    id: 2,
    title: "Study Notion",
    description: "MERN stack-based ed-tech platform serving over 10,000 users to create, consume, and rate educational content",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    features: [
      "Distributed query systems",
      "30% reduction in data fetching time",
      "Managed course data for 500+ users"
    ],
    github: "",
    demo: "https://study-notion-ochre-eight.vercel.app/",
    image: "/projects/studynotion.jpg"
  },
  {
    id: 3,
    title: "Vehicle Tracking Dashboard",
    description: "React-based dashboard with BAU login flow and RBAC for real-time vehicle tracking",
    technologies: ["React", "JavaScript", "RESTful APIs", "Real-time Charts"],
    features: [
      "Role-based access control",
      "Real-time tracking and reporting",
      "Performance insights and analytics"
    ],
    github: "",
    demo: "",
    image: "/projects/vehicle.jpg"
  },
  {
    id: 4,
    title: "Skill Development Platform",
    description: "Optimized learning platform achieving 20% improvement in loading performance",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "Enhanced user experience",
      "Performance optimization",
      "Interactive learning modules"
    ],
    github: "",
    demo: "",
    image: "/projects/learning.jpg"
  }
];

// GET /api/projects
router.get('/', (req, res) => {
  res.json(projects);
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  res.json(project);
});

export default router;

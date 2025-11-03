import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import axios from 'axios'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
        // Fallback to static data
        setProjects(staticProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const staticProjects = [
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
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Study Notion",
      description: "MERN stack-based ed-tech platform serving over 10,000 users",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
      features: [
        "Distributed query systems",
        "30% reduction in data fetching time",
        "500+ users course management"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Vehicle Tracking Dashboard",
      description: "React-based dashboard with BAU login flow and RBAC",
      technologies: ["React", "JavaScript", "RESTful APIs", "Charts"],
      features: [
        "Role-based access control",
        "Real-time tracking",
        "Performance analytics"
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Skill Development Platform",
      description: "Optimized learning platform with 20% performance improvement",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      features: [
        "Enhanced UX",
        "Performance optimization",
        "Interactive modules"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16"
        ></motion.div>

        {loading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {(projects.length > 0 ? projects : staticProjects).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="card-gradient rounded-xl overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all"></div>
                  <h3 className="text-3xl font-bold text-white z-10 text-center px-4">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-primary-400">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Projects

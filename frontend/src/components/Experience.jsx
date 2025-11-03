import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Sigmoid',
      location: 'Remote',
      duration: 'July 2025 - Present',
      description: [
        'Undergoing professional training on Big Data and Cloud technologies, including Apache Spark, SQL, Python, Snowflake, and Airflow',
        'Hands-on practice in real-time data processing and ETL pipelines',
        'Working with cloud platforms like AWS and Azure for data warehousing and orchestration',
        'Focus on scalable analytics solutions and data engineering best practices',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Full Stack Web Developer',
      company: 'InferWorks',
      location: 'Remote',
      duration: 'May 2025 - June 2025',
      description: [
        'Built a React-based dashboard with BAU login flow and RBAC for Admin, Manager, and Maintenance roles',
        'Implemented secure access control, data partitioning, and dynamic UI rendering based on user roles',
        'Integrated real-time charts and reporting features for vehicle tracking and performance insights',
        'Collaborated with backend team to ensure seamless API integration',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Intern - Full Stack Web Developer',
      company: 'Physics Wallah Pvt. Ltd',
      location: 'Remote',
      duration: 'Aug 2024 - Dec 2024',
      description: [
        'Optimized the "Skill Development and Learning" platform using MERN stack',
        'Achieved 20% improvement in website loading performance',
        'Enhanced user experience through performance optimization techniques',
        'Worked on scalable architecture for high-traffic applications',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Software Engineer Intern',
      company: 'CDAC Kolkata',
      location: 'Kolkata',
      duration: 'May 2024 - July 2024',
      description: [
        'Enhanced a pre-trained YOLOv8 model by adding new classes',
        'Maintained original model accuracy of 95% on a dataset of 10,000+ images',
        'Implemented computer vision techniques for object detection',
        'Worked on model optimization and deployment strategies',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="section-container bg-dark-card/30">
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
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16"
        ></motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-bg"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card-gradient rounded-xl p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-semibold mb-4`}>
                      <FaCalendar className="inline mr-2" />
                      {exp.duration}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center gap-2 text-primary-400 mb-4">
                      <FaBriefcase />
                      <span className="font-semibold">{exp.company}</span>
                      <span className="text-gray-500">•</span>
                      <FaMapMarkerAlt />
                      <span className="text-gray-400">{exp.location}</span>
                    </div>

                    <ul className="space-y-2 text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

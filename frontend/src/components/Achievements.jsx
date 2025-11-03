import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaMedal, FaAward, FaCode } from 'react-icons/fa'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Secured Rank 1 in HIEE All India Scholarship Test',
      year: '2024',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FaMedal />,
      title: 'Got 1st Prize in IDEA Pitching HACKVENTURE2.0',
      year: '2024',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaMedal />,
      title: 'Got 3rd Prize in Software Development HACKVENTURE2.0',
      year: '2024',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaAward />,
      title: 'Nominated to represent NIT Mizoram in Smart India Hackathon (SIH)',
      year: '2024',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaCode />,
      title: 'Solved 300+ DSA questions on GFG and LeetCode',
      year: '2025',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaTrophy />,
      title: 'HackerRank Problem Solving Certificate (Intermediate)',
      year: '2023',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <FaAward />,
      title: 'Revature Pre-training Program',
      year: '2025',
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="achievements" className="section-container">
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
          Achievements & <span className="gradient-text">Recognition</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16"
        ></motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card-gradient rounded-xl p-6 hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`text-4xl p-4 rounded-lg bg-gradient-to-br ${achievement.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <span className={`text-sm font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 max-w-4xl mx-auto card-gradient rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 gradient-text">Certifications & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              'Data Structures and Algorithms',
              'Operating Systems',
              'Database Management Systems',
              'Computer Networks',
              'The Complete 2024 Web Development Bootcamp (Udemy)',
              'Machine Learning',
              'Linux for Data Engineers',
              'Data Science Fundamentals',
            ].map((course, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <span className="text-primary-400 text-xl">📚</span>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Achievements

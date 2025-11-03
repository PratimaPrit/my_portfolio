import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"
        ></motion.div>

        <motion.div variants={itemVariants} className="card-gradient rounded-2xl p-8 md:p-12">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a <span className="text-primary-400 font-semibold">Full Stack Developer</span> and{' '}
              <span className="text-primary-400 font-semibold">Data Engineer</span> with a passion for
              creating efficient, scalable, and user-friendly applications. Currently working at{' '}
              <span className="text-primary-400 font-semibold">Sigmoid</span>, I specialize in Big Data
              technologies and cloud platforms.
            </p>

            <p>
              I'm pursuing my <span className="text-primary-400 font-semibold">B.Tech in Electrical and
              Electronics Engineering</span> from the National Institute of Technology, Mizoram, with a
              CGPA of 7.41. My journey in tech has been driven by curiosity and a desire to solve
              real-world problems through code.
            </p>

            <p>
              With experience in the <span className="text-primary-400 font-semibold">MERN stack</span>,
              cloud technologies like <span className="text-primary-400 font-semibold">AWS and Azure</span>,
              and Big Data tools including <span className="text-primary-400 font-semibold">Apache Spark</span>,
              I've contributed to projects that have served thousands of users and significantly improved
              system performance.
            </p>

            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects,
              or participating in hackathons. I've secured top positions in multiple coding competitions
              and have a track record of solving 300+ DSA questions on platforms like LeetCode and GFG.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-dark-border">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">300+</div>
                <div className="text-gray-400">DSA Problems Solved</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About

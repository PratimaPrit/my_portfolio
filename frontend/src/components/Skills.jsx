// import {
//   SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs,
//   SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedis,
//   SiDocker, SiGit, SiApachespark, SiSnowflake, SiApacheairflow,
//   SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiNextdotjs,
//   SiApachekafka
// } from "react-icons/si";

// import { DiJava } from "react-icons/di";
// import { FaAws, FaMicrosoft } from "react-icons/fa";
// const Skills = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   const skillCategories = [
//     {
//       title: 'Programming Languages',
//       skills: [
//         { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
//         { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
//         { name: 'Python', icon: <SiPython />, color: 'text-blue-400' },
//         { name: 'Java', icon: <SiJava />, color: 'text-red-500' },
//       ],
//     },
//     {
//       title: 'Frontend Development',
//       skills: [
//         { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
//         { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
//         { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500' },
//         { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-500' },
//         { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400' },
//         { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500' },
//       ],
//     },
//     {
//       title: 'Backend Development',
//       skills: [
//         { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
//         { name: 'Express', icon: <SiExpress />, color: 'text-gray-400' },
//         { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
//         { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
//         { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
//         { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
//       ],
//     },
//     {
//       title: 'Big Data & Cloud',
//       skills: [
//         { name: 'Apache Spark', icon: <SiApachespark />, color: 'text-orange-500' },
//         { name: 'Snowflake', icon: <SiSnowflake />, color: 'text-cyan-400' },
//         { name: 'Airflow', icon: <SiApacheairflow />, color: 'text-red-400' },
//         { name: 'Kafka', icon: <SiApachekafka />, color: 'text-white' },
//         { name: 'AWS', icon: <SiAmazon />, color: 'text-orange-400' },
//         { name: 'Azure', icon: <SiMicrosoftazure />, color: 'text-blue-500' },
//       ],
//     },
//     {
//       title: 'Tools & Technologies',
//       skills: [
//         { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
//         { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
//       ],
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.3 },
//     },
//   }

//   return (
//     <section id="skills" className="section-container bg-dark-card/30">
//       <motion.div
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? 'visible' : 'hidden'}
//       >
//         <motion.h2
//           variants={itemVariants}
//           className="text-4xl md:text-5xl font-bold text-center mb-4"
//         >
//           Technical <span className="gradient-text">Skills</span>
//         </motion.h2>

//         <motion.div
//           variants={itemVariants}
//           className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16"
//         ></motion.div>

//         <div className="max-w-6xl mx-auto space-y-12">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div key={categoryIndex} variants={itemVariants}>
//               <h3 className="text-2xl font-semibold text-center mb-6 text-gray-300">
//                 {category.title}
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {category.skills.map((skill, skillIndex) => (
//                   <motion.div
//                     key={skillIndex}
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="card-gradient rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-xl transition-shadow group"
//                   >
//                     <div className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform`}>
//                       {skill.icon}
//                     </div>
//                     <span className="text-gray-300 font-medium text-center">{skill.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           variants={itemVariants}
//           className="mt-16 max-w-4xl mx-auto card-gradient rounded-2xl p-8"
//         >
//           <h3 className="text-2xl font-semibold text-center mb-6">Key Competencies</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[
//               'Data Structures & Algorithms',
//               'Operating Systems',
//               'Database Management Systems',
//               'Computer Networks',
//               'Object-Oriented Programming',
//               'Competitive Programming',
//               'Machine Learning Basics',
//               'Agile & SDLC',
//             ].map((competency, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="flex items-center gap-3 text-gray-300"
//               >
//                 <span className="text-primary-400 text-xl">✓</span>
//                 <span>{competency}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// export default Skills


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiDocker, SiGit, SiApachespark, SiSnowflake, SiApacheairflow,
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiNextdotjs,
  SiApachekafka
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaAws, FaMicrosoft } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        { name: "Python", icon: <SiPython />, color: "text-blue-400" },
        { name: "Java", icon: <DiJava />, color: "text-red-500" }, // fixed
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <SiReact />, color: "text-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
        { name: "Redis", icon: <SiRedis />, color: "text-red-500" },
      ],
    },
    {
      title: "Big Data & Cloud",
      skills: [
        { name: "Apache Spark", icon: <SiApachespark />, color: "text-orange-500" },
        { name: "Snowflake", icon: <SiSnowflake />, color: "text-cyan-400" },
        { name: "Airflow", icon: <SiApacheairflow />, color: "text-red-400" },
        { name: "Kafka", icon: <SiApachekafka />, color: "text-white" },
        { name: "AWS", icon: <FaAws />, color: "text-orange-400" },          // fixed
        { name: "Azure", icon: <FaMicrosoft />, color: "text-blue-500" },     // fixed
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <SiGit />, color: "text-orange-500" },
        { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="section-container bg-dark-card/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-center mb-6 text-gray-300">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="card-gradient rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-xl transition-shadow group"
                  >
                    <div className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16 max-w-4xl mx-auto card-gradient rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">Key Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Data Structures & Algorithms",
              "Operating Systems",
              "Database Management Systems",
              "Computer Networks",
              "Object-Oriented Programming",
              "Competitive Programming",
              "Machine Learning Basics",
              "Agile & SDLC",
            ].map((competency, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center gap-3 text-gray-300">
                <span className="text-primary-400 text-xl">✓</span>
                <span>{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
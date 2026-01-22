import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaServer
} from "react-icons/fa"

import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss
} from "react-icons/si"

const skillsData = {
  title: "My Skills",
  categories: [
    // ================= LANGUAGES =================
    {
      id: 1,
      title: "Languages",
      skills: [
        {
          id: 1,
          name: "HTML",
          level: "Expert",
          percent: 100,
          icon: <FaHtml5 className="text-blue-500 text-3xl" />,
        },
        {
          id: 2,
          name: "CSS",
          level: "Expert",
          percent: 100,
          icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
        },
        {
          id: 3,
          name: "JavaScript",
          level: "Advanced",
          percent: 80,
          icon: <FaJs className="text-blue-500 text-3xl" />,
        },
      ],
    },

    // ================= FRAMEWORKS & LIBRARIES =================
    {
      id: 2,
      title: "Frameworks & Libraries",
      skills: [
        {
          id: 1,
          name: "React.js",
          level: "Advanced",
          percent: 80,
          icon: <FaReact className="text-blue-500 text-3xl" />,
        },
        {
          id: 2,
          name: "Bootstrap",
          level: "Advanced",
          percent: 75,
          icon: <FaBootstrap className="text-blue-500 text-3xl" />,
        },
        {
          id: 3,
          name: "React-Bootstrap",
          level: "Beginner",
          percent: 40,
          icon: <FaBootstrap className="text-blue-500 text-3xl" />,
        },
        {
          id: 4,
          name: "Tailwind CSS",
          level: "Beginner",
          percent: 40,
          icon: <SiTailwindcss className="text-blue-500 text-3xl" />,
        },
      ],
    },

    // ================= STATE MANAGEMENT =================
    {
      id: 3,
      title: "State Management",
      skills: [
        {
          id: 1,
          name: "Redux Toolkit",
          level: "Advanced",
          percent: 75,
          icon: <SiRedux className="text-blue-500 text-3xl" />,
        },
      ],
    },

    // ================= API & DATA =================
    {
      id: 4,
      title: "API & Data",
      skills: [
        {
          id: 1,
          name: "REST API",
          level: "Advanced",
          percent: 75,
          icon: <FaServer className="text-blue-500 text-3xl" />,
        },
        {
          id: 2,
          name: "Express.js",
          level: "Intermediate",
          percent: 60,
          icon: <SiExpress className="text-blue-500 text-3xl" />,
        },
        {
          id: 3,
          name: "Node.js",
          level: "Intermediate",
          percent: 60,
          icon: <FaNodeJs  className="text-blue-500 text-3xl" />,
        },
      ],
    },

    // ================= DATABASE & ORM =================
    {
      id: 5,
      title: "Database & ORM",
      skills: [
        {
          id: 1,
          name: "MongoDB",
          level: "Intermediate",
          percent: 60,
          icon: <SiMongodb className="text-blue-500 text-3xl" />,
        },
      ],
    },
    
    // ================= VERSION CONTROL =================
    {
      id: 6,
      title: "Version Control",
      skills: [
        {
          id: 1,
          name: "Git",
          level: "Advanced",
          percent: 80,
          icon: <FaGitAlt className="text-blue-500 text-3xl" />,
        },
      ],
    },
  ],
}

const Skills = () => {
  return (
    <section className="w-full bg-slate-900 text-white py-4 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 ">
          {skillsData.title}
        </h2>

        {skillsData.categories.map((category) => (
          <div key={category.id}>

            {/* CATEGORY TITLE */}
            <div className="bg-white rounded-md py-3 mb-8 mt-8 sm:mb-10 sm:mt-10">
              <h3 className="text-center text-lg font-bold text-red-500">
                {category.title}
              </h3>
            </div>

            {/* SKILLS GRID */}
            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            ">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    bg-slate-800/80
                    rounded-xl
                    p-4
                    border
                    border-white/5
                  "
                >

                  {/* ICON + NAME */}
                  <div className="flex items-center gap-4 mb-4 ">
                    {skill.icon}
                    <h4 className="text-lg font-bold">
                      {skill.name}
                    </h4>
                  </div>

                  {/* LEVEL */}
                  <p className="text-sm text-white mb-3">
                    Level: {skill.level}
                  </p>

                  {/* PROGRESS BAR */}
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>

                </motion.div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Skills

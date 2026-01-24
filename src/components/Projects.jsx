import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

/* ===== IMPORT IMAGES ===== */
import project1 from "../assets/project1.png"

/* ================= PROJECT DATA ================= */
const projectsData = {
  title: "My Projects",
  projects: [
    {
      id: 1,
      name: "BookMyShow Clone",
      description:
        "A Full Stack movie ticket booking web application built using MERN Stack. Includes movie listings, seat selection UI, user authentication, and a smooth booking experience with responsive design.",
      image: project1,
      tag: "MERN Stack Project",
      link: "https://jeevanraj-bookmyshow.netlify.app/",
    },
  ],
}

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <section id="Projects" className="w-full bg-slate-900 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== HEADING ===== */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 sm:mb-16">
          {projectsData.title}
        </h2>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projectsData.projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                bg-slate-800/80
                border border-white/30
                rounded-2xl
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.35)]
              "
            >

              {/* ===== IMAGE  ===== */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 sm:h-48 p-3 rounded-3xl object-cover pointer-events-none"
                />

                {/* TAG BADGE */}
                <span className="
                  absolute top-3 right-3
                  bg-blue-600 text-white
                  text-xs sm:text-sm
                  m-2
                  px-3 py-1
                  sm:px-2 sm:py-1
                  rounded-lg font-semibold
                ">
                  {project.tag}
                </span>
              </div>

              {/* ===== CONTENT ===== */}
              <div className="px-4 py-4 text-center">

                <h3 className="text-xl sm:text-2xl font-extrabold mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-500 text-sm sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* ===== MOBILE ===== */}
                <a
                  href={project.link}
                  target="_self"
                  className="
                    inline-block
                    bg-blue-600 hover:bg-blue-700
                    transition
                    px-4 py-2
                    sm:px-6 sm:py-3
                    rounded-lg
                    font-medium
                    text-sm sm:text-base
                  "
                >
                  View Project
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects

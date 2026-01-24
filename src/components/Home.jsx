import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"
import profileImg from "../assets/hero1.png"
import { motion } from "framer-motion"

/* =================  DATA ================= */
const heroData = {
  greeting: "Hello, I'm",
  name: "Jeevanraj Chithambaram",
  titleLine1: "FULL STACK",
  titleLine2: "DEVELOPER",
  description:
    "I am a passionate Full Stack Developer specializing in MERN Stack. I build scalable, responsive, and high-performance web applications with strong focus on UI, backend logic, APIs, and databases. I enjoy solving real-world problems and continuously improving my development skills.",
  buttonText: "View My Projects",
  image: profileImg,
  socials: [
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/c-jeevanraj/" },
    { icon: <FaGithub />, link: "https://github.com/jeevanrajsurya/" },
    // { icon: <FaFacebookF />, link: "#" },
  ],
}

const Home = () => {

  //  Smooth scroll 
  const scrollToProjects = () => {
    const section = document.getElementById("Projects")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="Home" className="w-full bg-slate-900 text-white overflow-hidden py-6 sm:py-8 ">
      <div className="max-w-7xl mx-auto pt-4 sm:px-6 py-6 sm:pb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="text-center lg:text-left">
          <p className="text-lg">{heroData.greeting}</p>

          <h2 className="text-2xl font-extrabold sm:text-3xl text-orange-500">
            {heroData.name}
          </h2>

          <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
            {heroData.titleLine1} <br />
            <span
              style={{
                background: "linear-gradient(180deg, orange 0%, #c2410c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {heroData.titleLine2}
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-6">
            {heroData.description}
          </p>

          {/* BUTTON */}
          <button
            onClick={scrollToProjects}
            className="bg-orange-500 hover:bg-orange-600 transition px-4 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-lg"
          >
            {heroData.buttonText}
          </button>
        </div>

        {/* ================= RIGHT  SECTION ================= */}
        <div className="relative flex justify-center items-center md:hidden lg:flex">

          {/*  BACKGROUND */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

          {/* IMAGE CARD */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative bg-white/5 backdrop-blur-lg p-4 rounded-3xl border border-white/20 shadow-2xl"
          >
            <img
              src={heroData.image}
              alt="profile"
              className="w-64 sm:w-80 md:w-96 rounded-2xl object-cover"
            />
          </motion.div>

          {/* SOCIAL ICONS */}
          <div className="absolute -bottom-12 flex gap-5">
            {heroData.socials.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-black/40 backdrop-blur-md hover:bg-orange-500 transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home

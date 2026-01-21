import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"
import profileImg from "../assets/hero.png"

/* ================= DYNAMIC DATA ================= */
const heroData = {
  greeting: "Hi, I am",
  name: "Jeevanraj Chithambaram",
  titleLine1: "FULL-STACK",
  titleLine2: "DEVELOPER",
  description:
    "I specialize in crafting seamless user interfaces and delightful experiences with React.js . Passionate about building accessible and engaging web applications.",
  buttonText: "View My Work",
  image: profileImg,
  socials: [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaGithub />, link: "#" },
  ],
}


const Home = () => {
  return (
    <section className="w-full bg-slate-900 text-white overflow-hidden ">
      <div className="max-w-7xl mx-auto pt-4  sm:px-6 py-6 sm:pb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <p className="text-lg">{heroData.greeting}</p>

          <h2 className="text-2xl font-extrabold sm:font-extrabold sm:text-3xl text-orange-500">
            {heroData.name}
          </h2>

          <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
            {heroData.titleLine1} <br />
            <span
            style={{
            background: "linear-gradient(180deg, orange 0%, #c2410c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            {heroData.titleLine2}
            </span>


          </h1>

          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-6">
            {heroData.description}
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-medium text-lg">
            {heroData.buttonText}
          </button>
        </div>

        {/* IMAGE + ICONS */}
        <div className="flex flex-col items-center -mt-8 lg:mt-0 md:hidden lg:flex">
          <img src={heroData.image} alt="profile" />

          <div className="flex gap-5 ">
            {heroData.socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-10 h-10  flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home

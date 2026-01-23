import { motion } from "framer-motion"

const aboutData = {
  title: "About Me",
  sections: [
    {
      id: 1,
      text: "I am a passionate Full Stack Developer with hands-on experience in building modern, responsive, and scalable web applications using the MERN Stack. I focus on creating clean user interfaces while also writing strong backend logic and APIs.",
    },
    {
      id: 2,
      text: "As an Electronics and Communication Engineering graduate, I transitioned into software development with a strong interest in problem-solving, system design, and real-world application development. I enjoy turning ideas into fully functional digital products.",
    },
    {
      id: 3,
      text: "My journey started with HTML, CSS, and JavaScript, and later expanded into React, Node.js, Express.js, and MongoDB. I believe in writing clean, modular, and maintainable code that follows best practices and industry standards.",
    },
    {
      id: 4,
      text: "Beyond frontend development, I have experience working with backend systems, REST APIs, authentication, databases, and full stack application workflows. I enjoy building complete end-to-end solutions rather than just isolated features.",
    },
    {
      id: 5,
      text: "I am a continuous learner who actively improves skills through real-world projects, coding practice, and exploring new technologies. My goal is to contribute to impactful products while growing as a professional developer.",
    },
  ],
}

const approachData = {
  title: "My Approach",
  cards: [
    {
      id: 1,
      heading: "User-Focused Design",
      text: "Designing intuitive and user-friendly interfaces with real-world usability in mind.",
    },
    {
      id: 2,
      heading: "Scalable Development",
      text: "Building applications that scale efficiently with clean architecture and structure.",
    },
    {
      id: 3,
      heading: "Performance & Optimization",
      text: "Optimizing both frontend and backend for speed, efficiency, and reliability.",
    },
    {
      id: 4,
      heading: "Reusable Components & APIs",
      text: "Creating modular UI components and reusable backend services for maintainability.",
    },
    {
      id: 5,
      heading: "Code Quality & Best Practices",
      text: "Writing clean, secure, and maintainable code with strong attention to detail.",
    },
  ],
}

const beyondCodingData = {
  title: "Beyond Coding",
  sections: [
    {
      id: 1,
      text: "Outside of coding, I enjoy exploring new technologies, improving my problem-solving skills, and working on personal projects that strengthen my full stack development knowledge.",
    },
    {
      id: 2,
      text: "I am highly motivated to grow as a software developer, contribute to impactful teams, and take on challenging opportunities that help me build meaningful and scalable digital solutions.",
    },
  ],
}



const About = () => {
  return (
    <section id="About" className="w-full bg-slate-900 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ABOUT ME */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-400 mb-8">
          {aboutData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 mb-16 sm:mb-20 ">
          {aboutData.sections.map((item) => (
            <p
              key={item.id}
              className="text-base sm:text-lg leading-relaxed text-gray-200"
            >
              {item.text}
            </p>
          ))}
        </div>

        {/* MY APPROACH */}
        <h3 className="text-center text-3xl sm:text-4xl font-bold text-lime-400 mb-12">
          {approachData.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {approachData.cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.id * 0.08 }}
              viewport={{ once: true }}
                className="
                bg-slate-800/70 rounded-xl p-4
                border border-white/5
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_40px_rgba(37,99,235,0.65)]
              "
            >
              <h4 className="text-lg sm:text-xl font-bold text-blue-400 mb-3">
                {card.heading}
              </h4>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BEYOND CODING */}
<h3 className="text-center text-3xl sm:text-4xl font-bold text-rose-400 mb-8">
  {beyondCodingData.title}
</h3>

<div className="max-w-full mx-auto text-left space-y-6">
  {beyondCodingData.sections.map((item) => (
    <p
      key={item.id}
      className="text-gray-200 text-base sm:text-lg leading-relaxed"
    >
      {item.text}
    </p>
  ))}
</div>

      </div>
    </section>
  )
}

export default About

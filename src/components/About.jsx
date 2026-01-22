import { motion } from "framer-motion"

const aboutData = {
  title: "About Me",
  sections: [
    {
      id: 1,
      text: "I am a passionate and dedicated Frontend Developer with a strong foundation in building dynamic and responsive web applications. With expertise across modern technologies and frameworks, I aim to create seamless user experiences and efficient, maintainable codebases. My strengths lie in adaptability, problem-solving, and continuous learning.",
    },
    {
      id: 2,
      text: "My approach to development is user-centric. I put myself in the shoes of end-users, striving to understand their needs and pain points. This empathy drives my design and development choices, ensuring that the solutions I create genuinely enhance user experiences.",
    },
    {
      id: 3,
      text: "From my early days experimenting with HTML and CSS to mastering JavaScript and diving into frameworks like React, Vue, and Angular, my journey has been both challenging and rewarding. I believe in writing clean, modular, and scalable code.",
    },
    {
      id: 4,
      text: "In addition to frontend expertise, I have experience with backend technologies such as Node.js and GraphQL. I thrive in collaborative environments, enjoy sharing knowledge, and continuously improve my skills through hands-on projects and learning.",
    },
    {
      id: 5,
      text: "I enjoy keeping up with the latest industry trends and continuously improving my skills through online courses, workshops, and hands-on projects.",
    },
  ],
}

const approachData = {
  title: "My Approach",
  cards: [
    {
      id: 1,
      heading: "User Experience",
      text: "Prioritizing intuitive and engaging user interfaces.",
    },
    {
      id: 2,
      heading: "Performance Optimization",
      text: "Ensuring fast load times and smooth interactions.",
    },
    {
      id: 3,
      heading: "Responsive Design",
      text: "Creating adaptable layouts for various devices and screen sizes.",
    },
    {
      id: 4,
      heading: "Component Reusability",
      text: "Building modular components to streamline development and maintenance.",
    },
    {
      id: 5,
      heading: "Testing",
      text: "Implementing thorough testing strategies to maintain high code quality.",
    },
  ],
}

const beyondCodingData = {
  title: "Beyond Coding",
  sections: [
    {
      id: 1,
      text: "In my spare time, I love exploring new frontend technologies, participating in hackathons, and contributing to open-source projects. These activities not only sharpen my skills but also allow me to give back to the community and stay connected with fellow developers.",
    },
    {
      id: 2,
      text: "I am excited to bring my expertise and enthusiasm to new challenges and opportunities, and I look forward to contributing to innovative projects that make a meaningful difference.",
    },
  ],
}


const About = () => {
  return (
    <section className="w-full bg-slate-900 text-white py-14  sm:py-14">
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

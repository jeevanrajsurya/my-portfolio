import { motion } from "framer-motion"
import contactImg from "../assets/contact.png"

/* ================= DYNAMIC DATA ================= */
const contactData = {
  title: "Contact Me",
  fields: [
    { id: 1, type: "text", placeholder: "Your Name" },
    { id: 2, type: "email", placeholder: "Your Email" },
    { id: 3, type: "textarea", placeholder: "Your Message" },
  ],
  buttonText: "Send Message",
  image: contactImg,
}

const Contact = () => {
  return (
    <section id="Contact" className="w-full bg-slate-900 text-white py-8 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* CENTER HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-10"
        >
          {contactData.title}
        </motion.h2>

        {/* IMAGE CENTER */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <motion.img
            src={contactData.image}
            alt="contact"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 sm:w-80 md:w-96"
          />
        </motion.div> */}

        {/* FORM CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <form className="space-y-6 w-full max-w-xl">

            {contactData.fields.map((field) =>
              field.type === "textarea" ? (
                <textarea
                  key={field.id}
                  placeholder={field.placeholder}
                  rows="5"
                  className="w-full bg-slate-800 text-white p-4 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500 transition resize-none"
                />
              ) : (
                <input
                  key={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-slate-800 text-white p-4 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500 transition"
                />
              )
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-10 py-3 rounded-lg font-semibold text-lg w-full sm:w-auto"
            >
              {contactData.buttonText}
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact

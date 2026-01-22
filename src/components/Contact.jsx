import { motion } from "framer-motion"
import contactImg from "../assets/contact.png" // change to your image

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
    <section className="w-full bg-slate-900 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-14">

        {/* CENTER HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8  text-center"
        >
          {contactData.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE (DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <motion.img
              src={contactData.image}
              alt="contact"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="max-w-3xl"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <form className="space-y-6 max-w-xl mx-auto lg:mx-0">

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
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-2 sm:px-10 sm:py-4 rounded-lg font-semibold text-lg"
              >
                {contactData.buttonText}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact

import { motion } from "framer-motion"
import { useState } from "react"

const contactData = {
  title: "Contact Me",
  buttonText: "Send Message",
}

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Reset messages
    setError("")
    setSuccess("")

    // Basic validation
    if (!name || !email || !message) {
      setError("Please fill all fields")
      return
    }

    //  email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/

    if (!email.trim()) {
      setError("Email is required")
      return
    }

    if (!email.includes("@")) {
      setError("Email must contain @ symbol")
      return
    }

    if (!emailPattern.test(email.trim())) {
      setError("Enter a valid email like: yourname@gmail.com")
      return
    }

    // WhatsApp number
    const phoneNumber = "918778998453"

    // message format
    const whatsappMessage = `Hello Jeevanraj! %0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`

    // success message
    setSuccess("Message sent successfully! Redirecting to WhatsApp...")

    // WhatsApp after delay
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank")
    }, 900)

    // Clear form
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="Contact" className="w-full bg-slate-900 text-white py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-10"
        >
          {contactData.title}
        </motion.h2>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-xl mx-auto"
        >

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-500 text-sm font-medium">
              {error}
            </p>
          )}

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-500 text-sm font-medium">
              {success}
            </p>
          )}

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-800 text-white p-4 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500 transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 text-white p-4 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500 transition"
          />

          {/* MESSAGE */}
          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-slate-800 text-white p-4 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500 transition resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-10 py-3 rounded-lg font-semibold text-lg w-full"
          >
            {contactData.buttonText}
          </button>

        </motion.form>

      </div>
    </section>
  )
}

export default Contact

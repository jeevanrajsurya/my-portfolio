import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import profileImg from "../assets/hero1.png"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"]

  const handleScroll = (item) => {
    setActive(item)

    const section = document.getElementById(item)
    const header = document.querySelector("header")

    if (section && header) {
      const headerHeight = header.offsetHeight
      const sectionTop = section.offsetTop - headerHeight - 10

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      })
    }

    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-lg shadow-black/10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-semibold">My Portfolio</h1>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`
                px-4 py-2 rounded-lg border transition
                ${
                  active === item
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-transparent text-white hover:text-blue-400 hover:border-white"
                }
              `}
            >
              {item}
            </button>
          ))}

          {/* DOWNLOAD CV */}
          <a
            href="/Jeevanraj_fullstack1_CV.pdf"
            download
            className="ml-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>

          {/* PROFILE PHOTO */}
          <img
            src={profileImg}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover ml-2 border border-white/30"
          />
        </nav>

        {/* MOBILE ICON */}
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-white/10 px-6 pb-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`
                w-full text-center px-4 py-3 rounded-lg border transition
                ${
                  active === item
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-transparent text-white hover:text-blue-400 hover:border-white"
                }
              `}
            >
              {item}
            </button>
          ))}

          {/* DOWNLOAD CV MOBILE */}
          <a
            href="/Jeevanraj_Resume.pdf"
            download
            className="block w-full text-center border border-white py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}

export default Header

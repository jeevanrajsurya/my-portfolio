import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-lg shadow-black/10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-semibold">My Portfolio</h1>

        {/* DESKTOP MENU (≥1024px) */}
        <nav className="hidden lg:flex items-center gap-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
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

          <button className="ml-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Download CV
          </button>

          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover ml-2"
          />
        </nav>

        {/* MOBILE + TABLET ICON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE + TABLET DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-white/10 px-6 pb-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item)
                setOpen(false)
              }}
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

          <button className="w-full border border-white py-3 rounded-lg hover:bg-white hover:text-black transition">
            Download CV
          </button>
        </div>
      )}
    </header>
  )
}

export default Header

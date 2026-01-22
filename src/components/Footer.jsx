const footerData = {
  copyright: "© 2026 Jeevanraj Chithambaram. All rights reserved.",
}

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="
          bg-slate-800/70 
          border border-white/5
          py-4
          sm:py-8 
          text-center
        ">
          <p className="text-sm sm:text-base text-gray-300 font-medium tracking-wide">
            {footerData.copyright}
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

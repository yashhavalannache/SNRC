import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLanguage } from "react-icons/fa";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { href: "#home", label: t("navbar.home") },
    { href: "#about", label: t("navbar.about") },
    { href: "#services", label: t("navbar.services") },
    { href: "#why", label: t("navbar.whyLearn") },
    { href: "#testimonials", label: t("navbar.testimonials") },
    { href: "#contact", label: t("navbar.contact") },
  ];

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-7xl mx-auto ${
        scrolled
          ? "top-2 bg-white/90 backdrop-blur-lg border border-gray-200/50 shadow-lg py-3 px-6 rounded-2xl"
          : "top-6 bg-white/75 backdrop-blur-md border border-white/40 shadow-md py-4 px-8 rounded-3xl"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-md shadow-primary/30 transition-transform duration-300 group-hover:rotate-12">
            日
          </span>
          <span className="font-sans font-extrabold text-2xl tracking-wide text-dark group-hover:text-primary transition-colors">
            {t("navbar.logo")}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-semibold text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200/80 px-3 py-1.5 rounded-xl border border-gray-200 transition-colors">
            <FaLanguage className="text-gray-500 text-lg" />
            <select
              id="language-select"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent font-bold text-sm text-gray-700 outline-none cursor-pointer pr-1"
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>

          {/* Action Button */}
          <a
            href="#contact"
            id="btn-apply-now"
            className="bg-primary hover:bg-secondary text-white font-bold px-6 py-2.5 rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {t("navbar.applyNow")}
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Language Switcher for Mobile */}
          <div className="flex items-center gap-1 bg-gray-100 px-2.5 py-1.5 rounded-lg border border-gray-200">
            <FaLanguage className="text-gray-500" />
            <select
              id="language-select-mobile"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent font-bold text-xs text-gray-700 outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="ja">日本語</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>

          <button
            id="btn-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-dark p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
          >
            {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-lg border border-gray-200/50 shadow-xl rounded-2xl p-6 transition-all duration-300 origin-top transform ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 font-semibold text-gray-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-primary hover:pl-2 transition-all rounded-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-gray-100">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-primary text-white text-center font-bold py-3 rounded-xl shadow-md"
            >
              {t("navbar.applyNow")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
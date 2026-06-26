import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaChevronUp } from "react-icons/fa";
import Reveal from "./Reveal";

function Footer() {
  const { t } = useTranslation();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8 px-6 md:px-12 xl:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          {/* Brand & Desc */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-md shadow-primary/20">
                  日
                </span>
                <span className="font-sans font-extrabold text-2xl tracking-wide text-white">
                  SNRC
                </span>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed max-w-sm">
                {t("footer.desc")}
              </p>
            </Reveal>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <Reveal>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                {t("footer.quickLinks")}
              </h4>
            </Reveal>
            <Reveal>
              <ul className="space-y-2 text-sm font-semibold text-gray-400">
                <li>
                  <a href="#home" className="hover:text-primary hover:pl-1 transition-all duration-200">
                    {t("navbar.home")}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary hover:pl-1 transition-all duration-200">
                    {t("navbar.about")}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary hover:pl-1 transition-all duration-200">
                    {t("navbar.services")}
                  </a>
                </li>
                <li>
                  <a href="#why" className="hover:text-primary hover:pl-1 transition-all duration-200">
                    {t("navbar.whyLearn")}
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-primary hover:pl-1 transition-all duration-200">
                    {t("navbar.testimonials")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary hover:pl-1 transition-all duration-200">
                    {t("navbar.contact")}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4 space-y-4">
            <Reveal>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                {t("footer.social")}
              </h4>
            </Reveal>
            <Reveal>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <FaInstagram />
                </a>
              </div>
            </Reveal>

            {/* Back to top button */}
            <Reveal>
              <div className="pt-2">
                <button
                  onClick={handleBackToTop}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors py-2"
                >
                  <span>Back to Top</span>
                  <FaChevronUp className="animate-bounce" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-500">
          <Reveal>
            <p>© {new Date().getFullYear()} SNRC. {t("footer.rights")}</p>
          </Reveal>
          <Reveal>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
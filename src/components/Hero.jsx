import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaBriefcase, FaBuilding, FaCrown, FaStar } from "react-icons/fa";
import heroBg from "../assets/hero-bg.jpg";
// import mountFuji from "../assets/mount-fuji.png";
import japanMap from "../assets/japan-map.png";
 import cherryBlossom from "../assets/cherry-blossom.png";

function Hero() {
  const { t } = useTranslation();

  const levelCards = [
    {
      level: "N5",
      title: t("hero.cards.n5.title"),
      desc: t("hero.cards.n5.desc"),
      icon: <FaGraduationCap className="text-2xl text-primary" />,
      color: "border-l-4 border-l-green-500",
    },
    {
      level: "N4",
      title: t("hero.cards.n4.title"),
      desc: t("hero.cards.n4.desc"),
      icon: <FaBookOpen className="text-2xl text-primary" />,
      color: "border-l-4 border-l-blue-500",
    },
    {
      level: "N3",
      title: t("hero.cards.n3.title"),
      desc: t("hero.cards.n3.desc"),
      icon: <FaBriefcase className="text-2xl text-primary" />,
      color: "border-l-4 border-l-yellow-500",
    },
    {
      level: "N4",
      title: t("hero.cards.n2.title"),
      desc: t("hero.cards.n2.desc"),
      icon: <FaBuilding className="text-2xl text-primary" />,
      color: "border-l-4 border-l-purple-500",
    },
    {
      level: "N1",
      title: t("hero.cards.n1.title"),
      desc: t("hero.cards.n1.desc"),
      icon: <FaCrown className="text-2xl text-white" />,
      featured: true,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 xl:px-24 flex items-center justify-between overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-cherry/80 to-slate-50/90 z-0"></div>

      {/* Sakura Petals and Fuji silhouettes */}
      
      <img
        src={cherryBlossom}
        alt="Sakura Branch"
        className="absolute top-0 left-0 w-[240px] opacity-20 pointer-events-none z-0"
      />
      <img
        src={japanMap}
        alt="Japan Map Outline"
        className="absolute top-10 right-10 w-[300px] opacity-[0.05] pointer-events-none z-0"
      />

      {/* Floating Red Sun Circle */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-radial from-primary/10 via-primary/5 to-transparent pointer-events-none z-0 animate-[pulse_6s_infinite_ease-in-out]"></div>

      {/* Vertical floating Kanji background */}
      <div className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden opacity-[0.03] text-primary font-bold text-8xl flex justify-around items-center">
        <span>日本</span>
        <span>未来</span>
        <span>夢</span>
        <span>成功</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <motion.div
          className="lg:col-span-7 space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-bold px-4 py-2 rounded-full text-xs md:text-sm shadow-sm">
            <FaStar className="animate-spin-slow" />
            <span>{t("hero.badge")}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight tracking-tight">
  {t("hero.titleLine1")}
  <br className="hidden md:inline" />
  {t("hero.titleLine2")}{" "}
  <span className="text-primary font-black">
    {t("hero.titleHighlight")}
  </span>
</h1>

          <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              id="btn-start-learning"
              className="bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t("hero.ctaStart")}
            </a>
            <a
              href="#services"
              id="btn-explore-courses"
              className="bg-white hover:bg-gray-50 text-dark font-bold px-8 py-4 rounded-xl border border-gray-300 hover:border-gray-400 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t("hero.ctaCourses")}
            </a>
          </div>

          {/* Core highlights row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/50">
            <div>
              <p className="text-2xl font-extrabold text-primary">{t("hero.statEstablished")}</p>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Foundation</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-primary">{t("hero.statRating")}</p>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Top-Tier School</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-primary">{t("hero.statReviews")}</p>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Satisfied Students</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-primary">50+</p>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{t("hero.statCorporate")}</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Right Visuals: Interactive Card Deck */}
        <motion.div
          className="lg:col-span-5 flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {levelCards.slice(0, 4).map((card, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col text-left ${card.color}`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h4 className="font-bold text-dark text-lg mb-1">{card.title}</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Featured N1 Card Span */}
          <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white text-left shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              {levelCards[4].icon}
            </div>
            <div>
              <div className="inline-block bg-white/25 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mb-1 uppercase tracking-wider">
                Ultimate Goal
              </div>
              <h4 className="font-black text-xl leading-tight">{levelCards[4].title}</h4>
              <p className="text-xs text-white/90 font-medium">{levelCards[4].desc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
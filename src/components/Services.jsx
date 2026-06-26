import { useTranslation } from "react-i18next";
import {
  FaGraduationCap,
  FaClipboardCheck,
  FaBuilding,
  FaLanguage,
  FaComments,
  FaMask,
} from "react-icons/fa";
import Reveal from "./Reveal";
import japanBg from "../assets/japan-map.png";
function Services() {
  const { t } = useTranslation();

  const serviceItems = [
    {
      title: t("services.items.courses.title"),
      desc: t("services.items.courses.desc"),
      icon: <FaGraduationCap />,
    },
    {
      title: t("services.items.jlpt.title"),
      desc: t("services.items.jlpt.desc"),
      icon: <FaClipboardCheck />,
    },
    {
      title: t("services.items.corporate.title"),
      desc: t("services.items.corporate.desc"),
      icon: <FaBuilding />,
    },
    {
      title: t("services.items.translation.title"),
      desc: t("services.items.translation.desc"),
      icon: <FaLanguage />,
    },
    {
      title: t("services.items.interpretation.title"),
      desc: t("services.items.interpretation.desc"),
      icon: <FaComments />,
    },
    {
      title: t("services.items.culture.title"),
      desc: t("services.items.culture.desc"),
      icon: <FaMask />,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 px-6 md:px-12 xl:px-24 bg-slate-50"
    >
      {/* Japan Background Art */}
      <div
        className="absolute pointer-events-none z-0 animate-japanFloat"
        style={{
          backgroundImage: `url(${japanBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "160%",
          height: "160%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.14,
          clipPath:
            "polygon(10% 25%, 28% 5%, 55% 12%, 78% 0%, 100% 25%, 95% 55%, 85% 85%, 60% 100%, 30% 95%, 10% 80%, 0% 50%)",
          filter:
            "drop-shadow(0 0 20px rgba(230,0,18,.35)) drop-shadow(0 0 60px rgba(255,80,120,.25)) drop-shadow(0 0 120px rgba(230,0,18,.12)) saturate(1.3)",
        }}
      />

      {/* Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,0,18,0.12),transparent_65%)] animate-pulse opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm backdrop-blur-md">
              {t("services.badge")}
            </span>
          </Reveal>

          <Reveal>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-dark">
              {t("services.title")}
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {t("services.subtitle")}
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <Reveal key={index}>
              <div className="group relative overflow-hidden rounded-[28px] p-8 bg-white/90 backdrop-blur-xl border border-primary/10 shadow-lg hover:shadow-[0_25px_60px_rgba(230,0,18,0.15)] hover:-translate-y-4 hover:scale-[1.03] transition-all duration-500 h-full">
                
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 h-[5px] w-full bg-gradient-to-r from-primary to-red-300" />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(230,0,18,0.10),transparent_65%)]" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="relative w-20 h-20 rounded-[20px] bg-gradient-to-br from-primary to-red-400 flex items-center justify-center text-white text-3xl shadow-lg shadow-primary/30">
                    {item.icon}

                    {/* Orbit Ring */}
                    <div className="absolute -inset-3 rounded-full border border-dashed border-primary/40 animate-spin [animation-duration:6s]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes japanFloat {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -53%) scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-japanFloat {
          animation: japanFloat 14s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Services;
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";
import japanStudent from "../assets/japan-student.png";

function About() {
  const { t } = useTranslation();

  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4"),
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          <Reveal>
            <div className="inline-block bg-primary/10 border border-primary/20 text-primary font-bold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm">
              {t("about.badge")}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
              {t("about.title")}
            </h2>
          </Reveal>

          <Reveal>
            <div className="space-y-4 text-gray-600 font-medium text-base md:text-lg leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
          </Reveal>

          {/* Key Checklist Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item, index) => (
              <Reveal key={index}>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl shrink-0" />
                  <span className="font-bold text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side: Graphic/Image Collage */}
        <div className="lg:col-span-5 relative flex justify-center">
          <Reveal>
            <div className="relative group">
              {/* Outer decorative box representing Zen circle style */}
              <div className="absolute -inset-4 rounded-3xl bg-radial from-primary/10 via-primary/5 to-transparent pointer-events-none group-hover:scale-105 transition-transform duration-300"></div>

              {/* Main Image Graphic Container */}
              <div className="relative bg-cherry border-2 border-primary/15 rounded-3xl p-8 overflow-hidden max-w-sm md:max-w-md shadow-xl flex items-center justify-center">
                <div className="absolute inset-0 bg-white/40 pointer-events-none z-0"></div>

                {/* Floating Japanese Calligraphy circle representation */}
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center font-bold text-primary/10 text-6xl">
                  和
                </div>

                <img
                  src={japanStudent}
                  alt="Student learning Japanese"
                  className="w-72 h-auto relative z-10 filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Floating success metric */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-150 p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 font-bold flex items-center justify-center text-lg">
                  🏆
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-dark">Established</p>
                  <p className="text-xs text-gray-500 font-bold">25+ Years Legacy</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;

import { useTranslation } from "react-i18next";
import { FaBriefcase, FaMoneyBillWave, FaUniversity, FaToriiGate, FaGlobeAmericas, FaChartLine } from "react-icons/fa";
import Reveal from "./Reveal";

function WhyJapanese() {
  const { t } = useTranslation();

  const benefits = [
    {
      title: t("whyJapanese.items.career.title"),
      desc: t("whyJapanese.items.career.desc"),
      icon: <FaBriefcase className="text-3xl text-primary" />,
    },
    {
      title: t("whyJapanese.items.salary.title"),
      desc: t("whyJapanese.items.salary.desc"),
      icon: <FaMoneyBillWave className="text-3xl text-primary" />,
    },
    {
      title: t("whyJapanese.items.study.title"),
      desc: t("whyJapanese.items.study.desc"),
      icon: <FaUniversity className="text-3xl text-primary" />,
    },
    {
      title: t("whyJapanese.items.culture.title"),
      desc: t("whyJapanese.items.culture.desc"),
      icon: <FaToriiGate className="text-3xl text-primary" />,
    },
    {
      title: t("whyJapanese.items.networking.title"),
      desc: t("whyJapanese.items.networking.desc"),
      icon: <FaGlobeAmericas className="text-3xl text-primary" />,
    },
    {
      title: t("whyJapanese.items.demand.title"),
      desc: t("whyJapanese.items.demand.desc"),
      icon: <FaChartLine className="text-3xl text-primary" />,
    },
  ];

  return (
    <section id="why" className="py-20 px-6 md:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-block bg-primary/10 border border-primary/20 text-primary font-bold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm">
              {t("whyJapanese.badge")}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
              {t("whyJapanese.title")}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
              {t("whyJapanese.subtitle")}
            </p>
          </Reveal>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <Reveal key={index}>
              <div className="group bg-cherry/40 hover:bg-white border border-primary/5 hover:border-gray-150 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left h-full">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="font-bold text-dark text-xl mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyJapanese;
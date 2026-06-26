import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

function Clients() {
  const { t } = useTranslation();

  const companies = [
    { name: "Toyota", location: "Automotive" },
    { name: "Sony", location: "Electronics" },
    { name: "Honda", location: "Automotive" },
    { name: "Canon", location: "Optics & Imaging" },
    { name: "Fujitsu", location: "IT Services" },
    { name: "Toshiba", location: "Infrastructure" },
    { name: "NTT Data", location: "Consulting & IT" },
    { name: "Mitsubishi", location: "Heavy Industries" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 xl:px-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-block bg-primary/10 border border-primary/20 text-primary font-bold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm">
              {t("clients.badge")}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
              {t("clients.title")}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
              {t("clients.subtitle")}
            </p>
          </Reveal>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <Reveal key={index}>
              <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center select-none hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-28 group">
                <span className="font-sans font-black text-xl md:text-2xl text-gray-400 group-hover:text-primary transition-colors tracking-wider uppercase">
                  {company.name}
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {company.location}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;

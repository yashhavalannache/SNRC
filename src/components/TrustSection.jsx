import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import { useInView } from "react-intersection-observer";
import { FaAward, FaStar, FaUserGraduate, FaBuilding, FaHeart } from "react-icons/fa";

// A smooth, high-performance, React 19-compatible animated counter
function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const end = parseFloat(value);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  const isDecimal = value % 1 !== 0;
  return <span>{isDecimal ? count.toFixed(1) : Math.floor(count)}</span>;
}

function TrustSection() {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      number: 25,
      suffix: "+",
      label: t("trust.years"),
      icon: <FaAward className="text-3xl text-primary" />,
    },
    {
      number: 1700,
      suffix: "+",
      label: t("trust.reviews"),
      icon: <FaStar className="text-3xl text-primary" />,
    },
    {
      number: 4.8,
      suffix: "★",
      label: t("trust.rating"),
      icon: <FaHeart className="text-3xl text-primary" />,
    },
    {
      number: 5000,
      suffix: "+",
      label: t("trust.students"),
      icon: <FaUserGraduate className="text-3xl text-primary" />,
    },
    {
      number: 50,
      suffix: "+",
      label: t("trust.clients"),
      icon: <FaBuilding className="text-3xl text-primary" />,
    },
  ];

  return (
    <section
  ref={ref}
  className="relative overflow-hidden py-24 px-6 md:px-12 xl:px-24 bg-gradient-to-br from-white via-pink-50/30 to-red-50/20"
>
  {/* Decorative Background */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto relative z-10 space-y-16">

    {/* Premium Badge */}
    <Reveal>
      <div className="flex justify-center">
        <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg tracking-wider">
          ✨ Trusted by Thousands of Japanese Learners
        </span>
      </div>
    </Reveal>

    {/* Header */}
    <div className="text-center space-y-5 max-w-3xl mx-auto">
      <Reveal>
        <h2 className="text-4xl md:text-6xl font-black text-dark leading-tight">
          {t("trust.title")}
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-600 text-lg leading-relaxed">
          {t("trust.subtitle")}
        </p>
      </Reveal>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {stats.map((item, index) => (
        <Reveal key={index}>
          <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {inView ? (
                  <AnimatedCounter value={item.number} duration={1500} />
                ) : (
                  0
                )}
                {item.suffix}
              </h3>

              <p className="text-gray-600 font-bold uppercase tracking-widest text-xs">
                {item.label}
              </p>

            </div>
          </div>
        </Reveal>
      ))}
    </div>

    {/* Premium Trust Banner */}
    <Reveal>
      <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl">
        <div className="flex flex-wrap justify-center gap-4">

          <span className="px-5 py-3 rounded-full bg-white shadow-md font-semibold text-gray-700 hover:scale-105 transition">
            ⭐ {t("trust.strip.google")}
          </span>

          <span className="px-5 py-3 rounded-full bg-white shadow-md font-semibold text-gray-700 hover:scale-105 transition">
            🎌 {t("trust.strip.jlpt")}
          </span>

          <span className="px-5 py-3 rounded-full bg-white shadow-md font-semibold text-gray-700 hover:scale-105 transition">
            🏢 {t("trust.strip.corporate")}
          </span>

          <span className="px-5 py-3 rounded-full bg-white shadow-md font-semibold text-gray-700 hover:scale-105 transition">
            👨‍🏫 {t("trust.strip.experts")}
          </span>

          <span className="px-5 py-3 rounded-full bg-white shadow-md font-semibold text-gray-700 hover:scale-105 transition">
            🌸 {t("trust.strip.since")}
          </span>

        </div>
      </div>
    </Reveal>

  </div>
</section>
  );
}

export default TrustSection;
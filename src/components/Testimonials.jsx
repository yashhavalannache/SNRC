import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import Reveal from "./Reveal";
import testimonialsBg from "../assets/testimonials-bg.jpg";

function Testimonials() {
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const items = [
    {
      name: t("testimonials.items.0.name"),
      role: t("testimonials.items.0.role"),
      review: t("testimonials.items.0.review"),
      avatar: "RS",
    },
    {
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
      review: t("testimonials.items.1.review"),
      avatar: "PP",
    },
    {
      name: t("testimonials.items.2.name"),
      role: t("testimonials.items.2.role"),
      review: t("testimonials.items.2.review"),
      avatar: "AK",
    },
    {
      name: t("testimonials.items.3.name"),
      role: t("testimonials.items.3.role"),
      review: t("testimonials.items.3.review"),
      avatar: "KS",
    },
    {
      name: t("testimonials.items.4.name"),
      role: t("testimonials.items.4.role"),
      review: t("testimonials.items.4.review"),
      avatar: "SH",
    },
  ];

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(
        scrollLeft + clientWidth < scrollWidth - 10
      );
    }
  };

  useEffect(() => {
    const el = carouselRef.current;

    if (el) {
      el.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);

      setTimeout(updateScrollButtons, 100);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", updateScrollButtons);
      }

      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;

      const scrollAmount =
        direction === "left"
          ? -clientWidth * 0.8
          : clientWidth * 0.8;

      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 px-6 md:px-12 xl:px-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${testimonialsBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      {/* Decorative Quote */}
      <div className="absolute right-10 top-10 text-[10rem] text-white/10 pointer-events-none select-none font-serif z-0">
        ”
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <Reveal>
              <div className="inline-block bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm">
                {t("testimonials.badge")}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                {t("testimonials.title")}
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-200 font-medium text-base md:text-lg leading-relaxed">
                {t("testimonials.subtitle")}
              </p>
            </Reveal>
          </div>

          {/* Navigation Buttons */}
          <Reveal>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md transition-all duration-300 ${
                  canScrollLeft
                    ? "bg-white text-dark border-white hover:scale-105"
                    : "bg-white/20 text-white/40 border-white/20 cursor-not-allowed"
                }`}
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md transition-all duration-300 ${
                  canScrollRight
                    ? "bg-white text-dark border-white hover:scale-105"
                    : "bg-white/20 text-white/40 border-white/20 cursor-not-allowed"
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/95 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex text-yellow-400 gap-1 text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <FaQuoteLeft className="text-primary/20 text-3xl" />
                  </div>

                  <p className="text-gray-700 font-medium text-sm md:text-base italic leading-relaxed text-left">
                    "{item.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200 text-left">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold flex items-center justify-center tracking-wider shrink-0 shadow-md">
                    {item.avatar}
                  </div>

                  <div>
                    <h4 className="font-bold text-dark text-sm md:text-base">
                      {item.name}
                    </h4>

                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      {item.role}
                    </p>

                    <span className="text-[10px] text-green-600 font-extrabold flex items-center gap-1 mt-1">
                      ✓ Verified Student
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
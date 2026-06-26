import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";



function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setStatus("Please fill all required fields.");
    return;
  }

  setIsSending(true);
  setStatus("");

  try {
    const result = await emailjs.send(
      "service_gu0j0vl",
      "template_ioq1lwr",
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject || "General Inquiry",
        message: formData.message,
        to_email: "thunderbolt1899@gmail.com",
      },
      "n8TXcpouQGNM-ptW6"
    );

    console.log("Email sent:", result);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setStatus("✅ Message sent successfully!");
  } catch (error) {
    console.error("EmailJS Error:", error);

    setStatus(
      `❌ Failed to send message: ${
        error?.text || error?.message || "Unknown error"
      }`
    );
  } finally {
    setIsSending(false);
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 xl:px-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Info & Map */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
          <div className="space-y-6">
            <Reveal>
              <div className="inline-block bg-primary/10 border border-primary/20 text-primary font-bold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm">
                {t("contact.badge")}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
                {t("contact.title")}
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 font-medium text-base leading-relaxed">
                {t("contact.subtitle")}
              </p>
            </Reveal>

            {/* Info Cards */}
            <div className="space-y-4">
              <Reveal>
                <div className="bg-white border border-gray-150 p-5 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm">{t("contact.phone")}</h4>
                    <p className="text-sm text-gray-500 font-semibold mt-0.5">+91 80 4123 4567</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-white border border-gray-150 p-5 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm">{t("contact.email")}</h4>
                    <p className="text-sm text-gray-500 font-semibold mt-0.5">info@snrc.co.in</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-white border border-gray-150 p-5 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm">{t("contact.address")}</h4>
                    <p className="text-sm text-gray-500 font-semibold leading-relaxed mt-0.5">
                      {t("contact.addrValue")}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <Reveal>
            <div className="pt-2 h-full flex flex-col justify-end">
              <iframe
                title="SNRC Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9255859132223!2d77.60621377484177!3d12.976620587338575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680a65bb549%3A0xe54e60cf0b62e4de!2sResidency%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl border border-gray-200 shadow-md shadow-gray-100"
              ></iframe>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <Reveal>
            {submitted ? (
              <motion.div
                className="bg-white border border-gray-150 p-10 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center gap-6 min-h-[500px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-4xl shadow-inner shadow-green-500/5">
                  ✨
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-dark">
                    {t("contact.form.successTitle")}
                  </h3>
                  <p className="text-gray-500 font-medium max-w-md">
                    {t("contact.form.successText")}
                  </p>
                </div>
                <button
                  className="bg-primary hover:bg-secondary text-white font-bold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                  onClick={() => setSubmitted(false)}
                >
                  {t("contact.form.sendAnother")}
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-lg flex flex-col gap-6 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.name")}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 outline-none transition-all focus:ring-4 focus:ring-primary/10 text-gray-700 font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {t("contact.form.email")} *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.email")}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 outline-none transition-all focus:ring-4 focus:ring-primary/10 text-gray-700 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.form.phone")}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 outline-none transition-all focus:ring-4 focus:ring-primary/10 text-gray-700 font-medium"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {t("contact.form.subject")}
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white rounded-xl py-3.5 px-4 outline-none transition-all focus:ring-4 focus:ring-primary/10 text-gray-600 font-medium cursor-pointer"
                    >
                      <option value="">{t("contact.form.subject")}</option>
                      <option value="courses">{t("contact.form.subjectOpt1")}</option>
                      <option value="corporate">{t("contact.form.subjectOpt2")}</option>
                      <option value="services">{t("contact.form.subjectOpt3")}</option>
                      <option value="general">{t("contact.form.subjectOpt4")}</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.message")}
                    className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 outline-none transition-all focus:ring-4 focus:ring-primary/10 text-gray-700 font-medium resize-none"
                  />
                </div>
                {status && (
  <div
    className={`rounded-xl p-3 text-sm font-semibold ${
      status.includes("✅")
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {status}
  </div>
)}
                {/* Submit Button */}
                <button
                  id="btn-send-message"
                  type="submit"
                  disabled={isSending}
                  className="bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  <FaPaperPlane className="text-sm" />
                  <span>
                    {isSending ? t("contact.form.sending") : t("contact.form.submit")}
                  </span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
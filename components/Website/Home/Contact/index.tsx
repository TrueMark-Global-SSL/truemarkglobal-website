"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MapPin, Mail, MessageCircle, Clock, Send, ArrowRight } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]*$/, "Phone number must contain only digits")
    .length(11, "Phone number must be exactly 11 digits")
    .required("Phone number is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
};

const inputBase =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-gray-400 focus:border-[#387467] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#387467]/10 transition-all";

const inputError =
  "w-full rounded-xl border border-red-300 bg-red-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setIsSuccess(true);
        resetForm();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      }
    } catch {
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit: handleSubmit });

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0 pb-16 lg:pb-24">
      <div className="mx-auto max-w-c-1390">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467]">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 xl:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 leading-relaxed">
            Have a question about certification, our platforms, or our services? Our team is ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

          {/* ===== Form (3/5) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm xl:p-10">
              <h3 className="mb-1 text-xl font-bold text-slate-900">Send us a message</h3>
              <p className="mb-7 text-sm text-slate-400">We typically respond within one business day.</p>

              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[13px] font-semibold text-slate-600 uppercase tracking-wide">Full Name</label>
                    <input
                      {...formik.getFieldProps("name")}
                      placeholder="Your full name"
                      className={formik.touched.name && formik.errors.name ? inputError : inputBase}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[13px] font-semibold text-slate-600 uppercase tracking-wide">Email Address</label>
                    <input
                      {...formik.getFieldProps("email")}
                      placeholder="you@example.com"
                      className={formik.touched.email && formik.errors.email ? inputError : inputBase}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[13px] font-semibold text-slate-600 uppercase tracking-wide">Subject</label>
                    <input
                      {...formik.getFieldProps("subject")}
                      placeholder="How can we help?"
                      className={formik.touched.subject && formik.errors.subject ? inputError : inputBase}
                    />
                    {formik.touched.subject && formik.errors.subject && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.subject}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[13px] font-semibold text-slate-600 uppercase tracking-wide">Phone Number</label>
                    <input
                      {...formik.getFieldProps("phoneNumber")}
                      placeholder="e.g. 08000000000"
                      type="tel"
                      maxLength={11}
                      className={formik.touched.phoneNumber && formik.errors.phoneNumber ? inputError : inputBase}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-slate-600 uppercase tracking-wide">Message</label>
                  <textarea
                    {...formik.getFieldProps("message")}
                    placeholder="Tell us about your certification needs, inquiry, or any questions you have..."
                    rows={5}
                    className={`${formik.touched.message && formik.errors.message ? inputError : inputBase} resize-none`}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#387467] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#2d5e53] disabled:opacity-50 shadow-sm hover:shadow-md"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {isError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-center text-sm text-red-600">
                    Something went wrong. Please try again.
                  </div>
                )}
                {isSuccess && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-center text-sm font-medium text-emerald-700">
                    Message sent! We&apos;ll get back to you within one business day.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* ===== Info panel (2/5) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Dark panel */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0c2822] via-[#1a4a40] to-[#0f3530] p-8 text-white">
              <h3 className="mb-1.5 text-xl font-bold">Find us</h3>
              <p className="mb-8 text-sm text-white/60 leading-relaxed">
                We&apos;re based in Lagos, Nigeria, and work with organisations across Africa and beyond.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={17} className="text-[#5DCAA5]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">Office</p>
                    <p className="text-sm text-white/85 leading-snug">Plot 2116 Perfect Mall,<br />Amuwo Odofin, Lagos</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={17} className="text-[#5DCAA5]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">Email</p>
                    <a href="mailto:info@truemarkglobal.com" className="text-sm text-[#5DCAA5] hover:text-white transition-colors">
                      info@truemarkglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MessageCircle size={17} className="text-[#5DCAA5]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">WhatsApp</p>
                    <a href="https://wa.me/2348032302557" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5DCAA5] hover:text-white transition-colors">
                      +234 0803 230 2557
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock size={17} className="text-[#5DCAA5]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">Business Hours</p>
                    <p className="text-sm text-white/85">Mon – Fri, 8:00 AM – 5:00 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp quick CTA */}
            <a
              href="https://wa.me/2348032302557"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-[#387467]/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10">
                  <MessageCircle size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Chat on WhatsApp</p>
                  <p className="text-xs text-slate-400 mt-0.5">Quick replies during business hours</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-300 group-hover:text-[#387467] group-hover:translate-x-0.5 transition-all" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

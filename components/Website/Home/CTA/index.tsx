"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, ClipboardCheck } from "lucide-react";

const CTA = () => {
  return (
    <section className="overflow-hidden px-4 py-16 md:px-8 lg:py-20 2xl:px-0">
      <div className="mx-auto max-w-c-1390 rounded-2xl bg-gradient-to-br from-[#71b7a6] via-[#5a9e8e] to-[#1a4a40] px-8 py-12 md:px-12 xl:px-16 xl:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-8">

          {/* Left — text */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-[55%]"
          >
            <h2 className="mb-4 text-3xl font-extrabold text-white leading-tight xl:text-[2.4rem]">
              Partner With Us and Elevate Your Standards
            </h2>
            <p className="text-[#c8eae2] leading-relaxed max-w-lg">
              Transform compliance into a strategic advantage. Join TrueMark Global Standards and Solutions Limited (TMGSSL) today and gain the tools, expertise, and support needed to stay ahead.
            </p>
          </motion.div>

          {/* Right — two platform CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:w-auto shrink-0"
          >
            <a
              href="https://certify.truemarkglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl bg-white px-6 py-4 hover:bg-[#f0fdf9] transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#387467] shrink-0">
                <GraduationCap size={20} color="white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 leading-none mb-0.5">Certification Platform</p>
                <p className="text-sm font-extrabold text-slate-800 leading-none flex items-center gap-1.5">
                  Access CLMEP <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform text-[#387467]" />
                </p>
              </div>
            </a>

            <a
              href="https://app.truemarkglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl bg-white/15 border border-white/30 px-6 py-4 hover:bg-white/25 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 shrink-0">
                <ClipboardCheck size={20} color="white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-white/60 leading-none mb-0.5">Audit Management</p>
                <p className="text-sm font-extrabold text-white leading-none flex items-center gap-1.5">
                  Access Truvera <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </p>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;

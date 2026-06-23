"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const chips = [
  { label: "Standards Covered", value: "ISO 17021 · 17024 · 17065 · 9001" },
  { label: "Certification Scope", value: "Products · Systems · Persons" },
  { label: "Certificate Valid For", value: "Up to 3 years" },
];

const AboutCertification = () => {
  return (
    <div className="bg-[#f8faf9] border-b border-slate-200 px-4 md:px-8 2xl:px-0">
      <div className="mx-auto max-w-5xl">

        {/* ── Split hero ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-center py-12 lg:py-16">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#387467] mb-5">
              TMGSSL Services
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-5">
              Certification
              <br />
              <span className="text-[#387467]">Services</span>
            </h1>

            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
              Formal, independent confirmation that your products, systems, or people comply with
              internationally recognised standards — building stakeholder confidence, ensuring
              compliance, and elevating your market position.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-xl bg-[#387467] px-6 py-3 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
              >
                Apply Now
                <ArrowRight size={14} />
              </Link>
              <a
                href="#service-content"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#387467]/30 hover:bg-[#387467]/3 transition-all"
              >
                See details
                <ChevronDown size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/about/cert1.jpg"
                alt="Certification Services — TMGSSL"
                width={560}
                height={420}
                className="w-full object-cover h-[260px] lg:h-[360px]"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/92 backdrop-blur-sm px-4 py-2.5 shadow-lg">
                <span className="text-xs font-bold text-slate-800">ISO/IEC Accredited Body</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Chips row ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="border-t border-slate-200 py-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200"
        >
          {chips.map((chip, i) => (
            <div key={i} className="px-0 sm:px-6 first:pl-0 last:pr-0 py-3 sm:py-0">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
                {chip.label}
              </p>
              <p className="text-sm font-semibold text-slate-700">{chip.value}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default AboutCertification;

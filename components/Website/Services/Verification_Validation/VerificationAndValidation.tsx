"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronDown,
  SearchCheck, TestTube, ShieldCheck, FileBarChart2,
  Target, TrendingUp, AlertTriangle, Award,
  MessageSquare, FileText, ClipboardList,
  Search, ClipboardCheck, Scale,
} from "lucide-react";

const chips = [
  { label: "Scope",    value: "Products · Processes · Systems · Data" },
  { label: "Approach", value: "Evidence-based & Independent" },
  { label: "Output",   value: "Verification Report / Statement" },
];

const serviceTypes = [
  {
    icon: SearchCheck,
    title: "Design Verification",
    desc: "Confirming that a product or system design meets all specified requirements before production or deployment begins.",
  },
  {
    icon: TestTube,
    title: "Process Validation",
    desc: "Demonstrating that a manufacturing or operational process consistently delivers results conforming to defined specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Verification",
    desc: "Examining documented evidence to confirm that activities, outputs, and systems comply with applicable regulatory and standard requirements.",
  },
  {
    icon: FileBarChart2,
    title: "Data & Claims Validation",
    desc: "Independent review of technical claims, test data, performance data, and environmental statements — ensuring they are accurate and supportable.",
  },
];

const benefits = [
  { icon: Target,        title: "Confidence in Compliance",    desc: "Independent confirmation that outputs meet all specified technical and regulatory criteria." },
  { icon: TrendingUp,    title: "Reduced Rework & Recall Risk", desc: "Early detection of deviations prevents costly corrections, product recalls, or regulatory actions." },
  { icon: AlertTriangle, title: "Regulatory Defensibility",    desc: "Documented third-party verification provides a defensible position with regulators and stakeholders." },
  { icon: Award,         title: "Stakeholder Assurance",       desc: "Clients, investors, and authorities gain credible, independent assurance of your claims and outputs." },
];

const processSteps = [
  { step: "01", icon: MessageSquare, title: "Briefing & Scope Definition",  desc: "Establishing what is to be verified or validated, the applicable standard or specification, and the required evidence." },
  { step: "02", icon: FileText,      title: "Documentation & Data Review",  desc: "Systematic review of design documents, test records, process data, and technical specifications." },
  { step: "03", icon: ClipboardList, title: "Assessment Planning",          desc: "A verification or validation plan is prepared, identifying methods, sampling, and acceptance criteria." },
  { step: "04", icon: Search,        title: "Evidence Examination",         desc: "On-site or remote examination of physical evidence, processes, outputs, and supporting records." },
  { step: "05", icon: ClipboardCheck,title: "Analysis & Comparison",        desc: "Findings are compared against defined requirements; gaps and deviations are formally recorded." },
  { step: "06", icon: Scale,         title: "Statement / Report Issued",    desc: "A formal verification or validation report is issued, including a clear statement of conformity or non-conformity." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const VerificationAndValidation = () => {
  return (
    <>
      {/* ── Hero ── */}
      <div className="bg-[#f8faf9] border-b border-slate-200 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-5xl">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-center py-12 lg:py-16">

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
                Verification &<br />
                <span className="text-[#387467]">Validation</span>
              </h1>

              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
                Rigorous, independent confirmation that products, processes, and systems perform as
                intended and conform to all applicable technical and regulatory requirements.
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

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/sectors/industry2.jpg"
                  alt="Verification & Validation — TMGSSL"
                  width={560}
                  height={420}
                  className="w-full object-cover h-[260px] lg:h-[360px]"
                />
                <div className="absolute bottom-4 left-4 rounded-xl bg-white/92 backdrop-blur-sm px-4 py-2.5 shadow-lg">
                  <span className="text-xs font-bold text-slate-800">Independent V&V Services</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="border-t border-slate-200 py-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200"
          >
            {chips.map((chip, i) => (
              <div key={i} className="px-0 sm:px-6 first:pl-0 last:pr-0 py-3 sm:py-0">
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{chip.label}</p>
                <p className="text-sm font-semibold text-slate-700">{chip.value}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Content ── */}
      <section id="service-content" className="pb-24 px-4 md:px-8 2xl:px-0 pt-16">
        <div className="mx-auto max-w-5xl space-y-24">

          {/* Service Types */}
          <motion.div {...fade(0.05)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">What We Verify & Validate</h2>
            <p className="text-base text-slate-500 mb-10 max-w-2xl">
              From design to delivery, TMGSSL provides independent verification and validation across four
              critical domains.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              {serviceTypes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="group bg-white p-8 hover:bg-[#387467]/3 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 mb-5 group-hover:border-[#387467]/20 group-hover:bg-[#387467]/5 transition-colors">
                      <Icon size={18} className="text-[#387467]" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div {...fade(0.06)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Why Independent V&V Matters</h2>
            <p className="text-base text-slate-500 mb-10 max-w-2xl">
              Third-party verification removes the bias of self-assessment and provides defensible evidence
              of compliance that internal reviews cannot match.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="group bg-white p-8 hover:bg-[#387467]/3 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 mb-5 group-hover:border-[#387467]/20 group-hover:bg-[#387467]/5 transition-colors">
                      <Icon size={18} className="text-[#387467]" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div {...fade(0.07)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Our V&V Process</h2>
            <p className="text-base text-slate-500 mb-12 max-w-2xl">
              A methodical, evidence-driven process — from initial briefing to formal statement of
              conformity.
            </p>

            <div className="space-y-0">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === processSteps.length - 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold z-10 ${
                        isLast
                          ? "border-[#387467] bg-[#387467] text-white"
                          : "border-[#387467] bg-white text-[#387467]"
                      }`}>
                        {step.step}
                      </div>
                      {!isLast && (
                        <div className="w-px flex-1 bg-slate-200 my-1.5" style={{ minHeight: "2rem" }} />
                      )}
                    </div>

                    <div className={`flex-1 ${isLast ? "pb-0" : "pb-7"}`}>
                      <div className="flex items-center gap-2.5 mb-1">
                        <Icon size={14} className="text-slate-400 shrink-0" strokeWidth={1.75} />
                        <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            {...fade(0.08)}
            className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <p className="text-lg font-bold text-white">Need independent verification or validation?</p>
              <p className="text-sm text-white/50 mt-1">
                Our team will discuss your scope, applicable standards, and the most appropriate verification approach.
              </p>
            </div>
            <Link
              href="/support"
              className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
            >
              Apply Now
              <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default VerificationAndValidation;

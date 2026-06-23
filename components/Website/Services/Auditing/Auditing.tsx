"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2, Layers, ShieldCheck, FileBarChart2,
  Target, TrendingUp, Clock, ShieldAlert,
  MessageSquare, FileText, ClipboardList,
  Search, ClipboardCheck, AlertCircle, BarChart2, ArrowRight,
} from "lucide-react";

const auditTypes = [
  {
    icon: Layers,
    title: "Internal Audits",
    desc: "Evaluate the effectiveness of your internal controls, risk management processes, and governance structures against defined benchmarks.",
  },
  {
    icon: Building2,
    title: "External / Third-Party Audits",
    desc: "Independent assessment by TMGSSL experts providing an unbiased view of your organisation's compliance and operational integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Audits",
    desc: "Verify adherence to applicable laws, regulations, industry standards, and contractual obligations — mitigating legal and regulatory exposure.",
  },
  {
    icon: FileBarChart2,
    title: "Financial Audits",
    desc: "Examination of financial statements and records to ensure accuracy, completeness, and conformance with accepted accounting principles.",
  },
];

const benefits = [
  { icon: Target,      title: "Increased Transparency",  desc: "Objective findings provide clear visibility into operational health and areas of risk." },
  { icon: TrendingUp,  title: "Regulatory Confidence",   desc: "Documented evidence of compliance that satisfies regulators, clients, and stakeholders." },
  { icon: Clock,       title: "Continuous Improvement",  desc: "Actionable recommendations that drive measurable improvements over audit cycles." },
  { icon: ShieldAlert, title: "Risk Mitigation",         desc: "Early identification of non-conformities before they escalate into critical issues." },
];

const processSteps = [
  { step: "01", icon: MessageSquare,  title: "Initial Briefing",       desc: "Understanding your audit scope, objectives, regulatory context, and key risk areas." },
  { step: "02", icon: FileText,       title: "Planning & Scheduling",  desc: "A tailored audit plan is developed and agreed upon with your team, including timelines." },
  { step: "03", icon: ClipboardList,  title: "Documentation Review",   desc: "In-depth review of policies, procedures, records, and previous audit findings." },
  { step: "04", icon: Search,         title: "Field Audit",            desc: "On-site or remote assessment: interviews, sampling, observations, and evidence gathering." },
  { step: "05", icon: ClipboardCheck, title: "Findings Compilation",   desc: "All evidence is assessed, non-conformities classified, and a draft report prepared." },
  { step: "06", icon: AlertCircle,    title: "Findings Presentation",  desc: "Draft report shared with your team for factual review and management response." },
  { step: "07", icon: BarChart2,      title: "Final Report",           desc: "A comprehensive audit report issued with findings, risk ratings, and recommendations." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const TM_Auditing = () => {
  return (
    <section id="service-content" className="pb-24 px-4 md:px-8 2xl:px-0 pt-16">
      <div className="mx-auto max-w-5xl space-y-24">

        {/* Audit Types */}
        <motion.div {...fade(0.05)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Types of Audits We Deliver</h2>
          <p className="text-base text-slate-500 mb-10 max-w-2xl">
            TMGSSL offers a full spectrum of audit services tailored to your organisational context and
            applicable standards.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
            {auditTypes.map((item, i) => {
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
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Why Organisations Choose TMGSSL Audits</h2>
          <p className="text-base text-slate-500 mb-10 max-w-2xl">
            Our audit engagements go beyond compliance — they create lasting value for your organisation.
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

        {/* Audit Process */}
        <motion.div {...fade(0.07)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Audit Process</h2>
          <p className="text-base text-slate-500 mb-12 max-w-2xl">
            A structured, transparent engagement from initial briefing through to final report and recommendations.
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
            <p className="text-lg font-bold text-white">Ready to request an audit?</p>
            <p className="text-sm text-white/50 mt-1">
              Our team will assess your needs and propose the right audit framework for your organisation.
            </p>
          </div>
          <Link
            href="/support"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
          >
            Request an Audit
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default TM_Auditing;

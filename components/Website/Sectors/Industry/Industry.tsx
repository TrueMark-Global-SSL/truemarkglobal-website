"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, FileText, Search, BookOpen, CheckCircle, Settings, ArrowRight } from "lucide-react";

const standards = [
  { code: "ISO 9001",  name: "Quality Management System",    desc: "Reduces manufacturing defects, enhances product reliability, and builds customer confidence across all operations." },
  { code: "ISO 45001", name: "Occupational Health & Safety", desc: "Protects workers on construction sites and in production environments — reducing incidents and liability." },
  { code: "ISO 14001", name: "Environmental Management",     desc: "Promotes sustainable resource use, waste reduction, and regulatory environmental compliance." },
  { code: "ISO 50001", name: "Energy Management",            desc: "Improves energy efficiency and reduces operational costs across construction and manufacturing facilities." },
  { code: "ISO 22301", name: "Business Continuity",          desc: "Ensures industrial operations maintain resilience during supply chain disruptions or unexpected operational failures." },
  { code: "LEED/BREEAM", name: "Green Building Standards",  desc: "Internationally recognised frameworks for eco-friendly construction design, resource efficiency, and sustainability." },
];

const benefits = [
  { title: "Quality Assurance",         desc: "Reduced defects, enhanced reliability, and consistent product quality that clients and regulators can trust." },
  { title: "Worker Safety",             desc: "Fewer incidents, full regulatory compliance, and a well-documented occupational health culture across all sites." },
  { title: "Environmental Stewardship", desc: "Sustainable resource use, waste reduction, and demonstrable green credentials that satisfy buyers and regulators." },
  { title: "Market Differentiation",    desc: "Certified organisations win tenders, satisfy procurement requirements, and stand apart in competitive markets." },
  { title: "Operational Efficiency",    desc: "Lean, waste-reduced workflows and embedded continuous improvement cycles across construction and production." },
];

const services = [
  { name: "Certification",             href: "/certification",           icon: Award },
  { name: "Auditing",                  href: "/auditing",                icon: FileText },
  { name: "Inspection",                href: "/inspection",              icon: Search },
  { name: "Training & Development",    href: "/training",                icon: BookOpen },
  { name: "Verification & Validation", href: "/verification_validation", icon: CheckCircle },
  { name: "Outsourcing",               href: "/outsourcing",             icon: Settings },
];

const stats = [
  { value: "6",            label: "Applicable ISO Standards" },
  { value: "6",            label: "TMGSSL Services Available" },
  { value: "Construction", label: "Sector Covered" },
  { value: "Manufacturing",label: "Sector Covered" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

export default function Industry_Sector() {
  return (
    <div className="pb-24 px-4 md:px-8 2xl:px-0">
      <div className="mx-auto max-w-5xl">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-5"
        >
          <div className="h-[300px] md:h-[420px] relative">
            <Image src="/images/sectors/industry1.jpg" alt="Industrial Sector — TMGSSL" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#181c31]/90 via-[#181c31]/55 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                className="text-xs font-black uppercase tracking-[0.2em] text-[#5DCAA5] mb-3">
                TMGSSL · Sector Focus
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                Industrial Sector
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-base text-white/60 max-w-lg">
                Quality, safety, and environmental certification for construction, manufacturing, and
                industrial operations across all scales and regulatory environments.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800 rounded-2xl overflow-hidden mb-20"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-slate-900 px-6 py-5 text-center">
              <p className="text-xl font-black text-[#5DCAA5] mb-0.5">{s.value}</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-24">

          {/* Standards */}
          <motion.div {...fade(0.05)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Applicable ISO Standards</h2>
            <p className="text-base text-slate-500 mb-10 max-w-2xl">
              Six standards govern quality, worker safety, environmental impact, and operational
              continuity across construction and manufacturing operations.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              {standards.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }} viewport={{ once: true }}
                  className="bg-white p-6 hover:bg-[#387467]/3 transition-colors"
                >
                  <span className="inline-block text-[11px] font-black tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-3">
                    {s.code}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{s.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div {...fade(0.06)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Why Certification Matters in Industry</h2>
            <p className="text-base text-slate-500 mb-12 max-w-2xl">
              For construction and manufacturing organisations, certification is the foundation of
              stakeholder trust, market access, and sustained competitive performance.
            </p>
            <div className="space-y-8">
              {benefits.map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-5xl font-black text-slate-100 leading-none shrink-0 select-none w-14 text-right tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1.5 border-t border-slate-200 flex-1">
                    <h3 className="text-base font-bold text-slate-900 mb-1">{b.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div {...fade(0.07)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">TMGSSL Services for the Industrial Sector</h2>
            <p className="text-base text-slate-500 mb-8 max-w-2xl">
              Every TMGSSL service is available to industrial organisations — from initial certification
              to ongoing audits, inspections, and workforce training.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }} viewport={{ once: true }}
                  >
                    <Link href={svc.href}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-[#387467]/40 hover:shadow-sm transition-all group"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#387467]/5 group-hover:border-[#387467]/20 transition-colors">
                        <Icon size={15} className="text-[#387467]" strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-semibold text-slate-800 flex-1">{svc.name}</span>
                      <ArrowRight size={13} className="text-slate-300 group-hover:text-[#387467] transition-colors" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...fade(0.08)}
            className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <p className="text-lg font-bold text-white">Building or manufacturing in a regulated environment?</p>
              <p className="text-sm text-white/50 mt-1">
                Let us identify the certification pathway that fits your projects, team, and regulatory obligations.
              </p>
            </div>
            <Link href="/support"
              className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
            >
              Get in Touch
              <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

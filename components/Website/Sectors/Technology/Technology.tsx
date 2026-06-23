"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, FileText, Search, BookOpen, CheckCircle, Settings, ArrowRight } from "lucide-react";

const standards = [
  { code: "ISO 9001",  name: "Quality Management System",    desc: "Ensures consistent quality in technology products and services, improving satisfaction and reducing operational waste." },
  { code: "ISO 27001", name: "Information Security Mgmt",    desc: "The global standard for protecting sensitive data, customer information, and intellectual property from cyber threats." },
  { code: "ISO 20000", name: "IT Service Management",        desc: "Framework for delivering high-quality, reliable IT services — covering service delivery, resolution, and change management." },
  { code: "ISO 22301", name: "Business Continuity",          desc: "Ensures resilience against cyber incidents, infrastructure failure, and operational disruptions in media and technology businesses." },
  { code: "ISO 14001", name: "Environmental Management",     desc: "Reduces the environmental footprint of technology operations — addressing energy use, e-waste, and carbon emissions." },
];

const benefits = [
  { title: "Data & Information Security",  desc: "Protected sensitive information, reduced cyber exposure, and verifiable compliance with data protection regulations." },
  { title: "Consistent Service Quality",   desc: "ISO 9001 and ISO 20000 ensure consistent, measurable delivery of IT and media services that meet client expectations." },
  { title: "Operational Continuity",       desc: "Resilience frameworks protect against cyber incidents, infrastructure failure, and external disruptions." },
  { title: "Competitive Credibility",      desc: "ISO certification signals trustworthiness and professional rigour to enterprise clients, regulators, and procurement teams." },
  { title: "ESG & Environmental Alignment",desc: "Reduced digital environmental footprint and demonstrated commitment to sustainability objectives." },
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
  { value: "5",         label: "Applicable ISO Standards" },
  { value: "6",         label: "TMGSSL Services Available" },
  { value: "Technology",label: "Sector Covered" },
  { value: "Media",     label: "Sector Covered" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

export default function Technology_Media() {
  return (
    <div className="pb-24 px-4 md:px-8 2xl:px-0">
      <div className="mx-auto max-w-5xl">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-5"
        >
          <div className="h-[300px] md:h-[420px] relative">
            <Image src="/images/sectors/media1.jpg" alt="Technology & Media Sector — TMGSSL" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#181c31]/90 via-[#181c31]/55 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                className="text-xs font-black uppercase tracking-[0.2em] text-[#5DCAA5] mb-3">
                TMGSSL · Sector Focus
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                Technology &<br />Media
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-base text-white/60 max-w-lg">
                Information security, quality management, and operational resilience certification
                for technology companies, digital services, and media organisations.
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
              Five standards address quality, cybersecurity, IT service delivery, business continuity,
              and environmental responsibility for technology and media organisations.
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

          {/* Media accent image */}
          <motion.div {...fade(0.055)} className="relative rounded-2xl overflow-hidden">
            <div className="h-[200px] md:h-[240px] relative">
              <Image src="/images/sectors/media2.jpg" alt="Media Operations — TMGSSL" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181c31]/70 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="text-white font-bold text-sm">Media & Broadcasting Operations</p>
                <p className="text-white/50 text-xs">ISO 9001 · ISO 22301 · ISO 27001 applicable</p>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div {...fade(0.06)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Why Certification Matters in Tech & Media</h2>
            <p className="text-base text-slate-500 mb-12 max-w-2xl">
              In industries where trust, data integrity, and uninterrupted delivery are paramount,
              certification provides the independent evidence stakeholders require.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-2">TMGSSL Services for Technology & Media</h2>
            <p className="text-base text-slate-500 mb-8 max-w-2xl">
              From ISO 27001 certification to IT service audits and cybersecurity training — TMGSSL
              supports tech and media organisations across their full compliance lifecycle.
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
              <p className="text-lg font-bold text-white">In technology or media?</p>
              <p className="text-sm text-white/50 mt-1">
                Let our team design an ISO 27001, ISO 9001, or business continuity pathway for your organisation.
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

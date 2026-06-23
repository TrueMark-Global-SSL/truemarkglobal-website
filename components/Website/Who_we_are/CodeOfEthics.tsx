'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  UserCheck, Shield, Briefcase, Lock, FileCheck,
  Ban, Building2, Users, AlertTriangle, Scale,
  AlertCircle, ArrowRight, BookOpen
} from 'lucide-react';

const ethicsItems = [
  {
    icon: UserCheck,
    title: "Professional Conduct",
    desc: "Conduct yourself professionally, with honesty, accuracy, fairness, responsibility, and independence in all activities.",
  },
  {
    icon: Shield,
    title: "Best Interest Duty",
    desc: "Act solely in the best interest of your employer, clients, the public, and the profession — adhering to applicable professional standards.",
  },
  {
    icon: Briefcase,
    title: "Qualified Service Only",
    desc: "Offer only services you are qualified to perform, and inform clients fully about the nature, risks, or concerns of any service.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    desc: "Treat all information obtained during professional operations with confidentiality and privacy, without requiring prior approval.",
  },
  {
    icon: FileCheck,
    title: "Intellectual Property",
    desc: "Respect the intellectual property and contributions of others. Do not reproduce, claim, or misuse proprietary material.",
  },
  {
    icon: Ban,
    title: "No Misleading Information",
    desc: "Do not intentionally communicate false or misleading information that could compromise the integrity of any candidate evaluation.",
  },
  {
    icon: Building2,
    title: "Protect TMGSSL's Reputation",
    desc: "Do not act in any manner that could compromise the reputation of TrueMark Global Standards and Solutions Limited (TMGSSL) or its certification programmes.",
  },
  {
    icon: Users,
    title: "Full Cooperation",
    desc: "Fully cooperate in any inquiry or investigation following a reported infringement of this Code of Ethics.",
  },
];

const sanctions = [
  "Temporary or permanent removal from the TMGSSL certification programme.",
  "Temporary or permanent revocation of one or more certifications held.",
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const CodeOfEthics = () => {
  return (
    <section className="pb-20 px-4 md:px-8 2xl:px-0">
      <div className="max-w-5xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div {...fade()} className="mb-16 border-l-4 border-[#387467] pl-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467] mb-2 block">
            Professional Standards
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            TrueMark Global Standards and Solutions Limited{" "}
            <span className="text-[#387467]">Code of Ethics</span>
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-2xl leading-relaxed">
            A binding standard of professional conduct for all TMGSSL-certified individuals, clients, partners, trainers, auditors, and employees.
          </p>
        </motion.div>

        {/* ===== 1. Purpose ===== */}
        <motion.div {...fade(0.05)} className="mb-12 rounded-2xl bg-slate-50 border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <BookOpen className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">1. Purpose</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-600 ml-[52px]">
            This Code of Ethics establishes the standards of professional conduct required of all TrueMark Global Standards and Solutions Limited (TMGSSL) certified professionals. It applies to all individuals operating within the TMGSSL ecosystem — including certified individuals, clients, partners, trainers, auditors, employees, and other relevant stakeholders.
          </p>
        </motion.div>

        {/* ===== 2. Code of Ethics — Icon Grid ===== */}
        <motion.div {...fade(0.07)} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <Scale className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Code of Ethics</h2>
          </div>
          <p className="text-sm text-slate-500 mb-8 ml-[52px]">
            All TMGSSL-certified professionals and stakeholders are required to uphold the following standards:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {ethicsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-[#387467]/20 hover:shadow-md transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#387467]/8">
                    <Icon size={18} className="text-[#387467]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== 3. Sanctions ===== */}
        <motion.div {...fade(0.08)} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <AlertTriangle className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Sanctions for Violation</h2>
          </div>
          <p className="text-sm text-slate-500 mb-5 ml-[52px]">
            Breach of this Code may result in the following disciplinary actions:
          </p>
          <div className="ml-[52px] rounded-2xl border border-red-100 bg-red-50/60 p-6 space-y-3">
            {sanctions.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle size={12} className="text-red-500" strokeWidth={2.5} />
                </div>
                <p className="text-[15px] text-slate-700 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== 4. Evaluation ===== */}
        <motion.div {...fade(0.08)} className="mb-16 rounded-2xl border border-[#387467]/15 bg-[#387467]/3 p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <Users className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. Code of Ethics Evaluation</h2>
          </div>
          <div className="ml-[52px] space-y-4 text-[15px] leading-relaxed text-slate-600">
            <p>
              Compliance with this Code is monitored continuously across all TMGSSL-certified professionals — including employees, certified individuals, trainers, and partners — and is part of each stakeholder's performance evaluation.
            </p>
            <p>
              Any professional who fails to comply may face disciplinary action including contract termination or legal measures, depending on the severity of the violation. In all cases, <span className="font-semibold text-slate-900">individuals have the right to be heard and to defend themselves</span> before any measure is imposed.
            </p>
          </div>
        </motion.div>

        {/* ===== Footer CTA ===== */}
        <motion.div {...fade(0.1)} className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <AlertCircle size={20} className="text-[#5DCAA5]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-base font-bold text-white">Questions about the Code of Ethics?</p>
              <p className="text-sm text-white/55 mt-0.5">Contact our Compliance Board to report a concern or seek guidance.</p>
            </div>
          </div>
          <Link
            href="/support"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-6 py-3 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
          >
            Contact Support
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CodeOfEthics;

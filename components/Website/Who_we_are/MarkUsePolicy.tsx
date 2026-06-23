'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen, BadgeCheck, Ban, AlertTriangle, ArrowRight,
  CheckCircle, XCircle, Search, Mail, Scale, ShieldAlert, AlertCircle
} from 'lucide-react';

const permittedUses = [
  "Business cards and stationery",
  "Email signatures",
  "Professional online profiles (LinkedIn, etc.)",
  "Company website and marketing materials",
  "Proposals, tenders, and bid documents",
];

const prohibitedUses = [
  "Use by individuals who have not been certified",
  "Modification or alteration of the mark",
  "Transfer or assignment to any third party",
  "Continued use after certification has lapsed or been withdrawn",
];

const violationSteps = [
  {
    step: "01",
    icon: Search,
    title: "Review",
    desc: "The alleged misuse is reviewed by the TMGSSL compliance team to assess the evidence.",
    bg: "bg-amber-50", border: "border-amber-200", iconColor: "text-amber-600",
  },
  {
    step: "02",
    icon: Mail,
    title: "Contact",
    desc: "Involved parties are formally contacted and requested to cease all unauthorised use immediately.",
    bg: "bg-blue-50", border: "border-blue-200", iconColor: "text-blue-600",
  },
  {
    step: "03",
    icon: Scale,
    title: "Escalation",
    desc: "If the violation continues, legal action or sanctions are pursued, including suspension or revocation of certification.",
    bg: "bg-red-50", border: "border-red-200", iconColor: "text-red-600",
  },
  {
    step: "04",
    icon: ShieldAlert,
    title: "Confidentiality",
    desc: "All information gathered during the process is treated confidentially, with or without prior employer or client consent.",
    bg: "bg-slate-50", border: "border-slate-200", iconColor: "text-slate-600",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const MarkUsePolicy = () => {
  return (
    <section className="pb-20 px-4 md:px-8 2xl:px-0">
      <div className="max-w-5xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div {...fade()} className="mb-16 border-l-4 border-[#387467] pl-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467] mb-2 block">
            Brand &amp; Compliance
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            TrueMark Global Standards and Solutions Limited{" "}
            <span className="text-[#387467]">Certification Mark Use Policy</span>
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-2xl leading-relaxed">
            This policy governs who may use the TMGSSL Certification Mark, under what conditions, and the consequences of unauthorised use.
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
            The purpose of this policy is to establish the rules and requirements for use of all TrueMark Global Standards and Solutions Limited (TMGSSL) Certification Marks — ensuring they are used correctly, consistently, and only by those who have earned the right to display them.
          </p>
        </motion.div>

        {/* ===== 2. Mark Ownership ===== */}
        <motion.div {...fade(0.07)} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <BadgeCheck className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Certification Mark Ownership</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6 ml-[52px]">
            The following organisational trademark is owned, controlled, and protected by TrueMark Global Standards and Solutions Limited (TMGSSL):
          </p>

          {/* Logo display card */}
          <div className="ml-[52px] rounded-2xl bg-gradient-to-br from-[#0c2822] via-[#1a4a40] to-[#0f3530] p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-white/10 rounded-2xl p-6">
              <Image
                src="/images/Green-Logo.png"
                alt="TMGSSL Certification Mark"
                width={180}
                height={100}
                className="object-contain brightness-[2] saturate-0"
              />
            </div>
            <div className="text-white">
              <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Registered Mark</p>
              <h3 className="text-xl font-extrabold text-white mb-2">TMGSSL Certification Mark</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                This mark may only be displayed by individuals and organisations that have been formally certified by TMGSSL and remain in good standing with all applicable standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== 3. Authorised Use ===== */}
        <motion.div {...fade(0.08)} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <CheckCircle className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Authorised Use</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6 ml-[52px]">
            Only TMGSSL-certified professionals and organisations that have satisfied all applicable credentialing and certification requirements may use the Certification Mark — and only the mark that corresponds to their specific certification.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 ml-[52px]">
            {/* Permitted */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={16} className="text-emerald-600" strokeWidth={2} />
                <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Permitted Uses</h3>
              </div>
              <ul className="space-y-2.5">
                {permittedUses.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle size={10} className="text-emerald-600" strokeWidth={2.5} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prohibited */}
            <div className="rounded-2xl border border-red-100 bg-red-50/60 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={16} className="text-red-500" strokeWidth={2} />
                <h3 className="text-sm font-bold text-red-700 uppercase tracking-wide">Not Permitted</h3>
              </div>
              <ul className="space-y-2.5">
                {prohibitedUses.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                      <XCircle size={10} className="text-red-500" strokeWidth={2.5} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ===== 4. Non-Assignability ===== */}
        <motion.div {...fade(0.08)} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <Ban className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. Non-Assignability and Non-Transferability</h2>
          </div>
          <div className="ml-[52px] rounded-2xl border border-amber-100 bg-amber-50/60 p-6 flex gap-4">
            <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" strokeWidth={1.75} />
            <p className="text-[15px] leading-relaxed text-slate-700">
              Permission to use the Certification Mark is <span className="font-semibold text-slate-900">personal and non-transferable</span>. It shall not be transferred to, assigned to, sublicensed to, or otherwise used by any other individual, organisation, or entity — regardless of any relationship with the certified person.
            </p>
          </div>
        </motion.div>

        {/* ===== 5. Policy Violation Response ===== */}
        <motion.div {...fade(0.1)} className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <AlertTriangle className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">5. Policy Violation Response</h2>
          </div>
          <p className="text-sm text-slate-500 mb-8 ml-[52px]">
            Upon receiving information about inappropriate or unauthorised use of the Certification Mark, TMGSSL will take the following structured steps:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {violationSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`h-full rounded-2xl border ${step.border} ${step.bg} p-5`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${step.border} bg-white`}>
                        <Icon size={18} className={step.iconColor} strokeWidth={1.75} />
                      </div>
                      <span className="text-[11px] font-black text-slate-300 tracking-widest">{step.step}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < violationSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 h-5 w-5 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                      <ArrowRight size={11} className="text-slate-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== Footer CTA ===== */}
        <motion.div {...fade(0.1)} className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <AlertCircle size={20} className="text-[#5DCAA5]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-base font-bold text-white">Questions about this policy?</p>
              <p className="text-sm text-white/55 mt-0.5">Contact our Compliance Board to report a violation or seek clarification.</p>
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

export default MarkUsePolicy;

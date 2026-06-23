'use client';
import { motion } from 'framer-motion';
import React from 'react';
import {
  AlertCircle, Scale, ShieldAlert, FileText,
  Tag, AlertTriangle, FileX, PauseCircle, Clock, FileWarning,
  Search, Mail, Users, CheckCircle, ArrowRight,
  ShieldCheck, RotateCcw, Bell
} from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  {
    step: "01",
    icon: AlertCircle,
    title: "Trigger",
    desc: "A complaint is received or a non-conformance is identified during surveillance or audit.",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    step: "02",
    icon: Search,
    title: "Investigation",
    desc: "TMGSSL gathers and independently reviews all relevant evidence before any action is taken.",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    step: "03",
    icon: Mail,
    title: "Notification",
    desc: "The certificate holder is formally notified of the charges and rationale via certified mail.",
    bg: "bg-violet-50",
    border: "border-violet-200",
    iconColor: "text-violet-600",
  },
  {
    step: "04",
    icon: Users,
    title: "Board Review",
    desc: "A formal board review is convened. The certificate holder may present their response.",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    iconColor: "text-indigo-600",
  },
  {
    step: "05",
    icon: Scale,
    title: "Decision",
    desc: "Top management issues a final decision rooted entirely in objective evidence.",
    bg: "bg-slate-50",
    border: "border-slate-200",
    iconColor: "text-slate-600",
  },
  {
    step: "06",
    icon: CheckCircle,
    title: "Outcome",
    desc: "Suspension, withdrawal, scope reduction — or reinstatement — is formally communicated.",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconColor: "text-[#387467]",
  },
];

const grounds = [
  { icon: Tag, label: "Improper use of certificates and logos" },
  { icon: AlertTriangle, label: "Involvement in malpractices" },
  { icon: FileX, label: "Providing false information in applications" },
  { icon: FileWarning, label: "Applying for ineligible examinations" },
  { icon: PauseCircle, label: "Voluntary suspension request by the holder" },
  { icon: Clock, label: "Failure to address previous audit issues" },
];

const guarantees = [
  {
    letter: "A",
    icon: Bell,
    title: "Informed Notification",
    desc: "Certificate holders are explicitly informed of the intention and full rationale behind any scope reduction, suspension, or withdrawal before action is finalised.",
  },
  {
    letter: "B",
    icon: ShieldAlert,
    title: "Right of Appeal",
    desc: "Any certificate holder subject to a warning or suspension retains the full right of appeal to the certification board. Appeals are reviewed independently.",
  },
  {
    letter: "C",
    icon: Users,
    title: "Top Management Review",
    desc: "Final decisions are made exclusively by top management following a comprehensive, evidence-based review — never on the basis of a single unverified report.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const CertificationWithdrawal = () => {
  return (
    <section className="pb-20 px-4 md:px-8 2xl:px-0">
      <div className="mx-auto max-w-5xl">

        {/* ===== Header ===== */}
        <motion.div {...fade()} className="mb-16 border-l-4 border-[#387467] pl-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467] mb-2 block">
            Compliance &amp; Governance
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Policy on Suspending, Withdrawing or{" "}
            <span className="text-[#387467]">Reducing Certification Scope</span>
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-2xl leading-relaxed">
            This policy outlines the conditions under which TrueMark Global Standards and Solutions Limited (TMGSSL) may suspend, withdraw, or reduce the scope of a certification, and the procedural guarantees afforded to every certificate holder.
          </p>
        </motion.div>

        {/* ===== 1. Policy Statement ===== */}
        <motion.div {...fade(0.05)} className="mb-16 rounded-2xl bg-slate-50 border border-slate-100 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <Scale className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">1. Policy Statement</h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
            <p>
              TMGSSL may, at its discretion, suspend or revoke a certificate for cause. Causes include, but are not limited to{" "}
              <span className="font-semibold text-slate-900">fraud, deceit, or submission of inaccurate data</span>{" "}
              to obtain certification.
            </p>
            <p>
              Upon evidence of valid charges, certificate holders are notified via certified mail. The suspension remains in effect until a formal review by the board, ensuring all decisions are rooted in{" "}
              <span className="font-semibold text-[#387467]">objective evidence</span>.
            </p>
          </div>
        </motion.div>

        {/* ===== 2. Process Flow ===== */}
        <motion.div {...fade(0.08)} className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <FileText className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. How the Process Works</h2>
          </div>
          <p className="text-sm text-slate-500 mb-8 ml-[52px]">
            Every suspension or withdrawal follows this structured, fair process — no certificate is revoked without full review.
          </p>

          {/* Flow grid — 3 across desktop, snake layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isLastInRow = (i + 1) % 3 === 0;
              const isLastItem = i === processSteps.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
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
                  {/* Arrow connector — hidden after last in row or last item */}
                  {!isLastInRow && !isLastItem && (
                    <div className="hidden sm:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 h-5 w-5 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                      <ArrowRight size={11} className="text-slate-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Row-break arrow on desktop between row 1 and row 2 */}
          <div className="hidden sm:flex items-center justify-between px-4 my-1">
            <div className="flex-1" />
            <div className="flex flex-col items-center gap-0.5 text-slate-300">
              <div className="h-4 w-px bg-slate-200" />
              <ArrowRight size={11} className="rotate-90" />
            </div>
            <div className="flex-1" />
          </div>
        </motion.div>

        {/* ===== 3. Grounds for Action ===== */}
        <motion.div {...fade(0.1)} className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <ShieldAlert className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Grounds for Action</h2>
          </div>
          <p className="text-sm text-slate-500 mb-8 ml-[52px]">
            TMGSSL may initiate a suspension or withdrawal review upon evidence of any of the following:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {grounds.map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:border-[#387467]/20 hover:bg-[#387467]/3 transition-all"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#387467]/8">
                    <Icon size={16} className="text-[#387467]" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{g.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== 4. Your Rights — Operational Guarantees ===== */}
        <motion.div {...fade(0.1)} className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <ShieldCheck className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. Your Rights as a Certificate Holder</h2>
          </div>
          <p className="text-sm text-slate-500 mb-8 ml-[52px]">
            Regardless of the outcome, TMGSSL is committed to these procedural guarantees throughout the process.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-6 border ${
                    i === 0
                      ? "bg-gradient-to-br from-[#0c2822] via-[#1a4a40] to-[#0f3530] border-transparent text-white"
                      : "bg-white border-slate-100 shadow-sm"
                  }`}
                >
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${i === 0 ? "bg-white/10" : "bg-[#387467]/8"}`}>
                    <Icon size={18} className={i === 0 ? "text-[#5DCAA5]" : "text-[#387467]"} strokeWidth={1.75} />
                  </div>
                  <span className={`text-[11px] font-black uppercase tracking-widest mb-1 block ${i === 0 ? "text-white/40" : "text-slate-300"}`}>
                    {g.letter}
                  </span>
                  <h3 className={`text-base font-bold mb-2 ${i === 0 ? "text-white" : "text-slate-900"}`}>{g.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/65" : "text-slate-500"}`}>{g.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== 5. Reinstatement ===== */}
        <motion.div {...fade(0.1)} className="mb-16 rounded-2xl border border-[#387467]/15 bg-[#387467]/3 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <RotateCcw className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">5. Reinstatement of Certification</h2>
          </div>
          <p className="text-[15px] text-slate-600 leading-relaxed ml-[52px]">
            A certificate holder whose certification has been suspended may apply for reinstatement upon demonstrating full corrective action. TMGSSL will conduct a follow-up audit or review to verify compliance before reinstatement is granted. Reinstatement decisions are subject to the same board review process and are communicated in writing.
          </p>
        </motion.div>

        {/* ===== Footer CTA ===== */}
        <motion.div {...fade(0.1)} className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <AlertCircle size={20} className="text-[#5DCAA5]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-base font-bold text-white">Questions about this policy?</p>
              <p className="text-sm text-white/55 mt-0.5">Contact our Compliance Board for clarification or to file an appeal.</p>
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

export default CertificationWithdrawal;

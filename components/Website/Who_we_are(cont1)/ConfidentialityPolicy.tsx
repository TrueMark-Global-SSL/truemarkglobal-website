'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lock, ChevronLeft, ArrowRight } from 'lucide-react';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="w-0.5 self-stretch rounded-full bg-[#387467] shrink-0 mt-1 min-h-[1.25rem]" />
    <h2 className="text-lg font-bold text-slate-900">{children}</h2>
  </div>
);

const ConfidentialityPolicy = () => {
  return (
    <section className="px-4 md:px-8 2xl:px-0 pb-24">
      <div className="mx-auto max-w-3xl">

        {/* Document header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="border border-slate-200 rounded-2xl p-8 mb-12 bg-white shadow-sm"
        >
          <Link href="/policy" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#387467] transition-colors mb-6">
            <ChevronLeft size={12} /> All Policies
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#387467]/8 border border-[#387467]/15">
              <Lock size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-2">
                Operational Policy
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Confidentiality Policy
              </h1>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Applies To", value: "All Staff, Subcontractors & Applicants" },
              { label: "ISO Basis", value: "ISO/IEC 17024 · 17021" },
              { label: "Review Cycle", value: "Annual" },
            ].map((m, i) => (
              <div key={i}>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{m.label}</p>
                <p className="text-xs font-semibold text-slate-700">{m.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-12"
        >

          {/* Purpose */}
          <div>
            <SectionHeading>Purpose</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              The purpose of the confidentiality policy is to ensure that all staff, management, applicants,
              and subcontractors understand TrueMark Global Standards &amp; Solutions Limited (TMGSSL)
              requirements regarding the handling and disclosure of personal data and confidential information.
            </p>
          </div>

          {/* Policy Statement */}
          <div>
            <SectionHeading>Policy Statement</SectionHeading>
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                All personnel associated with the certification program must keep confidential any information
                obtained during the execution of TrueMark Global Standards &amp; Solutions Limited (TMGSSL)
                certification program objectives.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Confidential information includes details about applicants, candidates, certified persons, and
                the intellectual property involved in the certification process. It also covers vendor-provided
                data that supports the program.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every certification-related personnel must sign a non-disclosure agreement (NDA) as a
                prerequisite for service, ensuring full compliance with confidentiality expectations.
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5">
            <p className="text-xs text-slate-500 italic leading-relaxed">
              TrueMark Global Standards &amp; Solutions Limited (TMGSSL) is committed to protecting sensitive
              information and upholding privacy at every level of certification operations.
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 pt-2">
            <Link href="/support"
              className="inline-flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
            >
              Contact Support
              <ArrowRight size={14} />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ConfidentialityPolicy;

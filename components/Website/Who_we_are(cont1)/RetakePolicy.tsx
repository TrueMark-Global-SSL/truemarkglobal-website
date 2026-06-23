'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RotateCcw, ChevronLeft, ArrowRight } from 'lucide-react';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="w-0.5 self-stretch rounded-full bg-[#387467] shrink-0 mt-1 min-h-[1.25rem]" />
    <h2 className="text-lg font-bold text-slate-900">{children}</h2>
  </div>
);

const retakeRules = [
  {
    attempt: "1st Attempt",
    rule: "70% pass mark required. If not achieved, the candidate is eligible for two retakes — the first retake is free.",
  },
  {
    attempt: "2nd Attempt (1st Retake)",
    rule: "Free of charge. If the 70% mark is still not achieved, a retake fee applies for the next attempt.",
  },
  {
    attempt: "3rd Attempt (2nd Retake)",
    rule: "A retake fee of 50% of the initial exam cost applies.",
  },
  {
    attempt: "4th Attempt (3rd Retake)",
    rule: "A mandatory 14-day waiting period is required before this attempt. The 50% retake fee still applies.",
  },
  {
    attempt: "5th Attempt (4th Retake)",
    rule: "The same conditions apply: a 14-day waiting period and the 50% retake fee.",
  },
];

const RetakePolicy = () => {
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
              <RotateCcw size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-2">
                Examination Policy
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Exam Retake Policy
              </h1>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Pass Mark", value: "70%" },
              { label: "Free Retakes", value: "1 (first retake)" },
              { label: "Retake Fee", value: "50% of initial exam cost" },
              { label: "Waiting Period", value: "14 days (4th attempt onward)" },
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
              TrueMark Global Standards &amp; Solutions Limited (TMGSSL) publishes this retake policy to uphold
              the integrity of its certification assessments and to provide clarity on retake procedures and
              eligibility for all candidates.
            </p>
          </div>

          {/* Retake Rules */}
          <div>
            <SectionHeading>Retake Rules by Attempt</SectionHeading>
            <div className="space-y-3 mt-2">
              {retakeRules.map((r, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }} viewport={{ once: true }}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xs font-black text-[#387467]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">{r.attempt}</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{r.rule}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional rules */}
          <div>
            <SectionHeading>Additional Conditions</SectionHeading>
            <ul className="space-y-2.5">
              {[
                "Candidates who pass the exam are not permitted to retake the same version of the exam.",
                "Candidates may retake a newer version of the course exam when released — standard exam fees will apply.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#387467] shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5">
            <p className="text-xs text-slate-500 italic leading-relaxed">
              Please ensure you are well-prepared for each attempt to avoid additional costs and delays.
              Contact our team if you have questions about retake eligibility or scheduling.
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

export default RetakePolicy;

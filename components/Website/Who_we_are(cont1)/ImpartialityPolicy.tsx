'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Scale, ChevronLeft, ArrowRight } from 'lucide-react';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="w-0.5 self-stretch rounded-full bg-[#387467] shrink-0 mt-1 min-h-[1.25rem]" />
    <h2 className="text-lg font-bold text-slate-900">{children}</h2>
  </div>
);

const PolicyList = ({ items }: { items: (string | { text: string; sub?: string[] })[] }) => (
  <ul className="space-y-2.5 mt-3">
    {items.map((item, i) => {
      const text = typeof item === 'string' ? item : item.text;
      const sub = typeof item === 'string' ? undefined : item.sub;
      return (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#387467] shrink-0" />
          <div>
            <span className="text-sm text-slate-600 leading-relaxed">{text}</span>
            {sub && (
              <ul className="space-y-1.5 mt-2 ml-4">
                {sub.map((s, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                    <span className="text-sm text-slate-500 leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      );
    })}
  </ul>
);

const ImpartialityPolicy = () => {
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
              <Scale size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-2">
                Certification Policy
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Impartiality Policy
              </h1>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Applies To", value: "All Personnel, Contractors & Volunteers" },
              { label: "ISO Basis", value: "ISO/IEC 17024:2012" },
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
              The definition of impartiality is "not prejudiced towards or against any particular side or party."
              Based on this definition, TrueMark Global Standards &amp; Solutions Limited (TMGSSL) seeks to
              attain the highest degree of public confidence and trust in rendering unbiased services.
              TMGSSL fully acknowledges the importance of impartiality in carrying out its certification body
              activities that are governed by the requirements of the International Standard ISO/IEC 17024.
            </p>
          </div>

          {/* Policy Statement */}
          <div>
            <SectionHeading>Policy Statement</SectionHeading>
            <PolicyList items={[
              { text: "TMGSSL top management ensures that operations are conducted to safeguard objectivity and impartiality in delivering certification services in a non-discriminatory manner." },
              { text: "Policies and procedures shall be publicly available, fair, and accurately reflect certification requirements." },
              { text: "Certification shall not be conditional upon education or training from TMGSSL. However, services may be restricted when there is an unacceptable risk such as fraudulent behavior or provision of false information." },
              {
                text: "All personnel, contractors, and volunteers:",
                sub: [
                  "Shall act objectively and without commercial, financial, or other pressures.",
                  "Are obligated to disclose any potential conflicts of interest.",
                ]
              },
              { text: "TMGSSL shall not offer consultancy or suggest certification will be easier through certain individuals or services." },
              { text: "Certification decisions shall be made independently of the assessment process." },
              { text: "Ongoing monitoring of conformance to this policy is part of TMGSSL's risk and quality management system." },
            ]} />
          </div>

          {/* Commitment to Impartiality */}
          <div>
            <SectionHeading>Commitment to Impartiality</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              TrueMark Global Standards &amp; Solutions Limited (TMGSSL) commits to acting impartially in
              relation to its applicants, candidates, and certified persons. All certification decisions shall
              follow clearly defined policies and procedures.
            </p>
            <PolicyList items={[
              "TMGSSL understands and actively manages threats to impartiality including self-interest, personnel relationships, financial pressure, favoritism, conflict of interest, or intimidation.",
              "Threat analyses are periodically conducted to evaluate the potential for undue influence on certification activities.",
              "TMGSSL ensures that its operations are compliant with ISO/IEC 17024:2012 and relevant conformity assessment guidelines.",
              "All employees are trained and jointly responsible for maintaining impartiality across all certification functions.",
            ]} />
          </div>

          {/* Note */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5">
            <p className="text-xs text-slate-500 italic leading-relaxed">
              This policy shall be reviewed annually or upon significant changes to TrueMark Global Standards
              &amp; Solutions Limited (TMGSSL) certification operations.
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

export default ImpartialityPolicy;

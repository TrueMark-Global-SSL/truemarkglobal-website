'use client';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

const platforms = [
  {
    name: 'CLMEP',
    full: 'Certification & Learning Management and Examination Platform',
    description: 'Search and verify personnel certifications, examination results, and course completions issued through the CLMEP platform.',
    registryUrl: 'https://certify.truemarkglobal.com/registry',
    types: ['Personnel Certifications', 'Course Completions', 'Examination Results', 'Training Endorsements'],
  },
  {
    name: 'Truvera',
    full: 'Conformity Assessment Platform',
    description: 'Search and verify conformity assessment certificates, inspection records, and scheme certifications issued through Truvera.',
    registryUrl: null, // URL to be provided
    types: ['Scheme Certifications', 'Inspection Certificates', 'Verification Records', 'Audit Certificates'],
  },
];

const CertificateRegister = () => {
  return (
    <section className="px-4 md:px-8 2xl:px-0 pb-28">
      <div className="mx-auto max-w-3xl">

        {/* Header card */}
        <motion.div {...fade(0)} className="border border-slate-200 rounded-2xl p-8 mb-10 bg-white shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#387467]/8 border border-[#387467]/15">
              <Award size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-2">
                Public Register
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Certificate Register
              </h1>
              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed max-w-lg">
                Verify the authenticity of any certificate issued by TrueMark Global Standards &amp; Solutions
                Limited (TMGSSL). Certificates are searchable directly on the platform they were issued from.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Issued By", value: "TMGSSL" },
              { label: "Register Type", value: "Public" },
              { label: "Platforms", value: "CLMEP · Truvera" },
            ].map((m, i) => (
              <div key={i}>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{m.label}</p>
                <p className="text-xs font-semibold text-slate-700">{m.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform cards */}
        <motion.div {...fade(0.1)} className="space-y-4 mb-10">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-0.5 self-stretch rounded-full bg-[#387467] shrink-0 mt-1 min-h-[1.25rem]" />
            <h2 className="text-lg font-bold text-slate-900">Choose a Platform to Search</h2>
          </div>

          {platforms.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck size={15} className="text-[#387467]" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#387467]">{p.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{p.full}</p>
                </div>
                {p.registryUrl ? (
                  <a
                    href={p.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#387467] px-4 py-2 text-[12.5px] font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm"
                  >
                    Search Registry
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <span className="shrink-0 inline-flex items-center rounded-lg bg-slate-100 px-4 py-2 text-[12px] font-bold text-slate-400">
                    Coming Soon
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.types.map((t, j) => (
                  <span key={j} className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>

              {p.registryUrl && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a
                    href={p.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#387467] hover:underline"
                  >
                    {p.registryUrl}
                    <ArrowRight size={11} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div {...fade(0.3)} className="space-y-4">
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5 flex gap-3">
            <Info size={14} className="text-slate-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 italic leading-relaxed">
              Only certificates issued directly by TrueMark Global Standards &amp; Solutions Limited (TMGSSL)
              through the CLMEP or Truvera platforms appear in these registers. For queries about a specific
              certificate, <Link href="/support" className="text-[#387467] hover:underline font-medium">contact our support team</Link>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificateRegister;

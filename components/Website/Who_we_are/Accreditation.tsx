'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle, Globe, ArrowRight, AlertCircle, BadgeCheck } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const implications = [
  {
    icon: ShieldCheck,
    title: "Internationally Recognised",
    desc: "NiNAS is a full member of the International Laboratory Accreditation Cooperation (ILAC), meaning TMGSSL certifications carry cross-border recognition.",
  },
  {
    icon: CheckCircle,
    title: "Independently Verified",
    desc: "Our certification processes are independently assessed for compliance with ISO/IEC 17024 — the global standard for personnel certification bodies.",
  },
  {
    icon: Globe,
    title: "Trusted by Industry",
    desc: "Accreditation by NiNAS demonstrates to employers, regulators, and clients that TMGSSL-issued certifications meet rigorous, objective quality benchmarks.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    desc: "Maintaining accreditation requires continuous surveillance audits, ensuring our standards never stagnate and our certifications retain their value over time.",
  },
];

const AccreditationSection = () => {
  return (
    <section className="pb-20 px-4 md:px-8 2xl:px-0">
      <div className="max-w-5xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div {...fade()} className="mb-16 border-l-4 border-[#387467] pl-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467] mb-2 block">
            Accreditation Status
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our{" "}
            <span className="text-[#387467]">Accreditation</span>
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-2xl leading-relaxed">
            TrueMark Global Standards &amp; Solutions Limited (TMGSSL) has formally applied for accreditation and is committed to operating at the highest level of quality and professionalism — independently verified by recognised accreditation bodies.
          </p>
        </motion.div>

        {/* ===== Hero Image ===== */}
        <motion.div {...fade(0.05)} className="mb-12 rounded-2xl overflow-hidden">
          <div className="relative w-full h-[280px] md:h-[360px]">
            <Image
              src="/images/policy/Accreditation.jpg"
              alt="TMGSSL Accreditation"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2822]/80 via-[#0c2822]/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5DCAA5] mb-2">TMGSSL · Recognised Globally</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight max-w-lg">
                Pursuing World-Class Accreditation
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ===== NiNAS Accreditation Card ===== */}
        <motion.div {...fade(0.07)} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <BadgeCheck className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">NiNAS Accreditation Application — Personnel Certification Body</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6 ml-[52px]">
            TMGSSL has formally submitted its application to the Nigeria National Accreditation Service (NiNAS) — the national body responsible for accrediting conformity assessment bodies in Nigeria. Our application is currently under review.
          </p>

          {/* Dark accreditation card */}
          <div className="ml-[52px] rounded-2xl bg-gradient-to-br from-[#0c2822] via-[#1a4a40] to-[#0f3530] p-8 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
              <ShieldCheck size={28} className="text-[#5DCAA5]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Accrediting Body</p>
              <h3 className="text-lg font-extrabold text-white mb-3">
                Nigeria National Accreditation Service (NiNAS)
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-5">
                {[
                  { label: "Standard", value: "ISO/IEC 17024:2012" },
                  { label: "Scope", value: "Personnel Certification Body" },
                  { label: "Status", value: "Application In Progress" },
                ].map((m, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5">{m.label}</p>
                    <p className={`text-sm font-semibold ${i === 2 ? 'text-amber-400' : 'text-[#5DCAA5]'}`}>{m.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/65 leading-relaxed">
                TMGSSL has applied to operate as an accredited Personnel Certification Body under ISO/IEC 17024 — the international standard governing requirements for bodies that certify persons. Upon successful accreditation, our certification schemes, examination processes, and quality management systems will carry the full weight of independent third-party verification.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== What Accreditation Means ===== */}
        <motion.div {...fade(0.09)} className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10">
              <Globe className="text-[#387467]" size={20} strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Why Accreditation Matters</h2>
          </div>
          <p className="text-sm text-slate-500 mb-8 ml-[52px]">
            Accreditation is not just a badge — it is the independent verification that our processes, systems, and outcomes meet globally recognised benchmarks. Here is what it will mean for everyone who certifies through TMGSSL.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {implications.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#387467]/10 mb-4">
                    <Icon size={18} className="text-[#387467]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
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
              <p className="text-base font-bold text-white">Have questions about our accreditation process?</p>
              <p className="text-sm text-white/55 mt-0.5">Our team can provide updates on our NiNAS application status or answer questions about our quality framework.</p>
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

export default AccreditationSection;

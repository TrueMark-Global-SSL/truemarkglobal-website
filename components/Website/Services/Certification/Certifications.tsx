"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package, ShieldCheck, Leaf, AlertTriangle, Award,
  MessageSquare, FileText, ClipboardList, ClipboardCheck,
  Search, Scale, RotateCcw, AlertCircle, ArrowRight,
} from "lucide-react";

const certTypes = [
  {
    icon: Package,
    title: "Product Certification",
    desc: "Evaluate and confirm that your products align with national and international quality and safety standards — from design to delivery.",
  },
  {
    icon: ShieldCheck,
    title: "System Certification",
    desc: "Validate that your management systems comply with globally accepted standards such as ISO 9001, ISO 14001, and ISO 45001.",
  },
  {
    icon: AlertTriangle,
    title: "Safety Certification",
    desc: "Ensure your processes, machinery, and products meet stringent health and safety standards, reducing risk and demonstrating duty of care.",
  },
  {
    icon: Leaf,
    title: "Environmental Certification",
    desc: "Validate environmental responsibility through ISO 14001, ESG standards, and sustainability criteria — building confidence with regulators and stakeholders.",
  },
];

const standards = [
  { code: "ISO/IEC 17021", desc: "Certification of management systems" },
  { code: "ISO/IEC 17024", desc: "Certification of persons" },
  { code: "ISO/IEC 17065", desc: "Product, process & service certification" },
  { code: "ISO 9001",      desc: "Quality Management Systems" },
];

const processSteps = [
  { step: "01", icon: MessageSquare,  title: "Enquiry Stage",            desc: "Initial consultation to understand your needs, scope, and applicable standards." },
  { step: "02", icon: FileText,       title: "Proposal & Negotiation",   desc: "Customised proposal with agreed timelines, deliverables, and costs. Contract finalised." },
  { step: "03", icon: ClipboardList,  title: "Application & Scheduling", desc: "Formal application submitted and audit phases scheduled at your convenience." },
  { step: "04", icon: Search,         title: "Stage 1 Audit",            desc: "Preliminary audit to review documentation, readiness, and initial compliance posture." },
  { step: "05", icon: ClipboardCheck, title: "Stage 2 Audit",            desc: "Detailed on-site assessment of the implementation and effectiveness of your systems." },
  { step: "06", icon: AlertCircle,    title: "Findings",                 desc: "A report of observations, non-conformities (if any), and recommendations for improvement." },
  { step: "07", icon: Scale,          title: "Decision Stage",           desc: "Evaluation of all findings by the certification committee to determine eligibility." },
  { step: "08", icon: Award,          title: "Certificate Issued",       desc: "Certificate issued and your compliance status added to our verified public database." },
  { step: "09", icon: RotateCcw,      title: "Surveillance Audits",      desc: "Periodic audits post-certification to ensure continued conformity and effectiveness." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const TM_Certifications = () => {
  return (
    <section id="service-content" className="pb-24 px-4 md:px-8 2xl:px-0 pt-16">
      <div className="mx-auto max-w-5xl space-y-24">

        {/* ── Where We Focus ── */}
        <motion.div {...fade(0.05)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Where We Focus</h2>
          <p className="text-base text-slate-500 mb-10 max-w-2xl">
            Our certification services span four core domains, each underpinned by internationally
            recognised standards and TMGSSL-accredited expertise.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
            {certTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="group bg-white p-8 hover:bg-[#387467]/3 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 mb-5 group-hover:border-[#387467]/20 group-hover:bg-[#387467]/5 transition-colors">
                    <Icon size={18} className="text-[#387467]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Standards ── */}
        <motion.div {...fade(0.06)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Standards We Operate Under</h2>
          <p className="text-base text-slate-500 mb-10 max-w-2xl">
            TMGSSL is accredited to issue certifications under the following internationally
            recognised ISO/IEC standards.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {standards.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 rounded-xl border border-slate-200 bg-white px-6 py-5 hover:border-[#387467]/30 hover:shadow-sm transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50">
                  <Award size={16} className="text-[#387467]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{s.code}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Certification Process ── */}
        <motion.div {...fade(0.07)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Certification Process</h2>
          <p className="text-base text-slate-500 mb-12 max-w-2xl">
            A transparent, step-by-step journey from initial enquiry to certified status and
            ongoing surveillance.
          </p>

          {/* Vertical step timeline */}
          <div className="space-y-0">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === processSteps.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  {/* Circle + connector line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold z-10 ${
                      isLast
                        ? "border-[#387467] bg-[#387467] text-white"
                        : "border-[#387467] bg-white text-[#387467]"
                    }`}>
                      {step.step}
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-slate-200 my-1.5" style={{ minHeight: "2rem" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-7"}`}>
                    <div className="flex items-center gap-2.5 mb-1">
                      <Icon size={14} className="text-slate-400 shrink-0" strokeWidth={1.75} />
                      <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Footer CTA ── */}
        <motion.div
          {...fade(0.08)}
          className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-lg font-bold text-white">Ready to begin certification?</p>
            <p className="text-sm text-white/50 mt-1">
              Contact our team to discuss your scope, timeline, and certification requirements.
            </p>
          </div>
          <Link
            href="/support"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
          >
            Apply Now
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default TM_Certifications;

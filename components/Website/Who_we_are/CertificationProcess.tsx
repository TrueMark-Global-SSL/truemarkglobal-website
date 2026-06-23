'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MessageSquare, FileText, ClipboardCheck, Search, Scale, Award, RotateCcw,
  Target, BookOpen, PenLine, CheckCircle, Clock,
  Package, Eye, BadgeCheck, Microscope, FlaskConical, Building2,
  AlertCircle, ArrowRight, GraduationCap, Users, LucideIcon,
  CalendarCheck, ShieldCheck, TestTube, ScanLine, Layers
} from 'lucide-react';

type Step = {
  step: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  bg: string;
  border: string;
  iconColor: string;
};

type Pathway = {
  id: string;
  standard: string;
  label: string;
  tagline: string;
  desc: string;
  applicant: string;
  duration: string;
  certPeriod: string;
  steps: Step[];
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
};

const STEP_COLORS: { bg: string; border: string; iconColor: string }[] = [
  { bg: "bg-amber-50",   border: "border-amber-200",   iconColor: "text-amber-600"   },
  { bg: "bg-blue-50",    border: "border-blue-200",     iconColor: "text-blue-600"    },
  { bg: "bg-violet-50",  border: "border-violet-200",   iconColor: "text-violet-600"  },
  { bg: "bg-indigo-50",  border: "border-indigo-200",   iconColor: "text-indigo-600"  },
  { bg: "bg-slate-50",   border: "border-slate-200",    iconColor: "text-slate-500"   },
  { bg: "bg-emerald-50", border: "border-emerald-200",  iconColor: "text-[#387467]"   },
];

function s(step: string, icon: LucideIcon, title: string, desc: string, i: number): Step {
  return { step, icon, title, desc, ...STEP_COLORS[i] };
}

const pathways: Pathway[] = [
  {
    id: "17021",
    standard: "ISO/IEC 17021",
    label: "Management Systems",
    tagline: "Certification of Management Systems",
    desc: "For organisations seeking independent certification of their management systems — quality, environmental, occupational health & safety, food safety, and more — against internationally recognised ISO standards.",
    applicant: "Organisations of any size or sector",
    duration: "8 – 16 weeks",
    certPeriod: "3 years + annual surveillance",
    steps: [
      s("01", MessageSquare,  "Enquiry & Consultation",    "Initial consultation to understand your organisation's scope, applicable standards, and certification objectives.", 0),
      s("02", FileText,       "Proposal & Contract",       "A customised proposal is prepared with agreed timelines, audit scope, and costs. A formal contract is signed.", 1),
      s("03", ClipboardCheck, "Stage 1 Audit",             "Documentation review: your quality manual, procedures, and management system readiness are assessed against the standard.", 2),
      s("04", Search,         "Stage 2 Audit",             "On-site implementation assessment. Auditors evaluate evidence that your management system is effectively implemented.", 3),
      s("05", Scale,          "Findings & Decision",       "Non-conformities (if any) are reported and must be addressed. The certification committee reviews all evidence before deciding.", 4),
      s("06", Award,          "Certificate & Surveillance","Certificate issued and added to TMGSSL's verified public database. Annual surveillance audits; recertification every 3 years.", 5),
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/support",
  },
  {
    id: "17024",
    standard: "ISO/IEC 17024",
    label: "Persons",
    tagline: "Certification of Persons",
    desc: "For individual professionals seeking a recognised personal certification that validates their knowledge, skills, and competence against a defined standard. Managed through the CLMEP platform.",
    applicant: "Individual professionals (age 18+)",
    duration: "Self-paced",
    certPeriod: "As defined per scheme",
    steps: [
      s("01", Target,       "Choose Your Certification", "Identify the credential that best fits your professional goals. Each scheme has specific education and experience requirements.", 0),
      s("02", CheckCircle,  "Verify Eligibility",        "Confirm you are at least 18 years old, meet all prerequisites, and have the required background for your chosen certification.", 1),
      s("03", BookOpen,     "Prepare & Enrol",           "Optionally enrol in a TMGSSL training programme via the CLMEP platform. While not mandatory, it significantly improves exam readiness.", 2),
      s("04", PenLine,      "Sit the Exam",              "Take your certification exam via CLMEP. The exam assesses real-world competence. All assessments must be completed within 12 months.", 3),
      s("05", GraduationCap,"Results",                   "Results are communicated immediately. Pass: an e-certificate is issued. Fail: a free retake opportunity is offered via email.", 4),
      s("06", RotateCcw,    "Certificate & Renewal",     "Your e-certificate is verifiable and digitally issued. Renew before expiry to maintain your certified status.", 5),
    ],
    ctaLabel: "Access CLMEP",
    ctaHref: "https://certify.truemarkglobal.com",
    ctaExternal: true,
  },
  {
    id: "17065",
    standard: "ISO/IEC 17065",
    label: "Products & Services",
    tagline: "Certification of Products, Processes & Services",
    desc: "For manufacturers, producers, and service providers seeking independent third-party confirmation that their products, processes, or services conform to specified requirements or standards.",
    applicant: "Manufacturers, producers & service providers",
    duration: "6 – 14 weeks",
    certPeriod: "Annual or per scheme",
    steps: [
      s("01", FileText,     "Application & Scope",       "Submit an application clearly defining the product, process, or service scope and the standard or specification to be assessed against.", 0),
      s("02", Search,       "Document Review",           "TMGSSL reviews technical specifications, test reports, declarations of conformity, and supporting documentation.", 1),
      s("03", FlaskConical, "Testing & Evaluation",      "Independent testing, inspection, or evaluation of the product or service is conducted against applicable technical requirements.", 2),
      s("04", Building2,    "Process Audit (if required)","For process or service certifications, an on-site audit may be conducted to verify consistency of production or delivery.", 3),
      s("05", Scale,        "Certification Decision",    "The certification committee reviews all findings. Any non-conformities must be resolved before a certificate can be granted.", 4),
      s("06", BadgeCheck,   "Certificate & Surveillance","The certificate and the right to use the TMGSSL certification mark are granted. Periodic surveillance ensures continued conformity.", 5),
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/support",
  },
  {
    id: "17025",
    standard: "ISO/IEC 17025",
    label: "Laboratories",
    tagline: "Accreditation of Testing & Calibration Laboratories",
    desc: "For testing laboratories, calibration laboratories, and medical testing facilities seeking formal accreditation to demonstrate technical competence and the reliability of their results.",
    applicant: "Testing, calibration & medical laboratories",
    duration: "12 – 24 weeks",
    certPeriod: "4 years + annual surveillance",
    steps: [
      s("01", MessageSquare, "Pre-assessment Consultation","Scope review covering applicable test methods, equipment, personnel competence, and laboratory readiness against ISO/IEC 17025.", 0),
      s("02", FileText,      "Application & Doc Review",  "Quality Manual, Standard Operating Procedures, equipment calibration records, and method validation reports are reviewed.", 1),
      s("03", Building2,     "On-site Assessment",        "Expert technical assessors evaluate laboratory infrastructure, equipment, personnel, and the quality management system.", 2),
      s("04", Microscope,    "Proficiency Testing",       "The laboratory participates in inter-laboratory comparison exercises to verify the accuracy and reliability of its measurements.", 3),
      s("05", ClipboardCheck,"Findings & Corrections",    "Non-conformities are formally documented. The laboratory must demonstrate effective corrective actions before accreditation is granted.", 4),
      s("06", Award,         "Accreditation Certificate", "Accreditation is granted and listed in TMGSSL's public register. Annual surveillance; full re-assessment every 4 years.", 5),
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/support",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const CertificationProcess = () => {
  const [activeId, setActiveId] = useState("17021");
  const active = pathways.find(p => p.id === activeId)!;

  return (
    <section className="pb-20 px-4 md:px-8 2xl:px-0">
      <div className="max-w-5xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div {...fade()} className="mb-12 border-l-4 border-[#387467] pl-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467] mb-2 block">
            Getting Certified
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Certification Eligibility{" "}
            <span className="text-[#387467]">&amp; Process</span>
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-2xl leading-relaxed">
            TrueMark Global Standards and Solutions Limited (TMGSSL) operates across four internationally recognised certification schemes. Select your pathway below to see the full process.
          </p>
        </motion.div>

        {/* ===== Tab Switcher ===== */}
        <motion.div {...fade(0.05)} className="mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {pathways.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`rounded-xl border px-4 py-3.5 text-left transition-all ${
                  activeId === p.id
                    ? "border-[#387467] bg-[#387467] text-white shadow-md"
                    : "border-gray-200 bg-white text-slate-700 hover:border-[#387467]/40 hover:bg-[#387467]/3"
                }`}
              >
                <span className={`text-[11px] font-black uppercase tracking-widest block mb-0.5 ${activeId === p.id ? "text-white/60" : "text-slate-400"}`}>
                  {p.standard}
                </span>
                <span className="text-sm font-bold leading-tight">{p.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ===== Tab Content ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {/* Standard overview card */}
            <div className="mb-8 rounded-2xl bg-gradient-to-br from-[#0c2822] via-[#1a4a40] to-[#0f3530] p-7 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="md:max-w-xl">
                  <span className="text-xs font-black uppercase tracking-widest text-[#5DCAA5] mb-2 block">
                    {active.standard}
                  </span>
                  <h2 className="text-xl font-extrabold text-white mb-3">{active.tagline}</h2>
                  <p className="text-sm text-white/65 leading-relaxed">{active.desc}</p>
                </div>
                <div className="flex flex-row md:flex-col gap-3 shrink-0 text-sm">
                  <div className="rounded-xl bg-white/8 px-4 py-3">
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">Applicant</p>
                    <p className="text-white font-semibold text-sm">{active.applicant}</p>
                  </div>
                  <div className="rounded-xl bg-white/8 px-4 py-3">
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">Timeline</p>
                    <p className="text-white font-semibold text-sm">{active.duration}</p>
                  </div>
                  <div className="rounded-xl bg-white/8 px-4 py-3">
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">Valid For</p>
                    <p className="text-white font-semibold text-sm">{active.certPeriod}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <h3 className="text-base font-bold text-slate-900 mb-5">
              Step-by-step process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {active.steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="relative"
                  >
                    <div className={`h-full rounded-2xl border ${step.border} ${step.bg} p-5`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${step.border} bg-white`}>
                          <Icon size={18} className={step.iconColor} strokeWidth={1.75} />
                        </div>
                        <span className="text-[11px] font-black text-slate-300 tracking-widest">{step.step}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                    {/* Arrow connector — desktop only, skip last in each row */}
                    {(i + 1) % 3 !== 0 && i !== active.steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2.5 top-7 z-10 h-5 w-5 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                        <ArrowRight size={11} className="text-slate-400" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Per-tab CTA */}
            <div className="rounded-2xl bg-slate-900 p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <AlertCircle size={20} className="text-[#5DCAA5]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-base font-bold text-white">
                    {active.id === "17024" ? "Ready to get certified?" : "Ready to begin the process?"}
                  </p>
                  <p className="text-sm text-white/55 mt-0.5">
                    {active.id === "17024"
                      ? "Access the CLMEP platform to apply, enrol in a course, and sit your exam."
                      : "Contact our team to discuss your scope, timeline, and certification requirements."}
                  </p>
                </div>
              </div>
              <Link
                href={active.ctaHref}
                {...(active.ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-6 py-3 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
              >
                {active.ctaLabel}
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CertificationProcess;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronDown,
  BookOpen, Users, Monitor, Award,
  Target, TrendingUp, Clock, CheckCircle,
  MessageSquare, FileText, CalendarDays,
  Presentation, ClipboardCheck, Star,
} from "lucide-react";

const chips = [
  { label: "Delivery",    value: "Classroom · Online · On-site" },
  { label: "Audience",    value: "Individuals · Teams · Organisations" },
  { label: "Output",      value: "Certificate of Completion" },
];

const trainingAreas = [
  {
    icon: BookOpen,
    title: "ISO Standards Training",
    desc: "Foundation and advanced courses on ISO 9001, ISO 14001, ISO 45001, ISO 17021, and other management system standards.",
  },
  {
    icon: Users,
    title: "Auditor Development",
    desc: "Lead Auditor and Internal Auditor training programmes designed to build competent, certified auditing professionals.",
  },
  {
    icon: Monitor,
    title: "Compliance & Regulatory",
    desc: "Training on regulatory requirements, conformity assessment procedures, and sector-specific compliance obligations.",
  },
  {
    icon: Award,
    title: "Quality & Operations",
    desc: "Practical courses covering quality management principles, root cause analysis, process improvement, and risk-based thinking.",
  },
];

const benefits = [
  { icon: Target,       title: "Competency-Based Learning",    desc: "Programmes designed around measurable competency outcomes — not just knowledge transfer." },
  { icon: TrendingUp,   title: "Career Advancement",           desc: "Internationally recognised certificates that improve the employability of participants." },
  { icon: Clock,        title: "Flexible Scheduling",          desc: "Courses available in multiple formats — scheduled cohorts, on-demand, or bespoke delivery." },
  { icon: CheckCircle,  title: "Experienced Instructors",      desc: "All TMGSSL trainers are practising professionals with deep domain experience." },
];

const processSteps = [
  { step: "01", icon: MessageSquare,  title: "Training Needs Analysis",  desc: "Understanding your team's current competency level, gaps, and learning objectives." },
  { step: "02", icon: FileText,       title: "Programme Design",         desc: "A tailored training programme is designed — covering content, format, duration, and assessment methods." },
  { step: "03", icon: CalendarDays,   title: "Scheduling & Enrolment",   desc: "Dates confirmed, participants enrolled, and pre-course materials distributed." },
  { step: "04", icon: Presentation,   title: "Training Delivery",        desc: "Interactive, expert-led sessions delivered in your preferred format — in-person, virtual, or blended." },
  { step: "05", icon: ClipboardCheck, title: "Assessment",               desc: "Participants are assessed through practical exercises, written tests, or competency demonstrations." },
  { step: "06", icon: Star,           title: "Certificate Issued",       desc: "Successful participants receive a TMGSSL Certificate of Completion — formally recognising their achievement." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const TM_Training = () => {
  return (
    <>
      {/* ── Hero ── */}
      <div className="bg-[#f8faf9] border-b border-slate-200 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-5xl">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-center py-12 lg:py-16">

            <motion.div
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#387467] mb-5">
                TMGSSL Services
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-5">
                Training &<br />
                <span className="text-[#387467]">Development</span>
              </h1>

              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
                Professional development programmes that build competence in quality management,
                auditing, compliance, and international standards — equipping individuals and
                organisations to excel.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#387467] px-6 py-3 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
                >
                  Enrol Now
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="#service-content"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#387467]/30 hover:bg-[#387467]/3 transition-all"
                >
                  See details
                  <ChevronDown size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/sectors/media1.jpg"
                  alt="Training & Development — TMGSSL"
                  width={560}
                  height={420}
                  className="w-full object-cover h-[260px] lg:h-[360px]"
                />
                <div className="absolute bottom-4 left-4 rounded-xl bg-white/92 backdrop-blur-sm px-4 py-2.5 shadow-lg">
                  <span className="text-xs font-bold text-slate-800">Certified Professional Training</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="border-t border-slate-200 py-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200"
          >
            {chips.map((chip, i) => (
              <div key={i} className="px-0 sm:px-6 first:pl-0 last:pr-0 py-3 sm:py-0">
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{chip.label}</p>
                <p className="text-sm font-semibold text-slate-700">{chip.value}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Content ── */}
      <section id="service-content" className="pb-24 px-4 md:px-8 2xl:px-0 pt-16">
        <div className="mx-auto max-w-5xl space-y-24">

          {/* Training Areas */}
          <motion.div {...fade(0.05)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Training Areas</h2>
            <p className="text-base text-slate-500 mb-10 max-w-2xl">
              TMGSSL delivers structured learning programmes across four core professional development
              domains.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              {trainingAreas.map((item, i) => {
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

          {/* Benefits */}
          <motion.div {...fade(0.06)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Why Train with TMGSSL</h2>
            <p className="text-base text-slate-500 mb-10 max-w-2xl">
              Our programmes combine internationally recognised content with practical, real-world application.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              {benefits.map((item, i) => {
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

          {/* Process */}
          <motion.div {...fade(0.07)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">How It Works</h2>
            <p className="text-base text-slate-500 mb-12 max-w-2xl">
              From needs analysis to certificate issuance — a structured learning journey tailored to
              your organisation's objectives.
            </p>

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

          {/* Footer CTA */}
          <motion.div
            {...fade(0.08)}
            className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <p className="text-lg font-bold text-white">Ready to invest in your team's competence?</p>
              <p className="text-sm text-white/50 mt-1">
                Speak with our training team to identify the right programme for your professional goals.
              </p>
            </div>
            <Link
              href="/support"
              className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
            >
              Enrol Now
              <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default TM_Training;

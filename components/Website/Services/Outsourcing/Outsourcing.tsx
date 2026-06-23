"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users, Settings, Headphones, FileCheck,
  Target, TrendingUp, Clock, ShieldCheck,
  MessageSquare, Search, FileText, BarChart2, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "HR & Talent Outsourcing",
    desc: "Delegate recruitment, onboarding, payroll administration, and HR compliance to our specialist team — reducing overhead and exposure.",
  },
  {
    icon: Settings,
    title: "Operations & Process Outsourcing",
    desc: "We manage defined operational workflows on your behalf — quality checks, data entry, reporting pipelines, and more.",
  },
  {
    icon: Headphones,
    title: "Customer Support Services",
    desc: "Professional frontline support handled by trained agents — ensuring consistent, brand-aligned interactions across every channel.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Documentation",
    desc: "We handle the administrative burden of compliance documentation, reporting schedules, and regulatory submissions.",
  },
];

const benefits = [
  { icon: Target,      title: "Focus on Core Business",  desc: "Free your leadership team from operational complexity so they can focus on strategic priorities." },
  { icon: TrendingUp,  title: "Measurable Cost Savings",  desc: "Reduce the cost of maintaining in-house teams for non-core functions without compromising quality." },
  { icon: Clock,       title: "Faster Time-to-Delivery",  desc: "Leverage our existing infrastructure and trained specialists to accelerate delivery timelines." },
  { icon: ShieldCheck, title: "Built-in Quality Control", desc: "All outsourced functions are subject to TMGSSL's internal quality monitoring and reporting standards." },
];

const processSteps = [
  { step: "01", icon: MessageSquare, title: "Discovery Call",     desc: "We understand your operations, pain points, scope, and objectives before recommending a model." },
  { step: "02", icon: Search,        title: "Scoping & Proposal", desc: "A tailored outsourcing proposal is prepared — outlining scope, SLAs, pricing, and transition plan." },
  { step: "03", icon: FileText,      title: "Agreement & Setup",  desc: "Service level agreement signed, processes documented, and team onboarded to your systems." },
  { step: "04", icon: Settings,      title: "Handover & Go-Live", desc: "A phased transition ensures continuity — your operations never experience disruption." },
  { step: "05", icon: BarChart2,     title: "Ongoing Reporting",  desc: "Regular performance reports and review meetings keep you fully informed at all times." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const TM_Outsourcing = () => {
  return (
    <section id="service-content" className="pb-24 px-4 md:px-8 2xl:px-0 pt-16">
      <div className="mx-auto max-w-5xl space-y-24">

        {/* Services */}
        <motion.div {...fade(0.05)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What We Outsource</h2>
          <p className="text-base text-slate-500 mb-10 max-w-2xl">
            TMGSSL manages a defined range of business functions with the same rigour we apply to
            certification and compliance work.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
            {services.map((item, i) => {
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
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Why Outsource with TMGSSL</h2>
          <p className="text-base text-slate-500 mb-10 max-w-2xl">
            We bring structure, accountability, and quality standards to every function we manage on your behalf.
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
          <h2 className="text-2xl font-bold text-slate-900 mb-2">How an Engagement Works</h2>
          <p className="text-base text-slate-500 mb-12 max-w-2xl">
            From initial discovery to live delivery — a structured transition that protects your operations at every stage.
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
            <p className="text-lg font-bold text-white">Ready to delegate and focus on growth?</p>
            <p className="text-sm text-white/50 mt-1">
              Let's discuss which functions TMGSSL can take off your plate — starting with a no-commitment discovery call.
            </p>
          </div>
          <Link
            href="/support"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
          >
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default TM_Outsourcing;

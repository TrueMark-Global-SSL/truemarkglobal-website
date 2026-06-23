"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package, Truck, Building2, Wrench,
  Cpu, Leaf, ShieldAlert, Factory, Globe,
  MessageSquare, FileText, ClipboardList, MapPin,
  Search, ClipboardCheck, AlertCircle, Scale, Award,
  ArrowRight,
} from "lucide-react";

const inspectionTypes = [
  {
    icon: Package,
    title: "Product Inspection",
    desc: "Pre-production, during-production, and pre-shipment inspections to verify product quality, dimensions, and conformance to specifications.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Process",
    desc: "Assessment of production facilities, manufacturing processes, and process controls against quality standards and customer requirements.",
  },
  {
    icon: Building2,
    title: "Facility & Infrastructure",
    desc: "Structural, safety, and compliance inspection of facilities — including warehouses, plants, offices, and commercial premises.",
  },
  {
    icon: Wrench,
    title: "Equipment & Machinery",
    desc: "Technical inspection of equipment, machinery, and lifting gear to ensure operational safety and regulatory compliance.",
  },
  {
    icon: Truck,
    title: "Pre-Shipment Inspection",
    desc: "Verification of goods before dispatch — quantity, quality, packaging, and labelling — reducing the risk of rejected shipments.",
  },
  {
    icon: Cpu,
    title: "Technical Systems",
    desc: "Inspection of electrical, mechanical, and process control systems against defined safety and performance standards.",
  },
  {
    icon: Leaf,
    title: "Environmental Inspection",
    desc: "On-site evaluation of environmental management practices, waste handling, and compliance with environmental legislation.",
  },
  {
    icon: ShieldAlert,
    title: "Health & Safety Inspection",
    desc: "Workplace safety assessments covering risk identification, PPE usage, emergency procedures, and OHS compliance.",
  },
  {
    icon: Globe,
    title: "Trade & Import/Export",
    desc: "Regulatory compliance checks on goods crossing borders — ensuring conformity with destination country requirements.",
  },
];

const processSteps = [
  { step: "01", icon: MessageSquare,  title: "Enquiry & Scoping",        desc: "Understanding what is to be inspected, applicable standards, client requirements, and the inspection location." },
  { step: "02", icon: FileText,       title: "Proposal Issued",          desc: "A tailored inspection proposal is issued detailing scope, methodology, deliverables, and fees." },
  { step: "03", icon: ClipboardList,  title: "Instruction & Scheduling", desc: "Formal instruction received, inspection team assigned, and schedule confirmed with all parties." },
  { step: "04", icon: MapPin,         title: "Mobilisation",             desc: "Inspector mobilised to site with defined checklists, calibrated equipment, and reference standards." },
  { step: "05", icon: Search,         title: "On-Site Inspection",       desc: "Physical examination, sampling, measurement, and observation carried out against defined criteria." },
  { step: "06", icon: ClipboardCheck, title: "Testing & Sampling",       desc: "Samples collected and tested (in-situ or at accredited laboratory) as required by the inspection scope." },
  { step: "07", icon: AlertCircle,    title: "Non-Conformance Review",   desc: "All deviations from specified requirements are recorded, classified, and communicated to the client." },
  { step: "08", icon: Scale,          title: "Report Preparation",       desc: "A comprehensive inspection report compiled — detailing findings, photographic evidence, and conclusions." },
  { step: "09", icon: Award,          title: "Certificate Issued",       desc: "Where applicable, an inspection certificate is issued as formal evidence of compliance and completion." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const TM_Inspections = () => {
  return (
    <section id="service-content" className="pb-24 px-4 md:px-8 2xl:px-0 pt-16">
      <div className="mx-auto max-w-5xl space-y-24">

        {/* Inspection Types */}
        <motion.div {...fade(0.05)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Types of Inspection We Perform</h2>
          <p className="text-base text-slate-500 mb-10 max-w-2xl">
            TMGSSL delivers inspection services across nine specialist domains — covering products,
            facilities, equipment, and trade compliance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
            {inspectionTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="group bg-white p-7 hover:bg-[#387467]/3 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 mb-4 group-hover:border-[#387467]/20 group-hover:bg-[#387467]/5 transition-colors">
                    <Icon size={18} className="text-[#387467]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Inspection Process */}
        <motion.div {...fade(0.07)}>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">The Inspection Process</h2>
          <p className="text-base text-slate-500 mb-12 max-w-2xl">
            Every TMGSSL inspection follows a structured 9-step process — from initial scoping to
            final certificate issuance.
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
            <p className="text-lg font-bold text-white">Ready to request an inspection?</p>
            <p className="text-sm text-white/50 mt-1">
              Tell us what you need inspected and our team will prepare a tailored proposal within 48 hours.
            </p>
          </div>
          <Link
            href="/support"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
          >
            Request Inspection
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default TM_Inspections;

'use client';
import { motion } from 'framer-motion';
import { sectorsData } from "@/components/Website/About/AboutData";
import { ShieldCheck, CheckSquare } from "lucide-react";

const SectorsWeServe = () => {
  return (
    <section className="py-20 px-4 md:px-8 2xl:px-0 bg-[#f8faf9]">
      <div className="mx-auto max-w-c-1235">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467] mb-3 block">
            Our Scope
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 xl:text-4xl mb-5">What We Do</h2>
          <p className="text-sm leading-relaxed text-slate-500 max-w-2xl mx-auto">
            At TrueMark Global Standards and Solutions Limited (TMGSSL), we provide globally aligned standards and solutions tailored to various industries — ensuring compliance, building trust, and enabling growth.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {sectorsData.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md hover:border-[#387467]/20 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#387467]/50 mt-0.5 shrink-0">
                  {sector.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#387467] transition-colors leading-snug">
                  {sector.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-500 pl-8">
                {sector.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-5"
        >
          <div className="rounded-2xl bg-gradient-to-br from-[#0c2822] via-[#1a4a40] to-[#0f3530] p-8 text-white">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <ShieldCheck size={20} className="text-[#5DCAA5]" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-bold mb-3">Independence and Integrity</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Our training arm operates independently from our certification body, with a strict firewall to maintain objectivity. This ensures our training is unbiased and all assessments are conducted with the highest levels of integrity.
            </p>
          </div>

          <div className="rounded-2xl border border-[#387467]/15 bg-white p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#387467]/8">
              <CheckSquare size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Trusted Decisions</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We help organisations make informed decisions about compliance and risk, ensuring adherence to relevant standards. Our evidence-based approach enables organisations to build lasting trust with regulators, partners, and stakeholders.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SectorsWeServe;

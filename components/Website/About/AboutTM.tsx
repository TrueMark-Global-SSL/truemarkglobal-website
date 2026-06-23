"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/components/Website/About/AboutData";
import {
  ShieldCheck, Lock, Users, Award, Scale, Star, Check, LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck, Lock, Users, Award, Scale, Star,
};

const AboutTM = () => {
  const { section1, section2 } = aboutContent;

  return (
    <div className="space-y-24 py-8">

      {/* ===== Core Values — Icon Grid ===== */}
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467]">
              {section1.title}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 xl:text-4xl leading-tight">
              What Guides Everything We Do
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm text-slate-500 leading-relaxed">
              {section1.intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {section1.pillars.map((item, index) => {
              const Icon = iconMap[item.icon] ?? ShieldCheck;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#387467]/20 transition-all"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#387467]/8 group-hover:bg-[#387467]/12 transition-colors">
                    <Icon size={21} className="text-[#387467]" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-300 mb-1 block">
                    {item.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Key Benefits — List + Image ===== */}
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467] mb-3 block">
                {section2.visionHeading}
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                {section2.visionSub}
              </h2>

              <div className="space-y-3">
                {section2.benefits.map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex gap-4 rounded-xl p-4 border border-transparent hover:border-[#387467]/10 hover:bg-[#387467]/3 transition-all"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#387467]/10">
                      <Check size={13} className="text-[#387467]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-100">
                <Image
                  src={section2.image}
                  alt="Key Benefits of TMGSSL Certification"
                  className="object-cover w-full"
                  width={600}
                  height={500}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutTM;

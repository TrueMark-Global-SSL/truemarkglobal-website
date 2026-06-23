"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section id="features" className="pt-12 pb-16 lg:pt-14 lg:pb-24 bg-white">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">

        {/* Section Header — inline, no animation delay */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467]">
            Our Core Pillars
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-tight tracking-tight">
            Driving Excellence Through Global Standards
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-slate-500 leading-relaxed">
            At TrueMark Global Standards and Solutions Limited (TMGSSL), we don&apos;t just certify; we empower. Our holistic approach to conformity assessment ensures your organisation doesn&apos;t just meet standards — it leads them.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          {featuresData.map((feature, key) => (
            <div key={key} className="group transition-all duration-300 hover:-translate-y-1">
              <SingleFeature feature={feature} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Feature;

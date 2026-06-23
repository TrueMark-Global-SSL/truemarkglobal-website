"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import { MessageCircle, ArrowRight } from "lucide-react";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? 0 : id);
  };

  return (
    <section className="pb-16 lg:pb-24 px-4 md:px-8 2xl:px-0">
      <div className="mx-auto max-w-c-1235 xl:px-0">
        <div className="flex flex-col gap-10 md:flex-row md:gap-12 xl:gap-20">

          {/* Left — sticky heading + context */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-2/5 lg:w-[38%] md:sticky md:top-28 md:self-start"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#387467]">
              Our FAQs
            </span>
            <h2 className="mt-3 mb-5 text-3xl font-extrabold text-slate-900 xl:text-4xl leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              Everything you need to know about our certification services, platforms, and processes. Can&apos;t find your answer here?
            </p>

            <a
              href="/support"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#387467] px-5 py-3 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md group"
            >
              <MessageCircle size={16} />
              Contact Support
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right — FAQ accordion */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-3/5 lg:w-[62%]"
          >
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              {faqData.map((faq, key) => (
                <FAQItem
                  key={key}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

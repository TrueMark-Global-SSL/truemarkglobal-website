"use client";
import Image from "next/image";
import ISSO from "../../../public/images/Home/hero.jpg";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { ShieldCheck, ArrowRight, Globe, CheckCircle } from "lucide-react";

// const stats = [
//   { icon: Award, value: "ISO", label: "Accredited Body" },
//   { icon: Users, value: "100+", label: "Organizations Served" },
//   { icon: Globe, value: "Africa", label: "& Europe Reach" },
//   { icon: Star, value: "10+", label: "Years Experience" },
// ];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 md:pt-32 pb-16 lg:pb-20">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#f0faf6] to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#387467]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1390px] px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

          {/* Left Content */}
          <div className="lg:w-[52%] mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-[#387467]/8 border border-[#387467]/20 rounded-full px-3.5 py-1.5 mb-6">
                <ShieldCheck size={13} className="text-[#387467]" />
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#387467]">
                  Internationally Aligned
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.1rem] font-extrabold text-slate-900 leading-[1.12] mb-5 tracking-tight">
                Providing{" "}
                <span className="text-[#387467]">digital tools</span>
                <br className="hidden md:block" />
                that empower{" "}
                <span className="text-slate-400 font-semibold">
                  <ReactTyped
                    strings={["Lifelong Learners", "Confident Achievers", "Future Innovators"]}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={2500}
                    loop
                  />
                </span>
              </h1>

              {/* Body */}
              <p className="text-base md:text-[1.05rem] text-slate-500 leading-relaxed mb-8 max-w-[520px]">
                TrueMark Global Standards and Solutions Limited (TMGSSL) is Nigeria&apos;s leading conformity assessment body.
                We facilitate international excellence through globally recognized certifications,
                auditing, and technical outsourcing solutions.
              </p>

              {/* Trust proof row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                {["Internationally Aligned", "Conformity Assessment Body", "CLMEP Platform"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-[#387467] shrink-0" />
                    <span className="text-[12px] font-semibold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="/courses"
                  className="inline-flex items-center gap-2 bg-[#387467] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#2d5e53] hover:shadow-lg hover:shadow-[#387467]/25 transition-all"
                >
                  Explore Courses <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#support"
                  className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-7 py-3.5 rounded-xl font-bold text-sm hover:border-[#387467]/30 hover:bg-[#387467]/4 transition-all"
                >
                  Contact an Expert
                </a>
              </div>

              {/* Stats — commented out until figures are confirmed
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-xl font-extrabold text-slate-800">{value}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide leading-tight">{label}</span>
                  </div>
                ))}
              </div>
              */}
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[48%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="relative"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#387467]/10 via-[#387467]/5 to-transparent" />

              <div className="relative rounded-[1.75rem] overflow-hidden border-[6px] border-white shadow-2xl">
                <Image
                  src={ISSO}
                  alt="ISO Training — TrueMark Global"
                  width={580}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Floating card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/60 hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#387467]/10 rounded-full flex items-center justify-center shrink-0">
                    <Globe size={18} className="text-[#387467]" />
                  </div>
                  <div>
                    <p className="text-[11.5px] font-extrabold text-slate-800 uppercase tracking-tight leading-none mb-0.5">
                      Global Network
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium leading-none">
                      Accepted across Africa &amp; Europe
                    </p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? "bg-[#387467]" : "bg-[#387467]/30"}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Small decorative badge */}
              <div className="absolute -top-3 -right-3 bg-[#387467] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                Standards-Based
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

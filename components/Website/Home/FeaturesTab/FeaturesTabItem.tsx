"use client";
import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { CheckCircle, Globe, BarChart2, CalendarCheck, ArrowUpRight } from "lucide-react";

const truveraFeatures = [
  { icon: CalendarCheck, label: "Real-time audit scheduling" },
  { icon: BarChart2,      label: "Compliance status monitoring" },
  { icon: Globe,          label: "Remote certificate management" },
  { icon: CheckCircle,    label: "Automated report generation" },
];

function TruvераCard() {
  return (
    <div className="w-full h-full min-h-[340px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2822] via-[#1a4a40] to-[#0f3530] p-8 flex flex-col justify-between shadow-xl">
      {/* Brand header */}
      <div>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#5DCAA5] mb-2 block">
          Powered by TMGSSL
        </span>
        <h3 className="text-4xl font-black text-white tracking-tight leading-none mb-1">
          Truvera
        </h3>
        <p className="text-sm text-[#5DCAA5] font-semibold">
          Conformity Assessment Platform
        </p>
      </div>

      {/* Feature list */}
      <ul className="my-7 flex flex-col gap-3">
        {truveraFeatures.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5DCAA5]/15 shrink-0">
              <Icon size={14} className="text-[#5DCAA5]" />
            </div>
            <span className="text-sm text-gray-300 font-medium">{label}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/10 pt-5">
        <div>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Access the platform</p>
          <a
            href="https://app.truemarkglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#5DCAA5] hover:text-white transition-colors mt-0.5"
          >
            app.truemarkglobal.com <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="text-right">
          <span className="text-xs font-black text-white/30 uppercase tracking-widest">TMGSSL</span>
        </div>
      </div>
    </div>
  );
}

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark, useCustomImage } = featureTab;

  return (
    <div className="flex items-center gap-8 lg:gap-16">
      <div className="md:w-1/2">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 xl:text-[2.2rem] leading-tight">
          {title}
        </h2>
        <p className="mb-4 text-slate-600 leading-relaxed">{desc1}</p>
        <p className="text-slate-600 leading-relaxed w-11/12">{desc2}</p>
      </div>

      <div className="relative hidden md:block md:w-1/2">
        {useCustomImage ? (
          <TruvераCard />
        ) : (
          <div className="relative aspect-[562/366] max-w-[550px]">
            <Image src={image} alt={title} fill className="dark:hidden rounded-2xl object-cover" />
            <Image src={imageDark} alt={title} fill className="hidden dark:block rounded-2xl object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesTabItem;

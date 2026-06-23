import React from "react";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md hover:border-[#387467]/20 transition-all duration-300">
      {/* Icon — fixed-height block so titles line up across all cards */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#387467] shrink-0">
        <Icon size={26} color="white" strokeWidth={1.75} />
      </div>

      <h3 className="mb-3 text-[1.05rem] font-bold text-slate-800 leading-snug">
        {title}
      </h3>

      <p className="text-sm text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SingleFeature;

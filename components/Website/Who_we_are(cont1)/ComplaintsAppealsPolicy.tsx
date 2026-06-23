'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageSquare, ChevronLeft, ArrowRight } from 'lucide-react';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="w-0.5 self-stretch rounded-full bg-[#387467] shrink-0 mt-1 min-h-[1.25rem]" />
    <h2 className="text-lg font-bold text-slate-900">{children}</h2>
  </div>
);

const PolicyList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2.5 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#387467] shrink-0" />
        <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const ComplaintsAppealsPolicy = () => {
  return (
    <section className="px-4 md:px-8 2xl:px-0 pb-24">
      <div className="mx-auto max-w-3xl">

        {/* Document header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="border border-slate-200 rounded-2xl p-8 mb-12 bg-white shadow-sm"
        >
          <Link href="/policy" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#387467] transition-colors mb-6">
            <ChevronLeft size={12} /> All Policies
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#387467]/8 border border-[#387467]/15">
              <MessageSquare size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-2">
                Certification Policy
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Complaints and Appeals Policy
              </h1>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Applies To", value: "All Stakeholders" },
              { label: "ISO Basis", value: "ISO/IEC 17021 · 17024 · 17065" },
              { label: "Review Cycle", value: "Annual" },
            ].map((m, i) => (
              <div key={i}>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{m.label}</p>
                <p className="text-xs font-semibold text-slate-700">{m.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-12"
        >

          {/* Complaints */}
          <div>
            <SectionHeading>Complaints</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              A complaint is an expression of dissatisfaction sent to TrueMark Global Standards &amp; Solutions
              Limited (TMGSSL), usually related to how we manage and deliver our services or to the performance
              of a TMGSSL certificate holder. Complaints can be raised by any stakeholder in the certification
              process — including existing customers, scheme owners, regulatory bodies, and third parties
              (e.g. a customer of our certified customer).
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              A complaint can be recorded by completing the designated form. The handling process is as follows:
            </p>
            <PolicyList items={[
              "The received complaint will be registered by the relevant local unit within TMGSSL.",
              "A person responsible for handling the complaint will be appointed and relevant management will be notified.",
              "An initial response will be sent to the complainant to acknowledge receipt.",
              "Once validated, the complaint will be analysed and any corrections or corrective actions will be implemented.",
              "A written response will be sent to the complainant with the outcome of the process and TMGSSL's decision, made or reviewed by an individual not previously involved in the subject of the complaint.",
            ]} />
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              If the complaint relates directly to the organisation holding a TMGSSL certificate, it should first
              be raised with the organisation and they should be given a chance to respond before contacting TMGSSL.
            </p>
          </div>

          {/* Confidentiality */}
          <div>
            <SectionHeading>Confidentiality</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              Complaints about the performance of one of our customers will normally be forwarded to the customer
              for their consideration and response. All other complaints will be kept confidential unless otherwise
              agreed with the complainant.
            </p>
          </div>

          {/* Appeals */}
          <div>
            <SectionHeading>Appeals</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              An appeal can be raised when a stakeholder does not accept a decision made by TrueMark Global
              Standards &amp; Solutions Limited (TMGSSL) related to a certification.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              An appeal can be recorded by completing the designated form. The handling process is as follows:
            </p>
            <PolicyList items={[
              "The received appeal will be registered by the relevant local unit within TMGSSL.",
              "A person responsible for handling the appeal will be appointed and relevant management will be notified.",
              "An initial response will be sent to the appellant to acknowledge receipt.",
              "Once validated, the appeal will be analysed and any corrections or corrective actions will be implemented.",
              "A written response will be sent to the appellant with the outcome of the process and TMGSSL's decision, made or reviewed by an individual not previously involved in the subject of the appeal.",
            ]} />
          </div>

          {/* Note */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5">
            <p className="text-xs text-slate-500 italic leading-relaxed">
              For more details or to submit a complaint or appeal, please use the official TMGSSL form provided on our website.
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 pt-2">
            <Link href="/support"
              className="inline-flex items-center gap-2 rounded-xl bg-[#387467] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#2d5e53] transition-all shadow-sm hover:shadow-md"
            >
              Contact Support
              <ArrowRight size={14} />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ComplaintsAppealsPolicy;

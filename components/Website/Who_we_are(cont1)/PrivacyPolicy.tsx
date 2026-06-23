'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ChevronLeft, ArrowRight } from 'lucide-react';
import React from 'react';

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

const PrivacyPolicy = () => {
  return (
    <section className="px-4 md:px-8 2xl:px-0 pb-24">
      <div className="mx-auto max-w-3xl">

        {/* Document header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="border border-slate-200 rounded-2xl p-8 mb-12 bg-white shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#387467]/8 border border-[#387467]/15">
              <FileText size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-2">
                Legal & Privacy
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Privacy Policy
              </h1>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Organisation", value: "TrueMark Global Standards & Solutions Limited" },
              { label: "Jurisdiction", value: "Nigeria" },
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

          {/* Introduction */}
          <div>
            <SectionHeading>Introduction</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              This Privacy Policy describes the policies and procedures of TrueMark Global Standards &amp;
              Solutions Limited (TMGSSL) on the collection, use, and disclosure of your information when you
              use our services, and explains your privacy rights and how applicable law protects you. By using
              our services, you agree to the collection and use of information as described in this policy.
            </p>
          </div>

          {/* Definitions */}
          <div>
            <SectionHeading>Key Definitions</SectionHeading>
            <PolicyList items={[
              "Account — a unique account created for you to access our services or parts thereof.",
              "Company — refers to TrueMark Global Standards & Solutions Limited (TMGSSL).",
              "Cookies — small files placed on your device by our website.",
              "Personal Data — any information that relates to an identified or identifiable individual.",
              "Service — refers to the TMGSSL website and online platforms.",
              "Service Provider — any third party that processes data on behalf of TMGSSL.",
              "Usage Data — data collected automatically when you use our services (e.g. IP address, browser type, pages visited).",
            ]} />
          </div>

          {/* Data Collected */}
          <div>
            <SectionHeading>Data We Collect</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">We collect the following types of information:</p>
            <div className="space-y-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Personal Data</p>
                <p className="text-sm text-slate-600">Email address, first and last name, phone number — provided voluntarily when you register or contact us.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Usage Data</p>
                <p className="text-sm text-slate-600">IP address, browser type and version, pages visited, time and date of visit, and device identifiers — collected automatically.</p>
              </div>
            </div>
          </div>

          {/* How We Use Data */}
          <div>
            <SectionHeading>How We Use Your Data</SectionHeading>
            <PolicyList items={[
              "To provide and maintain our services.",
              "To manage your account and service agreements.",
              "To contact you via email, phone, or other channels with relevant information.",
              "To improve and analyse the performance of our services.",
              "To comply with legal obligations.",
            ]} />
          </div>

          {/* Sharing */}
          <div>
            <SectionHeading>Sharing of Your Data</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              TMGSSL may share your data only in the following limited circumstances:
            </p>
            <PolicyList items={[
              "With Service Providers who assist in delivering our services — subject to confidentiality obligations.",
              "In the event of a business transfer, merger, or acquisition — where your data may form part of the transferred assets.",
              "With regulatory or law enforcement authorities where legally required.",
              "With your explicit prior consent.",
            ]} />
          </div>

          {/* Retention */}
          <div>
            <SectionHeading>Data Retention</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              We retain your personal data only for as long as necessary to fulfil the purposes described in
              this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              When no longer required, data is securely deleted or anonymised.
            </p>
          </div>

          {/* Rights */}
          <div>
            <SectionHeading>Your Rights</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              You have the right to:
            </p>
            <PolicyList items={[
              "Request access to the personal data we hold about you.",
              "Request correction of inaccurate or incomplete data.",
              "Request deletion of your personal data, subject to legal retention requirements.",
              "Withdraw consent at any time where processing is based on consent.",
              "Contact us to raise concerns about how your data is handled.",
            ]} />
          </div>

          {/* Security */}
          <div>
            <SectionHeading>Data Security</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              TMGSSL uses commercially reasonable technical and organisational measures to protect your
              personal data from unauthorised access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          {/* Changes */}
          <div>
            <SectionHeading>Changes to This Policy</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by
              email or by placing a prominent notice on our website. We encourage you to review this policy
              periodically. Continued use of our services after changes constitutes acceptance.
            </p>
          </div>

          {/* Note */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5">
            <p className="text-xs text-slate-500 italic leading-relaxed">
              For questions about this Privacy Policy or to exercise your data rights, please contact
              TrueMark Global Standards &amp; Solutions Limited (TMGSSL) through our support page.
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

export default PrivacyPolicy;

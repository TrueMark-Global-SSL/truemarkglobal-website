'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, ChevronLeft, ArrowRight } from 'lucide-react';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="w-0.5 self-stretch rounded-full bg-[#387467] shrink-0 mt-1 min-h-[1.25rem]" />
    <h2 className="text-lg font-bold text-slate-900">{children}</h2>
  </div>
);

const SubHeading = ({ num, children }: { num: string; children: React.ReactNode }) => (
  <div className="flex items-center gap-2.5 mb-2 mt-5">
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[11px] font-black text-slate-500">{num}</span>
    <h3 className="text-sm font-bold text-slate-800">{children}</h3>
  </div>
);

const PolicyList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 ml-8">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#387467] shrink-0" />
        <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const ExamSecurityPolicy = () => {
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
              <ShieldCheck size={20} className="text-[#387467]" strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#387467] bg-[#387467]/8 rounded-md px-2 py-0.5 mb-2">
                Examination Policy
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Exam Security Policy
              </h1>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Applies To", value: "Students, Instructors & Administrative Staff" },
              { label: "System Scope", value: "LMS · Courseware · Exam Content" },
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

          {/* Purpose */}
          <div>
            <SectionHeading>Purpose</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              The purpose of this Exam Security Policy is to ensure the integrity, confidentiality, and
              security of courseware and exam content within TrueMark Global Standards &amp; Solutions Limited
              (TMGSSL). This policy outlines the guidelines and procedures for access control, management, and
              enforcement to protect exam materials from unauthorised access and distribution.
            </p>
          </div>

          {/* Scope */}
          <div>
            <SectionHeading>Scope</SectionHeading>
            <p className="text-sm text-slate-600 leading-relaxed">
              This policy applies to all individuals with access to TrueMark Global Standards &amp; Solutions
              Limited's courseware and exam systems, including students, instructors, and administrative staff.
            </p>
          </div>

          {/* Access Control */}
          <div>
            <SectionHeading>Access Control</SectionHeading>
            <SubHeading num="1">Learning Management System (LMS) Access</SubHeading>
            <PolicyList items={[
              "Access to the LMS containing course materials and exam content shall be restricted based on the user's role and responsibility.",
              "Access levels shall be regularly reviewed and updated to ensure compliance with this policy.",
            ]} />
            <SubHeading num="2">Student Access</SubHeading>
            <PolicyList items={[
              "Students shall only have access to view course materials while they are actively enrolled in the respective course.",
              "Student access will be revoked once the enrolment period ends.",
            ]} />
          </div>

          {/* Exam Content Security */}
          <div>
            <SectionHeading>Exam Content Security</SectionHeading>
            <SubHeading num="1">Restricted Exam Access</SubHeading>
            <PolicyList items={[
              "Access to exam questions shall be limited strictly to the duration of the exam period.",
              "Exam content will not be accessible before or after the examination window.",
            ]} />
            <SubHeading num="2">Prohibition of Exam Content Copying</SubHeading>
            <PolicyList items={[
              "Students are strictly prohibited from copying, downloading, or distributing exam questions.",
              "Technical measures such as disabling copy/paste functions and restricting screenshots will be implemented to enforce these rules.",
            ]} />
          </div>

          {/* Note */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5">
            <p className="text-xs text-slate-500 italic leading-relaxed">
              TrueMark Global Standards &amp; Solutions Limited (TMGSSL) reserves the right to investigate and
              take disciplinary actions against any breach of this policy.
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

export default ExamSecurityPolicy;

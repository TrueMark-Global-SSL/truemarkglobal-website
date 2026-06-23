import { Metadata } from "next";
import ExamSecurityPolicy from "@/components/Website/Who_we_are(cont1)/ExamSecurityPolicy";

export const metadata: Metadata = {
  title: "Exam Security Policy | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
    <ExamSecurityPolicy/>
    </main>
  );
}

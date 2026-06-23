import { Metadata } from "next";
import AboutInspection from "@/components/Website/Services/Inspection/About-Inspection";
import TM_Inspection from "@/components/Website/Services/Inspection/Inspections";

export const metadata: Metadata = {
  title: "Inspection Services | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <AboutInspection />
      <TM_Inspection />
    </main>
  );
}

import { Metadata } from "next";
import TM_Certifications from "@/components/Website/Services/Certification/Certifications";
import AboutCertification from "@/components/Website/Services/Certification/About-Certification";

export const metadata: Metadata = {
  title: "Certification Services | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <AboutCertification />
      <TM_Certifications />
    </main>
  );
}

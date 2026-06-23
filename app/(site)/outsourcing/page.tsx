import AboutOutsourcing from "@/components/Website/Services/Outsourcing/About-Outsourcing";
import TM_Outsourcing from "@/components/Website/Services/Outsourcing/Outsourcing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Outsourcing Services | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <AboutOutsourcing />
      <TM_Outsourcing />
    </main>
  );
}

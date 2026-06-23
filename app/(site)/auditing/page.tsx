import { Metadata } from "next";
import AboutAuditing from "@/components/Website/Services/Auditing/About-Auditing";
import TM_Auditing from "@/components/Website/Services/Auditing/Auditing";

export const metadata: Metadata = {
  title: "Auditing Services | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <AboutAuditing />
      <TM_Auditing />
    </main>
  );
}

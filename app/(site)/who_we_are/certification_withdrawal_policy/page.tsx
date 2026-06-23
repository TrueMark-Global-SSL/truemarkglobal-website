import { Metadata } from "next";
import CertificationWithdrawal from "@/components/Website/Who_we_are/Certification_Withdrawal";

export const metadata: Metadata = {
  title: "Certification Withdrawal Policy | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <CertificationWithdrawal/>
    </main>
  );
}

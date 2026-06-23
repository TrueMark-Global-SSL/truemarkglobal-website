import { Metadata } from "next";
import ConfidentialityPolicy from "@/components/Website/Who_we_are(cont1)/ConfidentialityPolicy";

export const metadata: Metadata = {
  title: "Confidentiality Policy | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
    <ConfidentialityPolicy/>
    </main>
  );
}

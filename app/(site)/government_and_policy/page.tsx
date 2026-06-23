import { Metadata } from "next";
import Government_Policy from "@/components/Website/Sectors/Government/Government";

export const metadata: Metadata = {
  title: "Governance & Policy Sector ISO Certification | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <Government_Policy />
    </main>
  );
}

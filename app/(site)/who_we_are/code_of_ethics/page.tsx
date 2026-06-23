import { Metadata } from "next";
import CodeOfEthics from "@/components/Website/Who_we_are/CodeOfEthics";

export const metadata: Metadata = {
  title: "Code of Ethics | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
    <CodeOfEthics/>
    </main>
  );
}

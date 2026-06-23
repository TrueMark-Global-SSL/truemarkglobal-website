import TM_Training from "@/components/Website/Services/Outsourcing/TM_Training";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISO Training & Professional Development | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <TM_Training />
    </main>
  );
}

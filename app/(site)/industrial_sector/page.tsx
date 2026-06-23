import { Metadata } from "next";
import Industry_Sector from "@/components/Website/Sectors/Industry/Industry";

export const metadata: Metadata = {
  title: "Industrial Sector ISO Certification | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <Industry_Sector />
    </main>
  );
}

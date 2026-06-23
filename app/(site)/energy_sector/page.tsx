import { Metadata } from "next";
import EnergyAndMining from "@/components/Website/Sectors/Energy/Energy";

export const metadata: Metadata = {
  title: "Energy Sector ISO Certification | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <EnergyAndMining />
    </main>
  );
}

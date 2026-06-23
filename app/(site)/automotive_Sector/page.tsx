import { Metadata } from "next";
import Automotive_Sector from "@/components/Website/Sectors/Industry/AreoSpace_Automobile";

export const metadata: Metadata = {
  title: "Automotive Sector ISO Certification | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <Automotive_Sector />
    </main>
  );
}

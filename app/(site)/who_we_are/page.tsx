import { Metadata } from "next";
import AboutHero from "@/components/Website/About/About-Hero";
import AboutTM from "@/components/Website/About/AboutTM";
import SectorsWeServe from "@/components/Website/About/Services";

export const metadata: Metadata = {
  title: "Who We Are | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <AboutHero />
      <AboutTM />
      <SectorsWeServe/>
    </main>
  );
}

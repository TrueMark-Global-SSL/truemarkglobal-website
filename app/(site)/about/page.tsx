import { Metadata } from "next";
import AboutHero from "@/components/Website/About/About-Hero";
import AboutTM from "@/components/Website/About/AboutTM";
import SectorsWeServe from "@/components/Website/About/Services";

export const metadata: Metadata = {
  title: "About Us | TrueMark Global Standards & Solutions Limited",
  description: "Learn about TrueMark Global Standards & Solutions Limited (TMGSS) — Nigeria's leading conformity assessment and certification body delivering globally recognised certifications, auditing, inspection, and technical outsourcing services across Africa."
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

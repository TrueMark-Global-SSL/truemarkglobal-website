import { Metadata } from "next";
import HeroSlider from "@/components/Website/Home/Hero/HeroSlider";
import Hero from "@/components/Website/Home";
import Brands from "@/components/Website/Home/Brands";
import Feature from "@/components/Website/Home/Features";
import FeaturesTab from "@/components/Website/Home/FeaturesTab";
import CTA from "@/components/Website/Home/CTA";
import FAQ from "@/components/Website/Home/FAQ";
import Contact from "@/components/Website/Home/Contact";


export const metadata: Metadata = {
  title: "TrueMark Global Standards & Solutions Limited | ISO Certification & Conformity Assessment",
  description: "TrueMark Global Standards and Solutions Limited (TMGSSL) is Nigeria's leading conformity assessment body. Expert ISO certification, auditing, inspection, and technical outsourcing solutions."
};

export default function Home() {
  return (
    <main>
      <HeroSlider />
      {/* <HeroSlider /> */}
      <Hero />
      <Brands />
      <Feature />
      <FeaturesTab />
      <CTA />
      <FAQ />
      <Contact />


    </main>
  );
}

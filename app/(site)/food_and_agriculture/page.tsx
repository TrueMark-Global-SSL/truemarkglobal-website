import { Metadata } from "next";
import AgricultureFoodBeverage from "@/components/Website/Sectors/Agriculture/Agriculture";

export const metadata: Metadata = {
  title: "Food & Agriculture Sector ISO Certification | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <AgricultureFoodBeverage />
    </main>
  );
}

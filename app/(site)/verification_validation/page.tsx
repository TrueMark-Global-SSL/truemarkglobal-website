import { Metadata } from "next";
import VerificationAndValidation from "@/components/Website/Services/Verification_Validation/VerificationAndValidation";

export const metadata: Metadata = {
  title: "Verification & Validation Services | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main className="pt-40 pb-20">
      <VerificationAndValidation />
    </main>
  );
}

import { Metadata } from "next";
import PrivacyPolicy from "@/components/Website/Who_we_are(cont1)/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | TrueMark Global Standards & Solutions Limited",
  description: "Privacy policy of TrueMark Global Standards & Solutions Limited — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-40 pb-20">
      <PrivacyPolicy />
    </main>
  );
}

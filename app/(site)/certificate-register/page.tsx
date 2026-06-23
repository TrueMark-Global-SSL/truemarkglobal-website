import { Metadata } from "next";
import CertificateRegister from "@/components/Website/CertificateRegister/CertificateRegister";

export const metadata: Metadata = {
  title: "Certificate Register | TrueMark Global Standards & Solutions Limited",
  description: "Verify the authenticity of any certificate issued by TMGSSL. Search by certificate number or holder name.",
};

const CertificateRegisterPage = () => {
  return (
    <main className="pt-40 pb-20">
      <CertificateRegister />
    </main>
  );
};

export default CertificateRegisterPage;

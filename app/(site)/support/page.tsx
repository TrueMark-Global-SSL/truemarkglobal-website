import React from "react";
import { Metadata } from "next";
import Contact from "@/components/Website/Home/Contact";

export const metadata: Metadata = {
  title: "Support & Contact Us | TrueMark Global Standards & Solutions Limited",
  description: "Explore TrueMark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;

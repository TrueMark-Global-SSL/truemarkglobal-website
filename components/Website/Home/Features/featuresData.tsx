import { Feature } from "@/types/feature";
import { GraduationCap, ClipboardCheck, ShieldCheck, BarChart2, Award, Target } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Training & Certification",
    description:
      "We equip your workforce and management teams with globally recognised training and certification programmes that strengthen competence, improve performance, and align with international best practices.",
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: "Inspection",
    description:
      "Our inspection services verify that your products, systems, and operations meet established standards of quality, safety, and regulatory compliance, helping you identify gaps and improve operational efficiency.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Verification & Validation",
    description:
      "We confirm that your processes, systems, and operations conform to international requirements, ensuring sustained compliance, operational integrity, and stakeholder confidence.",
  },
  {
    id: 4,
    icon: BarChart2,
    title: "Real-Time Progress Tracking",
    description:
      "Learners and HR teams can monitor course progress, examination status, and certificate issuance from a single unified dashboard, keeping everyone informed at every stage.",
  },
  {
    id: 5,
    icon: Award,
    title: "Digital Certificates & Verification",
    description:
      "We issue secure, QR-coded digital certificates that can be instantly verified by employers, regulators, and partners, ensuring authenticity, transparency, and confidence in every credential.",
  },
  {
    id: 6,
    icon: Target,
    title: "Our Commitment",
    description:
      "We help organisations do things right, the first time and every time. By aligning with global standards, TMGSSL helps you build trust, enhance efficiency, and position your business for sustainable growth.",
  },
];

export default featuresData;

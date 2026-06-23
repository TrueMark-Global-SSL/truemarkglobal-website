import { Plus, Minus } from "lucide-react";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const isOpen = activeFaq === id;

  return (
    <div className={`border-b border-gray-100 last:border-0 transition-colors ${isOpen ? "bg-[#387467]/3" : ""}`}>
      <button
        onClick={() => handleFaqToggle(id)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-semibold text-slate-800 hover:text-[#387467] transition-colors lg:px-8"
      >
        <span>{quest}</span>
        <span className={`shrink-0 transition-colors ${isOpen ? "text-[#387467]" : "text-slate-400"}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {isOpen && (
        <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed lg:px-8">
          {ans}
        </p>
      )}
    </div>
  );
};

export default FAQItem;

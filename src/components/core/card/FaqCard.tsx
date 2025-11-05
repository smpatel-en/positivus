import React from "react";

import { FaPlus } from "react-icons/fa";

interface FAQcardProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  title: string;
  description: string;
  active?: boolean;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
}

export default function FAQcard({
  index,
  title,
  description,
  active = false,
  setActiveIndex,
  ...props
}: FAQcardProps) {
  const number = index < 10 ? `0${index + 1}` : index + 1;
  const [isOpen, setIsOpen] = React.useState(active);

  React.useEffect(() => {
    setIsOpen(active);
  }, [active]);

  return (
    <div
      className={`lg:rounded-primary shadow-card border-secondary rounded-3xl border p-6 transition-colors duration-300 lg:px-15 lg:py-10 ${isOpen ? "bg-primary" : "bg-grey"}`}
      {...props}
    >
      {/* Visible Part */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          <p className="text-[43px] font-medium lg:text-6xl">{number}</p>
          <h3 className="text-xl md:text-[26px] lg:text-3xl">{title}</h3>
        </div>

        <button
          aria-label="Expand FAQ "
          className="bg-grey group ml-auto grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-black lg:h-15 lg:w-15"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveIndex?.(index);
          }}
        >
          <FaPlus
            className={`text-xl transition-transform duration-300 lg:text-3xl ${isOpen ? "rotate-45" : "group-hover:-rotate-90"}`}
          />
        </button>
      </div>
      {/* Hidden Part */}
      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-50 sm:max-h-45 md:max-h-40 lg:max-h-35 xl:max-h-30" : ""}`}
      >
        <p className="mt-7 border-t border-t-black pt-7">{description}</p>
      </div>
    </div>
  );
}

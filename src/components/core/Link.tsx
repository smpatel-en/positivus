import { cn } from "../../lib/utils";
import { FaArrowRight } from "react-icons/fa";

type TextColor = "white" | "black";

const defaultClass =
  "flex w-fit cursor-pointer items-center gap-3.5 text-lg lg:text-xl";
const textColorClasses: Record<TextColor, string> = {
  white: "text-white",
  black: "text-black",
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  "text-color"?: TextColor;
  "icon-color"?: "primary" | "black" | "white";
  "icon-bg"?: "primary" | "secondary" | "white";
}

export default function Link({
  children,
  "text-color": textColor = "black",
  "icon-color": iconColor = "primary",
  "icon-bg": iconBg = "white",
  className,
  ...props
}: LinkProps) {
  return (
    <a
      {...props}
      className={cn(defaultClass, textColorClasses[textColor], className)}
    >
      <div
        className={`bg-${iconBg} flex h-8 w-8 items-center justify-center rounded-full lg:h-10 lg:w-10`}
      >
        <FaArrowRight className={`text-${iconColor} -rotate-30 text-2xl`} />
      </div>
      {children}
    </a>
  );
}

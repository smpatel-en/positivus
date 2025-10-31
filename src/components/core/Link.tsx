import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { FaArrowRight } from "react-icons/fa";

const linkVariants = cva(
  "cursor-pointer w-fit flex items-center gap-2 text-lg lg:text-xl",
  {
    variants: {
      "text-color": {
        white: "text-white",
        black: "text-black",
      },
    },
    defaultVariants: {
      "text-color": "black",
    },
  },
);

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  children: React.ReactNode;
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
      className={cn(linkVariants({ "text-color": textColor }), className)}
    >
      <div
        className={`bg-${iconBg} flex h-8 w-8 items-center justify-center rounded-full lg:h-10 lg:w-10`}
      >
        <FaArrowRight className={`text-${iconColor} -rotate-30 text-xl`} />
      </div>
      {children}
    </a>
  );
}

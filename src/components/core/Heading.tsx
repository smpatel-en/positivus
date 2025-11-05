import { cn } from "../../lib/utils";

type HeadingVariant = "primary" | "secondary" | "white";

const defaultClass = "w-fit";
const variantClasses: Record<HeadingVariant, string> = {
  primary: "bg-primary text-black selection:bg-black/20",
  secondary: "bg-secondary text-white",
  white: "bg-white text-black",
};

const highlightClass = "px-[7px] py-0.5 rounded-[7px] box-decoration-clone";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  variant?: HeadingVariant;
}

export default function Heading({
  children,
  variant = "primary",
  as: Component = "h2",
  className,
  ...props
}: HeadingProps) {
  return (
    <Component {...props} className={cn(defaultClass, className)}>
      <span
        className={cn(highlightClass, variantClasses[variant], "boxde inline")}
      >
        {children}
      </span>
    </Component>
  );
}

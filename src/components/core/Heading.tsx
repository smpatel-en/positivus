import { cn } from "../../lib/utils";

type HeadingVariant = "primary" | "secondary" | "white";

const defaultClass = "h-fit w-fit rounded-[7px] px-[7px] py-0.5";
const variantClasses: Record<HeadingVariant, string> = {
  primary: "bg-primary text-black",
  secondary: "bg-secondary text-white",
  white: "bg-white text-black",
};

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
    <Component
      {...props}
      className={cn(defaultClass, variantClasses[variant], className)}
    >
      {children}
    </Component>
  );
}

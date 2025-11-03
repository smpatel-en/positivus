import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva("w-fit px-[7px] rounded-[7px] py-0.5", {
  variants: {
    variant: {
      primary: "bg-primary text-black",
      secondary: "bg-secondary text-white",
      white: "bg-white text-black",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
}

export default function Heading({
  children,
  variant,
  as: Component = "h2",
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      {...props}
      className={cn(headingVariants({ variant }), className)}
    >
      {children}
    </Component>
  );
}

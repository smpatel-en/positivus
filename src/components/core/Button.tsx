import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "rounded-[14px] px-6 py-4 text-lg lg:text-xl font-normal lg:px-[30px] lg:py-5 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary",
        secondary: "bg-black text-white",
        outline: "bg-transparent border border-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
}

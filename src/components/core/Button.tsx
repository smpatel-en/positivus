import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "rounded-lg lg:rounded-[14px] px-4 py-2 lg:px-6 lg:py-4 text-lg lg:text-xl font-normal xl:px-[30px] xl:py-5 cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-primary text-black",
        secondary: "bg-black text-white",
        outline: "bg-transparent border border-black text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  variant,
  className,
  href,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a href={href}>
        <button
          {...props}
          className={cn(buttonVariants({ variant }), className)}
        >
          {children}
        </button>
      </a>
    );
  }

  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
}

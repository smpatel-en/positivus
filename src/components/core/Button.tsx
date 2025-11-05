import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

const defaultClass =
  "rounded-lg lg:rounded-[14px] px-4 py-2 lg:px-6 lg:py-4 text-lg lg:text-xl font-normal xl:px-[30px] xl:py-5 cursor-pointer transition-all duration-300 ease-in-out border border-transparent hover:scale-103 w-fit";
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-black hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  outline:
    "bg-transparent border-black text-black hover:bg-black/5 hover:border-transparent",
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(defaultClass, variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}

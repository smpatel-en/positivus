import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

const defaultClass =
  "rounded-lg lg:rounded-[14px] px-4 py-2 lg:px-6 lg:py-4 text-lg lg:text-xl font-normal xl:px-[30px] xl:py-5 cursor-pointer";
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-black",
  secondary: "bg-black text-white",
  outline: "bg-transparent border border-black text-black",
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
      <a href={href}>
        <button {...props} className={buttonClasses}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}

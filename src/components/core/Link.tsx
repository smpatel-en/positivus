import { cn } from "../../lib/utils";
import { FaArrowRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router";

type TextColor = "primary" | "white" | "black";
type IconColor = "primary" | "black" | "white";
type IconBg = "primary" | "secondary" | "white";
type Variant = "filled" | "simple";

const defaultClass =
  "flex w-fit cursor-pointer items-center gap-3.5 text-lg lg:text-xl group hover:underline";
const textColorClasses: Record<TextColor, string> = {
  primary: "text-primary",
  white: "text-white",
  black: "text-black",
};
const iconColorClasses: Record<IconColor, string> = {
  primary: "text-primary",
  black: "text-black",
  white: "text-white",
};
const iconBgClasses: Record<IconBg, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white",
};
const variantClasses: Record<Variant, string> = {
  filled: "",
  simple: "bg-transparent",
};

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  children: React.ReactNode;
  "text-color"?: TextColor;
  "icon-color"?: IconColor;
  "icon-bg"?: IconBg;
  variant?: Variant;
}
export default function Link({
  children,
  "text-color": textColor = "black",
  "icon-color": iconColor = "primary",
  "icon-bg": iconBg = "white",
  variant = "filled",
  className,
  ...props
}: LinkProps) {
  return (
    <RouterLink
      to={props.href || "#"}
      {...props}
      className={cn(
        defaultClass,
        textColorClasses[textColor],
        variant === "simple" ? "flex-row-reverse" : "",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-90 lg:h-10 lg:w-10",
          iconBgClasses[iconBg],
          variantClasses[variant],
        )}
      >
        <FaArrowRight
          className={cn(
            "-rotate-30 text-2xl transition-all duration-300",
            variant === "filled"
              ? "group-hover:translate-x-1 group-hover:-translate-y-1"
              : "group-hover:-translate-x-3 group-hover:rotate-0",
            iconColorClasses[iconColor],
          )}
        />
      </div>
      {children}
    </RouterLink>
  );
}

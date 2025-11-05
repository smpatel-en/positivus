import LogoDefault from "../../assets/images/logo-deafult.png";
import LogoLight from "../../assets/images/logo-light.png";

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  variant?: "default" | "light";
}

export default function Logo({ variant, ...props }: LogoProps) {
  return (
    // Logo Wrapper
    <a
      href="/"
      className={`rounded-md p-2 transition-all duration-300 hover:scale-103 lg:rounded-2xl lg:p-4 ${
        variant === "light" ? "hover:bg-white/10" : "hover:bg-black/5"
      }`}
    >
      <img
        src={variant === "light" ? LogoLight : LogoDefault}
        alt="Logo"
        className="max-h-7 md:max-h-9"
        {...props}
      />
    </a>
  );
}

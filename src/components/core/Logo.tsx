import LogoDefault from "../../assets/images/logo-deafult.png";
import LogoLight from "../../assets/images/logo-light.png";

export default function Logo({ variant }: { variant: "light" | "dark" }) {
  return <img src={variant === "light" ? LogoLight : LogoDefault} alt="Logo" />;
}

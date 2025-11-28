import { cn } from "../../../lib/utils";

import Heading from "../../core/Heading";
import CustomLink from "../../core/Link";

type CardVariant = "primary" | "secondary" | "tertiary";

const defaultClass =
  "bg-grey shadow-card border-secondary flex flex-col lg:flex-row justify-between gap-4 lg:rounded-primary rounded-3xl border p-8 md:p-12 min-h-60 lg:min-h-78 group hover:shadow-none transition-all hover:translate-y-1 duration-300";
const variantClasses: Record<CardVariant, string> = {
  primary: "bg-grey",
  secondary: "bg-primary",
  tertiary: "bg-secondary",
};

interface CardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  image: string;
  variant?: CardVariant;
}

export default function InfoCard({
  title,
  href,
  image,
  variant = "primary",
  ...props
}: CardProps) {
  return (
    <div className={cn(defaultClass, props.className, variantClasses[variant])}>
      {/* Card Content */}
      <div className="flex flex-col justify-between gap-4">
        <Heading as="h3" variant={variant === "primary" ? "primary" : "white"}>
          {title}
        </Heading>
        <CustomLink
          icon-bg={variant === "tertiary" ? "white" : "secondary"}
          icon-color={variant === "tertiary" ? "black" : "primary"}
          text-color={variant === "tertiary" ? "white" : "black"}
          href={href}
        >
          Learn More
        </CustomLink>
      </div>

      {/* Card Image */}
      <div className="mx-auto max-w-52">
        <img src={image} alt={title} className="object-contain" />
      </div>
    </div>
  );
}

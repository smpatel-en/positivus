import Button from "../../core/Button";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  Image: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonLink,
  Image,
}: CTABannerProps) {
  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div className="bg-grey lg:rounded-primary relative grid grid-cols-1 items-center gap-5 rounded-3xl p-10 sm:grid-cols-2 sm:gap-0 lg:p-15">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            {/* Title */}
            <h2>{title}</h2>

            {/* Description */}
            <p>{description}</p>

            {/* CTA Button */}
            <Button href={buttonLink} variant="secondary" className="w-fit">
              {buttonText}
            </Button>
          </div>
          {/* Image Content */}
          <div className="static right-1/4 mx-auto w-fit max-w-[250px] sm:max-w-none md:absolute md:translate-x-[50%]">
            <Image />
          </div>
        </div>
      </div>
    </section>
  );
}

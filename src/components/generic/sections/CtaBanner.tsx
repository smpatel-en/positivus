import Button from "../../core/Button";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  Image: string;
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
        <div className="bg-grey lg:rounded-primary relative grid grid-cols-1 items-center gap-10 rounded-3xl p-10 md:grid-cols-2 lg:p-15">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            {/* Title */}
            <h2>{title}</h2>

            {/* Description */}
            <p>{description}</p>

            {/* CTA Button */}
            <Button href={buttonLink} variant="secondary">
              {buttonText}
            </Button>
          </div>
          {/* Image Content */}
          <div className="static right-1/4 mx-auto w-fit md:absolute md:translate-x-[50%]">
            <img src={Image} alt="CTA Banner Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

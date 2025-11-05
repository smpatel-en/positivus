// Components
import Button from "../../core/Button";

// Images
import HeroImage from "../../../assets/custome/hero-illustration";

export default function Hero() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        {/* Section Wrapper */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Hero Content */}
          <div className="mx-auto flex max-w-120 flex-col items-center gap-8 text-center lg:max-w-none lg:items-start lg:text-left">
            {/* Hero Title */}
            <h1>Navigating the digital landscape for success</h1>

            {/* Hero Description */}
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            {/* Hero CTA Button */}
            <Button variant="secondary" href="#">
              Book a consultation
            </Button>
          </div>
          {/* Hero Image */}
          <div className="mx-auto max-w-100 lg:max-w-none">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}

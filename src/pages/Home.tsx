// Layout
import CommonLayout from "../components/layouts/Common";

// Sections
import Hero from "../components/generic/sections/Hero";
import Clients from "../components/generic/sections/Clients";
import Services from "../components/generic/sections/Services";
import CTABanner from "../components/core/CTAbanner";

// Image
import CTAImage from "../assets/images/face-and-stars-illustration.png";

export default function Home() {
  return (
    <CommonLayout>
      <Hero />
      <Clients />
      <Services />
      <CTABanner
        title="Let’s make things happen"
        description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        buttonText="Get your free proposal"
        buttonLink="#"
        Image={CTAImage}
      />
    </CommonLayout>
  );
}

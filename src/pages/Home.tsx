// Layout
import CommonLayout from "../components/layouts/Common";

// Sections
import Hero from "../components/generic/sections/Hero";
import Clients from "../components/generic/sections/Clients";
import Services from "../components/generic/sections/Services";
import CtaBanner from "../components/generic/sections/CtaBanner";
import CaseStudies from "../components/generic/sections/CaseStudies";

// Image
import CTAImage from "../assets/images/face-and-stars-illustration.png";
import WorkingProcess from "../components/generic/sections/WorkingProcess";

export default function Home() {
  return (
    <CommonLayout>
      <Hero />
      <Clients />
      <Services />
      <CtaBanner
        title="Let’s make things happen"
        description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        buttonText="Get your free proposal"
        buttonLink="#"
        Image={CTAImage}
      />
      <CaseStudies />
      <WorkingProcess />
    </CommonLayout>
  );
}

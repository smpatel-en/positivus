// Layout
import CommonLayout from "../components/layouts/Common";

// Sections
import Hero from "../components/generic/sections/Hero";
import Clients from "../components/generic/sections/Clients";
import Services from "../components/generic/sections/Services";
import CtaBanner from "../components/generic/sections/CtaBanner";
import CaseStudies from "../components/generic/sections/CaseStudies";
import WorkingProcess from "../components/generic/sections/WorkingProcess";
import Team from "../components/generic/sections/Team";
import Testimonials from "../components/generic/sections/Testimonials";
import ContactUs from "../components/generic/sections/ContactUs";

// Image
import CTAImage from "../assets/custome/face-and-stars-illustration";

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
      <Team />
      <Testimonials />
      <ContactUs />
    </CommonLayout>
  );
}

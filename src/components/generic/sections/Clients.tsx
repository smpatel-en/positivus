// Marquee Package
import Marquee from "react-fast-marquee";

// Client Logos
import ClientLogo1 from "../../../assets/images/company-logo-1.png";
import ClientLogo2 from "../../../assets/images/company-logo-2.png";
import ClientLogo3 from "../../../assets/images/company-logo-3.png";
import ClientLogo4 from "../../../assets/images/company-logo-4.png";
import ClientLogo5 from "../../../assets/images/company-logo-5.png";
import ClientLogo6 from "../../../assets/images/company-logo-6.png";

export default function Clients() {
  const clientLogos = [
    ClientLogo1,
    ClientLogo2,
    ClientLogo3,
    ClientLogo4,
    ClientLogo5,
    ClientLogo6,
  ];
  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div className="relative">
          {/* Marquee Component | Client Logo Wrapper */}
          <Marquee autoFill={true} speed={50}>
            {clientLogos.map((logo, index) => (
              // Client Logo Image
              <img
                key={index}
                className="max-h-10 px-5 grayscale lg:max-h-12 lg:px-10"
                src={logo}
                alt={`Client Logo ${index + 1}`}
              />
            ))}
          </Marquee>
          {/* Fade Effect Div */}
          <div className="fading-scroll absolute inset-0 top-0 left-0 z-2 w-full"></div>
        </div>
      </div>
    </section>
  );
}

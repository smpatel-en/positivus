// Marquee Package
import Marquee from "react-fast-marquee";
import { clientLogos } from "../../../lib/data";

// Client Logos

export default function Clients() {
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

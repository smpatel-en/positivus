import InfoCard from "../../core/card/InfoCard";
import SectionHeading from "../SectionHeading";

import { servicesData } from "../../../lib/data";

export default function Services() {
  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div>
          {/* Section Head */}
          <SectionHeading
            title="Services"
            description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          />
          {/* Section Body | Card Wrapper */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {servicesData.map((service, index) => (
              // Card Component
              <InfoCard
                variant={
                  index % 3 === 0
                    ? "primary"
                    : index % 3 === 1
                      ? "secondary"
                      : "tertiary"
                }
                key={index}
                title={service.title}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

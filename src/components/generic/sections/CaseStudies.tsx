import SectionHeading from "../SectionHeading";

import { caseStudiesData } from "../../../lib/data";
import Link from "../../core/Link";

export default function CaseStudies() {
  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div>
          {/* Section Head */}
          <SectionHeading
            title="Case Studies"
            description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          />

          {/* Section Body | Case Studies Wrapper */}
          <div className="bg-secondary lg:rounded-primary grid grid-cols-1 rounded-3xl px-8 py-0 text-white md:grid-cols-3 md:gap-y-10 md:px-0 md:py-12 lg:py-[70px]">
            {caseStudiesData.map((caseStudy, index) => (
              // Case Study Item
              <div
                key={index}
                className={`flex flex-col gap-2 border-white px-0 py-8 not-first:border-t md:gap-5 md:px-12 md:py-0 not-first:md:border-t-0 md:first-of-type:border-r md:last-of-type:border-l lg:px-15`}
              >
                {/* Case Study Text */}
                <p>{caseStudy.text}</p>

                {/* Case Study Link */}
                <Link
                  href={caseStudy.href}
                  variant="simple"
                  text-color="primary"
                  className="mt-auto"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

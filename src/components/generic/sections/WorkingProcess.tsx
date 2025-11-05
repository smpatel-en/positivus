import SectionHeading from "../SectionHeading";
import { workingProcessSteps } from "../../../lib/data";
import FAQcard from "../../core/card/FaqCard";
import React from "react";

export default function WorkingProcess() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div>
          {/* Section Heading */}
          <SectionHeading
            title="Our Working Process"
            description="Step-by-Step Guide to Achieving Your Business Goals"
          />

          {/* Section Body | Steps Wrapper */}
          <div className="flex flex-col gap-4 lg:gap-7">
            {workingProcessSteps.map((step, index) => (
              // Step Item
              <FAQcard
                active={index === activeIndex}
                key={index}
                index={
                  workingProcessSteps.length < 10 ? `0${index + 1}` : index + 1
                }
                title={step.title}
                description={step.description}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "../SectionHeading";
import { workingProcessSteps } from "../../../lib/data";
import FAQcard from "../../core/card/FaqCard";

export default function WorkingProcess() {
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
                key={index}
                index={
                  workingProcessSteps.length < 10 ? `0${index + 1}` : index + 1
                }
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

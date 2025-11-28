import SectionHeading from "../SectionHeading";
import ProfileCard from "../card/ProfileCard";
import { teamMembersData } from "../../../lib/data";
import Button from "../../core/Button";

export default function Team() {
  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div>
          {/* Section Head */}

          <SectionHeading
            title="Team"
            description="Meet the skilled and experienced team behind our successful digital marketing strategies"
          />
          {/*  Section Body */}
          <div>
            {/* Profile Card Wrapper */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
              {teamMembersData.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>

            {/* Bottom Section CTA */}
            <div className="mt-10 flex justify-center sm:justify-end">
              <Button variant="secondary">See all team</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

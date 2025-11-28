import Heading from "../core/Heading";

export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 flex flex-col items-center gap-10 sm:mb-15 md:flex-row lg:mb-21">
      {/* Section Title */}
      <Heading>{title}</Heading>

      {/* Section Description */}
      <p className="max-w-xl text-center text-pretty md:text-left">
        {description}
      </p>
    </div>
  );
}

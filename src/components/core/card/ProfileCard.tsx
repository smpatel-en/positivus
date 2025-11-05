import { cn } from "../../../lib/utils";
import { FaLinkedinIn } from "react-icons/fa6";
interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  description: string;
  linkedIn: string;
  image: string;
}

export default function ProfileCard({
  name,
  role,
  description,
  image,
  linkedIn,
  className,
  ...props
}: ProfileCardProps) {
  return (
    <div
      className={cn(
        "shadow-card lg:rounded-primary border-secondary rounded-3xl border p-9",
        className,
      )}
      {...props}
    >
      {/* Profile Card Author */}
      <div className="mb-7 flex flex-col gap-4 lg:flex-row">
        <div className="profile-card-image-mask relative aspect-square h-25">
          <img
            src={image}
            alt={name}
            className="mx-auto w-fit object-cover grayscale"
          />
          <div className="bg-primary absolute inset-0 top-0 left-0 h-full w-full mix-blend-multiply"></div>
        </div>
        <div className="flex w-full">
          <div className="self-end">
            <h4>{name}</h4>
            <p>{role}</p>
          </div>
          {/* LinkedIn Link */}
          <a
            href={linkedIn}
            className="bg-secondary text-primary ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <p className="border-t border-t-black pt-7">{description}</p>
    </div>
  );
}

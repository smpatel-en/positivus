import Button from "../../core/Button";
import SectionHeading from "../SectionHeading";
import DecorationImage from "../../../assets/custome/ring-and-stars-illustration";

export default function ContactUs() {
  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div>
          {/* Section Head */}

          <SectionHeading
            title="Contact Us"
            description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
          />

          {/* Section Body */}
          <div className="bg-grey lg:rounded-primary relative overflow-hidden rounded-3xl p-6 md:p-10 lg:px-25 lg:py-20">
            {/* Contact Form */}
            <form className="grid max-w-none gap-6 lg:max-w-140">
              {/* Radio Field */}
              <div className="flex gap-4 lg:gap-9">
                <label className="flex cursor-pointer items-center whitespace-nowrap">
                  <input
                    type="radio"
                    id="email"
                    name="contact-method"
                    value="email"
                    className="accent-primary mr-2 h-4 w-4 rounded-full sm:h-5 sm:w-5 lg:h-7 lg:w-7"
                  />
                  Say Hi
                </label>
                <label className="flex cursor-pointer items-center whitespace-nowrap">
                  <input
                    type="radio"
                    id="phone"
                    name="contact-method"
                    value="phone"
                    className="accent-primary mr-2 h-4 w-4 rounded-full sm:h-5 sm:w-5 lg:h-7 lg:w-7"
                  />
                  Get a Quote
                </label>
              </div>

              {/* Name Field */}
              <div>
                <label className="mb-2 block font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-black bg-white p-3"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="mb-2 block font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-black bg-white p-3"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="mb-2 block font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-black bg-white p-3"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="secondary">
                Send Message
              </Button>
            </form>

            {/* Decoration Image */}
            <DecorationImage className="absolute inset-0 right-0 ml-auto hidden h-auto w-auto translate-x-1/2 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

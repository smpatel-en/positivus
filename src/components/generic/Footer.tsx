import Logo from "../core/Logo";

// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Heading from "../core/Heading";
import Button from "../core/Button";

export default function Footer() {
  const footerLinks = [
    { name: "about us", href: "#" },
    { name: "services", href: "#" },
    { name: "use cases", href: "#" },
    { name: "pricing", href: "#" },
    { name: "blog", href: "#" },
  ];

  const footerSocialLinks = [
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
  ];

  const contactInfo = {
    email: "info@positivus.com",
    phone: "555-567-8901",
    address: "1234 Main St Moonstone City, Stardust State 12345",
  };

  return (
    <footer>
      <div className="bg-secondary container rounded-t-[45px] p-12 text-white lg:p-16">
        {/* Footer Wrapper */}
        <div>
          {/* Footer Top */}
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row lg:mb-16">
            {/* Footer Logo */}
            <Logo variant="light" />

            {/* Footer Links */}
            <ul className="flex flex-col items-center gap-2 sm:flex-row md:gap-6 xl:gap-10">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="capitalize underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Footer Social Links | Desktop */}
            <ul className="hidden gap-4 lg:flex">
              {footerSocialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xl capitalize">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                      {link.icon}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Content */}
          <div className="mb-12 flex flex-col items-center justify-between gap-6 lg:mb-16 lg:flex-row">
            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <Heading
                variant="primary"
                as="h4"
                className="mx-auto mb-5 lg:mx-0"
              >
                Contact Us:
              </Heading>
              <ul className="flex max-w-70 flex-col gap-5 sm:max-w-none">
                <li className="hover:underline">
                  <a href={`mailto:${contactInfo.email}`}>
                    Email: {contactInfo.email}
                  </a>
                </li>
                <li className="hover:underline">
                  <a href={`tel:${contactInfo.phone}`}>
                    Phone: {contactInfo.phone}
                  </a>
                </li>
                <li className="hover:underline">
                  <a href={contactInfo.address}>
                    Address: {contactInfo.address}
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="flex w-fit flex-col items-center gap-6 rounded-lg bg-[#292A32] p-6 sm:flex-row sm:p-10 lg:gap-10">
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-white px-4 py-2 text-white placeholder:text-white lg:rounded-[14px] lg:px-6 lg:py-4"
              />
              <Button className="w-full">Subscribe to news</Button>
            </div>

            {/* Footer Social Links | Mobile */}
            <ul className="flex gap-4 lg:hidden">
              {footerSocialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-lg capitalize">
                    <div className="text-secondary flex h-6 w-6 items-center justify-center rounded-full bg-white">
                      {link.icon}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="flex justify-center gap-4 border-t border-white pt-12 capitalize lg:justify-start lg:gap-12 lg:pt-16">
            <p className="inline">
              &copy; {new Date().getFullYear()} Positivus. All rights reserved.
            </p>
            <a href="#" className="whitespace-nowrap underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

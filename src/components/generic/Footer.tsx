// Components
import Logo from "../core/Logo";
import Heading from "../core/Heading";
import Button from "../core/Button";
import { FaRegNewspaper } from "react-icons/fa6";

import {
  navigationLinks,
  socialLinks,
  contactInfo,
  themeData,
} from "../../lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="container p-0 lg:px-8">
        {/* Footer Wrapper */}
        <div className="bg-secondary rounded-t-primary p-12 text-white lg:p-16">
          {/* Footer Top */}
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row lg:mb-16">
            {/* Footer Logo */}
            <Logo variant="light" />

            {/* Footer Links */}
            <ul className="flex flex-col items-center gap-2 sm:flex-row md:gap-6 xl:gap-10">
              {navigationLinks.map((link) => (
                // Navigation Link Item
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary capitalize underline transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Footer Social Links | Desktop */}
            <ul className="hidden gap-4 lg:flex">
              {socialLinks.map((link, index) => (
                // Social Link Item
                <li key={index}>
                  <a
                    title={link.title}
                    href={link.href}
                    className="hover:bg-primary flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-black transition-all duration-300 hover:scale-105"
                  >
                    <link.icon />
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

              {/* Contact Info List */}
              <ul className="flex max-w-70 flex-col gap-5 sm:max-w-none">
                {/* Email */}
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    Email: {contactInfo.email}
                  </a>
                </li>

                {/* Phone */}
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    Phone: {contactInfo.phone}
                  </a>
                </li>

                {/* Address */}
                <li>
                  <a
                    href={contactInfo.address}
                    className="hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    Address: {contactInfo.address}
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <form className="flex w-fit flex-col items-center gap-6 rounded-lg bg-[#292A32] p-6 sm:flex-row sm:p-10 lg:gap-10">
              {/* Newsletter Input */}
              <input
                type="email"
                placeholder="Email"
                className="focus:border-primary transition-color rounded-lg border-2 border-white px-4 py-2 text-white duration-300 outline-none placeholder:text-white lg:rounded-[14px] lg:px-6 lg:py-4"
              />

              {/* Subscribe Button */}
              <Button
                type="submit"
                className="w-full whitespace-nowrap"
                icon={<FaRegNewspaper />}
              >
                Subscribe to news
              </Button>
            </form>

            {/* Footer Social Links | Mobile */}
            <ul className="flex gap-4 lg:hidden">
              {socialLinks.map((link, index) => (
                // Social Link Item
                <li key={index}>
                  <a
                    title={link.title}
                    href={link.href}
                    className="text-secondary flex h-6 w-6 items-center justify-center rounded-full bg-white text-lg"
                  >
                    <link.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col justify-center gap-4 border-t border-white pt-12 capitalize sm:flex-row lg:justify-start lg:gap-12 lg:pt-16">
            {/* Copyright */}
            <p className="inline">
              &copy; {new Date().getFullYear()} Positivus. All rights reserved.
            </p>

            {/* Privacy Policy */}
            <a
              href="#"
              className="hover:text-primary h-fit whitespace-nowrap underline transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <div className="ml-auto flex items-center gap-2">
              {themeData.map((color, index) => (
                <div
                  key={index}
                  className="h-5 w-5 cursor-pointer rounded-full"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    document.documentElement.style.setProperty(
                      "--primary",
                      color,
                    );
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

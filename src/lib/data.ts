// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

// Images
import serviceImage1 from "../assets/images/tokyo-magnifier-web-search-with-elements.png";
import serviceImage2 from "../assets/images/tokyo-selecting-a-value-in-the-browser-window.png";
import serviceImage3 from "../assets/images/tokyo-browser-window-with-emoticon-likes-and-stars-around.png";
import serviceImage4 from "../assets/images/tokyo-sending-messages-from-one-place-to-another.png";
import serviceImage5 from "../assets/images/tokyo-many-browser-windows-with-different-information.png";
import serviceImage6 from "../assets/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers.png";

export const navigationLinks = [
  { name: "about us", href: "#" },
  { name: "services", href: "#" },
  { name: "use cases", href: "#" },
  { name: "pricing", href: "#" },
  { name: "blog", href: "#" },
];

export const socialLinks = [
  { title: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { title: "Facebook", icon: FaFacebookF, href: "#" },
  { title: "Twitter", icon: FaTwitter, href: "#" },
];
export const contactInfo = {
  email: "info@positivus.com",
  phone: "555-567-8901",
  address: "1234 Main St Moonstone City, Stardust State 12345",
};

export const servicesData = [
  {
    title: "Search Engine Optimization",
    image: serviceImage1,
    href: "#",
  },
  {
    title: "Pay-Per-Click Advertising",
    image: serviceImage2,
    href: "#",
  },
  {
    title: "Social Media Marketing",
    image: serviceImage3,
    href: "#",
  },
  {
    title: "Email Marketing",
    image: serviceImage4,
    href: "#",
  },
  {
    title: "Content Creation",
    image: serviceImage5,
    href: "#",
  },
  {
    title: "Analytics and Reporting",
    image: serviceImage6,
    href: "#",
  },
];

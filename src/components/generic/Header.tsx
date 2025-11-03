import React from "react";
import { navigationLinks } from "../../lib/data";

// Components
import Logo from "../core/Logo";
import Button from "../core/Button";

// Icons
import { TbMenu3 } from "react-icons/tb";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const navigationCTA = { name: "Request a Quote", href: "#" };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <header className="fixed z-10 w-full bg-white py-4 shadow-sm lg:py-6">
      <div className="container">
        {/* Navigation Bar Wrapper */}
        <nav className="flex items-center justify-between gap-2">
          {/* Navigation Bar Logo */}
          <Logo />

          {/* Navigation Links, CTA and Mobile Menu Button */}
          <div className="flex items-center gap-6 xl:gap-10">
            {/* Navigation Links */}
            <ul className="hidden gap-6 lg:flex xl:gap-10">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg capitalize hover:underline lg:text-xl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <Button
              className="hidden sm:block"
              variant="outline"
              href={navigationCTA.href}
            >
              {navigationCTA.name}
            </Button>

            {/* Mobile Navigation Button */}
            <div className="lg:hidden">
              <Button variant="primary" onClick={toggleMenu}>
                <TbMenu3 size={30} />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <React.Activity mode={open ? "visible" : "hidden"}>
            <div className="absolute top-full right-0 left-0 bg-white shadow-lg">
              <div className="container p-4">
                <ul className="flex flex-col items-center gap-4">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-lg capitalize hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Call to Action Button | Mobile */}
                <Button
                  className="mx-auto mt-4 block sm:hidden"
                  variant="outline"
                  href={navigationCTA.href}
                >
                  {navigationCTA.name}
                </Button>
              </div>
            </div>
          </React.Activity>
        </nav>
      </div>
    </header>
  );
}

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const toTop = document.querySelector("#to-top");

      if (header) {
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
          header.classList.add("navbar-fixed");
          if (toTop) {
            toTop.classList.remove("hidden");
            toTop.classList.add("flex");
          }
        } else {
          header.classList.remove("navbar-fixed");
          if (toTop) {
            toTop.classList.remove("flex");
            toTop.classList.add("hidden");
          }
        }
      } else {
        console.error("Header or toTop element not found");
      }
    };
    const handleClickOutside = (e) => {
      const hamburger = document.querySelector("#hamburger");
      const navMenu = document.querySelector("#nav-menu");

      if (e.target !== hamburger && e.target !== navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    };

    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    hamburger.addEventListener("click", handleHamburgerClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <NavLink
                to="/"
                className="block py-6 text-lg font-bold text-primary"
              >
                <span className="text-3xl font-yellowtail font-light">
                  josegrd
                </span>
              </NavLink>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="absolute rig ht-4 block lg:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out bg-black"></span>
                <span className="hamburger-line transition duration-300 ease-in-out bg-black"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out bg-black"></span>
              </button>

              <nav
                id="nav-menu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={500}
                      className="mx-5 cursor-pointer flex py-2 text-base text-dark group-hover:text-primary "
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li className="group">
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      className="mx-5 cursor-pointer flex py-2 text-base text-dark group-hover:text-primary "
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li className="group">
                    <ScrollLink
                      to="portfolio"
                      smooth={true}
                      duration={500}
                      className="mx-5 cursor-pointer flex py-2 text-base text-dark group-hover:text-primary "
                    >
                      Project
                    </ScrollLink>
                  </li>
                  <li className="group">
                    <ScrollLink
                      to="blog"
                      smooth={true}
                      duration={500}
                      className="mx-5 cursor-pointer flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      Blog
                    </ScrollLink>
                  </li>
                  <li className="group">
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="mx-5 cursor-pointer flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

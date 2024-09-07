export default function Navbar() {
  return (
    <>
      <div>
        <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
          <div className="container">
            <div className="relative flex items-center justify-between">
              <div className="px-4">
                <a
                  href="#home"
                  className="block py-6 text-lg font-bold text-primary"
                >
                  josegrd
                </a>
              </div>
              <div className="flex items-center px-4">
                <button
                  id="hamburger"
                  name="hamburger"
                  type="button"
                  className="absolute right-4 block lg:hidden"
                >
                  <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                </button>

                <nav
                  id="nav-menu"
                  className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
                >
                  <ul className="block lg:flex">
                    <li className="group">
                      <a
                        href="#about"
                        className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white text-black"
                      >
                        About
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#portfolio"
                        className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#blog"
                        className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#contact"
                        className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

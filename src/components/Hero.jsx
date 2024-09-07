import profilePic from "../assets/jose=trans.png";
import angularLogo from "../assets/angular-brands-solid.svg";
import cssLogo from "../assets/css3-alt-brands-solid.svg";
import htmlLogo from "../assets/html5-brands-solid.svg";
import jsLogo from "../assets/js-brands-solid.svg";
import reactLogo from "../assets/react-brands-solid.svg";
// import tailwindLogo from "../assets/tailwindcss-brands-solid.svg";
import dockerLogo from "../assets/docker-brands-solid.svg";
import golangLogo from "../assets/golang-brands-solid.svg";
import javaLogo from "../assets/java-brands-solid.svg";
import phpLogo from "../assets/php-brands-solid.svg";
import laraveLogo from "../assets/laravel-brands-solid.svg";
import pythonLogo from "../assets/python-brands-solid.svg";
import ImageHero from "./ImageHero";

let arrayImmage = [
  angularLogo,
  cssLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  dockerLogo,
  golangLogo,
  javaLogo,
  phpLogo,
  laraveLogo,
  pythonLogo,
];

export default function Hero() {
  return (
    <>
      <div className="container pb-48">
        <div className="flex flex-wrap">
          <div className="text-heading w-full self-end px-4 lg:w-1/2 lg:mb-32">
            <h1 className="font-sans text-[58px] font-bold">
              Software Engineer 🚀
            </h1>
            <p className="font-sans text-slate-400 mt-2">
              Hi, I’m Jose Garda. On-going learn Fullstack Developing
              <span className="block">based in Semarang, Indonesia ⛳</span>
            </p>
          </div>
          <div className="image-profile w-full  self-end px-4 lg:w-1/2">
            <div className="relative mt-19 lg:mt-9 lg:right-0">
              <img
                src={profilePic}
                alt="profile pict"
                className="mx-auto max-w-full rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <h1 className="font-sans">
            Tech Kit <span className="text-2xl mx-5">|</span>
          </h1>
          <div>
            {arrayImmage.map((image) => (
              <ImageHero src={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

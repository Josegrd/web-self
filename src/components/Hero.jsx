import profilePic from "../assets/jose=trans.png";
import angularLogo from "../assets/angular-brands-solid.svg";
import cssLogo from "../assets/css3-alt-brands-solid.svg";
import htmlLogo from "../assets/html5-brands-solid.svg";
import jsLogo from "../assets/js-brands-solid.svg";
import reactLogo from "../assets/react-brands-solid.svg";
import dockerLogo from "../assets/docker-brands-solid.svg";
import golangLogo from "../assets/golang-brands-solid.svg";
import javaLogo from "../assets/java-brands-solid.svg";
// import phpLogo from "../assets/php-brands-solid.svg";
// import laraveLogo from "../assets/laravel-brands-solid.svg";
import pythonLogo from "../assets/python-brands-solid.svg";
import ImageHero from "./ImageHero";
import profileImg from "../assets/profile2.png";

let arrayImmage = [
  angularLogo,
  cssLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  dockerLogo,
  // golangLogo,
  javaLogo,
  // phpLogo,
  // laraveLogo,
  pythonLogo,
];

export default function Hero() {
  return (
    <>
      <div id="home" className="container pb-48 mt-36">
        <div className="flex flex-wrap lg:flex-row-reverse mb-8">
          <div className="image-profile w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-19">
              <img
                src={profilePic}
                alt="profile pict"
                className="mx-auto max-w-full rounded-full w-60 h-60 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] mb-10 object-cover"
              />
            </div>
          </div>
          <div className="text-heading w-full self-end px-4 text-center lg:w-1/2 lg:text-left lg:mb-32 ml-0">
            <h1 className="font-sans lg:text-[60px] font-bold sm:mt-20 text-[35px] mb-3 md:text-[55px]">
              Engineer 🚀
            </h1>
            <p className="font-sans text-slate-400 mt-2l text-[11px] mb-16 md:text-[20px] lg:text-[20px]">
              Hi, I’m Jose Garda. Focusing on Fullstack Developing
              <span className="block">based in Semarang, Indonesia ⛳</span>
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-wrap justify-center mt-4 text-center lg:mt-6 lg:justify-start lg:ml-3">
          <h1 className="font-sans mb-3 md:mr-10 md:text-[20px] text-[11px] lg:mr-3">
            Tech Kit
          </h1>
          <div className="mx-auto lg:mx-10">
            {arrayImmage.map((image) => (
              <ImageHero key={image} src={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

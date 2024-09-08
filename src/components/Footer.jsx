import footerImg from "../assets/tes.jpeg";
import twitterLogo from "../assets/twitter-brands-solid.svg";
import githubLogo from "../assets/github-brands-solid.svg";
import linkedinLogo from "../assets/linkedin-brands-solid.svg";
import gmailLogo from "../assets/envelope-solid.svg";
import Contact from "./Contact";

const socialMedia = {
  twitter: {
    icon: twitterLogo,
    url: "https://twitter.com/",
    defaultUsername: "@jsgrd8",
  },
  github: {
    icon: githubLogo,
    url: "https://github.com/",
    defaultUsername: "Josegrd",
  },
  linkedin: {
    icon: linkedinLogo,
    url: "https://www.linkedin.com/",
    defaultUsername: "Jose Garda Seta",
  },
  gmail: {
    icon: gmailLogo,
    url: "mailto:",
    defaultUsername: "josegrdbns@gmail.com",
  },
};
export default function Footer() {
  return (
    <>
      <div className="bg-slate-900 text-white">
        <div className="container ">
          <div className="font-sans">
            <h1 className="lg:text-[60px] md:text-[50px] text-[30px] pt-16 font-bold pb-3">
              Ngopi Bareng Asik Nich... ☕{" "}
              <span className="block">Want to collaborate or hire me?</span>
            </h1>
            <div className="flex flex-wrap mt-8">
              <div>
                <img
                  src={footerImg}
                  alt=""
                  className="rounded-full lg:w-36 lg:h-36 md:w-36 md:h-36 w-28 h-28 object-cover"
                />
              </div>
              <div className="ml-7 mt-2 text-[10px] mb-16 md:text-[16px]">
                <h1 className="font-sans font-bold mb-3 text-green-600">
                  Contact me Via
                </h1>
                <div>
                  {Object.keys(socialMedia).map((key) => (
                    <Contact
                      key={key}
                      icon={socialMedia[key].icon}
                      url={socialMedia[key].url}
                      username={socialMedia[key].defaultUsername}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

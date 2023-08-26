import { Envelope, FileText, GithubLogo, LinkedinLogo } from "phosphor-react";
import UpDownAnimation from "../animation/upDown";
import HeroImage from "../image/hero-img.svg";
const Hero = () => {
  
  const links = [
    {
      title: "Github",
      icon: <GithubLogo size={22} />,
      href: "https://github.com/28brana",
    },
    {
      title: "LinkedIn",
      icon: <LinkedinLogo size={22} />,
      href: "https://www.linkedin.com/in/28brana/",
    },
    {
      title: "Email",
      icon: <Envelope size={22} />,
      href: "mailto:28brana@gmail.com",
    },
    {
      title: "Resume",
      icon: <FileText size={22} />,
      href: "https://drive.google.com/file/d/1NXLaanL_XrHx9WKjcSUOdq6Nz28J7iFs/view?usp=sharing",
    },
  ];
  return (
    <div className="bg-primary h-screen  text-white  overflow-hidden" id="Home">
      <UpDownAnimation>
        <div className="container flex justify-between items-center m-auto   h-4/5">
          <div>
            <p className="md:text-3xl  sm:text-2xl text-lg mb-2">
              Hey 👋 there! I'm{" "}
            </p>
            <h1 className="md:text-8xl sm:text-6xl text-4xl font-semibold mb-2 whitespace-nowrap">
              Bharat Rana{" "}
            </h1>
            <p className="md:text-3xl sm:text-2xl  text-lg  my-6">
              Software Engineer.
              <span className="text-text">
                {" "}
                Self-taught Full Stack Developer | Passionate about learning and
                innovation
              </span>
            </p>
            <div className="flex gap-2 flex-wrap">
              {links.map((link) => (
                <a
                  key={link.title}
                  target="_blank"
                  rel="noreferrer"
                  href={link.href}
                >
                  <div className="links">
                    {link.icon}
                    <p>{link.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="[width:800px] lg:block [display:none] ">
            <img src={HeroImage} className="w-full h-full" alt="hero" />
          </div>
        </div>
      </UpDownAnimation>
    </div>
  );
};
export default Hero;

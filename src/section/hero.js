import { Envelope, FileText, GithubLogo, LinkedinLogo } from "phosphor-react";
import HeroImage from "../image/hero-img.svg";
const Hero = () => {
  const links = [
    {
      title: "Github",
      icon: <GithubLogo size={22}  />,
      href: "/",
    },
    {
      title: "LinkedIn",
      icon: <LinkedinLogo size={22} />,
      href: "/",
    },
    {
      title: "Email",
      icon: <Envelope size={22}/>,
      href: "/",
    },
    {
      title: "Resume",
      icon: <FileText size={22} />,
      href: "/",
    },
  ];
  return (
    <div className="bg-primary h-screen text-white ">
      

      <div className="container flex justify-between items-center m-auto  h-4/5 ">
        <div >
          <p className="text-3xl mb-2">Hey 👋 there! I'm </p>
          <h1 className="text-8xl font-semibold mb-2 whitespace-nowrap">
            Bharat Rana{" "}
          </h1>
          <p className="text-3xl my-6">
            Software Engineer.
            <span className="text-text">
              {" "}
              Self-taught Full Stack Developer | Passionate about learning and
              innovation
            </span>
          </p>
          <div className="flex gap-2">
            {links.map((link) => (
              <div
                key={link.title}
                className="links"
              >
                {link.icon}
                <p>{link.title}</p>
              </div>
            ))}
          </div>
          
        </div>
        <div className="[width:800px] ">
          <img src={HeroImage} className="w-full h-full" alt="hero" />
        </div>
      </div>
    </div>
  );
};
export default Hero;

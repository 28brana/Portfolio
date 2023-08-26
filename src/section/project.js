import { ArrowSquareOut } from "phosphor-react";
import gitHubImage from "../image/github.png";
import Project1Image from "../image/projects/Project1.png";
import Project2Image from "../image/projects/Project2.png";
import Project3Image from "../image/projects/Project3.png";
import Project4Image from "../image/projects/Project4.png";
import Project5Image from "../image/projects/Project5.png";
import Project6Image from "../image/projects/Project6.png";
import Project7Image from "../image/projects/Project7.png";
import UpDownAnimation from "../animation/upDown";
const Project = () => {
  const projects = [
    {
      title: "FashionX",
      link: "https://fashonx.onrender.com/",
      github: "https://github.com/28brana/FashonX",
      summary:
        "Clothing shopping platform with dynamic features and secure payments.",
      image: Project1Image,
    },
    {
      title: "Weather App",
      link: "https://28brana.github.io/Weather_app.github.io/",
      github: "https://28brana.github.io/Weather_app.github.io/",
      summary:
        "Real-time weather information app with intuitive user interface.",
      image: Project2Image,
    },
    {
      title: "Indeed Data Extractor",
      // link:'',
      github: "https://github.com/28brana/IndeedDataExtracter",
      summary:
        "Web scraping tool to extract job data from Indeed for specific criteria.",
      image: Project4Image,
    },
    {
      title: "FileShare Website",
      // link:'',
      github: "https://github.com/28brana/fileshare",
      summary:
        "Platform for simplified file sharing with seamless Gmail integration.",
      image: Project3Image,
    },
    {
      title: "Todo Website",
      link: "https://28brana.github.io/To_do_App/",
      github: "https://github.com/28brana/To_do_App",
      summary:
        "A straightforward Todo website designed to manage tasks effectively.",
      image: Project5Image,
    },
    {
      title: "All Purpose Portfolio",
      link: "https://28brana.github.io/Websites/Portfolio-template-main/index.html",
      github: "https://github.com/28brana/Websites",
      summary: "A versatile portfolio template with various sections.",
      image: Project7Image,
    },
    {
      title: "Template Websites",
      link: "https://28brana.github.io/Websites/",
      github: "https://github.com/28brana/Websites",
      summary:
        "A collection of template websites showcasing different designs.",
      image: Project6Image,
    },
  ];

  return (
    <div className="bg-secondary  min-h-screen text-white py-12" id="Projects">
      <UpDownAnimation>
        <div className="container ">
          <h1 className=" pt-12  md:text-2xl text-xl font-semibold ">
            {" "}
            Things I've Built.
          </h1>
          <p className="pt-3 md:text-xl text-lg text-text">
            Here's some of my projects that I have worked on.
          </p>
          <div className="flex flex-wrap mt-20 gap-8 items-center justify-center ">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-md shadow flex-1 [min-width:300px] [max-width:340px] "
              >
                <div className="h-52">
                  <img
                    src={project.image}
                    className="h-full w-full object-cover"
                    alt="img"
                  />
                </div>
                <div className=" px-4 py-6">
                  <div className="flex justify-between items-center">
                    <p className="md:text-lg text-sm font-semibold">
                      {project.title}
                    </p>
                    <div className="flex gap-2 items-center">
                      <a
                        target="_blank"
                        className={`${
                          project.github ? undefined : "[display:none]"
                        } cursor-pointer`}
                        rel="noreferrer"
                        href={project.github}
                      >
                        <div className="w-6">
                          <img
                            src={gitHubImage}
                            width={"100%"}
                            height={"100%"}
                            alt="github"
                          />
                        </div>
                      </a>
                      <a
                        className={`${
                          project.link ? undefined : "[display:none]"
                        } cursor-pointer`}
                        target="_blank"
                        rel="noreferrer"
                        href={project.link}
                      >
                        <div>
                          <ArrowSquareOut size={23} />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="my-2"
                    style={{
                      borderTop: "1px solid",
                      borderColor: "#27303f",
                    }}
                  />
                  <p className="md:text-sm text-xs">{project.summary} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UpDownAnimation>
    </div>
  );
};
export default Project;

import { Code, Database, HardDrives, Nut } from "phosphor-react";
import SideWayAnimation from "../animation/sideWay";
import azureImage from "../image/Azure.png";
import cssImage from "../image/css.png";
import expressjsImage from "../image/expressJs.png";
import fireBaseImage from "../image/firebase.png";
import gitImage from "../image/git.png";
import gitHubImage from "../image/github.png";
import htmlImage from "../image/html.png";
import mongoDbImage from "../image/mongoDb.png";
import muiImage from "../image/mui.svg";
import mysqlImage from "../image/mysql.png";
import nextjsImage from "../image/nextjs.svg";
import nodejsImage from "../image/nodejs.png";
import reactjsImage from "../image/reactjs.png";
import vsCodeImage from "../image/vscode.png";
import sassImage from "../image/sass.png";
import reduxImage from "../image/redux.png";
import redisImage from "../image/redis.png";
import awsImage from "../image/aws.png";
import dockerImage from "../image/docker.png";
import socketImage from "../image/socket.svg";
import webrtcImage from "../image/webrtc.png";
const Skills = () => {
  const items = [
    {
      icon: <Code size={24} />,
      title: "Front End",
      content: [
        {
          title: "HTML",
          image: htmlImage,
        },
        {
          title: "CSS",
          image: cssImage,
        },
        {
          title: "React.js",
          image: reactjsImage,
        },
        {
          title: "Next.js",
          image: nextjsImage,
        },
        {
          title: "Tailwind Css",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          title: "Material Ui",
          image: muiImage,
        },
        {
          title: "SASS",
          image: sassImage,
        },
        {
          title: "Redux",
          image: reduxImage,
        },
        // Add more front-end technologies
      ],
    },
    {
      icon: <HardDrives size={24} />,
      title: "Back End",
      content: [
        {
          title: "Node.js",
          image: nodejsImage,
        },
        {
          title: "Express.js",
          image: expressjsImage,
        },
        // Add more back-end technologies
      ],
    },
    {
      icon: <Database size={24} />,
      title: "Database",
      content: [
        {
          title: "MongoDB",
          image: mongoDbImage,
        },
        {
          title: "MySQL",
          image: mysqlImage,
        },
        {
          title: "Redis",
          image: redisImage,
        },
      ],
    },
    {
      icon: <Nut size={24} />,
      title: "Tools",
      content: [
        {
          title: "Git",
          image: gitImage,
        },
        {
          title: "GitHub",
          image: gitHubImage,
        },
        {
          title: "Firebase",
          image: fireBaseImage,
        },
        {
          title: "Azure (Blob Storage)",
          image: azureImage,
        },
        {
          title: "AWS (S3, SNS, SQS, Lambda)",
          image: awsImage,
        },
        {
          title: "Socket",
          image: socketImage,
        },
        {
          title: "Webrtc",
          image: webrtcImage,
        },
        {
          title: "Docker",
          image: dockerImage,
        },
        {
          title: "Vscode",
          image: vsCodeImage,
        },
        // Add more tools
      ],
    },
  ];
  return (
    <div className="bg-secondary  min-h-screen text-white" id="Skills">
      <SideWayAnimation>
        <div className="container mx-auto py-10">
          <h1 className=" pt-12  md:text-2xl text-xl font-semibold ">
            {" "}
            My Skill Set.
          </h1>
          <p className="pt-3 md:text-xl text-lg text-text">
            A Snapshot of What I Bring.
          </p>
          <div className=" pt-12">
            {items.map((item) => (
              <div className="mb-10" key={item.title}>
                <p className="mb-2">{item.title}</p>
                <div className="flex flex-wrap  items-center gap-6">
                  {item.content.map((subItem) => (
                    <div
                      key={subItem.title}
                      className="flex bg-primary items-center gap-4 px-4 py-3 rounded-md md:w-48 md:h-16 w-36 h-14"
                    >
                      <img
                        src={subItem.image}
                        className="nd:w-9 w-7"
                        alt={subItem.title}
                      />
                      <p className="md:text-base text-sm">{subItem.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p></p>
          </div>
        </div>
      </SideWayAnimation>
    </div>
  );
};
export default Skills;

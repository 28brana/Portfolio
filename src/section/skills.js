import { Code, Database, HardDrives, Nut } from "phosphor-react";
import { useState } from "react";

const Skills = () => {
  const [current,setCurrent]=useState(0);
  const items = [
    {
      icon: <Code size={24} />,
      title: "Front End",
    },
    {
      icon: <HardDrives size={24} />,
      title: "Back End",
    },
    {
      icon: <Database size={24} />,
      title: "Database",
    },
    {
      icon: <Nut size={24} />,
      title: "Tools",
    },
  ];
  return (
    <div className="bg-secondary  h-screen text-white">
      <div className="container  h-screen">
        <h1 className="font-title pt-12 text-4xl text-center">Skills</h1>
        <div className="flex h-3/4 items-center  ">
          <div className="flex flex-col gap-4 flex-1 ">
            {items.map((item,index) => (
              <div
                key={item.title}
                onClick={()=>setCurrent(index)}
                className={`px-6 ${index===current ? 'shadow-xl text-main':''} py-6 bg-primary flex justify-between cursor-pointer `}
              >
                <h1>{item.title}</h1>
                {item.icon}
              </div>
            ))}
          </div>
          <div className="flex-1 px-40 ">
            <h2 className="text text-2xl">Front End</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

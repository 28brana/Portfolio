import { Calendar } from "phosphor-react";

const Work = () => {
  const workExperience = [
    {
      title: "Software Engineer",
      company: "SATEEQ",
      location: "Remote",
      date: "June 2022 - Present",
      responsibilities: [
        " Spearheaded frontend development, accounting for over 50 percent of the project’s progress, in collaboration with a dedicated team.",
        "Played an instrumentalrole in backend tasks, contributing significantly to 20 percent of the project’s completion ensuring a comprehensive and well-rounded development effort",
        "Led technology implementation, utilizing Next.js, React, Material-UI (MUI), Tailwind CSS, Node.js, Mixpanel, TypeScript, and Azure,resulting in a substantial 20 percent improvement in website responsiveness and a commendable 15 percentreduction in loading times.",
      ],
    },
  ];

  console.log(workExperience);

  return (
    <div className="bg-primary  min-h-screen text-white">
      <div className="container mx-auto ">
        <h1 className=" pt-12  text-2xl font-semibold ">
          Professional Journey.
        </h1>
        <p className="pt-3 text-xl text-text">Where I've Made an Impact.</p>
        <div className="mx-auto max-w-4xl">
          
        {workExperience.map((item, index) => (
          <div key={index} className="flex  mt-10">
            <div className="flex-1 flex items-center gap-2">
              <Calendar/>
              {item.date}</div>
            <div className="border mr-28 stepper" />
            <div className="flex-1">
              <h1 className="text-3xl font-medium">{item.title} </h1>
              <p className="text-xl mb-2">
                {item.company} | {item.location}
              </p>
              <ul className="list-disc">
                {item.responsibilities.map((summery) => (
                  <li className="mb-2">{summery}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default Work;

import { Calendar } from "phosphor-react";
import SideWayAnimation from "../animation/sideWay";

const Work = () => {
  const workExperience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "SATEEQ",
      location: "Gurgaon",
      date: "Oct 2023 - Present",
      responsibilities: [
        "Designed and implemented a scalable MySQL-based system for plans, permissions, and limits, providing full control over user management",
        "Seamlessly integrated Generative AI lambda services into the system, overseeing 3 microservices through AWS SQS and AWS SNS.",
        "Utilized Redis for token caching and caching subscribed users.",
        "Upgraded the contact upload functionality, incorporating validations for data accuracy and leveraging a dedicated worker to streamline processing.",
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "SATEEQ",
      location: "Remote",
      date: "June 2022 - Sept 2023",
      responsibilities: [
        "Led 60 percent of frontend development and 30 percent backend development for the website and admin dashboard",
        "Integrated Razorpay for seamless payment processing",
        "Wrote migration scripts for the conversion of existing schema to the new website version",
        "Led technology implementation using Next.js, React, Material-UI (MUI), Tailwind CSS, Node.js, Mixpanel,TypeScript, and Azure",
      ],
    },
  ];

  return (
    <div className="bg-primary  min-h-screen text-white" id="Experience">
      <div className="container mx-auto ">
        <h1 className=" pt-12  md:text-2xl text-xl font-semibold ">
          Professional Journey.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          Where I've Made an Impact.
        </p>
        <SideWayAnimation side="RIGHT">
          <div className="mx-auto max-w-4xl">
            {workExperience.map((item) => (
              <div key={item.id} className="flex  mt-10">
                <div className="flex-1 md:flex [display:none]  items-center gap-2">
                  <Calendar />
                  {item.date}
                </div>
                <div className="border md:mr-28 mr-16 stepper" />
                <div className="flex-1">
                  <h1 className="md:text-3xl text-2xl font-medium">
                    {item.title}{" "}
                  </h1>
                  <p className="md:text-xl text-lg md:mb-2">
                    {item.company} | {item.location}
                  </p>
                  <div className="flex-1 md:[display:none] flex items-center gap-2 mb-2">
                    <Calendar />
                    {item.date}
                  </div>
                  <ul className="list-disc">
                    {item.responsibilities.map((summery) => (
                      <li className="mb-2 md:text-lg text-sm">{summery}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SideWayAnimation>
      </div>
    </div>
  );
};
export default Work;

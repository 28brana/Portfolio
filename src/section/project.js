const Project = () => {
  const projects = [
    {
      title: "FashionX",
      link: "https://fashonx.onrender.com/",
      summary: "Clothing shopping platform with dynamic features and secure payments.",
      image: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      title: "Weather App",
      link: "https://28brana.github.io/Weather_app.github.io/",
      summary: "Real-time weather information app with intuitive user interface.",
      image: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      title: "Indeed Data Extractor",
      link: "https://github.com/28brana/IndeedDataExtracter",
      summary: "Web scraping tool to extract job data from Indeed for specific criteria.",
      image: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      title: "FileShare Website",
      link: "https://github.com/28brana/fileshare",
      summary: "Platform for simplified file sharing with seamless Gmail integration.",
      image: "https://picsum.photos/seed/picsum/200/300"
    }
  ];
  
  
  return (
    <div className="bg-secondary  min-h-screen text-white py-12">
      <div className="container  ">
        <h1 className="font-title  text-4xl text-center">Projects</h1>
        <div className="flex flex-wrap mt-20 gap-8 items-center justify-center ">
          {
            projects.map((project)=>(

              <div key={project.title} className="overflow-hidden rounded-md flex-1 [min-width:300px] [max-width:340px] glassmore cursor-pointer">
                <div className="h-72">
                  <img src={project.image}  className="h-full w-full object-cover" alt="img" />
                </div>
                <div className=" px-4 py-6">
                  <p className="text-lg">{project.title}</p>
                  <p className="text-sm">{project.summary} </p>
                </div>
              </div>
            ))
          }
          </div>
      </div>
    </div>
  );
};
export default Project;

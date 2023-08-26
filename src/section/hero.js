import HeroImage from "../image/hero-img.svg";
const Hero = () => {
  return (
    <div className="bg-primary h-screen text-white ">
      <div className="flex flex-row items-center justify-between py-8  container">
        <div>Bharat Rana</div>
        <div className="flex flex-row items-center gap-x-10  ">
          <div className="nav-item">Home</div>
          <div className="nav-item">About Me</div>
          <div className="nav-item">Skills</div>
          <div className="nav-item">Work</div>
         
        </div>
        {/* <div /> */}
      </div>

      <div className="container flex justify-between items-center m-auto  h-4/5 ">
        <div className="max-w-md">
          <h1 className="font-title text-4xl mb-2">I am Bharat Rana</h1>
          <p className="tracking-wide	">
            I'm a dedicated Full Stack Developer driven by the art of creating
            web applications. With a focus on the MERN stack,
            I'm passionate about pushing the boundaries of innovation to craft
            solutions that captivate and inspire.
          </p>
          <div>
            <button className="btn-primary mt-4">Download Resume</button>
          </div>
        </div>
        <div className=" w-96">
          <img src={HeroImage} className="w-full h-full" alt="hero" />
        </div>
      </div>
     
    </div>
  );
};
export default Hero;

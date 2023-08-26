import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const links = ["Home", "Skills", "Experience", "Projects"];
  const handleScroll = () => {
    const links = ["Home", "Skills", "Experience", "Projects"];
    for (const sectionId of links) {
      const section = document.getElementById(sectionId);

      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        setActiveSection(sectionId);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-primary z-50">
      <div className="flex flex-row items-center justify-between py-8 container mx-auto   ">
        <div>B🧑‍💻R </div>
        <div className="flex-row items-center gap-x-10 md:flex [display:none] ">
          {links.map((link) => (
            <div
              className={`nav-item ${
                activeSection === link ? "active-link" : ""
              }`}
              key={link}
              onClick={(e) => {
                e.preventDefault();
                const path = document.getElementById(link);
                path.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {link}
            </div>
          ))}
        </div>

        <div 
          className="md:[display:none] block"
          onClick={() => {
            setOpen(true);
          }}
        >
          <List size={28} />
        </div>
      </div>
      {open && (
        <div className="md:[display:none] block fixed top-0 left-0 h-screen w-screen bg-secondary">
          <div
            className="absolute right-4 top-11"
            onClick={() => {
              setOpen(false);
            }}
          >
            <X size={24} weight="bold" />
          </div>
          <p className="text-3xl my-10 text-center">B🧑‍💻R</p>
          <div className="container mx-auto flex flex-col justify-center items-center pt-10  ">
            {links.map((link) => (
              <div
                className={`nav-item ${
                  activeSection === link ? "active-link border-b-2" : ""
                } my-4 `}
                key={link}
                onClick={(e) => {
                  e.preventDefault();
                  const path = document.getElementById(link);
                  path.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

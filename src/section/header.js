const Header = () => {
  return (
    <div className="sticky top-0 bg-primary">
      <div className="flex flex-row items-center justify-between py-8 container mx-auto   ">
        <div>Bharat Rana</div>
        <div className="flex flex-row items-center gap-x-10  ">
          <div className="nav-item">Home</div>
          <div className="nav-item">About Me</div>
          <div className="nav-item">Skills</div>
          <div className="nav-item">Work</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import "./main.css";

const Main = () => {
  const programs = [
    "/languages/c.svg",
    "/languages/java.svg",
    "/languages/javascript.svg",
    "/languages/typescript.svg",
    "/languages/go.svg",
  ];

  const dev = [
    "/frameworks/react.svg",
    "/frameworks/nodejs.svg",
    "/databases/mongodb.svg",
    "/others/git.svg",
  ];

  return (
    <div className="main-container">
      <div className="head-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOMOHLw8b5PrFeIoP1k4Fs3VII-aMSc1LVQ&s"
          alt="profile" className="profile-img"
        />
        <p>
          Passionate about exploring new frameworks and libraries. I write
          articles on web development for Medium and Stackademic publications.
          Always eager to learn and share knowledge in the ever-evolving world
          of tech.
        </p>
      </div>
      <h3>Programming Languages</h3>
      <div className="article-program">
        {programs.map((program, i) => {
          return (
            <div key={i} className="children-img">
              <img src={program} className="program-img" />
            </div>
          );
        })}
      </div>

      <h3>Development</h3>
      <div className="article-program">
        {dev.map((devs, i) => {
          return (
            <div key={i} className="children-img">
              <img src={devs} className="program-img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;

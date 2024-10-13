import { useState } from "react";
import projects from "./projects";
import "./projects.css";

const Projects = () => {
  const [desId, setDesId] = useState(null);
  const [description, setDescription] = useState("");
  const [desShow, setDesShow] = useState(false);

  const handleClick = (id) => {
    setDescription(projects[id - 1].description);
    setDesId(id);
    if (id === desId) {
      setDesShow(!desShow);
    }
  };
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-main-container">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="project-child"
              onClick={() => handleClick(project.id)}
            >
              <h3>{project.name}</h3>
              {desShow && desId === project.id && <p className="project-description">{description}</p>}
              {console.log(desShow)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

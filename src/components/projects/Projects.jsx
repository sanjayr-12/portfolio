import { useState } from "react";
import projects from "./projects";

const Projects = () => {
  const [desShow, setDesShow] = useState(false);
  const [description, setDescription] = useState("");

  const handleClick = (id) => {
    setDescription(projects[id - 1].description);
    setDesShow(id);
  };
  return (
    <div>
      <h2>Projects</h2>
      <span>|</span>

      {projects.map((project) => {
        return (
          <div key={project.id}>
            <p onClick={() => handleClick(project.id)}>{project.name}</p>
            {desShow === project.id && <p>{description}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

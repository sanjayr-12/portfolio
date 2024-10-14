import { useState } from "react";
import { pro as projects } from "./pro";
import "./projects.css";

export const Projects = () => {
  const [desId, setDesId] = useState(null);
  const [description, setDescription] = useState("");
  const [desShow, setDesShow] = useState(false);

  const handleClick = (id) => {
    setDescription(projects[id - 1].description);
    setDesId(id);
    setDesShow(!desShow);
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
                  <span className="line"></span>
              {desShow && desId === project.id && (
                <p className="project-description">{description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "services";
import Card from "components/card";
import "./projects.scss";

interface Project {
  id: string;
  name: string;
  image: {
    url: string;
  };
  url: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    getProjects().then((result) => setProjects(result));
  }, []);
  return (
    <section className="projects-wrapper">
      <h1>Projects</h1>
      <div className="projects">
        {projects?.map((project) => (
          <Card key={project.id}>
            <div className="card-content">
              <Link
                to={{
                  pathname: project.url,
                }}
                replace
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <img
                  src={project.image.url}
                  alt={project.name}
                  title={project.name}
                />
                <p className="project-name">{project.name}</p>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "services";
import Card from "components/card";
import Container from "components/container";
import "./index.scss";

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
    <Container>
      <div className="wrapper">
        <h2>Projects</h2>
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
      </div>
    </Container>
  );
};

export default Projects;

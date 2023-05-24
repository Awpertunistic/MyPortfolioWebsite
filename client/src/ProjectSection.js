import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";
import RegentReg from "./content/RegentRegPage.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Regent Camp Registration",
      description:
        "A CRUD application - Uses the React framework, CSS, HTML, and Django. Received an 'A' and great praise from the professor.",
      imageUrl: RegentReg,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "https://example.com/project2-image.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

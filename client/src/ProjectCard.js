import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl } = project;

  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <div className={`project-card ${isVisible ? "card-visible" : ""}`}>
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default ProjectCard;

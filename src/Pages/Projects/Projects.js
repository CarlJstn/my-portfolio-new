import React, { Component } from "react";

import projects from "./Projects.json";

import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <div>
        {projects.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    );
  }
}

export default Projects;

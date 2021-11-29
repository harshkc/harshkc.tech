import React from "react";
import {ProjectCard} from "../components";
import {projects} from "../util";

const Projects = () => {
  return (
    <div
      className='grid pt-16 pb-4'
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
        gridGap: "3rem",
      }}
    >
      {projects.map((project) => {
        return (
          <div key={project.id} className={`flex justify-center`}>
            <ProjectCard
              title={project.title}
              desc={project.desc}
              links={project.links}
              imgSrc={project.imgSrc}
              techs={project.techs}
            ></ProjectCard>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

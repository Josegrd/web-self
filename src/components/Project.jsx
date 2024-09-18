import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

export default function Project() {
  const initialsVisibleProject = 3;
  const [visibleProject, setVisibleProject] = useState(3);
  const [projects, setProjects] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/project`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleReadMore = () => {
    setVisibleProject(projects.length);
    setIsExpanded(true);
  };

  const handleHide = () => {
    setVisibleProject(initialsVisibleProject);
    setIsExpanded(false);
  };

  const handleOpenModal = (projects) => {
    setScrollPosition(window.pageYOffset);
    setSelectedProject(projects);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
    window.scrollTo(0, scrollPosition);
  };

  return (
    <>
      <div id="portofolio" className="container">
        <div className="font-sans ">
          <h1 className="lg:text-[50px] text-[35px] md:text-[50px] font-bold pb-1 text-center ">
            🎯 Project's
          </h1>
          <p className="lg:max-w-[650px] max-w-[400px] md:max-w-[550px] text-center mx-auto text-slate-500 text-[13px]">
            escape zone
          </p>
        </div>
        <div className="pt-24 flex flex-col items-center group">
          {projects.slice(0, visibleProject).map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="cursor-pointer lg:w-1/2  w-full"
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                headingImageUrl={project.imageUrl}
                startDate={project.startProject}
                endDate={project.endProject}
                stack={project.stack}
              />
            </div>
          ))}

          {selectedProject && (
            <ProjectDetail
              title={selectedProject.title}
              headingImageUrl={selectedProject.imageUrl}
              startDate={selectedProject.startProject}
              endDate={selectedProject.endProject}
              description={selectedProject.description}
              urlProject={selectedProject.urlProject}
              stack={selectedProject.stack}
              handleCloseModal={handleCloseModal}
            />
          )}

          {!isExpanded && visibleProject < projects.length && (
            <button
              className="mt-10 rounded-lg bg-primary py-2 px-6 text-sm font-medium text-slate-300 hover:opacity-80"
              onClick={handleReadMore}
            >
              Read More
            </button>
          )}
          {isExpanded && (
            <button
              className="mt-10 rounded-lg bg-primary py-2 px-6 text-sm font-medium text-slate-300 hover:opacity-80"
              onClick={handleHide}
            >
              Hide
            </button>
          )}
        </div>
      </div>
    </>
  );
}

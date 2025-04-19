import React from 'react';
import Project from '../components/Project';

// Group Projects
const groupProjects = [
  {
    title: "Buck'IT",
    image: "/assets/buckit.png",
    deployedLink: "https://bfrausb.github.io/Buck-IT/",
    repoLink: "https://github.com/Bfrausb/Buck-IT"
  },
  {
    title: "Dad-A-Base",
    image: "/assets/project3.png",
    deployedLink: "https://placeholder3.netlify.app",
    repoLink: "https://github.com/tlesner/Dad-A-Base"
  },
  {
    title: "CareerCrush",
    image: "/assets/project2.png",
    deployedLink: "https://careercrush.onrender.com/",
    repoLink: "https://github.com/JoseMCabreraT/CareerCrush/"
  },
];

// Individual Projects
const individualProjects = [
  {
    title: "README-Genie_Module-7",
    image: "/assets/project1.png",
    deployedLink: "https://app.screencastify.com/v2/manage/videos/Vi3gIUufNBKn5E4WHdKZ",
    repoLink: "https://github.com/a-angulo/README-Genie_Module-7"
  },
  {
    title: "SkyCast-Module-9", 
    image: "/assets/weather-dashboard.png",
    deployedLink: "https://skycast-mq3a.onrender.com/",
    repoLink: "https://github.com/a-angulo/SkyCast-Module-9"
  },
];

const Portfolio = () => (
  <section className="max-w-6xl mx-auto px-4 py-10 text-white">
    <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>

    {/* Group Projects */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6">Group Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupProjects.map((project) => (
          <div
            key={project.title}
            className="transform transition duration-300 hover:scale-105"
          >
            <Project {...project} alt={project.title} />
          </div>
        ))}
      </div>
    </div>

    {/* Individual Projects */}
    <div>
      <h3 className="text-2xl font-semibold mb-6">Individual Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {individualProjects.map((project) => (
          <div
            key={project.title}
            className="transform transition duration-300 hover:scale-105"
          >
            <Project {...project} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;

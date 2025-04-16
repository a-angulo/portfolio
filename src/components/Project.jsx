import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto text-center hover:shadow-xl transition">
    <img src={image} alt={title} className="rounded-md mb-3 w-full h-48 object-cover" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="space-x-4">
      <a href={deployedLink} target="_blank" className="text-blue-500 hover:underline">Live</a>
      <a href={repoLink} target="_blank" className="text-gray-600 hover:underline">Repo</a>
    </div>
  </div>
);

export default Project;
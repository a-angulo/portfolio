import React from 'react';

const Project = ({ title, image, deployedLink, repoLink, alt }) => {
  return (
    <div className="bg-fuchsia-300 rounded-lg overflow-hidden shadow-md p-4 text-center">
      <img
        src={image}
        alt={alt}
        className="w-full h-48 object-cover rounded"
      />
      <h4 className="text-xl font-semibold mt-4">{title}</h4>
      <div className="mt-2 space-x-4">
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Live
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
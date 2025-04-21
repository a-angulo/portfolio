import React from 'react';

const Resume = () => (
  <section className="max-w-3xl mx-auto px-4 py-10">
    <h2 className="text-3xl font-bold text-center text-white mb-6">Resume</h2>
    <div className="text-center mb-6">
      <a
        href="/assets/resume.pdf"
        download
        className="text-white underline hover:text-shadow-purple-950 transition duration-300"
      >
        Download Resume
      </a>
    </div>
    <h3 className="text-xl font-semibold mb-2">Proficiencies:</h3>
    <ul className="list-disc list-inside text-lg space-y-1">
      <li>JavaScript, React,</li>
      <li>Node.js, Express, REST APIs</li>
      <li>MongoDB, PostgreSQL</li>
      <li>Git & GitHub</li>
   
    </ul>
  </section>
);

export default Resume;
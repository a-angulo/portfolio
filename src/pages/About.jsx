const About = () => (
  <section className="max-w-7xl mx-auto py-10 px-4">
    <h2 className="text-3xl font-bold mb-4 text-white text-center">About Me</h2>
    <img
      src="/assets/profile.jpg"
      alt="Alex Angulo"
      className="w-40 h-40 rounded-full mb-8 object-cover mx-auto"
    />

    <div className="border border-dotted border-white p-6 rounded-2x animate-fade-in">
      <div className="text-white text-xl space-y-4 text-center">
        <p>
          Hi! I’m Alex Angulo — a software developer-in-training with a decade of experience in incident management and production support, currently pivoting into full-stack development. For the past 3 years, I’ve optimized card processing operations at RS2 Software plc, working across AWS and Azure environments to ensure uptime, resolve issues quickly, and improve client satisfaction in a high-volume environment.
        </p>
        <p>
          Whether I’m debugging code, mentoring teammates, or digging into backend architecture, I’m driven by curiosity and a love for solving complex problems. My background in incident response and operational support has sharpened my ability to stay cool under pressure, collaborate across teams, and deliver user-focused solutions that actually work.
        </p>
        <p>
          I’m currently studying software development at the University of Denver, expanding my skills in backend technologies and aiming to build clean, interactive, and meaningful web experiences. This journey isn’t just about upskilling — it’s about doing what I love: helping people through tech and building tools that make things easier for others.
        </p>
      </div>
    </div>
  </section>
);

export default About;
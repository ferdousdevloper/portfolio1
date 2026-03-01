const projects = [
  {
    name: "Gadget Galaxy",
    live: "https://example.com",
    github: "https://github.com/example",
  },
];

const Projects = () => (
  <div className="p-6 pt-28 grid md:grid-cols-3 gap-6">
    {projects.map((p, i) => (
      <div key={i} className="card bg-white/80 dark:bg-gray-900/40 border border-gray-200/50 dark:border-white/10 shadow-neumorphic backdrop-blur-xl">
        <div className="card-body">
          <h2 className="card-title text-gray-900 dark:text-white">{p.name}</h2>
          <div className="card-actions">
            <a href={p.live} className="btn btn-primary btn-sm">Live</a>
            <a href={p.github} className="btn btn-outline btn-sm">GitHub</a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Projects;

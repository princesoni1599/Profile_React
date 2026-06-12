import "./ProjectDescription.css";

const projects = [
  {
    title: "prakrtik",
    tags: ["Angular", "CSS", "JavaScript", "Node.js"],
    description:
      "Implemented the classic Battleship game using JavaScript and data structures.",
    image: "/react.svg",
    github: "https://github.com/princesoni1599/prakrtik",
    demo: "https://yourdemo.com/battleship",
  },
  {
    title: "Movie Titles API",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    description:
      "Uses a public movie API to build a sortable movie list and favorites system.",
    image: "/p1.png",
    github: "https://github.com/yourname/movie-api",
    demo: "https://yourdemo.com/movie-api",
  },
];

export default function ProjectDescription() {
return (
<section className="projects-section">
  {projects.map((project, index) => (
    <div
      key={project.title}
      className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
    >
      {/* IMAGE */}
      <div className="project-image">
        <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} />
      </div>

      {/* CONTENT */}
      <div className="project-content">
        <h3>{project.title}</h3>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <p>{project.description}</p>

        <div className="project-links">
          <a href={project.github} target="_blank">View Github</a>
          <a href={project.demo} target="_blank">View Project ↗</a>
        </div>
      </div>
    </div>
  ))}
</section>
)
}


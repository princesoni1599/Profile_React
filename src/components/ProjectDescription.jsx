import "./ProjectDescription.css";

const projects = [
  {
    title: "prakrtik",
    tags: ["Angular", "CSS", "Spring Boot", "Node.js", "MySQL", "Java", "Docker", "Microservices", "Rest API", "JWT", "OAuth2"],
    description:
      "A Ecommerce website built with Angular and Spring Boot, featuring a responsive design and secure authentication using JWT and OAuth2. The application is containerized with Docker and follows a microservices architecture for scalability and maintainability. ",
    image: "/p1.png",
    github: "https://github.com/princesoni1599/prakrtik",
    demo: "https://github.com/princesoni1599/prakrtik",
  },
  {
    title: "Bitcoin Price Prediction",
    tags: ["Python", "Django", "sklearn", "matplotlib", "TensorFlow", "numpy", "pandas"],
    description:
      "Predicts Bitcoin prices using a deep learning linear regression model built with TensorFlow.",
    image: "/bitcoin1.png",
    github: "https://github.com/princesoni1599/Price-Prediction_usingML_Django",
    demo: "https://github.com/princesoni1599/Price-Prediction_usingML_Django",
  },
  {
    title: "Hostel Management System",
    tags: ["Python", "Tkinter", "Pillow", "sql connector"],
    description:
      "Manages hostel operations with a user-friendly interface built with Tkinter.",
    image: "/hms.png",
    github: "https://github.com/princesoni1599/HMS",
    demo: "https://github.com/princesoni1599/HMS",
  },
  {
    title: "rock-paper-scissor",
    tags: ["Python", "OpenCV", "Google Colab", "Data Set"],
    description:
      "A simple rock-paper-scissors game implemented with OpenCV and Google Colab. The game uses a dataset of hand gestures to recognize the player's move and determine the winner.",
    image: "/rps.png",
    github: "https://github.com/princesoni1599/rock-paper-scissor",
    demo: "https://github.com/princesoni1599/rock-paper-scissor",
  },
  {
    title: "File Management System",
    tags: ["Java", "Spring Boot", "Angular", "MySQL"],
    description:
      "A file management system built with Java and Spring Boot, featuring a user-friendly interface developed with Angular.",
    image: "/fms.png",
    github: "https://github.com/princesoni1599/FileSystem",
    demo: "https://github.com/princesoni1599/FileSystem",
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


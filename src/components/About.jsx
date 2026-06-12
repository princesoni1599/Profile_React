import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>

        <p>
          Hello! I'm <span>Prince Soni</span>, a Software Engineer passionate
          about web development, cloud computing, automation, and AI.
        </p>

        <p>
          I enjoy building modern web applications using React, JavaScript,
          Python, and Azure. My goal is to create scalable and user-friendly
          solutions that solve real-world problems.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>Frontend</h3>
            <p>React, HTML, CSS, JavaScript</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Python, Django, REST APIs</p>
          </div>

          <div className="card">
            <h3>Cloud</h3>
            <p>Azure, DevOps, Kubernetes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
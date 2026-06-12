import "./Project.css";

export default function Projects() {
  return (
    <>
      <section className="two-column">
        {/* LEFT : SERVICES */}
        <section className="services">
          <div className="service-item">
            <span className="dot"></span>
            <div className="icon">💻</div>
            <p>Website Development</p>
          </div>

          <div className="service-item">
            <span className="dot"></span>
            <div className="icon">📱</div>
            <p>Test Automation</p>
          </div>

          <div className="service-item">
            <span className="dot"></span>
            <div className="icon">☁️</div>
            <p>Azure Cloud</p>
          </div>

          <div className="service-item">
            <span className="dot"></span>
            <div className="icon"></div>
            <p>Springboot</p>
          </div>
        </section>

        {/* RIGHT : ABOUT */}
        <section className="about-section">
          <h2>About me</h2>

          <p className="about-text">
            I’m a software engineer with 3+ years of experience in python test automation developer. I have a strong background in developing and maintaining test automation frameworks, as well as experience in cloud technologies like Azure. I’m passionate about writing clean, efficient code and am always eager to learn new technologies and improve my skills.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>
                10<span>+</span>
              </h3>
              <p>Completed Projects</p>
            </div>

            <div className="stat">
              <h3>
                95<span>%</span>
              </h3>
              <p>Client satisfaction</p>
            </div>

            <div className="stat">
              <h3>
                3<span>+</span>
              </h3>
              <p>Years of experience</p>
            </div>
          </div>
        </section>
      </section>

      <section className="section-title">
        <h2>Projects</h2>
        <span className="title-line"></span>
        <span className="dot1"></span>
      </section>
    </>
  );
}

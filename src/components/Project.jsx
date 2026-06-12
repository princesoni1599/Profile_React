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
            I started my software journey from photography. Through that, I
            learned to love the process of creating from scratch. Since then,
            this has led me to software development as it fulfills my love for
            learning and building things.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>
                120<span>+</span>
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
                10<span>+</span>
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

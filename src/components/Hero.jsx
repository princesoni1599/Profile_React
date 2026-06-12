// src/components/Hero.jsx
import "./Hero.css";


export default function Hero() {
  return (
    <section className="hero">
      {/* Left section */}
      <div className="hero__left">
        <p className="hero__hello">Hello.</p>
        <h1 className="hero__name">
          I’m <span>Prince</span>
        </h1>
        <h2 className="hero__role">Software Engineer</h2>

        <div className="hero__buttons">
          <button className="btn primary">Got a project?</button>
          <button className="btn secondary">My resume</button>
        </div>
      </div>

      {/* Right section */}
      <div className="hero__right">
        <div className="hero__image-wrapper">
          <img
             src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
import "../styles/about.css";
import { FaAward } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="/src/assets/me_about.png" alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>
            <article className="about__card">
              <BiLogoReact className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Projects</small>
            </article>
          </div>
          <p>
            I am a skilled Full Stack MERN Developer with expertise in building
            dynamic web applications. Proficient in MongoDB, Express.js, React,
            and Node.js, and Next.js. I create seamless user experiences through
            innovative coding and problem-solving.
          </p>
          <Link href="#contact" className="link btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

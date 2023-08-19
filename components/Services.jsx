import "../styles/services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* ----------------------------------UI/UX-------------------------------------  */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User-Centered Design Solutions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Appealing User Inerface</p>
            </li>
          </ul>
        </article>

        {/*------------------------------ FRONT-END DEVELOPMENT-----------------------------  */}
        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom UI Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive User Experiences</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile-First Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Single Page Applications (SPAs)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Performance Optimization</p>
            </li>
          </ul>
        </article>

        {/*------------------------------ FRONT-END DEVELOPMENT-----------------------------  */}
        <article className="service">
          <div className="service__head">
            <h3>Back-end Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Design and Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Deployment and Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server-Side Rendering (SSR)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Authentication and Authorization</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

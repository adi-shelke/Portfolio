import "../styles/footer.css";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <Link href="#" className="footer__logo link">
        <img
          src="/src/assets/Adi.png"
          className="footer__img"
          alt=""
          style={{ height: "10rem", width: "10rem", borderRadius: "50%" }}
        />
      </Link>
      <ul className="permalinks">
        <li>
          <Link className="link" href="#">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="#">
            About
          </Link>
        </li>
        <li>
          <Link className="link" href="#">
            Experience
          </Link>
        </li>
        <li>
          <Link className="link" href="#">
            Services
          </Link>
        </li>
        <li>
          <Link className="link" href="#">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="link" href="#">
            Refrences
          </Link>
        </li>
        <li>
          <Link className="link" href="#">
            Contact
          </Link>
        </li>
      </ul>

      <div className="footer__socials">
        <Link className="link" href="https://www.instagram.com/adi_shelke_07/">
          <BsInstagram className="social_icon" />
        </Link>
        <Link
          className="link"
          href="https://www.facebook.com/adinath.shelke.12/"
        >
          <AiOutlineFacebook className="social_icon" />
        </Link>
        <Link
          className="link"
          href="https://www.linkedin.com/in/adinath-shelke-2519b4203"
        >
          <AiOutlineLinkedin className="social_icon" />
        </Link>
        <Link className="link" href="https://github.com/adi-shelke">
          <AiOutlineGithub className="social_icon" />
        </Link>
      </div>

      <div className="footer__sign">
        <span className="sign">Made with</span>
        <span style={{ color: "red", fontSize: "2rem" }}>&#10084;</span>
        <span className="sign">by Adi</span>
      </div>
    </footer>
  );
};

export default Footer;

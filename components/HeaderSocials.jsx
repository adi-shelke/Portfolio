import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub, BsInstagram } from "react-icons/bs";
import "../styles/headerSocials.css";
const HeaderSocials = () => {
  const myStyle = {
    fontSize: "20px",
  };
  return (
    <div className="header__socials">
      <Link
        className="link socialLink"
        style={myStyle}
        href="https://www.linkedin.com/in/adinath-shelke-2519b4203"
        target="_blank"
      >
        <AiFillLinkedin />
      </Link>
      <Link
        className="link socialLink"
        style={myStyle}
        href="https://github.com/adi-shelke"
        target="_blank"
      >
        <BsGithub />
      </Link>
      <Link
        className="link socialLink"
        style={myStyle}
        href="https://www.instagram.com/adi_shelke_07/"
        target="_blank"
      >
        <BsInstagram />
      </Link>
    </div>
  );
};

export default HeaderSocials;

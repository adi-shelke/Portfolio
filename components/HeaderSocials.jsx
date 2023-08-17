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
        href="https://linkedin.com"
        target="_blank"
      >
        <AiFillLinkedin />
      </Link>
      <Link
        className="link socialLink"
        style={myStyle}
        href="https://github.com"
        target="_blank"
      >
        <BsGithub />
      </Link>
      <Link
        className="link socialLink"
        style={myStyle}
        href="https://instagram.com"
        target="_blank"
      >
        <BsInstagram />
      </Link>
    </div>
  );
};

export default HeaderSocials;

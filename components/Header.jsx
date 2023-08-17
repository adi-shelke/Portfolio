import "../styles/header.css";
import CTA from "./CTA";
import Link from "next/link";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adi Shelke</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src="/src/assets/me1_bg.png" alt="" />
        </div>
        <Link href="#contact" className="scroll__down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;

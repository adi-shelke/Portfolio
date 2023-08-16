import "../styles/header.css";
import Buttons from "./Buttons";
import Image from "next/image";
import Link from "next/link";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adinath Shelke</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Buttons />

        <HeaderSocials />

        <div className="me mt-[4rem]">
          {/* <Image src="/src/assets/me1_bg.png" height={8000} width={400} /> */}
          <img src="/src/assets/me1_bg.png" alt="profile" />
        </div>

        <Link className="scroll__down link" href="#contact">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;

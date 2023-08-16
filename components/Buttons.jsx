import Link from "next/link";
const Buttons = () => {
  return (
    <div className="cta flex justify-center gap-[1.2rem] mt-[2.5rem]">
      <Link className="link btn" href="../src/assets/cv.pdf" download>
        Download CV
      </Link>
      <Link className="link btn btn-primary" href="#contact">
        Let's Talk
      </Link>
    </div>
  );
};

export default Buttons;

import React from "react";
import Link from "next/link";
const CTA = () => {
  return (
    <div className="cta">
      <Link
        className="link btn"
        href="../src/assets/resume.pdf"
        target="_black"
        download
      >
        Download CV
      </Link>
      <Link className="link btn btn-primary" href="#contact">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;

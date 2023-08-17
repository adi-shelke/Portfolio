"use client";
import "../styles/navbar.css";
import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Navbar = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <Link
        href="#"
        className={`${activeNav === "#" ? "active" : ""} link`}
        onClick={() => setactiveNav("#")}
      >
        <AiOutlineHome />
      </Link>
      <Link
        href="#about"
        className={`${activeNav === "about" ? "active" : ""} link`}
        onClick={() => setactiveNav("about")}
      >
        <AiOutlineUser />
      </Link>
      <Link
        href="#experience"
        className={`${activeNav === "experience" ? "active" : ""} link`}
        onClick={() => setactiveNav("experience")}
      >
        <BiBook />
      </Link>
      <Link
        href="#services"
        className={`${activeNav === "services" ? "active" : ""} link`}
        onClick={() => setactiveNav("services")}
      >
        <RiServiceLine />
      </Link>
      <Link
        href="#contact"
        className={`${activeNav === "contact" ? "active" : ""} link`}
        onClick={() => setactiveNav("contact")}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Navbar;

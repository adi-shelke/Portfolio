import "../styles/portfolio.css";
import Link from "next/link";
const data = [
  {
    id: 4,
    image: "/src/assets/eventhub1.png",
    title: "Event-Hub (Explore, Share and Advertise Events)",
    github: "https://github.com/adi-shelke/Event-Hub",
    demo: "https://eventhubv1.vercel.app/",
  },
  {
    id: 1,
    image: "/src/assets/tt.png",
    title: "Talk-Time (MERN stack chat app)",
    github: "https://github.com/adi-shelke/TalkTime",
    demo: "https://talktimev1.netlify.app/chats",
  },
  {
    id: 2,
    image: "/src/assets/im_home.png",
    title: "Imaginary (AI based image generation app)",
    github: "https://github.com/adi-shelke/Imaginary_Public",
    demo: "https://imaginary-v1.netlify.app/",
  },
  {
    id: 3,
    image: "/src/assets/nm_home.png",
    title: "Notes-Master (Notes manager app)",
    github: "https://github.com/adi-shelke/inotebook-frontend",
    demo: "https://notesmaster.netlify.app/",
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <Link href={github} className="btn" target="_blank">
                  Github
                </Link>
                <Link href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

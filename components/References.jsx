"use client";

import "../styles/references.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const References = () => {
  const data = [
    {
      avatar: "/src/assets/sush.jpg",
      name: "Sushant Patil",
      review:
        "Adi is an exceptional full stack MERN web developer, with an innate grasp of MongoDB, Express, React, and Node.js. Their creations harmoniously blend functionality and aesthetics, showcasing a deep understanding of modern web development. For a reliable and talented developer, Adi is the ultimate choice.",
    },
    {
      avatar: "/src/assets/swappy.jpg",
      name: "Swapnil Shivpuje",
      review:
        "With a profound command of the MERN stack, Adi crafts web solutions that seamlessly unite functionality and design. Their expertise in MongoDB, Express, React, and Node.js is evident in every project's success. For top-tier, full stack development, Adi is the name to trust.",
    },
    {
      avatar: "/src/assets/yash.jpg",
      name: "Yash Anbhore",
      review:
        "A true MERN maestro, Adi combines MongoDB, Express, React, and Node.js to engineer web solutions that captivate and perform. Their full stack skills are a recipe for digital success, delivering innovation and reliability in every project. When excellence matters, Adi is the unequivocal choice.",
    },
  ];

  return (
    <section id="references">
      <h5>What people say about me</h5>
      <h2>Recommendation</h2>

      <Swiper
        className="container references__container"
        pagination={true}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="reference">
              <div className="client__avatar">
                <img src={avatar} alt="client-avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default References;

'use client';

import { reviews } from "@/data";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SlideShow() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 500,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="alignElement px-5 lg:px-24 slider-container">
      <Slider {...settings}>
        {reviews.map(({ id, name, avatar, review }) => (
          <div key={id} className="p-4">
            <div className="bg-white/5 p-12 rounded-md shadow-md space-y-2">
              <Image src={avatar} alt={name} className="w-16 h-16" />
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="2xl:text-lg text-sm">{review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
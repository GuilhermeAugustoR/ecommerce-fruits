"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = {};

const images = [
  {
    id: 3,
    img: "/banner3.jpg",
  },
];

const HeroBackground = (props: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );
  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="relative items-center justify-center w-11/12 text-white overflow-hidden rounded-lg"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((prop, index) => (
            <CarouselItem key={index}>
              <div className="flex p-1 h-[600px] items-center justify-center">
                <div className="absolute inset-0">
                  <img
                    src={prop.img}
                    alt={"banner"}
                    className="object-cover object-center w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                  <h1 className="text-5xl font-light leading-tight mb-4">
                    Seja Bem vindo!
                  </h1>
                  <p className="text-lg text-gray-300 mb-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  {/* <a
                    href="#"
                    className="bg-emerald-400 text-gray-900 hover:bg-emerald-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    Vamos lá
                  </a> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroBackground;

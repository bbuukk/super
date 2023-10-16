import React from "react";
import s from "./test.module.scss";
import HeroCard from "@/comps/heroCard";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import { v4 as uuidv4 } from "uuid";

const images = [
  "https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s1100-c50.jpg",
  "https://media.sproutsocial.com/uploads/meme-example.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/5e740f3207adf00006db9d14/Coronavirus-meme-featuring-Kanye-West--created-by-meme-account--MasiPopal/960x0.png?format=png&width=960",
];

const CarouselItem = ({ src, isActive }) => (
  <div
    className={`${s.carousel_item} carousel-item ${isActive ? "active" : ""}`}
  >
    <img src={src} className="d-block w-100" alt="..." />
  </div>
);

const CarouselControl = ({ direction }) => (
  <button
    className={`carousel-control-${direction}`}
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide={direction}
  >
    <span
      className={`carousel-control-${direction}-icon`}
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">
      {direction.charAt(0).toUpperCase() + direction.slice(1)}
    </span>
  </button>
);

const Test = () => {
  const { heroes } = useHeroContext();

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* {heroes &&
          heroes.map((hero, index) => {
            hero.clientId = hero.clientId || uuidv4();
            return (
              <div key={hero.clientId} className="col">
                <HeroCard id={index} hero={hero} />
              </div>
            );
          })} */}

        <div className="carousel-inner">
          {images.map((src, index) => (
            <CarouselItem key={index} src={src} isActive={index === 0} />
          ))}
        </div>

        <CarouselControl direction="prev" />
        <CarouselControl direction="next" />
      </div>
    </>
  );
};

export default Test;

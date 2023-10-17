import { useHeroContext } from "@/back/hooks/useHeroContext";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { v4 as uuidv4 } from "uuid";
import s from "./heroCarousel.module.scss";
import HeroCard from "../mutual/heroCard/heroCard";

function HeroCarousel() {
  const { heroes } = useHeroContext();
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lastActiveIndex =
        parseInt(localStorage.getItem("lastActiveIndex")) || 0;
      setIndex(lastActiveIndex);
      setIsClient(true);
    }
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    localStorage.setItem("lastActiveIndex", selectedIndex);
  };

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  //todo add more grid rules

  return (
    <>
      {isClient && heroes && (
        <div className={`${s.hero_carousel}`}>
          <Carousel
            activeIndex={index}
            controls
            onSelect={handleSelect}
            interval={null}
          >
            {chunkArray(heroes, 5).map((heroesChunk, chunkIndex) => (
              <Carousel.Item key={chunkIndex}>
                <div className={`row row-cols-md-5 ${s.carousel_item}`}>
                  {heroesChunk.map((hero, index) => {
                    hero.clientId = hero.clientId || uuidv4();
                    return (
                      <div key={hero.clientId} className={`${s.item} col`}>
                        <HeroCard id={chunkIndex * 5 + index} hero={hero} />
                      </div>
                    );
                  })}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default HeroCarousel;

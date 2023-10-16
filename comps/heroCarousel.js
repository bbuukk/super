import { useHeroContext } from "@/back/hooks/useHeroContext";
import HeroCard from "@/comps/heroCard";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { v4 as uuidv4 } from "uuid";

function HeroCarousel() {
  const { heroes } = useHeroContext();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
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
      {heroes && (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {chunkArray(heroes, 5).map((heroesChunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <div className="row row-cols-md-5 g-3">
                {heroesChunk.map((hero, index) => {
                  hero.clientId = hero.clientId || uuidv4();
                  return (
                    <div key={hero.clientId} className="col">
                      <HeroCard id={index} hero={hero} />
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default HeroCarousel;

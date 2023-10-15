import { useEffect, useState } from "react";
import HeroCard from "./heroCard";
import s from "./heroesGallery.module.scss";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import { v4 as uuidv4 } from "uuid";

const HeroGallery = () => {
  const { heroes } = useHeroContext();

  useEffect(() => {
    console.log(heroes);
  }, [heroes]);

  return (
    <div
      className={`${s.heroes_gallery_container} row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-5 gy-4`}
    >
      {heroes &&
        heroes.map((hero, index) => {
          hero.clientId = hero.clientId || uuidv4();
          return (
            <div key={hero.clientId} className="col">
              <HeroCard id={index} hero={hero} />
            </div>
          );
        })}
    </div>
  );
};

export default HeroGallery;

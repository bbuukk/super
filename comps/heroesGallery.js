import { useEffect, useState } from "react";
import HeroCard from "./heroCard";
import s from "./heroesGallery.module.scss";
import { useHeroContext } from "@/back/hooks/useHeroContext";

const HeroGallery = () => {
  const { heroes } = useHeroContext();

  return (
    <div
      className={`${s.heroes_gallery_container} row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-5 gy-4`}
    >
      {heroes &&
        heroes.map(({ nickname, images }) => {
          return (
            <div key={nickname} className="col">
              <HeroCard nickname={nickname} imageUrl={images[0]} />
            </div>
          );
        })}
    </div>
  );
};

export default HeroGallery;

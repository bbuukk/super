import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useHeroContext } from "@/back/hooks/useHeroContext";

const Hero = () => {
  const router = useRouter();
  const { heroId } = router.query;
  const { heroes } = useHeroContext();

  const [hero, setHero] = useState({});

  useEffect(() => {
    if (heroes) {
      setHero(heroes[heroId]);
    }
  }, [heroes, heroId]);

  return (
    <>
      {typeof heroId === "number" && heroId >= 0 && heroId <= heroes.length ? (
        <div>
          <h1>{hero.nickname}</h1>
          <p>Real Name: {hero.real_name}</p>
          <p>Origin Description: {hero.origin_description}</p>
          <ul>
            {hero.superpowers &&
              hero.superpowers.map((power, index) => (
                <li key={index}>{power}</li>
              ))}
          </ul>
          <p>Catch Phrase: {hero.catch_phrase}</p>
          <div>
            {hero.images &&
              hero.images.map((image, index) => (
                <img key={index} src={image} alt={`${hero.nickname} image`} />
              ))}
          </div>
        </div>
      ) : (
        <p>"Invalid hero ID"</p>
      )}
    </>
  );
};

export default Hero;

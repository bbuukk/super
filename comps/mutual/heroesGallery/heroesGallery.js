import { useHeroContext } from "@/back/hooks/useHeroContext";
import HeroCard from "../heroCard/heroCard";
const HeroesGallery = () => {
  const { heroes } = useHeroContext();
  return (
    <>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {heroes.map((hero, index) => (
            <div key={index} className="col">
              <HeroCard id={index} hero={hero} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroesGallery;

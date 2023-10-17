import { useHeroContext } from "@/back/hooks/useHeroContext";
import BackHeroCard from "@/comps/backHeroCard";
import HeroCard from "@/comps/heroCard";
import s from "./test.module.scss";

const Test = () => {
  const { heroes } = useHeroContext();
  const idx = 1;
  return (
    <>
      {heroes && (
        <div className="container">
          <div className=" d-flex justify-content-center gap-5">
            <HeroCard id={idx} hero={heroes[idx]} />
            <div className="mt-5">
              <BackHeroCard hero={heroes[idx]} idx={idx} />
            </div>
          </div>
          <div>
            <h2>Cards of these hero</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {heroes[idx].images &&
                heroes[idx].images.map((imageUrl, index) => (
                  <div key={index} className="col">
                    <div className={`${s.image_container}`}>
                      <img
                        src={imageUrl}
                        alt="hero image"
                        className={`${s.image}`}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h2>Other your cards</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {heroes.map((hero, index) => (
                <div key={index} className="col">
                  <HeroCard id={index} hero={hero} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
